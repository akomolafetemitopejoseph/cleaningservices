import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import image5 from "../assets/anotherbg.jpg";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[url('./assets/anotherbg.jpg')] bg-cover bg-center border-8 border-b-blue-950">
        <div className="flex max-md:grid">
          <div className="m-5 max-md:m-2 p-10 max-md:p-5">
            <h1 className="text-[2.5rem] max-md:text-2xl text-white max-md:mt-10 max-md:mb-20 font-extrabold uppercase">
              contact us
            </h1>
            <div className="mt-7">
              <div className="flex text-center max-md:mb-15 max-md:items-center gap-5">
                <FaEnvelope size={50} />
                <a
                  className="text-[1.5rem] max-md:text-sm max-md:cursor-auto  font-bold hover:text-gray-600 max-md:hover:text-black"
                  href="#"
                >
                  akomolafetemitope6@gmail.com
                </a>
              </div>

              <div className="flex gap-5 mt-8 max-md:mb-15 max-md:items-center">
                <MdOutlinePhoneIphone size={50} />
                <h1 className="text-[1.5rem] font-bold max-md:text-sm max-md:cursor-auto">
                  +234-9164127577
                </h1>
              </div>

              <div className="flex gap-5 mt- max-md:items-center">
                <MdLocationPin size={50} />
                <h1 className="text-[1.5rem] font-bold max-md:text-sm max-md:cursor-auto">
                  8901 Marmora Road Glasgow,
                  <br /> DO4 89GR
                </h1>
              </div>
            </div>
          </div>

          <form action="">
            <div className="m-5 p-10">
              <div className="">
                <label htmlFor="for-label"></label>
                <input
                  className="border-2 w-[500px] max-md:w-[260px] p-3 font-extrabold text-black"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="for-email"></label>
                <input
                  className="border-2 w-[500px] max-md:w-[260px] p-3 mt-5 font-extrabold text-black"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div>
                <textarea
                  className="border-2 w-full max-md:w-[260px] space-y-4 p-2 mt-5 font-extrabold text-black"
                  name="message"
                  id="message"
                >
                  Message
                </textarea>
              </div>

              <div>
                <button className="border-2 w-[500px] max-md:w-[250px] p-3 max-md:p-2 mt-5 bg-amber-300 font-extrabold text-[2rem] opacity-60 max-md:text-xl uppercase hover:bg-black hover:text-white cursor-pointer">
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
