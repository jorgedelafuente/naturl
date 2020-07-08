import React from "react";
import PurchasedItem from "../purchasedItem/PurchasedItem";
import "./purchaseHistory.scss";

export default function PurchaseHistory({ purchaseHistory }) {
  return (
    <div className="PurchaseHistory">
      <h2 className="PurchaseHistory-title">Your recent purchase</h2>
      {purchaseHistory.map((item) => (
        <PurchasedItem
          key={item.id}
          itemId={item.id}
          thumbnail={item.image_link}
          name={item.name}
          cost={item.price * item.quantity}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}
