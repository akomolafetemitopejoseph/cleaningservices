import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-[100%] h-[2px] bg-gray-300"></div>
      <div className="w-30 max-md:w-20 h-2 bg-gray-500 opacity-50 m-10"></div>
      <div
        className=" m-5 max-md:m-2 p-10 max-md:p-5 flex max-lg:grid gap-5
      "
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="w-[75%]"
        >
          <h1 className="font-bold text-[3rem] max-md:text-2xl capitalize">
            we offer high quality cleaning services
          </h1>
          <p className="mt-5 text-[1.2rem] max-md:text-sm text-gray-600 ">
            At Cleaning CO, we take pride in offering high-quality cleaning services tailored to meet the unique needs of every client. Whether it’s a home, office, or commercial space, our trained professionals use top-grade equipment and eco-friendly products to deliver spotless, fresh results. We pay close attention to every detail, ensuring that every corner is cleaned to the highest standard—because your satisfaction and comfort are our top priority.

          </p>
          <button className="rounded-md max-md:px-5 px-10 py-5 max-md:py-2 bg-amber-300 font-extrabold text-[2rem] max-md:text-xl text-amber-900 capitalize mt-10 hover:bg-amber-400 cursor-pointer">
            view all videos
          </button>
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className=""
        >
          <img
            className="w-[900px] max-md:w-[500px] h-[300px] max-md:h-[200px]"
            src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
            alt="for videos"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs3;
