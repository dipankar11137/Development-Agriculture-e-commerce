import React, { useEffect, useState } from 'react';
import Pesticide from './Pesticide';

const Pesticides = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/Pesticide`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="mx-20">
      <div className="flex justify-center mt-20">
        {' '}
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
        <div className="grid grid-cols-6 gap-6">
          {products.map((product, index) => (
            <Pesticide
              key={product._id}
              product={product}
              index={index}
            ></Pesticide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pesticides;
