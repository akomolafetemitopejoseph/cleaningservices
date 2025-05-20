import React from "react";
import image1 from "../assets/xerox1.png";
import image2 from "../assets/xerox.png";
import image3 from "../assets/aecom.png";
import image4 from "../assets/logo.png";

const OurClients = () => {
  return (
    <>
      <div className="bg-gray-800">
        <h1 className="text-center font-extrabold text-[2rem] text-white mb-5 ">
          OUR CLIENTS
        </h1>
        <div className=" flex">
          <div className="w-[300px] h-[300px] m-5 hover:bg-gray-900 p-5 cursor-pointer border-gray-900 border-2">
            <img src={image1} alt="image1" />
          </div>

          <div className="w-[300px] h-[300px] m-5 hover:bg-gray-900 p-5 cursor-pointer border-gray-900 border-2">
            <img src={image2} alt="image1" />
          </div>

          <div className="w-[300px] h-[300px] m-5 hover:bg-gray-900 p-5 cursor-pointer border-gray-900 border-2">
            <img src={image3} alt="image1" />
          </div>

          <div className="w-[300px] h-[300px] m-5 hover:bg-gray-900 p-5 cursor-pointer border-gray-900 border-2">
            <img src={image4} alt="image1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
