import React from 'react';
import './products.scss';
import { Link } from '@reach/router';

import ProductItem from '../../components/product-card/Product-card';


function Products(props) {
  const datad = props.data;
  // console.log(datad);

  return (
    <div className="products-page-container">
      <div className="products-title">
        <h1>Products</h1>
      </div>
      <div className="products-labels-and-filter">
        <Link className="products-allproducts-label" to="/products">
          {props.title}
        </Link>
        <a href="/">Product types/ Filter</a>
      </div>

      <div className="products-categories-container">
        {datad.map((item) => (
          <ProductItem
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
