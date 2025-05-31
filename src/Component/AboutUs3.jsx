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
      <div className=" m-5 p-10 flex gap-5">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="w-[60%]"
        >
          <h1 className="font-bold text-[3rem] capitalize">
            we offer high quality cleaning services
          </h1>
          <p className="mt-5 text-[1.2rem] text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
            vestum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus
            porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.
            Fusce feugiat malesuada odio.
          </p>
          <button className="rounded-md px-10 py-5  bg-amber-300 font-extrabold text-[2rem] text-amber-900 capitalize mt-10 hover:bg-amber-400 cursor-pointer">
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
            className="w-[900px] h-[300px]"
            src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
            alt="for videos"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs3;
