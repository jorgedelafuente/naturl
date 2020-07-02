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
import CheckOut from './pages/checkout/CheckOut';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import ProductsVegan from './pages/products/ProductsVegan';
import ProductsGluten from './pages/products/ProductsGluten';
import NotFound from './pages/notfound/NotFound';
// import ProductItem from './pages/productitem/ProductItem';

const Layout = styled.div`
  margin-top: 30px;
`;

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [allData, setData] = useState([]);
  const [veganData, setVeganData] = useState([]);
  const [glutenData, setGlutenData] = useState([]);

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
              <Home data={allData} path="/" />
              <SignIn path="/signin" />
              <SignUp path="/signup" />
              {/* <ProductItem data={allData} path="/product/:id" /> */}
              <Product data={allData} path="/product/:id" />
              <Products
                data={allData}
                title={'All Products'}
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
              <CheckOut path="/checkout" />
              {/* <UserProfile path="/profile" /> */}

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
