import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import { AuthProvider } from "./auth/Auth";
import ApiClient from "./services/ApiClient";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import CheckOut from "./pages/checkout/CheckOut";
import SignIn from "./pages/auth/signin/SignIn";
import SignUp from "./pages/auth/signup/SignUp";
import Products from "./pages/products/Products";
import Profile from "./pages/auth/profile/Profile";
import NotFound from "./pages/notfound/NotFound";
import Product from "./pages/product/Product";
import Success from "./pages/success/Success";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.scss";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [productData, setData] = useState([]);
  const [veganData, setVeganData] = useState([]);
  const [glutenData, setGlutenData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]); // eslint-disable-next-line
  const [userProfile, setUserProfile] = useState({});

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
    // .then(() => setIsLoading(false));
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
    let stringifiedCart = JSON.stringify(itemsInCart);
    localStorage.setItem("cart", stringifiedCart);
  }, [itemsInCart]);

  // const handleAddToCartClick = (id, itemQuantity) => {
  const handleAddToCartClick = (id, itemQuantity, itemColor) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.id !== id) return item;
          return {
            ...itemInCart,
            quantity: item.quantity + itemQuantity,
            color: item.color + itemColor,
          }; //item.quantity + 1
          // return { ...itemInCart, quantity: item.quantity + itemQuantity };
        });
      }

      // otherwise, add new item to cart
      const item = productData.find((item) => item.id === id);
      return [
        ...itemsInCart,
        { ...item, quantity: itemQuantity, color: itemColor },
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
  };

  //TODO: optimize
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

  // console.log(userProfile);

  return (
    <React.StrictMode>
      <AuthProvider>
        <NavBar itemsInCart={itemsInCart} />
        <main className="main-container">
          <Router primary={false}>
            <Home data={productData} path="/" />
            <SignIn path="/signin" />
            <SignUp path="/signup" />
            <About path="/about" />
            <Contact path="/contact" />
            <Profile
              setUserProfile={setUserProfile}
              data={productData}
              path="/profile"
            />

            <Product
              data={productData}
              handleAddToCartClick={handleAddToCartClick}
              path="/product/:id"
            />

            <Products
              data={productData}
              title={"All Products"}
              path="/products"
            />

            <Products data={veganData} title={"Vegan"} path="/products-vegan" />
            <Products
              data={glutenData}
              title={"Gluten Free"}
              path="/products-gluten-free"
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
        </main>
        <Footer />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
