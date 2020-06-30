

import React from 'react';

import 'antd/dist/antd.css'

import { Card } from 'antd';


function ProductItem() {
  const { Meta } = Card;

  return (
    <div className="products-categories-container-item">
      <Card hoverable style={{ width: 240 }} cover={<img alt="example" src="https://img.makeupalley.com/7/4/1/7/2706184.PNG" />}>
        <Meta title="Colourpop" description="$6.50" />
      </Card>
    </div>
  );
}


export default ProductItem;