import React from 'react';
import './products.scss';

import ProductCard from '../../components/product-card/Product-card';
import FixedFilterHeader from '../../components/fixed-filter-header/fixed-filter-header';





function Products(props) {
  const datad = props.data;



  return (
    <div className="products-page-container">
      <div className="products-title">
        <h1>Products</h1>
      </div>
      
      <FixedFilterHeader />

      <div className="products-categories-container">
        {datad.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image_link}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;
