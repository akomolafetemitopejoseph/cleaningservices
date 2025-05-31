import React from "react";

const OurStaffs = ({ images, text, paragraph }) => {
  return (
    <div>
      {/* <h1>our staffs</h1> */}

      <div>
        <div className="">
          <img className="w-[300px] h-[200px]" src={images} alt="images" />
        </div>
        <h1 className="text-[1.2rem] font-bold m-3">{text}</h1>
        <p className="text-[.90rem] text-gray-900 font-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default OurStaffs;
