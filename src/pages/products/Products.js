import React, { useState, useEffect } from 'react';
import './products.scss';
import ProductCard from '../../components/product-card/Product-card';

// import FixedFilterHeader from '../../components/fixed-filter-header/fixed-filter-header';
import PropTypes from 'prop-types';
import { Affix } from 'antd';
import { Link } from '@reach/router';
import './filters.scss';
// import ProductDrawerFilter from '../../components/fixed-filter-header/drawer/product-filter-drawer';
import { NodeExpandOutlined } from '@ant-design/icons';
// import { Slider } from 'antd';
import { Drawer } from 'antd';
import { Tag } from 'antd';

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

const Products = ({ data }) => {
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
    console.log(tag);
    console.log(checked);
    // setVisible(false);
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    // console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags([...nextSelectedTags]);
  };

  const filtered = (data) => {
    if (selectedTags.length === 0) return data;
    // console.log(data);
    // console.log(selectedTags);
    if (selectedTags.length === 1) {
      console.log('case1');
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
      // console.log('Filtered Products Length:', tempArr.length);
      // tempArr = [...new Set(tempArr)];
      console.log('Filtered Products Length:', tempArr.length);

      return tempArr;
    }
    if (selectedTags.length > 1) {
      console.log('case2');
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
      // console.log('Filtered Products Length:', tempArr.length);
      // tempArr = [...new Set(tempArr)];
      console.log(
        'Filtered Products Length:',
        tempArr.length,
        tempArr,
        selectedTags
      );

      let filteredArr = tempArr.filter((item) => {
        return (
          selectedTags.includes(item.product_type) &&
          selectedTags.includes(item.brand)
        );
        // selectedTags.forEach()
      });
      console.log(filteredArr);

      return filteredArr;
    }
  };

  return (
    <div className="products-page-container">
      <div className="products-title">
        <h1>Products</h1>
      </div>

      <Affix offsetTop={top}>
        <div className="fixedHeaderButton" onClick={() => setTop(top)}>
          <Link to="/products">All products</Link>
          <div className="filter-product-types-link">
            <span
              onClick={showDrawer}
              style={{ fontSize: 18, cursor: 'pointer' }}
            >
              Filter <NodeExpandOutlined />
            </span>
          </div>

          <Drawer
            title="Filter"
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            {/* <ProductTypeTags /> */}

            <div
              className="drawer-product-type-title"
              style={{ marginRight: 8 }}
            >
              <p>Product types:</p>
            </div>

            {/* PRODUCT_TYPE */}

            <div className="drawer-product-type-tags">
              {productTags.map((tag) => (
                <CheckableTag
                  className="producttype-tags"
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                  onClick={onClose}
                  // onClick={handleClick}
                >
                  {/* {tag.charAt(0).toUpperCase() + tag.substring(1)} */}
                  {/* {tag.replace(/_/g, ' ')}
                   */}

                  {formatProductText(tag)}
                </CheckableTag>
              ))}
            </div>

            <br />

            <div
              className="drawer-product-type-title"
              style={{ marginRight: 8 }}
            >
              <p>Brands:</p>
            </div>
            {/* BRANDS */}
            <div className="drawer-product-type-tags">
              {brandTags.map((tag) => (
                <CheckableTag
                  className="producttype-tags"
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => handleChange(tag, checked)}
                >
                  {formatBrandText(tag)}
                </CheckableTag>
              ))}
            </div>
            {/* <p className="products-drawer-price-filter">Price filter</p>
            <Slider range defaultValue={[0, 50]} tipFormatter={formatter} /> */}
          </Drawer>
        </div>
      </Affix>

      <div className="products-categories-container">
        {filtered(originalData).map((item) => (
          <ProductCard
            key={item.id}
            image={item.image_link}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.array,
};

export default Products;
