import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BuyNow = () => {
  const [quantity, setQuantity] = useState("");
  const totalPrice = quantity * 30;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const changeUrl = { ...data, quantity, totalPrice };
    console.log(changeUrl);
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
          Buy This Product
        </h2>
        <div className="flex justify-center  p-5 rounded-2xl w-11/12  ml-5 ">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <input
              value={`Mango`}
              type="text"
              className="input input-bordered bg-white w-full mb-4 font-bold   hover:shadow-xl shadow-inner"
            />

            {/* Price */}

            <input
              value={`Price 30 `}
              type="text"
              className="input input-bordered bg-white w-full  font-bold    hover:shadow-xl shadow-inner"
            />

            {/* Quantity */}
            <label className="label">
              <span className="label-text text-white text-xl font-semibold">
                Quantity
              </span>
            </label>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              placeholder="Quantity"
              className="input input-bordered bg-white w-full    hover:shadow-xl shadow-inner"
            />
            {/* Image */}
            <label className="label  text-xl font-semibold">
              <span className="label-text text-white text-xl">Date</span>
            </label>
            <input
              type="date"
              placeholder="Images URL"
              className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
              {...register("date", {
                required: {
                  value: true,
                  message: "Date is Required",
                },
              })}
            />
            <label className="label">
              {errors.date?.type === "required" && (
                <span className="label-text-alt text-red-50">
                  {errors?.date?.message}
                </span>
              )}
            </label>
            {/* Phone */}
            <label className="label  text-xl font-semibold">
              <span className="label-text text-white text-xl">Phone</span>
            </label>
            <input
              type="phone"
              placeholder="Phone Number"
              className="input input-bordered bg-white w-full   hover:shadow-xl shadow-inner"
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone is Required",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-50">
                  {errors?.phone?.message}
                </span>
              )}
            </label>

            {/* address */}
            <label className="label">
              <span className="label-text text-white text-xl font-semibold">
                Address
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Address"
              className="input input-bordered bg-white w-full   h-20 pt-1 hover:shadow-xl shadow-inner"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is Required",
                },
              })}
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-50">
                  {errors?.address?.message}
                </span>
              )}
            </label>

            {/* total price */}
            <label className="label">
              <span className="label-text text-white text-xl font-semibold ">
                Total Price
              </span>
            </label>
            <input
              value={totalPrice}
              type="number"
              className="input input-bordered bg-white text-primary w-full text-center font-extrabold text-xl   hover:shadow-xl shadow-inner"
            />
            {/* submit */}
            {quantity ? (
              <input
                className="btn  btn-primary mt-5 w-full text-white"
                type="submit"
                value="Buy Now"
              />
            ) : (
              <input
                className="btn  btn-primary mt-5 w-full text-white"
                disabled
                type="submit"
                value="Buy Now"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
