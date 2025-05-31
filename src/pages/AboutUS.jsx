import React from "react";
import myimage from "../assets/background1.jpg";
import { BsArrowRightCircle } from "react-icons/bs";

const AboutUS = () => {
  return (
    <>
      <div className="flex gap-10 m-15">
        <div>
          <h1 className="text-[2.5rem] font-extrabold uppercase mb-2.5"></h1>
          <div className="w-[500px] h-[300px]">
            <img src={myimage} alt="image" />
          </div>
          <h1 className="text-[1.5rem] font-bold capitalize  mb-2.5">
            Fusce quis ex et tellus sodales maximus ac bibendum mi. Aenean
          </h1>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            Fusce quis ex et tellus sodales maximus ac bibendum mi. Aenean
            hendrerit diam quis metus viverra, at pulvin ar enim porta. In dui
            tortor, pulvinar at lacus a, porta va rius dui. Phasellus porttitor
            nisi eget accumsan
          </p>

          <p className="text-[.85rem] text-gray-600 mb-2.5">
            Fusce quis ex et tellus sodales maximus ac bibendum mi. Aenean
            hendrerit diam quis metus viverra, at pulvin ar enim porta. In dui
            tortor, pulvinar at lacus a, porta va rius dui. Phasellus porttitor
            nisi eget accumsanFusce quis ex et tellus sodales maximus ac
            bibendum mi. Aenean hendrerit diam quis metus viverra, at pulvin ar
            enim porta. In dui tortor, pulvinar at lacus a, porta va rius dui.
            Phasellus porttitor nisi eget accumsan
          </p>
        </div>

        <div>
          <h1 className="text-[2.5rem] font-extrabold uppercase mb-2.5">
            our history
          </h1>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">1999-</span>{" "}
            Aenean hendrerit diam quis metus viverra, at pulvin ar enim porta.
            In dui tortor, pulvinar at lacus a, porta va rius dui. Phasellus
            porttitor nisi eget accumsan
          </p>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">2004- </span>
            In dui tortor, pulvinar at lacus a, porta va rius dui. Phasellus
            porttitor nisi eget accumsane llentesque a arcu efficitur ante
            mattis dictum et ac purus. Nunc interdum, orci eu tincidunt lacinia,
            elit quam ultrices ipsum
          </p>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">2007-</span>{" "}
            Phasellus porttitor nisi eget accumsan. Pelle ntesque a arcu
            efficitur ante mattis dictum et ac purus. Nunc interdum, orci eu
            tincidunt lacinia, elit quam ultrices ipsum
          </p>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">2010-</span>{" "}
            Nunc interdum, orci eu tincidunt lacinia, elit quam ultrices ipsum,
            quis ultricies ipsum ante a lorem. Maecenas nunc mauris, finibus in
            gra vida sed, blandit nec elit. Pellentesque obortis tempus
            tincidunt. Nullam finib
          </p>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            <span>2012-</span> Qquam ultrices ipsum, quis ultricies ipsum ante a
            lorem. Maecenas nunc mauris, finibus in gravida sed, blandit nec
            elit. Pellentesque lobortis tempus tincidunt.
          </p>
        </div>
        <div>
          <h1 className="text-[2.5rem] font-extrabold uppercase mb-2.5">
            opportunities
          </h1>
          <h1 className="text-[1.5rem] font-bold capitalize  mb-2.5">
            Aenean hendrerit diam quis metus vive rra, at pulvinar enim porta
          </h1>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            Phasellus porttitor nisi eget accumsan. Pellentesque a arcu
            efficitur ante mattis dictum et ac purus. Nunc inte rdum, orci eu
            tincidunt lacinia, elit quam ultrices ipsum, quis ultricies ipsum
            ante a lorem. Maecenas nunc mau ris, finibus in gravida sed, blandit
          </p>
          <div className="text-[1rem] text-gray-900 mb-2.5">
            <p
              className="flex items-center gap-5 hover:text-gray-500 cursor-pointer
          "
            >
              <BsArrowRightCircle className="bg-yellow-300 rounded-[100%] text-white text-[1.5rem]" />
              Etiam cursus leo psum
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500 cursor-pointer">
            
              <BsArrowRightCircle className="bg-yellow-300 rounded-[100%] text-white text-[1.5rem]" />
              Etiam cursus leo psum
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500 cursor-pointer">
              
              <BsArrowRightCircle className="bg-yellow-300 rounded-[100%] text-white text-[1.5rem]" />
              Etiam cursus leo psum
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500 cursor-pointer">
              
              <BsArrowRightCircle className="bg-yellow-300 rounded-[100%] text-white text-[1.5rem]" />
              Etiam cursus leo psum
            </p>
          </div>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            Nunc inte rdum, orci eu tincidunt lacinia, elit quam ultr ices
            ipsum, quis ultricies ipsum ante a lorem. Maecenas nunc mau ris,
            finibus in gravida sed, blandit nec elit. Pel lentesque lobortis
            tempus tincidunt. Nullam finibus sem eu pulvinar ultricies.
          </p>
          <p className="text-[.85rem] text-gray-600 mb-2.5">
            Donec in velit et diam aliquet mollis. Nulla facilisi. Fus ce
            viverra, velit at cursus maximus, eros magna pellen tesque nisl,
            quis accumsan ligula felis vel velit. Praesent eleifend nunc eu nisl
            maximus interdum eget vel tortor. Nunc in odio pharetra urna pulvina
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[2px] bg-gray-300"></div>
    </>
  );
};

export default AboutUS;
