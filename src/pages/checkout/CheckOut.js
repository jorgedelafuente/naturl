import React from 'react';
import Cart from '../../components/cart/Cart';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CHECKOUT_PK);

export default function Checkout({
  itemsInCart,
  handleClearCartClick,
  handleRemoveItemFromCartClick,
}) {
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
      successUrl: process.env.REACT_APP_DOMAIN + '/success',
      cancelUrl: process.env.REACT_APP_DOMAIN + '/checkout',
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
        handleRemoveItemFromCartClick={handleRemoveItemFromCartClick}
      />
    </>
  );
}
