import React, { useState } from 'react';
import { Affix } from 'antd';
import { Link } from '@reach/router';

// import './fixed-filter-header.scss';
import ProductDrawerFilter from './drawer/product-filter-drawer';

const FixedFilterHeader = () => {
  const [top, setTop] = useState(0);
  return (
    <>
      <Affix offsetTop={top}>
        <div className="fixedHeaderButton" onClick={() => setTop(top)}>
          <Link to="/products">All products</Link>
          <ProductDrawerFilter />
        </div>
      </Affix>
    </>
  );
};

export default FixedFilterHeader;
