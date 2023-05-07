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
      <h1 className="py-10 text-4xl font-extrabold">Fertilizer </h1>

      <Fertilizer />
    </div>
  );
};

export default Fertilizers;
