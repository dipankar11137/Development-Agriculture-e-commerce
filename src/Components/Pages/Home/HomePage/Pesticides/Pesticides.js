import React from "react";
import Pesticide from "./Pesticide";

const Pesticides = () => {
  return (
    <div className="mx-20">
      <div className="flex justify-center mt-20">
        {" "}
        <img
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-delay="900"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          className="h-40"
          src="https://thumbs.dreamstime.com/b/killing-big-mosquito-insecticide-spray-cartoon-illustration-man-149315232.jpg"
          alt=""
        />
      </div>
      <div className="bg-pink-50 py-2 px-4 rounded-xl">
        <h1 className="text-4xl font-bold mb-6 ml-5">Pesticide</h1>
        <Pesticide />
      </div>
    </div>
  );
};

export default Pesticides;
