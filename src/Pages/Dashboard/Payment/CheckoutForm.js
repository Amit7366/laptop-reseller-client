import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const {productPrice,email,_id,name} = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json",authorization: `bearer ${localStorage.getItem('accessToken')}` },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe && !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    setSuccess('');
    setProcessing(true);
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email
          },
        },
      },
    );

    if(confirmError){
      setCardError(confirmError.message);
      return
    }
    if(paymentIntent.status === "succeeded"){

        const payment ={
            productPrice,
          transactionId: paymentIntent.id,
          email,
          bookingId: _id


        }

        fetch('http://localhost:5000/payments',{
          method: 'POST',
          headers:{
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          setSuccess('Congrates! Your payment completed');
          setTransactionId(paymentIntent.id);
        })

        
    }
    setProcessing(false);
    console.log('payment',paymentIntent);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {
        success && <div>
          <p className="text-green-200">{success}</p>
          <p>Your Transaction Id: <span className="font-bold">{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
