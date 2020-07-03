


import React, { useState } from 'react';
import { Drawer } from 'antd';

import "./product-filter-drawer.scss"

import { Slider } from 'antd';

import ProductTypeTags from './tags/product-type-tags';
import BrandTags from './tags/brand-tags';

import {NodeExpandOutlined } from '@ant-design/icons';




function formatter(value) {
  return `$${value}`;
}


function ProductDrawerFilter () {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="filter-product-types-link"> {// eslint-disable-next-line
       }<a onClick={showDrawer}>
          Filter <NodeExpandOutlined />
        </a>
      </div>

      <Drawer
        title="Filter"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >

      <ProductTypeTags />
      <BrandTags />
      <p className="products-drawer-price-filter" >Price filter</p>
      <Slider range defaultValue={[0, 50]} tipFormatter={formatter} />

      </Drawer>
    </>
  );
};

export default ProductDrawerFilter;
