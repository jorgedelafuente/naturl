import React from 'react';
import './products.scss';


import ProductItem from "../../components/product-card/Product-card";

function Products(data) {

  const datad = data.data;
  console.log(datad);
  

  return (
    <div className="products-page-container">
      <div className="products-title" >
        <h1>Products</h1>
      </div>
      <div className="products-labels-and-filter">
        <a className="products-allproducts-label" href="/">All products</a><a href="/">Product types/ Filter</a>
      </div>
      
      
      <div className="products-categories-container">
    

          {
            datad.map(item => (<ProductItem image={item.image_link}  name={item.name} price={item.price} />))
          }


      </div>
    </div>
  );
}


export default Products;
