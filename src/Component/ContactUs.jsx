import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import image5 from "../assets/anotherbg.jpg";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[url('./assets/anotherbg.jpg')] bg-cover bg-center">
        <div className="flex max-md:grid">
          <div className="m-5 max-md:m-2 p-10 max-md:p-5">
            <h1 className="text-[2.5rem] font-extrabold uppercase">
              contact us
            </h1>
            <div className="mt-7">
              <div className="flex justify-center text-center gap-5">
                <FaEnvelope size={50} />
                <a
                  className="text-[1.5rem] font-bold hover:text-gray-600"
                  href="#"
                >
                  akomolafetemitope6@gmail.com
                </a>
              </div>

              <div className="flex gap-5 mt-8">
                <MdOutlinePhoneIphone size={50} />
                <h1 className="text-[1.5rem] font-bold">+234-9164127577</h1>
              </div>

              <div className="flex gap-5 mt-8">
                <MdLocationPin size={50} />
                <h1 className="text-[1.5rem] font-bold">
                  8901 Marmora Road Glasgow,
                  <br /> DO4 89GR
                </h1>
              </div>
            </div>
          </div>

          <form action="">
            <div className="m-5 p-10 bg-gray-800 opacity-70">
              <div className="">
                <label htmlFor="for-label"></label>
                <input
                  className="border-2 w-[500px] p-3 font-extrabold text-white"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="for-email"></label>
                <input
                  className="border-2 w-[500px] p-3 mt-5 font-extrabold text-white"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div>
                <textarea
                  className="border-2 w-full space-y-4 p-2 mt-5 font-extrabold text-white"
                  name="message"
                  id="message"
                >
                  Message
                </textarea>
              </div>

              <div>
                <button className="border-2 w-[500px] p-3 mt-5 bg-amber-300 font-extrabold text-[2rem] uppercase hover:bg-black hover:text-white cursor-pointer">
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
