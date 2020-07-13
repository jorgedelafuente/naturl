import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import ReactGA from "react-ga";
import { AuthProvider } from "./auth/Auth";
import ApiClient from "./services/ApiClient";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import CheckOut from "./pages/checkout/CheckOut";
import SignUp from "./pages/auth/signup/SignUp";
import Products from "./pages/products/Products";
import Vegan from "./pages/products/Vegan";
import Gluten from "./pages/products/Gluten";
import Profile from "./pages/auth/profile/Profile";
import NotFound from "./pages/notfound/NotFound";
import Product from "./pages/product/Product";
import Success from "./pages/success/Success";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.scss";
import ManageScroll from "./scroll";

function initializeReactGA() {
  ReactGA.initialize("UA-172493133-1");
  ReactGA.pageview("/");
}
initializeReactGA();

function App() {
  const [productData, setData] = useState([]);
  const [veganData, setVeganData] = useState([]);
  const [glutenData, setGlutenData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]); // eslint-disable-next-line
  const [wishList, setWishList] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    ApiClient.getData().then((data) => {
      setData(data);
      const Vegan = data.filter((item) => item.tag_list.includes("Vegan"));
      const Gluten = data.filter((item) =>
        item.tag_list.includes("Gluten Free")
      );
      setVeganData([...Vegan]);
      setGlutenData([...Gluten]);
    });
  }, []);

  useEffect(() => {
    let userCart = localStorage.getItem("cart");
    // get the user's cart if one exists in local storage
    userCart = JSON.parse(userCart);
    if (userCart) {
      setItemsInCart(userCart);
    }
  }, []);

  useEffect(() => {
    // update local storage with itemsInCart
    const stringifiedItemsInCart = JSON.stringify(itemsInCart);
    localStorage.setItem("cart", stringifiedItemsInCart);

    if (itemsInCart.length > 0) {
      localStorage.setItem("cartHistory", JSON.stringify(itemsInCart));
    }
  }, [itemsInCart]);

  const handleAddToCartClick = (id, itemQuantity, selectedColor) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);

      // if item is already in cart, update the quantity
      // and selected color
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.id !== id) return item;
          return {
            ...itemInCart,
            quantity: item.quantity + itemQuantity,
            selectedColors: [...item.selectedColors, selectedColor],
          };
        });
      }

      // otherwise, add new item to cart
      const item = productData.find((item) => item.id === id);
      return [
        ...itemsInCart,
        { ...item, quantity: itemQuantity, selectedColors: [selectedColor] },
      ];
    });
  };

  const handleRemoveItemFromCartClick = (id) => {
    setItemsInCart((itemsInCart) => {
      let filteredItemsInCart = itemsInCart.filter((item) => item.id !== id);
      return filteredItemsInCart;
    });
  };

  const handleClearCartClick = () => {
    setItemsInCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("cartHistory");
  };

  //TODO: refactor
  const listRelatedProducts = (
    itemsInCart,
    productData,
    numberOfSuggestions
  ) => {
    if (!productData) return [];

    // eslint-disable-next-line
    const purchasedCategories = itemsInCart.map((purchasedItem) => {
      if (purchasedItem.category) return purchasedItem.category;
    });

    // eslint-disable-next-line
    const purchasedItems = itemsInCart.map((purchasedItem) => {
      if (purchasedItem.id) return purchasedItem.id;
    });

    // eslint-disable-next-line
    const relatedProducts = productData.filter((relatedProduct) => {
      if (
        purchasedCategories.includes(relatedProduct.category) &&
        !purchasedItems.includes(relatedProduct.id)
      )
        return relatedProduct;
    });

    const selectedSuggestions = Array.from(
      { length: numberOfSuggestions },
      () => Math.floor(Math.random() * relatedProducts.length)
    );

    // eslint-disable-next-line
    return relatedProducts.filter((product, index) => {
      if (selectedSuggestions.includes(index)) return product;
    });
  };

  return (
    <React.StrictMode>
      <AuthProvider setWishList={setWishList} setUserId={setUserId}>
        <NavBar itemsInCart={itemsInCart} />
        <main className="main-container">
          <Router primary={false}>
            <Home
              data={productData}
              path="/"
              wishList={wishList}
              setWishList={setWishList}
              userId={userId}
            />

            <SignUp path="/signup" setWishList={setWishList} />

            <Profile
              setUserId={setUserId}
              userId={userId}
              wishList={wishList}
              setWishList={setWishList}
              setItemsInCart={setItemsInCart}
              data={productData}
              path="/profile"
            />

            <About path="/about" />

            <Contact path="/contact" />

            <Product
              data={productData}
              handleAddToCartClick={handleAddToCartClick}
              path="/product/:id"
              wishList={wishList}
              setWishList={setWishList}
              userId={userId}
            />

            <Products
              data={productData}
              title={"All Products"}
              path="/products"
              wishList={wishList}
              setWishList={setWishList}
              userId={userId}
            />

            <Vegan
              data={veganData}
              title={"Vegan"}
              path="/products-vegan"
              wishList={wishList}
              setWishList={setWishList}
              userId={userId}
            />
            <Gluten
              data={glutenData}
              title={"Gluten Free"}
              path="/products-gluten-free"
              wishList={wishList}
              setWishList={setWishList}
              userId={userId}
            />

            <CheckOut
              data={productData}
              itemsInCart={itemsInCart}
              handleClearCartClick={handleClearCartClick}
              handleRemoveItemFromCartClick={handleRemoveItemFromCartClick}
              listRelatedProducts={listRelatedProducts}
              path="/checkout"
            />

            <Success
              data={productData}
              itemsInCart={itemsInCart}
              listRelatedProducts={listRelatedProducts}
              path="/success"
            />
            <NotFound default />
          </Router>
          <ManageScroll />
        </main>
        <Footer />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
