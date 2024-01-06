import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TbCurrencyTaka } from 'react-icons/tb';
import auth from '../../../../firebase.init';


const BuyAndSell = ({ product, handleBuy }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      // data-aos="zoom-in-up"
      // data-aos-offset="200"
      // // data-aos-delay="50"
      // // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-once="true"
      // data-aos-anchor-placement="top-center"
      className="container  bg-white shadow-2xl hover:shadow-inner rounded-lg hover:bg-green-900 hover:text-white hover:cursor-pointer"
    >
      <div>
        <img
          className="rounded-lg pic-style w-full h-64"
          src={product?.image}
          alt=""
        />
        <div className="p-3 mt-3  pb-10">
          <h2 className="text-2xl font-bold">{product?.name}</h2>
          <h2 className="text-xl font-semibold flex">
            Price : {product?.price}
            <TbCurrencyTaka className="mt-1 mr-1 font-bold" />
          </h2>
          <h2>
            <span className="font-bold">Location :</span> {product?.location}
          </h2>
          <h1>
            <span className="font-bold">Description :</span>{' '}
            {product?.description}
          </h1>
        </div>
      </div>
      <div className="overlay rounded-lg">
        {user?.email === 'abc@def.com' ? (
          <button
            disabled
            onClick={() => handleBuy(product._id)}
            className="btn btn-primary text-white font-bold"
          >
            Buy Now
          </button>
        ) : (
          <button
            onClick={() => handleBuy(product._id)}
            className="btn btn-primary text-white font-bold"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default BuyAndSell;
