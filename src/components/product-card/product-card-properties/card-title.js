

import React from 'react';






function CardTitle (props) {

  return (
    <div className="">
     <p className="products-card-nametitle-container">{props.nameTitle}</p>
     <p className="products-card-nameprice-container">{"$" + props.price}</p>
    </div> 
  );
}

export default CardTitle;