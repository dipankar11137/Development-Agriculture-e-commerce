import React from "react";

const ManageItem = ({ product, index }) => {
  const { name, img, price, productsCategory } = product;
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
      <td>{price}</td>
      <td className=" w-44 ">
        <div className="mr-[100px]">
          <button className="btn btn-sm btn-primary">Remove</button>
        </div>
      </td>
    </tr>
  );
};

export default ManageItem;
