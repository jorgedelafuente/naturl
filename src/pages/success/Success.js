import React from "react";
import "./Success.scss";

const Success = () => {
  localStorage.removeItem("cart");
  return (
    <div className="Success-container">
      <h2>Thanks for shopping at NATURL</h2>
      <div className="Success-message">Your order is on it&apos;s way!</div>
    </div>
  );
};

export default Success;
