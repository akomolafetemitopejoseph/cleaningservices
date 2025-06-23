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
      <div className="m-5 max-md:m-2  p-10 max-md:p-5">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="font-bold text-2xl capitalize mt-5">
            Welcome to MANICLEAN GLOBAL VENTURE – Where Cleanliness Meets Care
          </h1>
          <p className="max-md:text-sm mt-5 text-xl">
            We’re so glad you’re here! At <span className="text-xl font-bold">MANICLEAN GLOBAL VENTURE</span>,
            we specialize in providing reliable, affordable, and top-quality
            cleaning services for homes and businesses. Whether you need a
            one-time deep clean or regular maintenance, our dedicated team is
            here to make your space shine—so you can relax and enjoy the things
            that matter most.
          </p>
          <p className="max-md:text-sm mt-5 text-xl">
            Let us do the dirty work while you enjoy a fresher, healthier
            environment. Clean spaces. Happy faces.
          </p>
        </div>

        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex items-center gap-10 max-md:grid max-md:gap-10  mt-10"
        >
          <div className=" bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="w-full h-[400px] max-md:h-[400px] "
              src={Images}
              alt="pic"
            />

            <div className="p-5 pl-4 pt-5 max-md:p-3">
              <h2 className="font-bold text-[18px] max-md:text-[17px]">
                About Our CEO – Akomolafe Temitope Joseph At the core of
                MANICLEAN GLOBAL VENTURE is our founder and CEO, Akomolafe Temitope Joseph,
                whose vision and leadership have helped build a company known
                for quality, consistency, and care.
              </h2>
              <p className=" mt-5 text-[1rem] max-md:text-sm text-gray-600 text-strat">
                Driven by a passion for service and a strong commitment to
                customer satisfaction, Mr. Akomolafe started MANICLEAN GLOBAL VENTURE to meet
                the growing demand for professional, affordable, and trustworthy
                cleaning solutions. With a hands-on approach, he has created a
                team of well-trained professionals dedicated to exceeding client
                expectations.
              </p>
              <p className="text-[1rem] mt-3 max-md:text-sm text-gray-600 text-strat">
                Under his guidance, MANICLEAN GLOBAL VENTURE continues to grow while
                maintaining a personal touch in every job we do. His goal is
                simple: to make every home and workplace cleaner, healthier, and
                happier.
              </p>
            </div>
          </div>
          <div className="pl-4 pt-5 max-md:p-3 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h2 className="font-bold text-[18px] max-md:text-[17px]">
              Message from Our CEO
            </h2>
            <p className="mt-5 text-[1rem] max-md:text-sm text-gray-600 text-strat">
              Hello and welcome! I'm Akomolafe Temitope Joseph, the proud CEO
              and founder of MANICLEAN GLOBAL VENTURE. I started this company with one simple
              mission: to provide high-quality, affordable, and reliable
              cleaning services to homes and businesses across our community.
            </p>
            <p className="text-[1rem] mt-3 max-md:text-sm text-gray-600 text-strat">
              From the beginning, I believed that cleaning goes beyond just
              making a space look good—it’s about creating a healthy, peaceful,
              and organized environment for people to thrive. That’s why at
              MANICLEAN GLOBAL VENTURE, we treat every space like it’s our own.
            </p>
            <p className="text-[1rem] mt-3 max-md:text-sm text-gray-600 text-strat">
              Our team is built on trust, excellence, and attention to detail,
              and I’ve made it a personal goal to ensure that every customer
              feels valued and satisfied with our service.
            </p>
            <p className="text-[1rem] mt-3 max-md:text-sm text-gray-600 text-strat">
              As we continue to grow, I remain committed to delivering the same
              level of care and dedication that helped us earn the trust of our
              clients.
            </p>
            <p className="text-[1rem] mt-3 max-md:text-sm text-gray-600 text-strat">
              Thank you for choosing MANICLEAN GLOBAL VENTURE. We’re here to make your space
              shine every time. <br /> <span>Warm regards</span>,
            </p>
          </div>

          {/* <div className="flex gap-7 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
          </div> */}
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
