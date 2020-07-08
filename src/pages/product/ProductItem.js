import React, { useState } from "react";
import "./productItem.scss";

import { Rate, Radio } from "antd";
import { HeartOutlined } from "@ant-design/icons";

// import ProductColor from "../../components/product-details/product-colors";
import ProductTags from "../../components/product-details/product-tags";

function ProductItem(props) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemColor, setItemColor] = useState(1);

  const handleUpdateItemQuantity = (e) => {
    const quantityToInt = parseInt(e.target.value, 10);
    setItemQuantity(quantityToInt);
  };

  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
    setItemColor(e.target.value);
  }

  return (
    props.data !== undefined && (
      <>
        <div className="product-image-leftside-page animated fadeInLeft">
          <div className="product-image-leftside-sizecontainer">
            <img alt="example" src={props.data.image_link} />
          </div>
        </div>

        <div className="product-details-rightside-page ">
          <div className="singleproduct-page-title animated fadeInLeft">
            <h2>{props.data.name}</h2>
          </div>

          <div className="product-details-shopinfo animated fadeInLeft">
            <h2>${props.data.price} </h2>
            <input
              className="product-details-quantity-input animated fadeInLeft"
              type="number"
              name="discountInstant"
              min="1"
              max="10"
              placeholder="1"
              onChange={handleUpdateItemQuantity}
              autoComplete="off"
            ></input>
            <button
              onClick={() =>
                props.onAddToCartClick(props.data.id, itemQuantity, itemColor)
              }
            >
              Add to cart
            </button>

            <div className="wishlist-icon-heart">
              <HeartOutlined />
            </div>
          </div>

          <div className="product-colors-container">
            <Radio.Group onChange={onChange}>
              {props.data.product_colors.map((item) => (
                // <div className="product-color-dots">
                <Radio.Button
                  className="product-color-dots"
                  style={{ backgroundColor: item.hex_value }}
                  value={item.hex_value}
                ></Radio.Button>
                /* <button style={{ backgroundColor: item.hex_value }} /> */
                // </div>
                // <ProductColor key={item.hex_value} color={item.hex_value} />
              ))}
            </Radio.Group>
          </div>

          <div className="singleproduct-page-description">
            <p>{props.data.description} </p>
          </div>

          <div className="product-details-categories-container">
            <div className="product-details-categories-labels">
              <p>Brand:</p>
              <p>{props.data.brand} </p>
            </div>
            <div className="product-details-categories-labels animated fadeInLeft">
              <p>Product type:</p>
              <p>{props.data.product_type} </p>
            </div>
            <div className="product-details-categories-labels animated fadeInLeft">
              <p>Category: </p>
              <p>{props.data.category}</p>
            </div>
          </div>

          <div className="productitem-description-rating animated fadeInLeft">
            Rating:
            <Rate
              className="product-item-description-ratings animated fadeInLeft"
              disabled
              defaultValue={props.data.rating}
            />
          </div>

          <ProductTags objItem={props.data} />
        </div>
      </>
    )
  );
}

export default ProductItem;
