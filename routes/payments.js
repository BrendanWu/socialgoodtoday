const express = require("express");
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

const createPaymentIntent = async (receiptEmail, amount, metadata) => {
  const stripe = require("stripe")(
    "sk_live_6OcRW4o53UG4JXbEoyEowwWr00jIoLZJrP"
  );
  const amountInCents = amount * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "cad",
    payment_method_types: ["card"],
    receipt_email: receiptEmail,
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
  var amount = 0;

  const intent = await createPaymentIntent(receiptEmail, amount, metadata);
  const secret = intent.client_secret;

  res.json({ client_secret: secret });

});
module.exports = router;
