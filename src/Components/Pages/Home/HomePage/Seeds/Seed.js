import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../../../CSS/ImageStyle.css';

const Seed = ({ product, index }) => {
  const navigation = useNavigate();
  const { name, img, price, description } = product;

  const handleBuy = id => {
    navigation(`/buyNow/${id}`);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="60"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      className="card w-96  shadow-xl hover:shadow-2xl bg-pink-50 "
    >
      <figure>
        {index % 2 === 0 ? (
          <img
            className="w-full h-[270px] origin-bottom -rotate-12 pic-style cursor-pointer"
            src={img}
            alt=""
          />
        ) : (
          <img
            className="w-full h-[270px] origin-bottom skew-y-12 pic-style cursor-pointer"
            src={img}
            alt=""
          />
        )}
      </figure>
      <div className="card-body hover:bg-rose-100">
        <h2 className="card-title">{name}!</h2>
        <p>
          Price : <span className="font-bold">$ {price}</span>
        </p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleBuy(product._id)}
            className="btn btn-primary hover:animate-pulse"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seed;
