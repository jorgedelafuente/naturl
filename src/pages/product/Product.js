import React from 'react';

import './productItem.scss';
import ProductItem from './ProductItem';

const Product = (props) => {
  console.log(props);
  const foundItem = props.data.find((item) => item.id === parseInt(props.id));
  return (
    <div className="product-page-container">
      <ProductItem data={foundItem} />
    </div>
  );
};

export default Product;
