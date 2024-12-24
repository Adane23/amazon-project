
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');



const stripe = require('stripe')('sk_test_51ORFBNL4btgcbIc9fsJ9avtVcnqwu7WCxlBxMYsw0GJvdX1Day8VoVkR4oQE7lxdcjiTAcGme0hzrmjvootGevp400t5MnFMUV'); 

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
   // console.log('Payment Request Recieved for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
});


//baseUrl: http://127.0.0.1:5001/clone-f881b/us-central1/api
//http://localhost:5001/clone-f881b/us-central1/api


exports.api = functions.https.onRequest(app);
