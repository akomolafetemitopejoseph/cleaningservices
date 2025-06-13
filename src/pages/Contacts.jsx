import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "../Component/ContactUs";
import GoogleMap from "../Component/GoogleMap";

const Contacts = () => {
  return (
    <div>
      <ContactUs />
      <GoogleMap />
    </div>
  );
};

export default Contacts;
