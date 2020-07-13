import React from "react";

import { Tag } from "antd";

function ProductTags(props) {
  const tagsArr = props.objItem.tag_list;
  return (
    <div className="product-details-tags">
      {tagsArr.map((item, index) => (
        <Tag key={index} color="cyan">
          {item}
        </Tag>
      ))}
    </div>
  );
}

export default ProductTags;
