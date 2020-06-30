import React from 'react';
// import { Router } from '@reach/router';
import './App.scss';

import { Route, Switch } from 'react-router-dom';


import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Products from "./pages/products/products";
import SingleProduct from "./pages/single-product-page/single-product-page";





// function App() {
//   return (
//     <React.StrictMode>
//       {/* <NavBar /> */}
//       <main>
//         <Router>          
//             <Home path="/" />
//             <NotFound default />
//         </Router>
//       </main>
//     </React.StrictMode>
//   );
// }

// export default App;



function App() {
  return (      
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/singleProduct" component={SingleProduct} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
  );
}

export default App;
