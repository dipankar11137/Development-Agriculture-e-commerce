import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const [productsCategory, setProductsCategory] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const changeUrl = { ...data, productsCategory };
    // console.log(changeUrl);
    // const url = `http://localhost:5000/books`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(changeUrl),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     toast.success("Successfully Add This Products");
    //     reset();
    //   });
  };
  return (
    <div
      data-aos="zoom-out"
      data-aos-offset="200"
      data-aos-delay="60"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div
        style={{
          backgroundImage: `url("https://cdn.wallpapersafari.com/61/31/Mo8nwL.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
        className="h-screen"
      >
        <h2 className="pt-5 mr-32 font-bold text-4xl text-center text-white uppercase">
          Add A Item
        </h2>
        <div className="flex justify-center  p-5 rounded-2xl w-11/12  ml-5 ">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <select
              onChange={(e) => setProductsCategory(e.target.value)}
              className="select select-primary w-96 "
            >
              <option className="text-lg font-bold" disabled selected>
                Select Your Product Category
              </option>
              <option className="text-lg text-blue-900 font-bold">
                OUR SEEDS
              </option>
              <option className="text-lg text-blue-900 font-bold">
                Fertilizer
              </option>
              <option className="text-lg text-blue-900 font-bold">
                Pesticide
              </option>
              <option className="text-lg text-blue-900 font-bold">
                Farming Equipment
              </option>
            </select>

            {/* name */}
            <label className="label">
              <span className="label-text text-white text-xl font-semibold">
                Product Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Book Name"
              className="input input-bordered bg-white lg:w-96 sm:w-full   hover:shadow-xl shadow-inner"
              {...register("name", {
                required: {
                  value: true,
                  message: "Book Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>

            {/* Image */}
            <label className="label  text-xl font-semibold">
              <span className="label-text text-white text-xl">Images</span>
            </label>
            <input
              type="text"
              placeholder="Images URL"
              className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
              {...register("img", {
                required: {
                  value: true,
                  message: "Images is Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.img?.message}
                </span>
              )}
            </label>

            {/* Price */}
            <label className="label">
              <span className="label-text text-white text-xl font-semibold">
                Price
              </span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white w-full    hover:shadow-xl shadow-inner"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>

            {/* Description */}
            <label className="label">
              <span className="label-text text-white text-xl font-semibold">
                Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white w-full   h-20 pt-1 hover:shadow-xl shadow-inner"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.description?.message}
                </span>
              )}
            </label>

            {productsCategory ? (
              <input
                className="btn btn-primary mt-5 w-full disable text-white"
                type="submit"
                value="ADD"
              />
            ) : (
              <input
                className="btn  btn-primary mt-5 w-full text-white"
                disabled
                type="submit"
                value="ADD"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
