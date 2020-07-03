import React from 'react';


import "./product-type-tags.scss"

import { Tag } from 'antd';
const { CheckableTag } = Tag;



const tagsData = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Eyeshadow', 'Foundation', 'Lip liner', 'Lipstick', 'Mascara', 'Nal polish'];



class CategoryTags extends React.Component {
  state = {
    selectedTags: ['Books'],
  };
  
  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  
  render() {
    const { selectedTags } = this.state;
    return (
      <>
        <div className="drawer-product-type-title" style={{ marginRight: 8 }}>
          <p>Product types:</p>
        </div>

        <div className="drawer-product-type-tags">
          {tagsData.map(tag => (

            <CheckableTag className="producttype-tags"
              key={tag}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={checked => this.handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>

          ))}
        </div>
      </>
    );
  }
}


export default CategoryTags;