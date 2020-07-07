import React, { useContext } from "react";
import { AuthContext } from "../../auth/Auth";
import PurchaseHistory from "../../components/purchaseHistory/purchaseHistory";
import "./Success.scss";

const Success = () => {
  const { currentUser } = useContext(AuthContext);
  const purchaseHistory = JSON.parse(localStorage.getItem("cartHistory"));
  localStorage.removeItem("cart");

  const orderNumber = () => {
    let randomNumber = Math.floor(Math.random() * 90000) + 10000;
    return "[#" + randomNumber.toString(10) + "]";
  };

  return (
    <div className="Success-container">
      <h2>Thank you for shopping at NATURL!</h2>

      {currentUser ? (
        <div className="Success-message">
          Your order{" "}
          <span className="Success-order-number">{orderNumber()}</span> is on
          it&apos;s way. <br /> Check your inbox at {currentUser.email} for
          shipping details.
        </div>
      ) : (
        <div className="Success-message">
          Your order{" "}
          <span className="Success-order-number">{orderNumber()}</span> is on
          it&apos;s way.
          <br /> Review your order below:
        </div>
      )}
      <PurchaseHistory purchaseHistory={purchaseHistory}></PurchaseHistory>
    </div>
  );
};

export default Success;
