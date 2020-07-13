import React from "react";

function ProductColors(props) {
  return (
    <div className="product-color-dots">
      <button style={{ backgroundColor: props.color }}></button>
    </div>
  );
}

export default ProductColors;
