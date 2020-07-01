import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { loadStripe } from '@stripe/stripe-js';
import Cart from '../components/cart/Cart';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CHECKOUT);

export default function Checkout(props: RouteComponentProps, itemsInCart, totalCost) {
  const handleCheckoutClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.

    // console.log(event.target.value);
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with the ID of your price
        { price: 'price_1Gzi24CzjdOYYybLCABpt0VD', quantity: 1 },
      ],
      mode: 'payment',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      return <div>error.message</div>;
    }
  };
  return (
    <>
      <Cart
        itemsInCart={itemsInCart}
        totalCost={totalCost}
        onCheckoutClick={handleCheckoutClick}
      />
    </>
  );
}
