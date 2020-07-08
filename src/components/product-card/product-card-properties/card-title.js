import React from "react";

function CardTitle(props) {
  return (
    <div className="product-card-title-container">
      <div className="products-card-nametitle-container">
        <p>{props.nameTitle}</p>
      </div>
      <div className="products-card-price-buy">
        <p className="products-card-nameprice-container">{"$" + props.price}</p>
        <button className="card-button">Buy</button>
      </div>
    </div>
  );
}

export default CardTitle;
