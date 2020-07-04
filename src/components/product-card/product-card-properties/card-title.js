import React from 'react';
import { Link } from '@reach/router';

function CardTitle(props) {
  return (
    <div className="">
      <div className="products-card-nametitle-container">
        <p>{props.nameTitle}</p>
      </div>
      <div className="products-card-price-buy">
        <p className="products-card-nameprice-container">{'$' + props.price}</p>
        {/* <Link to={`/checkout`}>
          <button>Add to cart</button>
        </Link> */}
      </div>
    </div>
  );
}

export default CardTitle;
