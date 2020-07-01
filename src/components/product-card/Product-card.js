

import React from 'react';

import 'antd/dist/antd.css'
import './product-card.scss'


import { Card } from 'antd';
import Title from "./card-title";


function ProductItem(props) {
  const { Meta } = Card;

  return (
    <div className="products-categories-container-item">
      <Card className="product-card-style" hoverable style={{ width: 240 }}  >
        <div className="product-card-image-container">
          <img alt="example" src={props.image} />
        </div>
          <Meta className="cardBodyStyle" description={<Title  price={props.price}   nameTitle={props.name}  />} />
      </Card>
    </div>

    
  );
}


export default ProductItem;