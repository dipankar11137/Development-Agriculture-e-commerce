import React from "react";
import "../../../../CSS/CardSTyle.css";

const Pesticide = ({ product }) => {
  const { name, img, price, description } = product;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      style={{ height: '290px', width: '250px' }}
      class="container bg-white shadow-inner"
    >
      <img className="image " src={img} alt="" />
      <div className="text-center text-xl mt-5 testStyle">
        <h1 className="font-bold text-2xl">{name}</h1>
      </div>
      <div class="middle  ">
        <button className=" w-3/4 text-4xl bg-secondary py-2 text-white hover:bg-secondary rounded-lg  uppercase font-bold mt-4">
          price : ${price}
        </button>

        <button className="w-2/4  bg-primary  text-white p-3 rounded-lg  uppercase font-bold mt-4">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Pesticide;
