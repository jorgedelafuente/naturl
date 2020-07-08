import React from "react";
// import PurchasedItem from "../purchasedItem/PurchasedItem";
// import "../purchaseHistory/purchaseHistory.scss";
import WishlistItem from "./wishlistItem";
// import "./WishList.scss";

export default function WishlistList({ wishListData, removeFromWishList }) {
  return (
    <div className="Wishlist-Container">
      <WishlistItem
        key={wishListData.id}
        itemId={wishListData.id}
        thumbnail={wishListData.image_link}
        name={wishListData.name}
        price={wishListData.price}
        removeFromWishList={removeFromWishList}
      />
    </div>
  );
}
