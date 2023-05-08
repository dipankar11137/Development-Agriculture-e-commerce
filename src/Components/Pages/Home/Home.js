import React from "react";
import Banner from "./HomePage/Banner";
import Seeds from "./HomePage/Seeds/Seeds";
import Fertilizers from "./HomePage/Fertilizers/Fertilizers";
import Pesticides from "./HomePage/Pesticides/Pesticides";
import Contact from "./HomePage/Contact/Contact";
import FarmingEquipments from "./HomePage/FarmingEquipment/FarmingEquipments";
import Advertisement from "./HomePage/Advertisement/Advertisement";
import Footer from "../../Share/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Seeds />
      <Advertisement />
      <Fertilizers />
      <Pesticides />
      <FarmingEquipments />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
