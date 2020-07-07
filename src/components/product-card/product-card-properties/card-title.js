import React from "react";
import { HeartOutlined } from "@ant-design/icons";

function CardTitle(props) {
  return (
    <div className="product-card-title-container">
      <div className="products-card-nametitle-container">
        <p>{props.nameTitle}</p>
      </div>
      <div className="products-card-price-buy">
        <p className="products-card-nameprice-container">{"$" + props.price}</p>
        <button className="card-button">Add to cart</button>
        <div className="wishlist-icon-heart-card">
          <HeartOutlined />
        </div>
      </div>
    </div>
  );
}

export default CardTitle;
