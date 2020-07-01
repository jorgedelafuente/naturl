import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//     <Router>
//       <Switch>
//         <Route path="/" component={App} />
//       </Switch>
//     </Router>,
//   document.getElementById('root'),
// );
