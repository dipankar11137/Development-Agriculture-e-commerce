import React from "react";

const MyItem = ({ product, index, handleDelete }) => {
  const { name, img, quantity, date, totalPrice, price, productsCategory } =
    product;
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{productsCategory}</td>
      <td>{quantity}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td className=" w-44 ">
        <div className="">
          <button className="btn btn-sm btn-secondary">Payment</button>
        </div>
      </td>
      <td className=" w-44 ">
        <div className="pr-20">
          <button
            onClick={() => handleDelete(product._id)}
            className="btn btn-sm btn-primary"
          >
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyItem;
