import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./CartItem.scss";
import { Link } from "@reach/router";

export default function CartItem({
  thumbnail,
  name,
  cost,
  quantity,
  onRemoveItemFromCartClick,
}) {
  return (
    <div className="CartItem">
      <div className="CartItem-thumbnail">
        <img className="CartItem-thumbnail-img" src={thumbnail}></img>
      </div>
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
