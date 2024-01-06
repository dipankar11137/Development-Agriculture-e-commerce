import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const SellModal = () => {
  const [users] = useAuthState(auth);
  const email = users?.email;
  const userName = users?.displayName;
  const [weight, setWeight] = useState('');

  const category = 'Buying And Selling';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageHostKey = '9a79ac160a3fcabfcd224dc71e011834';

  const submitProduct = (data, image) => {
    const updateProduct = {
      ...data,
      image,
      email,
      category,
      userName,
      weight,
    };

    fetch(`http://localhost:5000/buyAndSells`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateProduct),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Add This Product');
        reset();
      });
  };

  const onSubmit = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        submitProduct(data, image);
      });
  };
  return (
    <div>
      <input type="checkbox" id="sellingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="sellingModal"
            className="btn btn-sm btn-primary btn-circle text-white font-extrabold  absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h3 className="text-lg font-bold">Please Add a Products</h3>
            <div className="flex justify-center  p-5 rounded-2xl w-11/12 text-black  ml-5 ">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <label className="label">
                  <span className="label-text  text-xl font-semibold">
                    Product Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Book Name"
                  className="input input-bordered lg:w-96 sm:w-full   hover:shadow-xl shadow-inner"
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Product Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.name?.message}
                    </span>
                  )}
                </label>

                {/* Image */}
                <label className="label  text-xl font-semibold">
                  <span className="label-text   text-xl">Images</span>
                </label>
                <input
                  type="file"
                  placeholder="Images URL"
                  className="input input-bordered bg-white w-full pt-2  hover:shadow-xl shadow-inner"
                  {...register('image', {
                    required: {
                      value: true,
                      message: 'Images is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.img?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.img?.message}
                    </span>
                  )}
                </label>

                {/* Location */}
                <label className="label">
                  <span className="label-text   text-xl font-semibold">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Services Location"
                  className="input input-bordered bg-white w-full    hover:shadow-xl shadow-inner"
                  {...register('location', {
                    required: {
                      value: true,
                      message: 'Location is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.location?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.location?.message}
                    </span>
                  )}
                </label>
                {/* Description */}
                <label className="label">
                  <span className="label-text   text-xl font-semibold">
                    Description
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Description"
                  className="input input-bordered bg-white w-full   h-20 pt-1 hover:shadow-xl shadow-inner"
                  {...register('description', {
                    required: {
                      value: true,
                      message: 'Description is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.description?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.description?.message}
                    </span>
                  )}
                </label>

                {/* Quantity */}
                <label className="label">
                  <span className="label-text   text-xl font-semibold">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered bg-white w-full    hover:shadow-xl shadow-inner"
                  {...register('quantity', {
                    required: {
                      value: true,
                      message: 'Quantity is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.quantity?.message}
                    </span>
                  )}
                </label>

                {/* Category */}
                <label className="label">
                  <span className="label-text   text-xl font-semibold">
                    Weight or Piece
                  </span>
                </label>

                <select
                  onClick={e => setWeight(e.target.value)}
                  className="select select-bordered lg:w-96 sm:w-full   hover:shadow-xl shadow-inner text-xl"
                >
                  <option>Kg</option>
                  <option>Piece</option>
                </select>
                {/* Price */}
                <label className="label">
                  <span className="label-text   text-xl font-semibold">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered bg-white w-full    hover:shadow-xl shadow-inner"
                  {...register('price', {
                    required: {
                      value: true,
                      message: 'Price is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.price?.message}
                    </span>
                  )}
                </label>
                {/* submit */}

                <input
                  className="btn  btn-primary text-white font-bold button mt-5 w-full  "
                  type="submit"
                  value="ADD Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellModal;
