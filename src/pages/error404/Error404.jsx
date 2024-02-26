import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h4>404</h4>
      <p>The Page You Requested For Was Not Found</p>
      <Link to="/" className="btn bg-dark text-white px-4">
       Go Home
      </Link>
    </div>
  );
};

export default Error404;
