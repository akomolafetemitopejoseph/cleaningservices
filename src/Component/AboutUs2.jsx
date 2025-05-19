import React from "react";

const AboutUs2 = ({ image, text, paragraph }) => {
  return (
    
    <div>
      <div>
        <div className="m-5 p-10">
          <img className="w-[200px] h-[200px]" src={image} alt="images" />
          <h1 className="mt-5 text-[1.2rem] font-extrabold">{text}</h1>
          <p className="mt-5 text-[.90rem] text-gray-600">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
