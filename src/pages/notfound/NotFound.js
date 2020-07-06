import React from "react";
import { Link } from "@reach/router";

export const NotFound = () => {
  return (
    <div>
      <h3>Whoops, page does not Exist! </h3>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
