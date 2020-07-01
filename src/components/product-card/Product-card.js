

import React from 'react';

import 'antd/dist/antd.css'

import { Card } from 'antd';


function ProductItem(props) {
  const { Meta } = Card;

  console.log(props.name)

  return (
    <div className="products-categories-container-item">
      <Card className="product-card-style" hoverable style={{ width: 240 }} cover={<img alt="example" src={props.image} />}>
        <Meta title={props.name} description={"$" + props.price} />
      </Card>
    </div>
  );
}


export default ProductItem;