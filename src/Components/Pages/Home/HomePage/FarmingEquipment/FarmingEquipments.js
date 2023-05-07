import React from "react";
import FarmingEquipment from "./FarmingEquipment";
import equ from "../../../../../Images/image/equ.png";

const FarmingEquipments = () => {
  return (
    <div className="mx-20 mt-16">
      <div className="flex justify-center">
        <img
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-delay="900"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          className="h-32"
          src={equ}
          alt=""
        />
      </div>
      <h1 className="text-3xl text-center">Farming Equipment</h1>
      <FarmingEquipment />
    </div>
  );
};

export default FarmingEquipments;
