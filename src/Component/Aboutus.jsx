import React, { useEffect, useState } from "react";
import Images from "../assets/image1.jpg";
import Images2 from "../assets/image2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = ({ image, text, paragraph }) => {
  // const [count, setCount] = useState(0);

  // const addCount = () => {
  //   setCount(count + 1);
  // };

  // const removeCount = () => {
  //   setCount(count - 1);
  // };

  // const reset = () => {
  //   if (count > 0) {
  //     setCount(0);
  //   }
  // }
  // data-aos="fade-up"
  //    data-aos-duration="3000"

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="m-5 max-md:m-2 p-10 max-md:p-5">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="font-bold text-2xl capitalize mt-5">
            Welcome to our company wedsite
          </h1>
          <p className="max-md:text-sm mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
            vestum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus
            porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.
            Fusce feugiat malesuada odio. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Voluptates, totam.
          </p>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex max-md:grid max-md:gap-10  mt-10"
        >
          <div className="flex gap-7">
            <img
              className="w-[200px] max-md:w-[150px] h-[150px] max-md:h-[140px] "
              src={Images}
              alt="pic"
            />

            <div className="pl-4 pt-5 max-md:p-0">
              <h2 className="font-bold text-[1.5rem] max-md:text-[17px]">
                Praesent vestum molestie
              </h2>
              <p className="text-[1rem] max-md:text-sm text-gray-600 text-strat">
                Lorem ipsum dolor sit auer adipiscing elit. Praesent vestibulum
                me lacus. Aenean nonummy hendrerit mauris. Phases porta. Fusce
                suscipit varius mi sociis natoque.
              </p>
            </div>
          </div>

          <div className="flex gap-7">
            <img className="w-[200px] h-[150px]" src={Images2} alt="pic" />
            <div className="pl-4 pt-5  max-md:p-0">
              <h2 className="font-bold text-[1.5rem] max-md:text-[17px]">
                Praesent vestum molestie
              </h2>
              <p className="text-[1rem] max-md:text-sm text-gray-600 text-start">
                Lorem ipsum dolor sit auer adipiscing elit. Praesent vestibulum
                me lacus. Aenean nonummy hendrerit mauris. Phases porta. Fusce
                suscipit varius mi sociis natoque.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center gap-2 bg-purple-300 w-[1000px] h-[400px]">
        <button onClick={addCount} className="bg-green-600 w-[100px] h-[50px]">
          Add
        </button>
        <p className="mt-3">{count}</p>
        <button
          onClick={removeCount}
          className="bg-yellow-600 w-[100px] h-[50px]">
          Remove
        </button>
        <div>
        <button onClick={reset} className="bg-blue-600 w-[100px] h-[50px]">Reset</button>
        </div>
        
      </div> */}
      </div>
      <div className="w-[100%] h-[2px] bg-gray-300"></div>
    </>
  );
};

export default Aboutus;
