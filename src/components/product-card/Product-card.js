import React from "react";
import Title from "./product-card-properties/card-title";
import { Link } from "@reach/router";
import { Card } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./product-card.scss";

function ProductCard(props) {
  const { Meta } = Card;

  return (
    <div className="products-categories-container-item wow fadeInUp">
      <Link to={`/product/${props.id}`}>
        <Card className="product-card-style" hoverable style={{ width: 280 }}>
          <div className="product-card-image-container">
            {}
            <div
              className="wishlist-icon-heart-card"
              style={{ color: props.wishList ? "red" : "rgb(190, 190, 190)" }}
            >
              <HeartOutlined />
            </div>

            <img alt="example" src={props.image} />
          </div>
          <Meta
            className="cardBodyStyle"
            description={<Title price={props.price} nameTitle={props.name} />}
          />
        </Card>
      </Link>
    </div>
  );
}

export default ProductCard;
