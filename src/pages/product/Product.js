import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
// import { AuthContext } from "../../auth/Auth";
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
  // const [userId, setUserId] = useState(null);
  // const [wishList, setWishList] = useState([]);
  // const { currentUserProfile } = useContext(AuthContext);

  useEffect(() => {
    setProductData([...data]);
  }, [data]);
  // useEffect(() => {
  //   setProductData([...data]);
  //   if (currentUserProfile) {
  //     setUserId(currentUserProfile.uid);
  //     setWishList(currentUserProfile.wishList);
  //   }
  // }, [data, currentUserProfile]);

  // console.log(currentUserProfile);

  const foundItem = productData.find((item) => item.id === parseInt(id));
  return (
    <div className="product-page-container">
      <ProductItem
        data={foundItem}
        onAddToCartClick={handleAddToCartClick}
        // userData={currentUserProfile}
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
  handleAddToCartClick: PropTypes.func,
  id: PropTypes.string,
};

export default Product;
