import React from "react";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUS from "./pages/AboutUS";
import CustomerPage from "./pages/CustomerPage";
import SocialLinks from "./Component/SocialLinks";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/customerpage" element={<CustomerPage />} />
      </Routes>
      <SocialLinks />
    </div>
  );
};

export default App;
