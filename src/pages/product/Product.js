import React from 'react';
import ProductItem from './ProductItem';
import './productItem.scss';

const Product = (props) => {
  const handleAddToCartClick = props.handleAddToCartClick;
  const foundItem = props.data.find((item) => item.id == props.id);
  return (
    <div className="product-page-container">
      <ProductItem
        data={foundItem}
        onAddToCartClick={handleAddToCartClick}
      />
    </div>
  );
};

export default Product;
