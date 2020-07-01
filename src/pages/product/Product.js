import React from 'react';
import './product.scss';
import ProductItem from './ProductItem';

// import ProductItem from "../components/product-card-item";

function Product(props) {
  const foundItem = props.data.find((item) => item.id === props.id);
  return <ProductItem data={foundItem}></ProductItem>;
}

export default Product;
