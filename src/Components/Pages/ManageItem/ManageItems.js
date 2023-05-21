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
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
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
