import React from "react";
import Footer from "../../Share/Footer";
import BuyAndSells from "./BuyAndSells/BuyAndsells";
import Advertisement from "./HomePage/Advertisement/Advertisement";
import Banner from "./HomePage/Banner";
import Contact from "./HomePage/Contact/Contact";
import FarmingEquipments from "./HomePage/FarmingEquipment/FarmingEquipments";
import Fertilizers from "./HomePage/Fertilizers/Fertilizers";
import Pesticides from "./HomePage/Pesticides/Pesticides";
import Seeds from "./HomePage/Seeds/Seeds";

const Home = () => {
  return (
    <div>
      <Banner />
      <Seeds />
      <Advertisement />
      <BuyAndSells/>
      <Fertilizers />
      <Pesticides />
      <FarmingEquipments />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
