import React from "react";
import "./PurchasedItem.scss";
import { Link } from "@reach/router";

export default function PurchasedItem({
  itemId,
  thumbnail,
  name,
  cost,
  selectedColors,
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
      <div className="PurchasedItem-details-success">
        <div className="PurchasedItem-selected-color-container">
          {selectedColors.length > 0 ? (
            selectedColors.map((color) => (
              <>
                <span
                  key={color}
                  className="PurchasedItem-selected-color"
                  style={{ backgroundColor: color }}
                ></span>
                <span>&nbsp;</span>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="PurchasedItem-quantity">Qty: {quantity}</div>
        <div>${cost.toFixed(2)}</div>
      </div>
    </div>
  );
}
