


import React, { useState } from 'react';
import { Drawer } from 'antd';

import "./product-filter-drawer.scss"
import CategoryTags from './tags/product-type-tags';



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
      <div className="filter-product-types-link">
        <a onClick={showDrawer}>
          Product types/ Filter
        </a>
      </div>

      <Drawer
        title="Filter"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >

        <CategoryTags />

        <p>Brand name filters</p>
        <p>Price filter</p>
      </Drawer>
    </>
  );
};

export default ProductDrawerFilter;
