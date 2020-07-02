



import React from 'react';






function ProductTags (props) {
  const tagsArr = props.objItem.tag_list;
  return (
    <div className="product-details-tags" >
     {tagsArr.map((item) => (
      <p>{item}</p>
    ))}
    </div>
  );
}

export default ProductTags;



