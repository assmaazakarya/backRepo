const express = require('express');
const Stripe = require("stripe");

require("dotenv").config();

const router = express.Router()

const stripe = Stripe(process.env.STRIPE_KEY)

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create
        ({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/checkout-success`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
        });
    
    // when the user click on the checkout btn the form here
    res.send({url: session.url});
});

module.exports = router