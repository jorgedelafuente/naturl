import React, { useEffect, useState } from 'react';

import './productItem.scss';


import ApiClient from '../../services/ApiClient';
import ProductItem from "./ProductItem";




const Product = (props ) => {
  const [allData, setData] = useState([]);
  const [productItemData, setProductData] = useState([]);

  useEffect(() => {
    ApiClient.getData().then((data) => {
      setData(data);
      
      let result;
      for (let i = 0; i < data.length; i++) {
        if (Object.is(data[i], props) === true) {
          result = data[i];
        }
      }
      setProductData(result);
    });
    // .then(() => setIsLoading(false));
  }, []);
  return (


      <div className="product-page-container">    
          <ProductItem
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

export default Product;


    