import React, { useState } from 'react';
import { Affix } from 'antd';
import { Link } from '@reach/router';

import './fixed-filter-header.scss';
import ProductFilterDrawer from './drawer/product-filter-drawer';

const FixedFilterHeader = (props) => {
  const [top, setTop] = useState(50);

  return (
    <>
      <Affix offsetTop={top}>
        <div className="fixedHeaderArea" onClick={() => setTop(top)}>
          <Link className="" to={`/${props.title}`}>
            All products
          </Link>
          <ProductFilterDrawer />
        </div>
      </Affix>
    </>
  );
};

export default FixedFilterHeader;
