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
  selectedColors,
  onRemoveItemFromCartClick,
}) {
  const productPath = `/product/${itemId}`;
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
        <div className="CartItem-selected-color-container">
          {selectedColors.map((color) => (
            <>
              <span
                key={color}
                className="CartItem-selected-color"
                style={{ backgroundColor: color }}
              ></span>
              <span>&nbsp;</span>
            </>
          ))}
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
