import React from 'react';
import './Product.scss';

//TODO: add types to functiona arguments

export default function Product({ onAddToCartClick, price, name, image }) {
  return (
    <div className="Product">
      <h2 className="Produc-name">{name}</h2>
      <div className="Product-image">
        <img src={image} alt="beauty product" />
      </div>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
