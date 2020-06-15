import React from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.socialgoodtoday.org"
    : "http://localhost:5555";

export default function Checkout() {
    const history = useHistory()
    const stripe = useStripe();
    const elements = useElements();

    const stripePromise = loadStripe(process.env.STRIPE_KEY);

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        }


        const data = await axios.post(`${BASE_URL}/payForCart`, { uid: "asfd"}, { headers })
        const secret = data.data.client_secret

        const result = await stripe.confirmCardPayment(secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    // name: state.currentUser.name,
                    // email: state.currentUser.email

                },

            }
        });



        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);

        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.

                history.push("/success")




            }
        }
    };
    return (

            <div style={{ width: "100%", padding: 10, marginTop: 100 }}>
                <p>Pay with credit card</p>

                <div style={{ width: "95%" }}>
                    <CardElement />

                </div>

                <button onClick={handleSubmit} style={{ float: "right", marginTop: 10 }} color="primary" variant="contained">Purchase</button>

            </div>
   

    )
}
