import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import data from '../mocks/data';
import Product from '../components/product/Product';
import Cart from '../components/cart/Cart';

export default function Products(props: RouteComponentProps) {
  const [itemsInCart, setItemsInCart] = useState([]);

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

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <h1>Products</h1>
      <div className="App-products">
        {data.map((item) => (
          <Product
            key={item.name}
            name={item.name}
            price={item.price}
            onAddToCartClick={() => handleAddToCartClick(item.id)}
          />
        ))}
      </div>
      <Cart itemsInCart={itemsInCart} totalCost={totalCost} />
    </>
  );
}
