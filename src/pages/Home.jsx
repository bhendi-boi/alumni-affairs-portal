import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mt-20  flex flex-col justify-center items-center">
      <Link to="/" className="text-red-400 block ">
        Home
      </Link>
      <Link to="/signup" className="text-red-400 block">
        signup
      </Link>
      <Link to="/login" className="text-red-400 block">
        login
      </Link>
    </div>
  );
};

export default Home;
