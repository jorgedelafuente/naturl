import React from 'react';
import './product.css';


// import ProductItem from "../components/product-card-item";



function Products() {

  return (
    <div className="singleproduct-page-container">

      <div className="singleproduct-productimage-and-description-container">
        <div className="singleproduct-image">
        <img alt="example" src="https://img.makeupalley.com/7/4/1/7/2706184.PNG" />
        </div>

        <div className="singleproduct-product-title-and-description-container">
          <div className="singleproduct-page-title" >
            <h1>Blotted Lip</h1>
          </div>
          <div className="singleproduct-page-description" >
            <p>Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.</p>
          </div>
          <div className="singleproduct-page-description" >
            <h3>Price $6.50</h3>
          </div>
          <div className="singleproduct-page-colors" >
            <p>Colors:</p>
            <p>Lolly</p>
            <p>Candyfloss</p>
            <p>Drip</p>
            <p>Ice Cube</p>
            <p>On a Stick</p>
            <p>Bee's Knees</p>
            <p>Brain Freeze</p>
          </div>
          <div className="singleproduct-page-colors" >
            <input id='instant-input1' className='settings-input' type='number' name='discountInstant' min="0" max="100" autocomplete='off'  ></input>
            <button>Add to cart</button>
          </div>  
          {/* <div className="singleproduct-page-description" >
          </div>  */}
        </div>
      </div>
    </div>
  );
}


export default Products;