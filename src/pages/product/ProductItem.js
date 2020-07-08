import React, { useState } from "react";
import { addWishList } from "../../firebase";
// import ProductColor from "../../components/product-details/product-colors";
import ProductTags from "../../components/product-details/product-tags";
import "./productItem.scss";

import { Rate, Radio } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Alert } from "antd";

function ProductItem(props) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [successAlert, setSuccessAlert] = useState("none");
  const [infoAlert, setInfoAlert] = useState("none");
  const [loginAlert, setLoginAlert] = useState("none");
  const [itemColor, setItemColor] = useState(1);

  const handleUpdateItemQuantity = (e) => {
    const quantityToInt = parseInt(e.target.value, 10);
    setItemQuantity(quantityToInt);
  };

  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
    // setItemColorChecked((e.target.style);
    setItemColor(e.target.value);
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
            <button
              onClick={() =>
                props.onAddToCartClick(props.data.id, itemQuantity, itemColor)
              }
            >
              Add to cart
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
          <div className="wishList-Alert">
            <Alert
              message="Item added to Wishlist Successfully"
              type="success"
              style={{ display: successAlert }}
              showIcon={true}
              closable
            />
            <Alert
              message="View and Manage Wishlist under Profile"
              type="info"
              style={{ display: infoAlert }}
              showIcon={true}
              closable
            />
            <Alert
              message="Please Sign In to Add Items to Wishlist"
              type="info"
              style={{ display: loginAlert }}
              showIcon={true}
              closable
            />
          </div>

          <Radio.Group onChange={onChange} className="product-colors-container">
            {props.data.product_colors.map((item) => (
              // <div className="product-color-dots">
              <Radio.Button
                type="radio"
                className="product-color-dots"
                style={{
                  backgroundColor: item.hex_value,
                  // borderRadius: "50px",
                }}
                value={item.hex_value}
              ></Radio.Button>
              /* <button style={{ backgroundColor: item.hex_value }} /> */
              // </div>
              // <ProductColor key={item.hex_value} color={item.hex_value} />
            ))}
          </Radio.Group>

          <div className="singleproduct-page-description">
            <p>{props.data.description} </p>
          </div>

          <div className="product-details-categories-container">
            <div className="product-details-categories-labels">
              <p>Brand:</p>
              <p>{props.data.brand} </p>
            </div>
            <div className="product-details-categories-labels animated fadeInLeft">
              <p>Product type:</p>
              <p>{props.data.product_type} </p>
            </div>
            <div className="product-details-categories-labels animated fadeInLeft">
              <p>Category: </p>
              <p>{props.data.category}</p>
            </div>
          </div>

          <div className="productitem-description-rating animated fadeInLeft">
            Rating:
            <Rate
              className="product-item-description-ratings animated fadeInLeft"
              disabled
              defaultValue={props.data.rating}
            />
          </div>

          <ProductTags objItem={props.data} />
        </div>
      </>
    )
  );
}

export default ProductItem;
