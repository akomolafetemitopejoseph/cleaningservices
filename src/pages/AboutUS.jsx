import React from "react";
import myimage from "../assets/background1.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import "aos/dist/aos.css";

const AboutUS = () => {
  return (
    <>
      <div
        className="flex gap-10 bg-gray-50 p-5 max-md:p-2 m-15 max-md:m-5 max-md:grid max-md:gap-2"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div>
          <h1 className="text-[2rem] max-md:text-xl font-extrabold uppercase mb-2  ">
            about us
          </h1>
          <div className="w-[500px] max-md:w-fit h-[300px] max-md:h-[200px] max-md:mb-10">
            <img src={myimage} alt="image" />
          </div>
          <h1 className="text-[2rem] max-md:text-xl font-bold capitalize mb-2.5 max-md:mb-5">
            About MANICLEAN GLOBAL VENTURE
          </h1>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5 data-aos=">
            MANICLEAN GLOBAL VENTURE is a trusted and professional cleaning
            service company committed to delivering exceptional cleanliness,
            comfort, and customer care. We specialize in both residential and
            commercial cleaning, offering flexible plans that fit your schedule
            and your budget.
          </p>

          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            At MANICLEAN GLOBAL VENTURE, we understand that a clean space is
            essential for healthy living and productive working. That’s why we
            combine modern cleaning techniques, eco-friendly products, and a
            passionate team of professionals to give every space the sparkling
            attention it deserves
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            Our services include daily and deep cleaning, office cleaning,
            post-construction cleanup, move-in/move-out cleaning, and more. We
            work with honesty, punctuality, and the highest level of
            care—because your environment matters to us.
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            Whether you're looking for a one-time service or a long-term
            cleaning partner, MANICLEAN GLOBAL VENTURE is here to make your
            space shine.
          </p>
        </div>

        <div>
          <h1 className="text-[2rem] max-md:text-xl font-extrabold uppercase mb-2.5 max-md:mt-10">
            our history
          </h1>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">1999-</span>
            Aenean hendrerit diam quis metus viverra, at pulvin ar enim porta.
            In dui tortor, pulvinar at lacus a, porta va rius dui. Phasellus
            porttitor nisi eget accumsan
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">2004- </span>
            In dui tortor, pulvinar at lacus a, porta va rius dui. Phasellus
            porttitor nisi eget accumsane llentesque a arcu efficitur ante
            mattis dictum et ac purus. Nunc interdum, orci eu tincidunt lacinia,
            elit quam ultrices ipsum
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">2007-</span>{" "}
            Phasellus porttitor nisi eget accumsan. Pelle ntesque a arcu
            efficitur ante mattis dictum et ac purus. Nunc interdum, orci eu
            tincidunt lacinia, elit quam ultrices ipsum
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            <span className="text-[1.2rem] font-black text-black">2010-</span>{" "}
            Nunc interdum, orci eu tincidunt lacinia, elit quam ultrices ipsum,
            quis ultricies ipsum ante a lorem. Maecenas nunc mauris, finibus in
            gra vida sed, blandit nec elit. Pellentesque obortis tempus
            tincidunt. Nullam finib
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            <span>2012-</span> Qquam ultrices ipsum, quis ultricies ipsum ante a
            lorem. Maecenas nunc mauris, finibus in gravida sed, blandit nec
            elit. Pellentesque lobortis tempus tincidunt.
          </p>
        </div>
        <div>
          <h1 className="text-[2rem] max-md:text-xl font-extrabold uppercase mb-2.5 max-md:mt-10">
            opportunities
          </h1>
          <h1 className="text-[18px] max-md:text-xl font-bold capitalize  mb-2.5">
            At MANICLEAN GLOBAL VENTURE, we believe the cleaning industry offers
            endless possibilities to serve, grow, and make a lasting impact. As
            health, safety, and cleanliness have become priorities in homes,
            offices, and public spaces, our company is perfectly positioned to
            meet these needs with excellence.
          </h1>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            We see opportunities not just in providing basic cleaning, but in
            offering specialized, reliable, and affordable cleaning solutions
            for individuals, families, and businesses. Our services go beyond
            simple cleaning — we help create healthy, welcoming, and organized
            environments that allow people to live and work with peace of mind.
          </p>
          <p className="text-[18px] max-md:text-[18px] text-gray-600 mb-2.5">
            From residential homes to corporate offices, retail spaces to
            post-construction sites, our cleaning company is expanding to meet
            the growing demand for:
          </p>
          <div className="text-[1rem] text-gray-900 mb-2.5">
            <p
              className="flex items-center gap-5 hover:text-gray-500
          "
            >
              ✅ House and Apartment Cleaning
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500">
              ✅ Office and Commercial Space Cleaning
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500">
              ✅ Deep Cleaning and Disinfection Services
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500">
              ✅ Move-in and Move-out Cleaning
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500">
              ✅ Post-Construction and Renovation Cleaning
            </p>
            <p className="flex items-center gap-5 mt-5 hover:text-gray-500">
              ✅ Specialized Cleaning for Events and Short-let Apartments
            </p>
          </div>
          <p className="text-[18px] max-md:text-[16px] text-gray-600 mb-2.5">
            We also recognize opportunities in eco-friendly cleaning, where we
            use safe, non-toxic products to protect both our clients and the
            environment.
          </p>
          <p className="text-[18px] max-md:text-[16px] text-gray-600 mb-2.5">
            As we continue to grow, our focus remains on providing high-quality,
            trustworthy, and customer-focused cleaning services, creating jobs,
            and contributing to healthier communities.
          </p>
          <p className="text-[18px] max-md:text-[16px] text-gray-600 mb-2.5">
            With dedication and innovation, the opportunities for our cleaning
            services company are limitless — and we are ready to seize them.
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[2px] bg-gray-300"></div>
    </>
  );
};

export default AboutUS;
