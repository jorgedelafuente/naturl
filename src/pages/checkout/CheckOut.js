import React, { useContext } from "react";
import Cart from "../../components/cart/Cart";
import ProductCard from "../../components/product-card/Product-card";
import { AuthContext } from "../../auth/Auth";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckOut.scss";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CHECKOUT_PK);

export default function Checkout({
  data,
  itemsInCart,
  listRelatedProducts,
  handleClearCartClick,
  handleRemoveItemFromCartClick,
}) {
  const { currentUser } = useContext(AuthContext);

  const currentLineItems = itemsInCart.map((item) => {
    return { price: item.stripe_price_id, quantity: item.quantity };
  });

  const prefilledEmail = (currentUser, currentLineItems) => {
    if (currentUser) {
      return {
        lineItems: currentLineItems,
        mode: "payment",
        successUrl: process.env.REACT_APP_DOMAIN + "/success",
        cancelUrl: process.env.REACT_APP_DOMAIN + "/checkout",
        customerEmail: currentUser.email,
        shippingAddressCollection: {
          allowedCountries: ["US", "CA", "DE", "ES", "GB", "MX"],
        },
      };
    } else
      return {
        lineItems: currentLineItems,
        mode: "payment",
        successUrl: process.env.REACT_APP_DOMAIN + "/success",
        cancelUrl: process.env.REACT_APP_DOMAIN + "/checkout",
        shippingAddressCollection: {
          allowedCountries: ["US", "CA", "DE", "ES", "GB", "MX"],
        },
      };
  };

  const handleCheckoutClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout(
      prefilledEmail(currentUser, currentLineItems)
    );
    //TODO: handle error message
    if (error) {
      return <div>error.message</div>;
    }
  };

  const totalCost = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const suggestedProducts = listRelatedProducts(itemsInCart, data, 10);

  // localStorage.setItem("cartHistory", itemsInCart);
  return (
    <>
      <Cart
        itemsInCart={itemsInCart}
        totalCost={totalCost}
        handleClearCartClick={handleClearCartClick}
        onCheckoutClick={handleCheckoutClick}
        handleRemoveItemFromCartClick={handleRemoveItemFromCartClick}
      />
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
    </>
  );
}
