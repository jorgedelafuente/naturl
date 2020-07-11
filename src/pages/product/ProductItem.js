import React, { useState } from "react";
import { addWishList } from "../../firebase";
// import ProductColor from "../../components/product-details/product-colors";
import ProductTags from "../../components/product-details/product-tags";
import Review from "../../components/ProductReview/Reviews";
import "./productItem.scss";

import { Rate, Radio } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import "./productItem.scss";

function ProductItem(props) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemColor, setItemColor] = useState(null);
  const [successAlert, setSuccessAlert] = useState("none");
  const [infoAlert, setInfoAlert] = useState("none");
  const [loginAlert, setLoginAlert] = useState("none");
  const [colorSelectAlert, setColorSelectAlert] = useState("none");
  const [addedToCartAlert, setAddedToCartAlert] = useState("none");

  const handleUpdateItemQuantity = (e) => {
    const quantityToInt = parseInt(e.target.value, 10);
    setItemQuantity(quantityToInt);
  };

  const handleSelectItemClick = (e) => {
    if (itemQuantity && itemColor) {
      props.onAddToCartClick(props.data.id, itemQuantity, itemColor);
      setAddedToCartAlert("block");
      setTimeout(() => {
        setAddedToCartAlert("none");
      }, 3000);
      setItemColor(null);
      setItemQuantity(1);
    } else {
      setColorSelectAlert("block");
      setTimeout(() => {
        setColorSelectAlert("none");
      }, 3000);
    }
  };

  const formatProductText = (tag) => {
    if (tag === null) {
      return "";
    }
    let wordsArr = tag.split("_");
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] =
        wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].substring(1);
    }
    return wordsArr.join(" ");
  };

  const formatBrandText = (tag) => {
    if (tag === null) {
      return "";
    }
    let wordsArr = tag.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] =
        wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].substring(1);
    }
    return wordsArr.join(" ");
  };

  function onChange(e) {
    // console.log(`radio checked:${e.target.value}`);
    const currentColor = e.target.value;
    setItemColor(currentColor);
  }
  const addToWishList = () => {
    // console.log(props.userId);

    //1 - User Not Logged In // Done
    if (props.userId === null) {
      setLoginAlert("block");
      setTimeout(() => {
        setLoginAlert("none");
      }, 3000);
    }

    // 2 - Item not in Wishlist and is then Added to Wishlist
    if (props.userId && !props.wishList.includes(parseInt(props.productId))) {
      addWishList(props.userId, parseInt(props.productId));
      props.setWishList([...props.wishList, parseInt(props.productId)]);

      setSuccessAlert("block");
      setTimeout(() => {
        setSuccessAlert("none");
      }, 3000);
    }

    // 3 - Item In Wishlist already
    if (props.userId && props.wishList.includes(parseInt(props.productId))) {
      setInfoAlert("block");
      setTimeout(() => {
        setInfoAlert("none");
      }, 3000);
    }
  };

  return (
    props.data !== undefined && (
      <>
        <div className="product-image-leftside-page animated fadeInLeft">
          <div className="product-image-leftside-sizecontainer">
            <img alt="example" src={props.data.image_link} />
          </div>
        </div>

        <div className="product-details-rightside-page ">
          <div className="singleproduct-page-title animated fadeInLeft">
            <h2>{props.data.name}</h2>
          </div>

          <div className="ProductItem-details-container">
            <div className="product-details-shopinfo animated fadeInLeft">
              <h2>${props.data.price} </h2>
              <input
                className="product-details-quantity-input animated fadeInLeft"
                type="number"
                name="discountInstant"
                min="1"
                max="10"
                placeholder="1"
                onChange={handleUpdateItemQuantity}
                autoComplete="off"
              ></input>
              <button onClick={() => handleSelectItemClick()}>
                Add to Cart
              </button>

              <div className="wishlist-icon-heart">
                <HeartOutlined
                  onClick={addToWishList}
                  style={{
                    color: props.wishList.includes(props.data.id)
                      ? "red"
                      : "black",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="ProductItem-details-container">
            <div className="wishList-Alert">
              <Alert
                message="Item added to Cart"
                type="success"
                style={{ display: addedToCartAlert }}
                showIcon={true}
                closable
              />
              <Alert
                message="Please select a product color &nbsp;"
                type="warning"
                style={{ display: colorSelectAlert }}
                showIcon={true}
                closable
              />
              <Alert
                message="Item added to Wishlist"
                type="success"
                style={{ display: successAlert }}
                showIcon={true}
                closable
              />
              <Alert
                message="Manage Wishlist under Profile"
                type="info"
                style={{ display: infoAlert }}
                showIcon={true}
                closable
              />
              <Alert
                message="Sign In to Add Items to Wishlist"
                type="info"
                style={{ display: loginAlert }}
                showIcon={true}
                closable
              />
            </div>
          </div>

          <Radio.Group onChange={onChange} className="product-colors-container">
            {props.data.product_colors.map((productColor) => (
              <Radio.Button
                key={productColor.colour_name}
                type="radio"
                className="product-color-dots"
                style={{
                  backgroundColor: productColor.hex_value,
                }}
                value={productColor.hex_value}
              ></Radio.Button>
            ))}
          </Radio.Group>

          <div className="singleproduct-page-description">
            <p>{props.data.description} </p>
          </div>

          <div className="product-details-categories-container">
            <div className="product-details-categories-labels">
              <p>Brand:</p>
              <p>{formatBrandText(props.data.brand)} </p>
            </div>
            <div className="product-details-categories-labels animated fadeInLeft">
              <p>Product type:</p>
              <p>{formatProductText(props.data.product_type)} </p>
            </div>
            <div className="product-details-categories-labels animated fadeInLeft">
              <p>Category: </p>
              <p>{formatProductText(props.data.category)}</p>
            </div>
          </div>

          <ProductTags objItem={props.data} />

          <div className="productitem-description-rating animated fadeInLeft">
            <Rate
              className="product-item-description-ratings animated fadeInLeft"
              disabled
              defaultValue={props.data.rating}
            />
          </div>
          <div className="product-item-user-reviews-container">
            <Review productId={props.data.id} />
          </div>
        </div>
      </>
    )
  );
}

export default ProductItem;
