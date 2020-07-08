import React from "react";
import CartItem from "../cartItem/CartItem";
import "./Cart.scss";
import { Link } from "@reach/router";

export default function Cart({
  handleClearCartClick,
  handleRemoveItemFromCartClick,
  onCheckoutClick,
  itemsInCart,
  totalCost,
}) {
  // console.log(itemsInCart);
  return (
    <div className="Cart">
      <h2 className="Cart-title">Your shopping cart</h2>
      {itemsInCart.length > 0 ? (
        <div>
          {itemsInCart.map((item) => (
            <CartItem
              color={item.color}
              key={item.id}
              itemId={item.id}
              thumbnail={item.image_link}
              name={item.name}
              cost={item.price * item.quantity}
              quantity={item.quantity}
              onRemoveItemFromCartClick={() =>
                handleRemoveItemFromCartClick(item.id)
              }
            />
          ))}
          <div className="Cart-total-cost">
            Total cost: ${totalCost.toFixed(2)}
            <button
              className="checkout-clearcart-button"
              onClick={handleClearCartClick}
            >
              Clear Cart
            </button>
          </div>
          <div className="Cart-navigation">
            <button className="Cart-button-purchase" onClick={onCheckoutClick}>
              Proceed To Checkout
            </button>
            <Link to="/products">
              <button className="checkout-continueshopping-button">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="Cart-message-empty">Cart is empty</div>
      )}
    </div>
  );
}
