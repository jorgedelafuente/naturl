import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';
import { AuthProvider } from './auth/Auth';
import ApiClient from './services/ApiClient';
import './App.scss';
// import 'antd/dist/antd.css';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import CheckOut from './pages/checkout/CheckOut';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import NotFound from './pages/notfound/NotFound';

function App() {
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true); // eslint-disable-next-line
  const [data, setData] = useState([]);
  //Array for duplicating only filter data
  const [filterData, setFilterData] = useState([]);
  const Layout = styled.div`
    margin-top: 30px;
  `;

  useEffect(() => {
    ApiClient.getData()
      .then((data) => {
        setData(data);
        setFilterData(data);
        // console.log(data);
      })
      .then(() => setIsLoading(false));
  }, []);
  const Filter = (SearchTag) => {
    const FilterArray = data.filter((product) =>
      product.tag_list.includes(SearchTag)
    );
    setFilterData(FilterArray);
    console.log('our dat is ,', FilterArray);
  };
  const UndoFilter = () => {
    setFilterData(data);
  };
  return (
    <React.StrictMode>
      <AuthProvider>
        <NavBar filter={Filter} undoFilter={UndoFilter} />
        <Layout>
          <main>
            <Router primary={false}>
              <Home data={data} path="/" />
              <SignIn path="/signin" />
              <SignUp path="/signup" />
              <Category path="/category" />
              <Products data={filterData} path="/products" />
              <Product data={data} path="/product" />
              <CheckOut path="/checkout" />
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
