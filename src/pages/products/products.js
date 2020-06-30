import React from 'react';
import './products.css';


import ProductItem from "../../components/products/product-card-display";

function Products() {

  return (
    <div className="products-page-container">
      <div className="products-title" >
        <h1>Products</h1>
      </div>
      <div className="products-types-list">
        <a href="/">Blush</a><a href="/">Bronzer</a><a href="/">Eyebrow</a><a href="/">Eyeliner</a><a href="/">Eyeshadow</a><a href="/">Foundation</a><a href="/">Lip liner</a><a href="/">Lipstick</a><a href="/">Mascara</a><a href="/">Nail polish</a>
      </div>
      <div className="products-categories-title" >
        <p>Category</p>
      </div>
      <div className="products-categories-list">
        <a href="/">Powder</a><a href="/">Cream</a>
      </div>
      <div className="products-categories-container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />



      </div>
    </div>
  );
}


export default Products;
