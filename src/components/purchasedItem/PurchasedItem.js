import React from "react";
import "./PurchasedItem.scss";
import { Link } from "@reach/router";

export default function PurchasedItem({
  itemId,
  thumbnail,
  name,
  cost,
  quantity,
}) {
  const productPath = `/product/${itemId}`;
  return (
    <div className="PurchasedItem">
      <div className="PurchasedItem-description">
        <div className="PurchasedItem-thumbnail">
          <img
            className="PurchasedItem-thumbnail-img"
            alt={name}
            src={thumbnail}
          />
        </div>
        <Link to={productPath} className="PurchasedItem-product-link">
          {name}
        </Link>
      </div>
      <div className="PurchasedItem-details">
        <div className="PurchasedItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
      </div>
    </div>
  );
}
