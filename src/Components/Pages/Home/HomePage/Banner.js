import React from "react";
import "../../../CSS/Banner.css";
import Navbar from "../../../Share/Navbar";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen "
        style={{
          background: `url("https://cdn.wallpapersafari.com/61/31/Mo8nwL.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div class="transBox flex-col lg:flex-row-reverse w-full bg-slate-200  shadow-inner hover:shadow-2xl">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="60"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <img
                className="imageStyle rounded-lg skew-y-3 shadow-2xl cursor-pointer pic-style hover:rounded-3xl"
                src="https://static.wixstatic.com/media/c82824_b2614282207e48f2a9db9ef08d11ff5d~mv2.jpg/v1/fill/w_1744,h_1354,al_c,q_90,enc_auto/c82824_b2614282207e48f2a9db9ef08d11ff5d~mv2.jpg"
                alt=""
              />
            </div>

            <div className="">
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h1 class="text-5xl font-bold text-primary">
                  Development <span className="text-neutral">Agriculture</span>
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="60"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                {" "}
                <p class="py-6 ">
                  Agriculture is defined with varying scopes, in its broadest
                  sense using natural resources to "produce commodities which
                  maintain life,
                  <br /> including food, fiber, forest products, horticultural
                  crops, and their related services"
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="70"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                {" "}
                <button class="btn btn-primary text-white">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
