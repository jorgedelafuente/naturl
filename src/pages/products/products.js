import React from 'react';
import './products.css';


import ProductItem from "../../components/product-card/Product-card";

function Products(data) {

  // console.log(data);
  const datad = data.data;
  // console.log(datad);
  

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
        {/* {
          datad.map(item =>  <ProductItem image={item.image_link}  title={item.name} price={item.price} />     console.log(item)   )
        } */}
      <div className="products-categories-container">

        {
          datad.map(item => (<ProductItem image={item.image_link}  name={item.name} price={item.price} />))
        }

        

        {/* <ProductItem />
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
        <ProductItem /> */}



      </div>
    </div>
  );
}


export default Products;
