import React from 'react';
import './productItem.scss';

import { Rate } from 'antd';

import ProductColor from "../../components/product-card/product-colors";
import ProductTags from "../../components/product-card/product-tags";

// import styled from 'styled-components';
// const AddToCart = styled.button;


function ProductItem(props) {
  
  const TagsArr = props.objItem.tag_list;
  const colorArr = props.objItem.product_colors;
  // console.log(colorArr);
  return (

    <>

      <div className="product-image-leftside-page">
        <div className="product-image-leftside-sizecontainer" > 
          <img alt="example" src={props.image} />
        </div>
      </div>

      <div className="product-details-rightside-page ">

        <div className="singleproduct-page-title" >
          <h3>{props.name}</h3>
        </div>

        <div className="product-details-shopinfo" >
          <h4>${props.price} </h4>
          <input className='product-details-quantity-input' type='number' name='discountInstant' min="0" max="100" autocomplete='off'  ></input>
          <button>Add to cart</button>
        </div>
        <div className="singleproduct-page-description" >
          <p>{props.objItem.description} </p>          
        </div>

          {colorArr.map((item) => (
            <ProductColor
              color={item.hex_value}
            />
          ))}

          <div className="product-details-categories-brand" >
            <p>Brand: {props.objItem.brand} </p>
            <p>Product type: {props.objItem.product_type} </p>
            <p>Category: {props.objItem.category} </p>
            <p>Rating: <Rate disabled defaultValue={props.objItem.rating} /> </p>
          </div>

          <ProductTags
            objItem={props.objItem}
          />
        
      </div>

    </>
  );
}
  
export default ProductItem;



// import { Rate } from 'antd';

// ReactDOM.render(<Rate disabled defaultValue={2} />, mountNode);