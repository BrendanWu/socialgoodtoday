const express = require("express");
const bodyParser = require("body-parser");
const Donation = require("../models/Donation");
const router = express.Router();

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    let event;
    try {
      event = req.body;
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
    console.log(event.data.object);

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        const userId = paymentIntent.uid;
        const metaDataObj = paymentIntent.metadata;

        console.log(paymentIntent);

        if (metaDataObj === {}) {
          //metadata used to update user models w donation information..
          return;
        }

        break;

      case "payment_method.attached":
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
  }
);

const createPaymentIntent = async (email, amount, metadata) => {
  const stripe = require("stripe")(
    "sk_test_OSuMNl5IOswF3FRHGEs9hSvq009DJuUX1B"
  );
  const amountInCents = amount * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "cad",
    payment_method_types: ["card"],
    receipt_email: "brendan@develow.com",
    metadata,
  });
  console.log(paymentIntent);
  return paymentIntent;
};

router.post("/payForCart", async (req, res) => {
  //get cart from req.body
  //loop through items in cart and get price from server
  //create paymentintent with email amount and meta data about the purchase
  //return client secret from intent
  const totalAmount = req.body.donation;
  const uid = req.body.uid;
  const name = req.body.name;
  const email = req.body.email;
  const charities = req.body.cart;
  const avatar = req.body.avatar;

  console.log(req.body)

  const metadata = {
    uid,
    charities: "socialgoodtoday",
    email,
    name,
    avatar
  };

  const intent = await createPaymentIntent(email, totalAmount, metadata);
  const secret = intent.client_secret;

  const donations = [];
  await charities.forEach(async (charity) => {

    const donation = new Donation({
      uid,
      name,
      email,
      avatar,
      cid: charity.cid,
      amount: charity.amount,
      title: charity.title,
      image: charity.image
    });
    await donation.save()
    console.log(donation)
  
    donations.push(donation);
  });

  res.json({ success:true, donations, client_secret: secret });
});
module.exports = router;
