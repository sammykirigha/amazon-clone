const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Gvg1sLqttHkO7w4Y7zzu6fRQmFi7eS7I2Ak964oIjbDiP87534YaFi2SaLTdsGWKA2owaRkEh41LHErmjdkBeB0006B817CDU');

//API

//-App config
const app = express();
//-middleware
app.use(cors());
app.use(express.json());

//-api routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create',  async (request, response) => {
    const total = request.query.total;

    console.log('payment request rescieved:...', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//-listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-5775a/us-central1/api
