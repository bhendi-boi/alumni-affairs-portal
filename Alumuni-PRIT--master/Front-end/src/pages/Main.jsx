import * as React from "react";
import Hero from "../components/MainComponents/Hero";
import Questions from "../components/MainComponents/Questions";
import Navigation from "../components/Navigation";
const Main = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <div className=" grid grid-cols-8 mx-32 my-10 ">
        <div className="col-span-6 ">
          <Questions />
        </div>
        <div className="col-span-2 bg-gray-700">cool</div>
      </div>
    </>
  );
};

export default Main;
