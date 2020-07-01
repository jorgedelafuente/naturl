import React from 'react';
import './CartItem.scss';

export default function CartItem({ name, cost, quantity }) {
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div className="CartItem-details">
        <div className="CartItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
      </div>
    </div>
  );
}
