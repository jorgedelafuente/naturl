import React from "react";

function ProductColors(props) {
  return (
    <div
      className="product-color-dots"
      style={{ backgroundColor: props.color }}
    >
      <p>color</p>
    </div>
  );
}

export default ProductColors;
