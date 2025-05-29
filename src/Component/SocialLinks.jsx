import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return <div>
    <div className="bg-gray-800 flex justify-center gap-20">
          <a className="mt-10 mb-10 p-10 hover:text-white" href="#">
            <SlSocialInstagram size={50} />
          </a>

          <a className="mt-10 mb-10 p-10 hover:text-white" href="#">
            <FaFacebook size={50} />
          </a>

          <a className="mt-10 mb-10 p-10 hover:text-white" href="#">
            <AiFillTikTok size={50} />
          </a>

          <a className="mt-10 mb-10 p-10 hover:text-white" href="#">
            <FaXTwitter size={50} />
          </a>
          
        </div>
  </div>;
};

export default SocialLinks;
