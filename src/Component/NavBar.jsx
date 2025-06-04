import svgMainLogo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menue, setMenue] = useState(false);

  const myMenue = () => {
    setMenue(true);
  };

  const crossBar = () => {
    setMenue(!menue);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-5 bg-yellow-50">
        <div className="flex">
          <h1 className="font-extrabold text-2xl">LOGO </h1>
          <img
            className="w-[50px] h-[30px] object-contain"
            src={svgMainLogo}
            alt="logo"
          />
        </div>

        <ul className="lg:flex hidden gap-20 font-bold text-xl cursor-pointer uppercase">
          <Link to="/homepage">
            <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff]">
              home
            </li>
          </Link>
          <Link to="/aboutus">
            <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff]">
              about us
            </li>
          </Link>
          <Link to="/customerpage">
            <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff]">
              customer care
            </li>
          </Link>
          <Link to="/services">
            <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff]">
              services
            </li>
          </Link>

          <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff]">
            contacts
          </li>
        </ul>

        <div className="lg:hidden text-2xl z-10">
          {menue ? (
            <RxCross1
              className="lex lg:hidden animate-bounce"
              onClick={crossBar}
            />
          ) : (
            <RxHamburgerMenu
              className="flex lg:hidden animate-bounce"
              onClick={myMenue}
            />
          )}
        </div>

        {/* <div>
        <div
          className="reletive max-w-[1400px] h-[780px]"
          onMouseEnter={() => setPauseSlides(true)}
          onMouseLeave={() => setPauseSlides(false)}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            >
              <img src={img.image} alt="" />
            </div>
          ))}
        </div>

        <div className="hover:text-gray-400 absolute top-[70%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-gray-300 cursor-pointer">
          <FaChevronLeft className="size-20 " />
        </div>

        <div className="hover:text-gray-400 group-hover:black absolute top-[70%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-gray-300 cursor-pointer">
          <FaChevronRight className="size-20" />
        </div>
      </div> */}

        {menue && (
          <div className="lg:hidden flex absolute top-0  right-0 bg-gray-400 w-fit p-4 h-full text-2xl">
            <ul className="space-y-4 font-bold text-xl cursor-pointer uppercase">
              <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff]">
                home
              </li>
              <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff] mt-3">
                about us
              </li>
              <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff] mt-3">
                customer care
              </li>
              <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff] mt-3">
                services
              </li>
              <li className="p-2 rounded-xl hover:bg-amber-300  text-amber-900 hover:text-[#00a2ff] mt-3">
                contacts
              </li>
            </ul>
            <div className="text-2xl z-10 "></div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
