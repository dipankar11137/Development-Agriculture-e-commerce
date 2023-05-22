import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageItem from './ManageItem';

const ManageItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
          toast.success('Delete  ');
        });
    }
  };
  return (
    <div className="mb-32">
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
                handleDelete={handleDelete}
              ></ManageItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
