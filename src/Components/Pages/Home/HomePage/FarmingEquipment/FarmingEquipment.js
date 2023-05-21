import React from "react";

const FarmingEquipment = ({ product }) => {
  const { name, img, price, description } = product;
  return (
    <div className="card w-11/12 bg-base-100 shadow-xl ">
      <figure>
        <img className="pic-style" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FarmingEquipment;
