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
        <div className=" max-md:m-2 max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-[full] max-md:w-[150px] h-[200px] max-md:[130px]"
            src={image}
            alt="images"
          />
          <h1 className="mt-2 p-3 text-[1.2rem] max-md:text-[]17px font-extrabold">
            {text}
          </h1>
          <p className="p-3 mt-2 text-[1rem] text-gray-600">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
