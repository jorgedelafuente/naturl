import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { AuthProvider } from './auth/Auth';
import ApiClient from './services/ApiClient';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import CheckOut from './pages/checkout/CheckOut';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Product from './pages/product/Product';
import Products from './pages/Products';
import NotFound from './pages/notfound/NotFound';
import Success from './pages/success/Success';
import './App.scss';
// import 'antd/dist/antd.css';

function App() {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);    // eslint-disable-next-line
  const [data, setData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  const Layout = styled.div`
    margin-top: 30px;
  `;

  useEffect(() => {
    ApiClient.getData()
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  const handleAddToCartClick = (id) => {
    setItemsInCart((itemsInCart) => {
      const itemInCart = itemsInCart.find((item) => item.id === id);

      // if item is already in cart, update the quantity
      if (itemInCart) {
        return itemsInCart.map((item) => {
          if (item.id !== id) return item;
          return { ...itemInCart, quantity: item.quantity + 1 };
        });
      }

      // otherwise, add new item to cart
      const item = data.find((item) => item.id === id);
      return [...itemsInCart, { ...item, quantity: 1 }];
    });
  };

  const handleClearCartClick = () => {
    return setItemsInCart([]);
  };

  return (
    <React.StrictMode>
      <AuthProvider>
        <NavBar />
        <Layout>
          <main>
            <Router primary={false}>
              <Home data={data} path="/" />
              <SignIn path="/signin" />
              <SignUp path="/signup" />
              <Category path="/category" />
              <Products
                data={data}
                handleAddToCartClick={handleAddToCartClick}
                path="/products"
              />
              <Product data={data} path="/product" />
              <CheckOut
                itemsInCart={itemsInCart}
                handleClearCartClick={handleClearCartClick}
                path="/checkout"
              />
              <Success path="/success"></Success>
              <NotFound default />
            </Router>
          </main>
        </Layout>
        <Footer />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
