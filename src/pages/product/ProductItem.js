import React, { useState } from "react";
import "./productItem.scss";

import { Rate } from "antd";

// import ProductColor from '../../components/product-details/product-colors';
import ProductTags from "../../components/product-details/product-tags";

function ProductItem(props) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleUpdateItemQuantity = (e) => {
    const quantityToInt = parseInt(e.target.value, 10);
    setItemQuantity(quantityToInt);
  };

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
                props.onAddToCartClick(props.data.id, itemQuantity)
              }
            >
              Add to cart
            </button>
          </div>

          <div className="singleproduct-page-description animated fadeInLeft">
            <p>{props.data.description} </p>
          </div>

          {/* {props.data.product_colors.map((item) => (
            <ProductColor key={item.hex_value} color={item.hex_value} />
          ))} */}

          <div className="product-details-categories-container animated fadeInLeft">
            <div className="product-details-categories-labels animated fadeInLeft">
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
