import React, { useEffect, useState } from 'react';
import ManageItem from './ManageItem';

const ManageItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead className="text-center">
            <tr>
              <th>Index</th>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product, index) => (
              <ManageItem
                key={product._id}
                product={product}
                index={index + 1}
              ></ManageItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
