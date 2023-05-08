import React from "react";
import add from "../../../../../Images/image/add.jpg";
import upto from "../../../../../Images/image/senty.png";

const Advertisement = () => {
  return (
    <div className="my-14 flex">
      <img className="w-11/12 h-64" src={add} alt="" />
      <div className="bg-red-700">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" animate-bounce"
          src={upto}
          alt=""
        />
      </div>
    </div>
  );
};

export default Advertisement;
