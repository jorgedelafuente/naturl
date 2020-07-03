import React from 'react';
import './productItem.scss';

import { Rate } from 'antd';

import ProductColor from '../../components/product-details/product-colors';
import ProductTags from '../../components/product-details/product-tags';

// import styled from 'styled-components';
// const AddToCart = styled.button;

function ProductItem(props) {
  return (
    props.data !== undefined && (
      <>
        <div className="product-image-leftside-page">
          <div className="product-image-leftside-sizecontainer">
            {console.log(props.data)}
            <img alt="example" src={props.data.image_link} />
          </div>
        </div>

        <div className="product-details-rightside-page ">
          <div className="singleproduct-page-title">
            <h3>{props.data.name}</h3>
          </div>

          <div className="product-details-shopinfo">
            <h4>${props.data.price} </h4>
            <input
              className="product-details-quantity-input"
              type="number"
              name="discountInstant"
              min="0"
              max="100"
              autoComplete="off"
            ></input>
            <button onClick={() => props.onAddToCartClick(props.data.id)}>Add to cart</button>
          </div>

          <div className="singleproduct-page-description">
            <p>{props.data.description} </p>
          </div>

          {props.data.product_colors.map((item) => (
            <ProductColor key={item.hex_value} color={item.hex_value} />
          ))}

          <div className="product-details-categories-brand">
            <p>Brand: {props.data.brand} </p>
            <p>Product type: {props.data.product_type} </p>
            <p>Category: {props.data.category} </p>
            <p>
              Rating: <Rate disabled defaultValue={props.data.rating} />
            </p>
          </div>

          <ProductTags objItem={props.data} />
        </div>
      </>
    )
  );
}

export default ProductItem;
