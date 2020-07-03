import React from 'react';


import "./brand-tags.scss"

import { Tag } from 'antd';
const { CheckableTag } = Tag;



const tagsData = 
[
  'Mineral fusion',      'Marcelle',
  'Cargo cosmetics',     'Pure anada',
  'W3llpeople',          'Rejuva minerals',
  'Penny lane organics', 'Marienatie',
  null,                  'Physicians formula',
  'Sante',               'Pacifica',
  'Zorah',               'Moov',
  'Colourpop',           'Alva',
  'Milani',              'E.l.f.',
  'Dr. hauschka',        'Suncoat',
  'Misa',                'Butter london'
]


class BrandTags extends React.Component {
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
          <p>Brands:</p>
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


export default BrandTags;