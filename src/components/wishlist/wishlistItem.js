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
      <div className="PurchasedItem-details">
        <div>${price}</div>
        <div>
          <CloseCircleOutlined onClick={() => removeFromWishList(itemId)} />
        </div>
      </div>
    </div>
  );
}
