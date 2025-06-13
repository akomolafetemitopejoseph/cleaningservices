import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUS from "./pages/AboutUS";
import CustomerPage from "./pages/CustomerPage";
import SocialLinks from "./Component/SocialLinks";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Slides from "./Component/Slides";

const App = () => {
  return (
    <div>
      <NavBar />
      <Slides />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/customerpage" element={<CustomerPage />} />
        <Route path="services" element={<Services />} />
        <Route path="Contacts" element={<Contacts />} />
      </Routes>
      <SocialLinks />
    </div>
  );
};

export default App;
