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
import Products from './pages/products/Products';
import ProductsVegan from './pages/products/ProductsVegan';
import ProductsGluten from './pages/products/ProductsGluten';
import NotFound from './pages/notfound/NotFound';
import Product from './pages/product/Product';

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

  return (
    <React.StrictMode>
      <AuthProvider>
        <NavBar />
        <Layout>
          <main>
            <Router primary={false}>
              <Home data={allData} path="/" />
              <SignIn path="/signin" />
              <SignUp path="/signup" />
              

              {allData.map((item) => (
                <Product 
                  objItem={item}
                  key={item.id}
                  image={item.image_link}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  path={`/product/${item.id}`}
                />
              ))}

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
