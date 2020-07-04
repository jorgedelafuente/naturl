import React from 'react';
import ProductItem from './ProductItem';
import './productItem.scss';
import PropTypes from 'prop-types';

const Product = ({ data, handleAddToCartClick, id }) => {
  const foundItem = data.find((item) => item.id === parseInt(id));
  return (
    <div className="product-page-container">
      <ProductItem data={foundItem} onAddToCartClick={handleAddToCartClick} />
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.array,
  handleAddToCartClick: PropTypes.func,
  id: PropTypes.string,
};

export default Product;
