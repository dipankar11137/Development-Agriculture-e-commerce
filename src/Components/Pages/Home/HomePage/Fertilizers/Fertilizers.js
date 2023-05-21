import React, { useEffect, useState } from 'react';
import Fertilizer from './Fertilizer';

const Fertilizers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/Fertilizer`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
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
          data-aos-once="true"
          className="h-32 pr-8 rounded-3xl"
          src="https://images.squarespace-cdn.com/content/v1/5acf967b7e3c3a98a6a61c0e/1584017935368-JVQVNIPDWLI9WVVV61FV/fertilizer_bag_in_grass.gif"
          alt=""
        />
        <h1 className="py-10 text-4xl font-extrabold">Fertilizer </h1>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Fertilizer
            key={product._id}
            product={product}
            index={index}
          ></Fertilizer>
        ))}
      </div>
    </div>
  );
};

export default Fertilizers;
