import React from 'react';

const ProductSubItem = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Item Info</h3>
      {props.data !== undefined && <div>{props.data.name}</div>}
    </div>
  );
};

export default ProductSubItem;
