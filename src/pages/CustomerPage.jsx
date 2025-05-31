import React from "react";
import CustomerCare from "../CustomerCare/CustomerCare";
import NavBar from "../Component/NavBar";
import SocialLinks from "../Component/SocialLinks";

const CustomerPage = () => {
  return (
    <div>
      <NavBar />
      <CustomerCare  />
      {/* <SocialLinks /> */}
    </div>
  );
};

export default CustomerPage;
