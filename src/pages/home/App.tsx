import React from 'react';
import { Router, Link } from '@reach/router';
// import { RouteComponentProps } from '@reach/router';
import './App.scss';

const Home = () => <div className="App">estore</div>;

const NotFound = () => (
  <div>
    <h3>Whoops, page does not Exist! </h3>
    <p>
      <Link to="/dashboard">Return to Home</Link>
    </p>
  </div>
);

function App() {
  return (
    <React.StrictMode>
      {/* <NavBar /> */}
      <h1>estore</h1>
      <main>
        <Router>{/* <Home path="/" />
          <NotFound default /> */}</Router>
      </main>
    </React.StrictMode>
  );
}

// export type RouteComponentProps<TParams = {}> = Partial<TParams> & {
//   path?: string;
//   default?: boolean;
// };

export default App;
