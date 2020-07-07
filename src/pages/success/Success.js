import React, { useContext } from "react";
import { AuthContext } from "../../auth/Auth";
import ProductCard from "../../components/product-card/Product-card";
import "./Success.scss";

const Success = ({ data, itemsInCart, listRelatedProducts }) => {
  const { currentUser } = useContext(AuthContext);

  const orderNumber = () => {
    let randomNumber = Math.floor(Math.random() * 90000) + 10000;
    return "[#" + randomNumber.toString(10) + "]";
  };

  const suggestedProducts = listRelatedProducts(itemsInCart, data, 10);

  // localStorage.removeItem("cart");
  return (
    <div className="Success-container">
      <h2>Thank you for shopping at NATURL!</h2>

      {currentUser ? (
        <div className="Success-message">
          Your order{" "}
          <span className="Success-order-number">{orderNumber()}</span> is on
          it&apos;s way to {currentUser.email}.
          <br /> Review your order below:
        </div>
      ) : (
        <div className="Success-message">
          Your order{" "}
          <span className="Success-order-number">{orderNumber()}</span> is on
          it&apos;s way.
          <br /> Review your order below:
        </div>
      )}

      {suggestedProducts.length > 0 ? (
        <>
          <h2 className="Checkout-related-products-title">
            You might also be interested in these products...
          </h2>
          <div className="Checkout-related-products">
            {suggestedProducts.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image_link}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Success;
