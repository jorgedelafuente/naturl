import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
// import { loadStripe } from '@stripe/stripe-js';
import data from '../mocks/data';
import Product from '../components/product/Product';
// import Cart from '../components/cart/Cart';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CHECKOUT);

export default function Products(props: RouteComponentProps, itemsInCart, setItemsInCart, setTotalCost) {
  // const [itemsInCart, setItemsInCart] = useState([]);
  // const [totalCost, setTotalCost] = useState(0);

  const handleAddToCartClick = (id) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = data.find((item) => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  setTotalCost(
    itemsInCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  // console.log("TOTAL COST ", totalCost);
  // console.log("ITEMS IN CART ", itemsInCart);

  // const handleCheckoutClick = async (event) => {
  //   // When the customer clicks on the button, redirect them to Checkout.
  //   console.log(event.target.value);
  //   const stripe = await stripePromise;
  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [
  //       // Replace with the ID of your price
  //       { price: 'price_1Gzi24CzjdOYYybLCABpt0VD', quantity: 1 },
  //     ],
  //     mode: 'payment',
  //     successUrl: 'https://example.com/success',
  //     cancelUrl: 'https://example.com/cancel',
  //   });
  //   // If `redirectToCheckout` fails due to a browser or network
  //   // error, display the localized error message to your customer
  //   // using `error.message`.
  //   if (error) {
  //     return <div>error.message</div>;
  //   }
  // };

  return (
    <>
      <h1>Products</h1>
      <div className="App-products">
        {data.map((item) => (
          <Product
            key={item.name}
            name={item.name}
            image={item.image}
            price={item.price}
            onAddToCartClick={() => handleAddToCartClick(item.id)}
          />
        ))}
      </div>
      {/* <Cart
        itemsInCart={itemsInCart}
        totalCost={totalCost}
        onCheckoutClick={handleCheckoutClick}
      /> */}

      <button>Go to Checkout</button>
    </>
  );
}
