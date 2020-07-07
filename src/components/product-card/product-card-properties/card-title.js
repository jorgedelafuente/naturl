import React from "react";
// import { Link } from '@reach/router';

function CardTitle(props) {
  return (
    <div className="product-card-title-container">
      <div className="products-card-nametitle-container">
        <p>{props.nameTitle}</p>
      </div>
      <div className="products-card-price-buy">
        <p className="products-card-nameprice-container">{"$" + props.price}</p>
        <button className="card-button">Add to cart</button>
      </div>
    </div>
  );
}

export default CardTitle;
