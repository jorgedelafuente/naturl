import React from 'react';

function CardTitle(props) {

  const priceAmount = (Number(props.price) + 1) * 2;
  const rounded = Math.ceil(priceAmount) - 0.01;
  const finalPrice = rounded.toFixed(2);
  // const finalPrice = twoDecimals * 2;
  console.log(props.price +1)

  return (
    <div className="">
      {' '}
      <p className="products-card-nametitle-container">
        {props.nameTitle}
      </p>{' '}
      <p className="products-card-nameprice-container">{'$' + finalPrice }</p>{' '}
    </div>
  );
}

export default CardTitle;
