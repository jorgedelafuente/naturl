import React from 'react';
import CartItem from '../cartItem/CartItem';
import './Cart.scss';
import { Link } from '@reach/router';

export default function Cart({ handleClearCartClick, onCheckoutClick, itemsInCart, totalCost }) {
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length > 0 ? (
        <div>
          {itemsInCart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              cost={item.price * item.quantity}
              quantity={item.quantity}
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
            <button
              className="Cart-clear-button"
              onClick={handleClearCartClick}
            >
              Clear Cart
            </button>
          </div>
          <div className="Cart-navigation">
            <button className="Cart-button-purchase" onClick={onCheckoutClick}>
              Checkout
            </button>
            <Link to="/products">
              <button className="Cart-button-cancel">Continue Shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="Cart-message-empty">Cart is empty</div>
      )}
    </div>
  );
}
