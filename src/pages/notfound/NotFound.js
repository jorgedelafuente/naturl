import React from "react";
import { Link } from "@reach/router";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="NotFound-Container">
      <h2>Whoops, page does not Exist!</h2>
      <div>
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
