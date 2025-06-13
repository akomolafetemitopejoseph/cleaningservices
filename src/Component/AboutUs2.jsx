import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs2 = ({ image, text, paragraph }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div>
        <div className="m-5 max-md:m-2 p-10 max-md:p-5">
          <img className="w-[200px] max-md:w-[150px] h-[200px] max-md:[130px]" src={image} alt="images" />
          <h1 className="mt-5 text-[1.2rem] max-md:text-[]17px font-extrabold">{text}</h1>
          <p className="mt-5 text-[1rem] text-gray-600">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
