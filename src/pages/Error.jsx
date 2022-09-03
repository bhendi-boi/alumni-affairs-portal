import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Error 404 page not found click{" "}
      <Link to="/" className="underline">
        here
      </Link>{" "}
      to go to home page
    </div>
  );
};

export default Error;
