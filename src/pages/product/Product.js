import React from "react";
import ProductItem from "./ProductItem";
import "./productItem.scss";

const Product = (props) => {
  const foundItem = props.data.find((item) => item.id === parseInt(props.id));
  const handleAddToCartClick = props.handleAddToCartClick;
  return (
    <div className="product-page-container">
      <ProductItem data={foundItem} onAddToCartClick={handleAddToCartClick} />
    </div>
  );
};

export default Product;
