import React, { useEffect } from "react";
import image from "../assets/background2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const CustomerCare = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <div className="mt-10 mx-15 max-md:mx-5 w-30 max-md:w-15 h-3 bg-gray-500 "></div>
        <div className="m-15 max-md:m-5">
          
          <h1 className="text-3xl max-md:text-2xl font-extrabold uppercase mb-5 max-md:mt-10">
            customer care
          </h1>
          <div
            className="flex items-center gap-10 max-md:grid max-md:gap-5 bg-white border border-gray-200 rounded-lg shadow-sm py-5 max-md:px-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div>
              <img
                className="w-[600px] h-[350px] max-md:h-[250px]"
                src={image}
                alt="pic"
              />
            </div>
            <div className="w-[70%] max-md:w-[100%]">
              <h1 className="text-lg font-bold mb-5"></h1>
              <h1 className="text-lg font-bold mb-5">We're Here for You</h1>
              <p className="text-[1rem] text-gray-700 mb-5">
                Whether you have questions, need to reschedule, or want to give
                feedback, we’re always ready to help. Our goal is to ensure you
                feel heard, valued, and completely satisfied with our work.
              </p>
              <h1 className="text-lg font-bold mb-5">How We Support You</h1>
              <div className="flex max-md:grid gap-10 text-[16px] text-gray-600 max-md:mb-5">
                <div>
                  <h1 className="flex items-center gap-3 mb-2">
                    Prompt Responses:We respond quickly to inquiries via phone,
                    email, or our contact form.
                  </h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Flexible Scheduling: Need to change your appointment? No
                    problem—just let us know.
                  </h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Satisfaction Guarantee: Not happy with something? We’ll make
                    it right. Your happiness is our priority.
                  </h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Friendly Team: Our customer service staff are trained to be
                    courteous, understanding, and helpful at all times.
                  </h1>
                </div>

                <div>
                  <h1 className="text-lg font-bold mb-5">How We Support You</h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Phone: [Insert phone number]
                  </h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Email: [Insert email address]
                  </h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Live Chat: Available [Insert hours if applicable]
                  </h1>
                  <h1 className="flex items-center gap-3 mb-2">
                    Office Hours: Monday – Saturday, 8:00 AM – 6:00 PM
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[2px] bg-gray-300"></div>
      <div className="mt-10 mx-15 max-md:mx-5 w-30 max-md:w-15 h-3 bg-gray-500 "></div>
      <div className="m-15  max-md:m-5 max-md:mb-5 ">
        <h1 className="text-lg max-md:text-2xl font-bold mb-5">
          Get high quality cleaning services at affordable prices
        </h1>
        <p className="text-[1.2rem] max-md:text-[18px] text-gray-700 mb-5">
          "At MANICLEAN GLOBAL VENTURE, we provide high-quality daily cleaning
          services at affordable prices to meet the needs of both residential
          and commercial spaces. Our dedicated team of professionals ensures
          your environment remains spotless, fresh, and hygienic every day. With
          a strong commitment to excellence and customer satisfaction, we
          deliver reliable, cost-effective cleaning solutions that never
          compromise on quality."
        </p>

        <div
          className="flex max-md:grid gap-10 justify-evenly"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out ">
            <img
              className="w-100 h-60"
              src="https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsZWFuaW5nJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="image"
            />
            <p className="text-[1rem] text-gray-700 font-bold mt-5">
              We offer exceptional daily cleaning services designed to maintain
              the highest standards of cleanliness and hygiene, all at highly
              affordable rates."
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out">
            <img
              className="w-100 h-60"
              src="https://livedemo00.template-help.com/wt_53151/img/page3_pic2.jpg"
              alt="image"
            />
            <p className="text-[1rem] text-gray-700 font-bold mt-5">
              Our professional team is committed to delivering consistent,
              reliable service that ensures your environment remains immaculate
              and well-presented each day.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[2px] bg-gray-300 mt-15"></div>
      <div className="mt-10 mx-15 max-md:mx-5 w-30 max-md:w-15 h-3 bg-gray-500 "></div>
      <div className="m-15  max-md:m-5 max-md:mb-5">
        <h1 className="text-2xl font-bold mb-5">Why Choose Us?</h1>
        <div
          className="grid grid-cols-3  gap-10 max-md:grid-cols-1"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out">
            <h1 className="mb-5 text-l font-bold ">
              <strong className="mr-5">1.</strong>
              Commitment to Quality
            </h1>
            <p className="text-md text-gray-600">
              We pride ourselves on delivering top-tier cleaning services that
              meet the highest standards. Every space we clean receives
              meticulous attention, ensuring spotless results and a consistently
              fresh environment. Our goal is not just to meet your
              expectations—but to exceed them with every visit.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out ">
            <h1 className="mb-5 text-l font-bold">
              <strong className="mr-5">2.</strong>
              Affordable Pricing
            </h1>
            <p className="text-md text-gray-600">
              We believe a clean space should be accessible to everyone. That’s
              why we offer competitive and transparent pricing without
              compromising on service quality. Whether it’s for your home or
              business, you’ll receive exceptional value tailored to your
              specific needs and budget.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out">
            <h1 className="mb-5 text-l font-bold">
              <strong className="mr-5">3.</strong>
              Trained and Trusted Professionals
            </h1>
            <p className="text-md text-gray-600">
              Our team is made up of experienced, well-trained cleaning
              professionals who are passionate about what they do. Each member
              undergoes thorough background checks and training to ensure your
              property is handled with care, respect, and attention to detail.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out">
            <h1 className="mb-5 text-l font-bold">
              <strong className="mr-5">4.</strong>
              Reliable and Flexible Service
            </h1>
            <p className="text-md text-gray-600">
              We understand that life gets busy, which is why we offer flexible
              scheduling options to fit your routine. Whether you need daily,
              weekly, or custom cleaning plans, we arrive on time and ready to
              work, so you can focus on what matters most to you.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out">
            <h1 className="mb-5 text-l font-bold">
              <strong className="mr-5">5.</strong>
              Eco-Friendly Practices
            </h1>
            <p className="text-md text-gray-600">
              We care about your health and the environment. That’s why we use
              eco-friendly products and safe cleaning methods that reduce
              harmful chemicals while still delivering powerful results. Your
              space stays clean, fresh, and environmentally responsible.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 hover:shadow-lg hover:scale-100 transform transition duration-300 ease-in-out">
            <h1 className="mb-5 text-l font-bold">
              <strong className="mr-5">6.</strong>Customer Satisfaction
              Guaranteed
            </h1>
            <p className="text-md text-gray-600">
              Your satisfaction is at the heart of our business. We listen,
              adapt, and respond to your feedback to ensure you’re always happy
              with our service. If you're ever not satisfied, we’ll make it
              right—because your trust means everything to us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCare;
