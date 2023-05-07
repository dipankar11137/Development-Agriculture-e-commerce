import React from "react";
import Fertilizer from "./Fertilizer";

const Fertilizers = () => {
  return (
    <div className="mt-20 mx-20 bg-lime-50 p-2 rounded-lg">
      {/* <div
        className="mb-14 "
        style={{
          background: `url("https://www.nicepng.com/png/full/83-831811_wave-vector-abstract-background-waves-line-wave-vector.png")`,
          width: "100%",
          textAlign: "center",
        }}
      > */}
      {/* </div> */}
      <div className="flex mb-10 justify-center">
        <img
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="60"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          className="h-32 pr-8 rounded-3xl"
          src="https://images.squarespace-cdn.com/content/v1/5acf967b7e3c3a98a6a61c0e/1584017935368-JVQVNIPDWLI9WVVV61FV/fertilizer_bag_in_grass.gif"
          alt=""
        />
        <h1 className="py-10 text-4xl font-extrabold">Fertilizer </h1>
      </div>

      <Fertilizer />
    </div>
  );
};

export default Fertilizers;
