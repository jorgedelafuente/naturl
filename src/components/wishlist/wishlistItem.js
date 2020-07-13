import React from "react";
// import "./PurchasedItem.scss";
// import "../purchasedItem/PurchasedItem.scss";
import { Link } from "@reach/router";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./WishList.scss";

export default function WishlistItem({
  itemId,
  thumbnail,
  name,
  price,
  removeFromWishList,
}) {
  const productPath = `/product/${itemId}`;
  return (
    <div className="Wishlist-Item">
      <div className="Wishlist-Item-description">
        <div className="Wishlist-Item-thumbnail">
          <img
            className="Wishlist-Item-thumbnail-img"
            alt={name}
            src={thumbnail}
          />
        </div>
        <Link to={productPath} className="Wishlist-Item-product-link">
          {name}
        </Link>
      </div>
      <div className="Wishlist-Item-details">
        <div>${price}</div>
        <div>
          <CloseCircleOutlined onClick={() => removeFromWishList(itemId)} />
        </div>
      </div>
    </div>
  );
}
