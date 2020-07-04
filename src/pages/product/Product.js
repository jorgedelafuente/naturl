import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import './productItem.scss';
import PropTypes from 'prop-types';

const Product = ({ data, handleAddToCartClick, id }) => {
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    setOriginalData([...data]);
  }, [data]);

  const foundItem = originalData.find((item) => item.id === parseInt(id));
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
