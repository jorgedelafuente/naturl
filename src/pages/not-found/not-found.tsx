
import React from 'react';

import { RouteComponentProps, Link } from '@reach/router';



const NotFound = (props: RouteComponentProps) => (
  <div>
    <h3>Whoops, page does not Exist! </h3>
    <p>
      <Link to="/dashboard">Return to Home</Link>
    </p>
  </div>
);

export default NotFound;
