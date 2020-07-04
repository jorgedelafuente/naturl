import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import './CartItem.scss';

export default function CartItem({ onRemoveItemFromCartClick, name, cost, quantity }) {
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div className="CartItem-details">
        <div className="CartItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
        <button
          className="CartItem-button-remove"
          onClick={onRemoveItemFromCartClick}
        >
          <CloseCircleOutlined />
        </button>
      </div>
    </div>
  );
}
