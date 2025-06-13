import React from "react";
import NavBar from "../Component/NavBar";
import Aboutus from "../Component/Aboutus";
import AboutUs2 from "../Component/AboutUs2";
import Slides from "../Component/Slides";
import AboutUs3 from "../Component/AboutUs3";
import OurClients from "../Component/OurClients";
import ContactUs from "../Component/ContactUs";
import SocialLinks from "../Component/SocialLinks";
import GoogleMap from "../Component/GoogleMap";

const Homepage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <Slides /> */}
      <Aboutus />
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="flex max-md:grid"
      >
        <AboutUs2
          image="https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsZWFuaW5nfGVufDB8fDB8fHww"
          text="Praesent vestum mole"
          paragraph="Ridiculus mus. Nula duisce feugiat malesuada o. Morbi nunc odio, gravida at, cursus necluctus a, lorem. Maecenas tristique orci a. Duis ultricies pharetra magna. Donec accumslesuada orci. Donec sit amet eros."
        />

        <AboutUs2
          image="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
          text="Praesent vestum mole"
          paragraph="Ridiculus mus. Nula duisce feugiat malesuada o. Morbi nunc odio, gravida at, cursus necluctus a, lorem. Maecenas tristique orci a. Duis ultricies pharetra magna. Donec accumslesuada orci. Donec sit amet eros."
        />

        <AboutUs2
          image="https://media.istockphoto.com/id/2164840274/photo/cheerful-young-housewife-holding-bucket-with-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=N-UIqOW--SReMB5_I5rrQeBi_HespXSUFA3P8Uhbb54="
          text="Praesent vestum mole"
          paragraph="Ridiculus mus. Nula duisce feugiat malesuada o. Morbi nunc odio, gravida at, cursus necluctus a, lorem. Maecenas tristique orci a. Duis ultricies pharetra magna. Donec accumslesuada orci. Donec sit amet eros."
        />

        <AboutUs2
          image="https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
          text="Praesent vestum mole"
          paragraph="Ridiculus mus. Nula duisce feugiat malesuada o. Morbi nunc odio, gravida at, cursus necluctus a, lorem. Maecenas tristique orci a. Duis ultricies pharetra magna. Donec accumslesuada orci. Donec sit amet eros."
        />
      </div>
      <AboutUs3 />
      <OurClients />
      <ContactUs />
      <GoogleMap />
    </div>
  );
};

export default Homepage;
