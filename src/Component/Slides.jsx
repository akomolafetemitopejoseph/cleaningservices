import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const Slides = () => {
  const [activeSliders, setActiveSliders] = useState(0);
//   const [paused, setPaused] = useEffect(false);

  const imgSliders = [
    {
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
      title: "Mountain Adventure",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
      title: "Deep Forest",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
      title: "Ocean View",
    },
  ];


  const curSlide = () => {
    setActiveSliders((activeSliders) =>
      activeSliders === 0 ? imgSliders.length - 1 : activeSliders - 1
    );
  };

  const prevSlides = () => {
    setActiveSliders(
      (activeSliders) => (activeSliders + 1) % imgSliders.length
    );
  };

  return (
    <div className="reletive flex justify-center">
      {imgSliders.map((img, index) => (
        <div
          key={index}
          className={`${
            index === activeSliders ? "block" : "hidden"
          } w-[100%] h-screen bg-cover inset-0 transition-opacity duration-1000 ease-in-out`}
        >
          <img
            className="w-full h-full bg-cover bg-no-repeat"
            src={img.image}
            alt={`img ${index + 1}`}
          />
        </div>
      ))}

      <div className=" absolute text-[3rem] font-extrabold text-gray cursor-pointer flex justify-center">
        ...
      </div>

      <div>
        <div className="hover:text-gray-400 group-hover:black absolute top-[70%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-gray-300 cursor-pointer">
          <BsChevronRight onClick={curSlide} size={30} />
        </div>

        <div className="hover:text-gray-400 absolute top-[70%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-gray-300 cursor-pointer">
          <BsChevronLeft onClick={prevSlides} size={30} />
        </div>
      </div>

      <div className="absolute top-[49%] right-[40%]">
        <div className="flex flex-col text-center">
          <h1 className="uppercase text-[3rem] font-extrabold text-black">
            cleaning co
          </h1>
          <p className="text-[1.5rem] font-bold text-black">
            We'll fit all your cleaning needs.
          </p>
          <p className="text-[1.5rem] font-bold text-black">
            100% guarantee on our work
          </p>

          <button className="p-4 mt-4 bg-amber-50 text-7 font-extrabold uppercase rounded-xl hover:bg-amber-100 hover:text-gray-800 cursor-pointer active:text-gray-600">
            get in touch!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slides;
