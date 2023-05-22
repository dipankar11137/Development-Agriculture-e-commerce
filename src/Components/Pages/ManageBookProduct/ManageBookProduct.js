import React from 'react';

const ManageBookProduct = ({ product, index, handleDelete }) => {
  const {
    name,
    img,
    price,
    productsCategory,
    address,
    phone,
    date,
    quantity,
    totalPrice,
  } = product;
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
      <td>{phone}</td>
      <td>{address}</td>
      <td>{date}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td className=" w-44 ">
        <div className="mr-[200px]">
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

export default ManageBookProduct;
