import React from "react";

const Fertilizer = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="card card-side bg-base-100 shadow-xl hover:shadow-2xl hover:bg-pink-100"
      >
        <figure>
          <img
            className="w-full h-80"
            src="https://thumbs.dreamstime.com/b/fertilizer-bag-over-green-background-summer-garden-concept-95324320.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        className="card card-side bg-base-100 shadow-xl hover:shadow-2xl hover:bg-pink-100"
      >
        <figure>
          <img
            className="w-full h-80"
            src="https://images.pond5.com/fertilizer-background-rotate-footage-080027672_prevstill.jpeg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fertilizer;
