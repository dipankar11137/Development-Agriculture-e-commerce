import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  // console.log(email);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/buyProducts/${email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/bookProducts/${id}`;
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
              <th>Quantity</th>
              <th>Date</th>
              <th>Price</th>
              <th>Total Price</th>
              <th className="pl-48">Payment</th>
              <th className="pl-28">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product, index) => (
              <MyItem
                key={product._id}
                product={product}
                index={index + 1}
                handleDelete={handleDelete}
              ></MyItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
