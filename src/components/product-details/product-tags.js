import React from 'react';

function ProductTags(props) {
  const tagsArr = props.objItem.tag_list;
  return (
    <div className="product-details-tags">
      {tagsArr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ProductTags;
