import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "./productItem.scss";

const Product = ({
  data,
  handleAddToCartClick,
  id,
  wishList,
  setWishList,
  userId,
}) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData([...data]);
  }, [data]);

  const foundItem = productData.find((item) => item.id === parseInt(id));
  return (
    <div className="product-page-container">
      <ProductItem
        data={foundItem}
        onAddToCartClick={handleAddToCartClick}
        userId={userId}
        productId={id}
        wishList={wishList}
        setWishList={setWishList}
      />
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.array,
  wishList: PropTypes.array,
  handleAddToCartClick: PropTypes.func,
  setWishList: PropTypes.func,
  id: PropTypes.string,
  userId: PropTypes.string,
};

export default Product;
