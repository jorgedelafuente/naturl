// import React, { useEffect, useState } from 'react';
import React from 'react';


import './productItem.scss';



// import ApiClient from '../../services/ApiClient';
import ProductItem from "./ProductItem";




const Product = (props ) => {
  // const [allData, setData] = useState([]);
  // const [productItemData, setProductData] = useState([]);

  // useEffect(() => {
  //   ApiClient.getData().then((data) => {
  //     setData(data);
      
  //     let result;
  //     for (let i = 0; i < data.length; i++) {
  //       if (Object.is(data[i], props) === true) {
  //         result = data[i];
  //       }
  //     }
  //     setProductData(result);
  //   });
  //   // .then(() => setIsLoading(false));
  // }, []);
  // const foundItem = props.data.find((item) => item.id == props.id);
  return (


      <div className="product-page-container">    
          <ProductItem
            // data={foundItem}
            objItem={props.objItem}            
            key={props.id}
            image={props.image}
            name={props.name}
            price={props.price}
            id={props.id}
          />
      </div>
  );

};


// function Product(props) {
//   console.log(props);
//   const foundItem = props.data.find((item) => item.id == props.id);
//   return <ProductItem data={foundItem}></ProductItem>;
// }


export default Product;


    