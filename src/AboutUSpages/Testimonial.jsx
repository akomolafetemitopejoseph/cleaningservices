import React from "react";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <>
      <div className="w-[100%] h-[2px] bg-gray-300"></div>
      <div className="flex  m-15 gap-5">
        <div>
          <div>
            <h1 className="uppercase text-[1.5rem] font-extrabold flex items-center gap-2 ">
              our advantages
            </h1>
            <p className=" text-gray-500 text-[1rem] mt-5 flex">
              
              In dui tortor, pulvinar at lacus a, porta va rius dui. Phasellus
              porttitor nisi eget accumsan Pellentesque a arcu efficitur ante
            </p>
          </div>
          <div className="w-[100%] h-[2px] bg-gray-300 mt-5"></div>

          <div className="">
            <h1 className="uppercase text-[1.rem] font-extrabold mt-5">
              In dui tortor pulvinar
            </h1>
            <p className="text-gray-500 text-[1rem] mb-5">
              Phasellus porttitor nisi eget accumsan. Pell en tesque a arcu
              efficitur ante mattis dic tum et ac purus. Nunc interdum
            </p>
          </div>

          <div className="">
            <div className="w-[100%] h-[2px] bg-gray-300 mt-5"></div>
            <h1 className="uppercase text-[1rem] font-extrabold mt-5">
              Elacus a porta varius dui
            </h1>
            <p className="text-gray-500 text-[1rem] mb-5">
              Phasellus porttitor nisi eget accumsan. Pell en tesque a arcu
              efficitur ante mattis dic tum et ac purus. Nunc interdum
            </p>
          </div>
        </div>

        <div>
          <h1 className="uppercase text-[1.5rem] font-extrabold">skills</h1>
          <h1 className="capitalize text-[1rem] font-bold mt-5">
            Elacus a porta varius dui
          </h1>
          <p className="text-gray-500 text-[1rem] mb-5">
            Efficitur ante mattis dic tum et ac purusun c interdum, orci eu
            tincidunt lacinia, elit quam ultrices ipsum, quis ultricies
          </p>

          <div>
            {/* <h1>Eulvinar at lacus a, porta var ius dui. Phasellus</h1>
            <p>
              Erci eu tincidunt lacinia, elit quam ultri ces ipsum, quis
              ultricies ipsum ante a lo rem. Maecenas nunc mau ris, finibus in
              gravida sed, blandit nec elit. Pellen te sque lobortis tempus
            </p> */}
            <p className="text-gray-500 text-[1rem] m-2">
              Aenean nec eros luctus
            </p>
            <p className="text-gray-500 text-[1rem] m-2">
              Vestibulum ante faucibus orci
            </p>
            <p className="text-gray-500 text-[1rem] m-2">
              Ut pharetra augue nec
            </p>
            <p className="text-gray-500 text-[1rem] m-2">
              Tincidunt ac viverra
            </p>
            <p className="text-gray-500 text-[1rem] m-2">
              Donec porta diam eu massa
            </p>
            <p className="text-gray-500 text-[1rem] m-2">Quisque diam lorem</p>
          </div>
        </div>

        <div className="">
          <h1 className="uppercase text-[1.5rem] font-extrabold mb-5">
            testimonials
          </h1>
          <div className="flex gap-5">
            <img
              className="w-[300px] h-[200px]"
              src="https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
              alt=""
            />
            <div>
              <p className="text-gray-500 text-[1rem]">
                Erci eu tincidunt lacinia, elit quam ultri ces ipsum, quis
                ultricies ipsum ante a lo re m. Maecenas nunc mau ris, finibus
                in grav ida sed, blandit nec elit. Pellen te sque lob ortis
                tempus tincidunt. Nullam
              </p>
              <h1 className="uppercase text-[1.rem] font-extrabold mt-5">
                Gloria Mann
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[2px] bg-gray-300 mt-5"></div>
          <div className="flex gap-5 mt-5">
            <img
              className="w-[300px] h-[200px]"
              src="https://images.unsplash.com/photo-1737649657731-b3aee7725587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              alt=""
            />
            <div>
              <p className="text-gray-500 text-[1rem]">
                Pellen te sque lob ortis tempus tincidunt. Nullam finibus sem eu
                pulvinar ultricies. Donec in velit et diam aliquet mollis. Nulla
                facilisi. Fusce viverra, velit at cursus maxi mus, eros magna
                pellentesque
              </p>
              <p className="uppercase text-[1.rem] font-extrabold mt-5">
                Inga North
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
