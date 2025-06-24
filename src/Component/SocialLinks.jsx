import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="flex justify-center gap-20 max-md:gap-2">
          <a
            className="mt-10 mb-10 p-10 max-md:p-2 hover:text-white text-black max-md:cursor-auto"
            href="#"
          >
            <SlSocialInstagram size={50} className="size-8" />
          </a>

          <a
            className="mt-10 mb-10 p-10 max-md:p-2 text-black hover:text-white  max-md:cursor-auto"
            href="#"
          >
            <FaFacebook size={50} className="size-8" />
          </a>

          <a
            className="mt-10 mb-10 p-10 max-md:p-2 text-black hover:text-white max-md:cursor-auto"
            href="#"
          >
            <AiFillTikTok size={50} className="size-8" />
          </a>

          <a
            className="mt-10 mb-10 p-10 max-md:p-2 text-black hover:text-white max-md:cursor-auto"
            href="#"
          >
            <FaXTwitter size={50} className="size-8" />
          </a>
        </div>
        <div>
          <h1 className="text-xl max-md:text-[12px] text-white font-bold pb-5 text-center">MANICLEAN GLOBAL VENTURE. © 2025 Privacy policy</h1>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
