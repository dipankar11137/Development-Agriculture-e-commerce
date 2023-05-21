import React, { useEffect, useState } from 'react';
import Seed from './Seed';

const Seeds = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product/OUR SEEDS`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div className="mx-20 bg-slate-50 p-2 mt-12 rounded-lg">
      <h1 className="text-center pt-4 mb-16 text-4xl font-extrabold uppercase">
        Our Seeds
      </h1>

      <div className="grid grid-cols-4 gap-5">
        {products.map((product, index) => (
          <Seed key={product._id} product={product} index={index}></Seed>
        ))}
      </div>
    </div>
  );
};

export default Seeds;
