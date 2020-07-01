import React from 'react';
import ProductSubItem from './ProductSubItem';

const ProductItem = (props) => {
  console.log(props.data);

  return (
    <div>
      {props.data !== undefined && (
        <>
          {/* <h2>{props.data.name}</h2> */}

          {/* <ProductSubItem data={foundItem}></ProductSubItem> */}

          <div className="singleproduct-page-container">
            <div className="singleproduct-productimage-and-description-container">
              <div className="singleproduct-image">
                {/* <img
                  alt="example"
                  src="https://img.makeupalley.com/7/4/1/7/2706184.PNG"
                /> */}
                <img alt="example" src={props.data.image_link} />
              </div>

              <div className="singleproduct-product-title-and-description-container">
                <div className="singleproduct-page-title">
                  <h1>{props.data.name}</h1>
                </div>
                <div className="singleproduct-page-description">
                  <p>
                    Blotted Lip Sheer matte lipstick that creates the perfect
                    popsicle pout! Formula is lightweight, matte and buildable
                    for light to medium coverage.
                  </p>
                </div>
                <div className="singleproduct-page-description">
                  <h3>Price $6.50</h3>
                </div>
                <div className="singleproduct-page-colors">
                  <p>Colors:</p>
                  <p>Lolly</p>
                  <p>Candyfloss</p>
                  <p>Drip</p>
                  <p>Ice Cube</p>
                  <p>On a Stick</p>
                  <p>Bee's Knees</p>
                  <p>Brain Freeze</p>
                </div>
                <div className="singleproduct-page-colors">
                  <input
                    id="instant-input1"
                    className="settings-input"
                    type="number"
                    name="discountInstant"
                    min="0"
                    max="100"
                    autoComplete="off"
                  ></input>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
  // return <div>{productItem.length > 0 && <div>{productItem.id}</div>}</div>;
};

export default ProductItem;
