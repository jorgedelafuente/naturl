import React from 'react';
import Product from '../components/product/Product';

export default function Products({ data, handleAddToCartClick}) {
  return (
    <>
      <h1>Products</h1>
      <div className="App-products">
        {data.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            image={item.image_link}
            price={item.price}
            onAddToCartClick={() => handleAddToCartClick(item.id)}
          />
        ))}
      </div>
    </>
  );
}
