import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./CartItem.scss";
import { Link } from "@reach/router";

export default function CartItem({
  itemId,
  thumbnail,
  name,
  cost,
  quantity,
  color,
  onRemoveItemFromCartClick,
}) {
  const productPath = `/product/${itemId}`;
  // console.log(color);
  return (
    <div className="CartItem">
      <div className="CartItem-description">
        <div className="CartItem-thumbnail">
          <img
            className="CartItem-thumbnail-img"
            alt="product-thumbnail"
            src={thumbnail}
          />
        </div>
        <Link to={productPath} className="CartItem-product-link">
          {name}
        </Link>
      </div>
      <div className="CartItem-details">
        <div className="checkout-product-color-dot-container">
          <span
            className="checkout-product-color-dot"
            style={{ backgroundColor: color }}
          ></span>
        </div>

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
