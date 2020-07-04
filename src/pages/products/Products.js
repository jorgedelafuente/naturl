import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import ProductCard from '../../components/product-card/Product-card';
import { Affix, Drawer, Tag } from 'antd';
import { NodeExpandOutlined } from '@ant-design/icons';
import './products.scss';
import './filters.scss';
// import { Slider } from 'antd';

const { CheckableTag } = Tag;

const productTags = [
  'blush',
  'bronzer',
  'eyeliner',
  'eyeshadow',
  'foundation',
  'lip_liner',
  'lipstick',
  'mascara',
  'nail_polish',
];

const brandTags = [
  'mineral fusion',
  'marcelle',
  'cargo cosmetics',
  'pure anada',
  'w3llpeople',
  'rejuva minerals',
  'marienatie',
  'physicians formula',
  'sante',
  'pacifica',
  'zorah',
  'moov',
  'colourpop',
  'penny lane organics',
  'alva',
  'milani',
  'e.l.f.',
  'dr. hauschka',
  'suncoat',
  'misa',
  'butter london',
];

const Products = ({ data, title }) => {
  // const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  // const [selectedTags, setSelectedTags] = useState([]);
  const [top, setTop] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // setFilteredData([...data]);
    setOriginalData([...data]);
  }, [data]);

  const formatProductText = (tag) => {
    let wordsArr = tag.split('_');
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] =
        wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].substring(1);
    }
    return wordsArr.join(' ');
  };
  const formatBrandText = (tag) => {
    let wordsArr = tag.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] =
        wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].substring(1);
    }
    return wordsArr.join(' ');
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleChange = (tag, checked) => {
    setVisible(false);
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);

    setSelectedTags([...nextSelectedTags]);
  };

  const filtered = (data) => {
    if (selectedTags.length === 0) return data;
    if (selectedTags.length === 1) {
      let tempArr = [];
      for (let i = 0; i < selectedTags.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (
            data[j].product_type === selectedTags[i] ||
            (data[j].brand === selectedTags[i] && !tempArr.includes(data[j]))
          ) {
            tempArr.push(data[j]);
          }
        }
      }
      return tempArr;
    }
    if (selectedTags.length > 1) {
      let tempArr = [];
      for (let i = 0; i < selectedTags.length; i++) {
        console.log(selectedTags[i]);

        for (let j = 0; j < data.length; j++) {
          if (
            data[j].product_type === selectedTags[i] ||
            (data[j].brand === selectedTags[i] && !tempArr.includes(data[j]))
          ) {
            tempArr.push(data[j]);
          }
        }
      }
      let filteredArr = tempArr.filter((item) => {
        return (
          selectedTags.includes(item.product_type) &&
          selectedTags.includes(item.brand)
        );
      });
      return filteredArr;
    }
  };

  return (
    <div className="products-page-container">
      <div className="products-title">
        <h1>{title}</h1>
      </div>

      <FixedFilterHeader title={props.title} />

      <div className="products-categories-container">
        {filtered(originalData).length > 0 ? (
          <>
            {filtered(originalData).map((item) => (
              <ProductCard
                key={item.id}
                image={item.image_link}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </>
        ) : (
          <div>No Products match Criteria</div>
        )}
      </div>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default Products;
