import React from "react";
import Banner from "./HomePage/Banner";
import Seeds from "./HomePage/Seeds/Seeds";
import Fertilizers from "./HomePage/Fertilizers/Fertilizers";
import Pesticides from "./HomePage/Pesticides/Pesticides";

const Home = () => {
  return (
    <div>
      <Banner />
      <Seeds />
      <Fertilizers />
      <Pesticides />
    </div>
  );
};

export default Home;
