import React from "react";
import "../../../CSS/Banner.css";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen "
        style={{
          background: `url("https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg?w=2000")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div class="transBox flex-col lg:flex-row-reverse w-full bg-slate-50 ">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="60"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <img
                className="imageStyle rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3BI_CcBGX1gg_tVAZGBMbmFhlvQE4nLCveMatQb0pOYaGPBoH3nxfEXX4RW8VJANoS0&usqp=CAU"
                alt=""
              />
              {/* {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3BI_CcBGX1gg_tVAZGBMbmFhlvQE4nLCveMatQb0pOYaGPBoH3nxfEXX4RW8VJANoS0&usqp=CAU"
                className="lg:max-w-sm rounded-lg shadow-2xl"
              /> */}
            </div>

            <div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
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
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae .
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
