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
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex gap-10 m-10 max-md:grid"
      >
        <AboutUs2
          image="https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsZWFuaW5nfGVufDB8fDB8fHww"
          text="Save Time & Energy


"
          paragraph="Life gets busy—let us handle the cleaning. We help you focus on what matters most while we take care of the dirt, dust, and details.



"
        />

        <AboutUs2
          image="https://images.unsplash.com/photo-1627905646269-7f034dcc5738?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
          text="Professional Appearance
"
          paragraph="Whether at home or in the office, cleanliness leaves a lasting impression. Our service ensures your space always looks its best—clean, polished, and welcoming.

"
        />

        <AboutUs2
          image="https://media.istockphoto.com/id/2164840274/photo/cheerful-young-housewife-holding-bucket-with-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=N-UIqOW--SReMB5_I5rrQeBi_HespXSUFA3P8Uhbb54="
          text="Comfort & Peace of Mind
"
          paragraph="Clutter and mess create stress. We help you enjoy peace of mind by transforming your space into a neat, fresh, and calming atmosphere.
"
        />

        <AboutUs2
          image="https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
          text="Health & Hygiene"
          paragraph="A clean environment helps prevent the spread of germs, bacteria, and allergens. Our cleaning service promotes a healthier lifestyle for your family, staff, and visitors."
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
