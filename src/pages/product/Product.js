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
  
  // eslint-disable-next-line
  const foundItem = props.data.find((item) => item.id == props.id);
  return (


      <div className="product-page-container">    
          <ProductItem data={foundItem} />
      </div>
  );

};



export default Product;


    