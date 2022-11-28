import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51M7i79EmZMM9khM2rLEFuYEpbOFWQ9dZJLVueQbYZLNyLBJsYXHA9gFgMHL92Fs6cduRz88byDvXYBQ58GmWfrWV00SZMen2SD');

const Payment = () => {
    const booking = useLoaderData();
    const {productName,productPrice} = booking;
   
    return (
        <div className='w-96  my-6'>
            <h3 className='text-3xl'>Payment for </h3>
            
             <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking}></CheckoutForm>
            </Elements> 
        </div>
    );
};

export default Payment;