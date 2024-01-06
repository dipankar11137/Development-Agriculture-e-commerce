import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import buy from '../../../../Images/image/buy-removebg-preview.png';
import sell from '../../../../Images/image/images-removebg-preview.png';
import auth from '../../../../firebase.init';
import BuyAndSell from './BuyAndSell';
import SellModal from './SellModal';

const BuyAndSells = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/product/Buying And Selling')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  const handleBuy = id => {
    navigator(`/buyNow/${id}`);
  };

  return (
    <div className="mx-16 mb-20 bg-pink-100 rounded-lg mt-14">
      <div className="flex justify-center">
        <img
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="h-56 "
          src={buy}
          alt=""
        />
        <div>
          <h1 className="text-5xl mb-14  font-extrabold pt-5">
            Buying And Selling
          </h1>

          {/* modal start */}
          {user ? (
            <>
              {' '}
              <label
                htmlFor="sellingModal"
                className="btn btn-primary text-xl text-white ml-20 font-bold"
              >
                Selling You Products{' '}
                <FaUpload className="text-white ml-5 text-3xl animate-bounce" />
              </label>
              <SellModal />
            </>
          ) : (
            <>
              {' '}
              <label
                disabled
                htmlFor="sellingModal"
                className="btn btn-primary text-xl text-white ml-20 font-bold"
              >
                Selling You Products{' '}
                <FaUpload className="text-white ml-5 text-3xl animate-bounce" />
              </label>
              <SellModal />
            </>
          )}

          {/* modal end */}
        </div>
        <img
          data-aos="fade-up"
          data-aos-offset="200"
          //   data-aos-delay="50"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="h-56 "
          src={sell}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 mt-5 gap-7 bg-green-50 rounded-lg p-4">
        {' '}
        {products.map(product => (
          <BuyAndSell
            key={product._id}
            product={product}
            handleBuy={handleBuy}
          ></BuyAndSell>
        ))}
      </div>
    </div>
  );
};

export default BuyAndSells;
