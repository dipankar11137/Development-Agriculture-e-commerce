import React, { useEffect, useState } from 'react';
import equ from '../../../../../Images/image/equ.png';
import FarmingEquipment from './FarmingEquipment';

const FarmingEquipments = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/Farming Equipment`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
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
      <h1 className="text-3xl text-center font-bold mb-5">Farming Equipment</h1>
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <FarmingEquipment
            key={product._id}
            product={product}
            index={index}
          ></FarmingEquipment>
        ))}
      </div>
    </div>
  );
};

export default FarmingEquipments;
