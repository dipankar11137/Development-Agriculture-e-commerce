import React from "react";

const Fertilizer = ({ product, index }) => {
  const { name, img, price, description } = product;

  return (
    <>
      {index % 2 === 0 ? (
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="60"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="card card-side bg-base-100 shadow-xl hover:shadow-2xl hover:bg-pink-100"
        >
          <figure>
            <img
              className="w-full h-80 pic-style cursor-pointer"
              src={img}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price : ${price}</p>
            <p className="w-72 ">{description}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="60"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="card card-side bg-base-100 shadow-xl hover:shadow-2xl hover:bg-pink-100"
        >
          <figure>
            <img
              className="w-full h-80 pic-style cursor-pointer"
              src={img}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price : $ {price}</p>
            <p className="w-72 ">{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fertilizer;
