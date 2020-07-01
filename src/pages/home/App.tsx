import React, { useState } from 'react';
import { Router, RouteComponentProps, Link } from '@reach/router';
import Products from '../Products';
import './App.scss';
import Checkout from '../Checkout';

const Home = (props: RouteComponentProps) => (
  <div className="App">
    <h1>estore</h1>
  </div>
);

const NotFound = (props: RouteComponentProps) => (
  <div>
    <h3>Whoops, page does not Exist! </h3>
    <p>
      <Link to="/dashboard">Return to Home</Link>
    </p>
  </div>
);

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  return (
    <React.StrictMode>
      {/* <NavBar /> */}

      <main>
        <Router>
          <Home path="/" />
          <Products
            path="/products"
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
          />
          <Checkout
            path="/checkout"
            itemsInCart={itemsInCart}
            totalCost={totalCost}
          />
          <NotFound default />
        </Router>
      </main>
    </React.StrictMode>
  );
}

export default App;
