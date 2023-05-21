import React from "react";

const ManageItem = ({ product, index }) => {
  const { name, img, price, description } = product;
  return (
    <tr>
      <th>{index}</th>
      <td> {name}</td>
      <td>{}price</td>
      <td>Littel, Schaden and Vandervort</td>
      <td>Canada</td>
      <td>12/16/2020</td>
      <td>Blue</td>
    </tr>
  );
};

export default ManageItem;
