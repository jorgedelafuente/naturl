import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Cart from '../../components/cart/Cart';

const stripePromise = loadStripe(
  'pk_test_51GzKbCCzjdOYYybLYg6lpPWTks0jg5Ph8Tsb66ive472tuNoKsYJnC7WwGwrOcYLRweuJEBpIXA86UUAii0fO9g80099ornxU7'
);

export default function Checkout({ itemsInCart, handleClearCartClick }) {
  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const currentLineItems = itemsInCart.map((item) => {
    return { price: item.stripe_price_id, quantity: item.quantity };
  });

  const handleCheckoutClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: currentLineItems,
      mode: 'payment',
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/checkout',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'DE', 'ES', 'GB', 'MX'],
      },
    });
    //TODO: handle error message
    if (error) {
      return <div>error.message</div>;
    }
  };
  return (
    <>
      <Cart
        itemsInCart={itemsInCart}
        totalCost={totalCost}
        handleClearCartClick={handleClearCartClick}
        onCheckoutClick={handleCheckoutClick}
      />
    </>
  );
}
