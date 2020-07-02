import React from 'react';
import './products.scss';
import { Link } from '@reach/router';

import ProductCard from '../../components/product-card/Product-card';
import ProductDrawerFilter from '../../components/product-card/product-filter-drawer';
import ProductPopUp from '../../components/product-card/product-popup-details';



function Products(props) {
  const datad = props.data;

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
        <ProductPopUp />
        <ProductDrawerFilter />
      </div>

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
