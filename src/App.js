import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { AuthProvider } from './auth/Auth';
import ApiClient from './services/ApiClient';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import CheckOut from './pages/checkout/CheckOut';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Products from './pages/products/Products';
import ProductsVegan from './pages/products/ProductsVegan';
import ProductsGluten from './pages/products/ProductsGluten';
import Cart from './pages/cart/Cart';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notfound/NotFound';
import Product from './pages/product/Product';
import Success from './pages/success/Success';
import { GlobalProvider } from './context/globalState';
import './App.scss';

const Layout = styled.div`
  margin-top: 40px;
`;

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [productData, setData] = useState([]);
  const [veganData, setVeganData] = useState([]);
  const [glutenData, setGlutenData] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    ApiClient.getData().then((data) => {
      setData(data);
      const Vegan = data.filter((item) => item.tag_list.includes('Vegan'));
      const Gluten = data.filter((item) =>
        item.tag_list.includes('Gluten Free')
      );
      setVeganData([...Vegan]);
      setGlutenData([...Gluten]);
    });
    // .then(() => setIsLoading(false));
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
        <GlobalProvider>
          <NavBar />
          <Layout>
            <main>
              <Router primary={false}>
                <Home data={productData} path="/" />
                <SignIn path="/signin" />
                <SignUp path="/signup" />

                <Product data={productData} path="/product/:id" />

                <Products
                  data={productData}
                  title={'All Products'}
                  handleAddToCartClick={handleAddToCartClick}
                  path="/products"
                />
                <ProductsVegan
                  data={veganData}
                  title={'Vegan'}
                  path="/products-vegan"
                />
                <ProductsGluten
                  data={glutenData}
                  title={'Gluten Free'}
                  path="/products-gluten-free"
                />
                <Cart path="/cart" />

                <CheckOut
                  itemsInCart={itemsInCart}
                  handleClearCartClick={handleClearCartClick}
                  path="/checkout"
                />

                <Success path="/success" />

                <Profile path="/profile" />

                <NotFound default />
              </Router>
            </main>
          </Layout>
          <Footer />
        </GlobalProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
