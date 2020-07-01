import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import ApiClient from './services/ApiClient';
import './App.scss';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/Home';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import CheckOut from './pages/checkout/CheckOut';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import NotFound from './pages/notfound/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiClient.getData()
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .then(() => setIsLoading(false));
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <NavBar />

        <main>
          <Router>
            <HomePage data ={data} path="/" />
            <SignIn path="/signin" />
            <SignUp path="/signup" />
            <Category path="/category" />
            <Products path="/products" />
            <Product path="/product" />
            <CheckOut path="/checkout" />
            {/* <Category data={data} path="/:category" /> 
            <Product data={data} path="/products/:product" /> */}
            <NotFound default />
          </Router>
        </main>
        <Footer />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
