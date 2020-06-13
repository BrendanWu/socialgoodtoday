const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Donation = require('../../models/Donation');

router.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
    let event;
    try {

        event = req.body
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
    console.log(event.data.object)

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(paymentIntent)

            const userId = paymentIntent.uid
            const metaDataObj = paymentIntent.metadata
            const entries = Object.entries(metaDataObj)
            let uid;
            const courseIds = []

            if (metaDataObj === {}) {
                return
            }

            entries.forEach(element => {
                if (element[0] === "uid") {
                    uid = element[1]
                } else {
                    courseIds.push(element[1])
                }
            });

            if (!uid) {
                res.status(400).send(`No uid in request`);
            }
            if (!courseIds) {
                res.status(400).send('No course ids in request')
            }

            const variables = { uid, courseIds }

            axios.post(BASE_URL, {
                query: `mutation($courseIds: [String]!, $uid: String!){
          addCoursesToUser(input:{
            uid: $uid,
            courseIds: $courseIds
          }) {
            _id
            name
            courses
        
          }
        }
          `,
                variables
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (data) => {
                res.status(200).send()
            }).catch(err => {
                console.log(err)
            })

            break;

        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            break;
        // ... handle other event types
        default:
            // Unexpected event type
            return res.status(400).send(`unhandled event ` + event.type);
    }

    // Return a response to acknowledge receipt of the event
    res.json({ received: true });
})


const createPaymentIntent = async (receiptEmail, amount, metadata) => {
    const stripe = require('stripe')('sk_live_6OcRW4o53UG4JXbEoyEowwWr00jIoLZJrP');
    const amountInCents = amount * 100
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: 'cad',
        payment_method_types: ['card'],
        receipt_email: receiptEmail,
        metadata
    });
    console.log(paymentIntent)
    return paymentIntent
}

router.post('/payForCart', async (req, res) => {
    console.log(req.body.receiptEmail)
    const cart = req.body.cart
    const receiptEmail = req.body.receiptEmail
    const uid = req.body.uid
    const cartIds = []
    cart.forEach(item => {
        cartIds.push(item._id)
    });
    var amount = 0
    const variables = { cartIds }

    axios.post(BASE_URL, {
        query: `query($cartIds: [String]!)
                {
                  getTotalPriceOfCart(input:$cartIds)
          
                }`,
        variables
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (data) => {
        const amount = data.data.data.getTotalPriceOfCart
        const cartItems = Object.assign({}, cartIds);
        const meta = { uid, ...cartItems }
        const metadata = meta

        const intent = await createPaymentIntent(receiptEmail, amount, metadata)
        const secret = intent.client_secret
        console.log(intent)

        res.json({ client_secret: secret });

    })


});
module.exports = router;

