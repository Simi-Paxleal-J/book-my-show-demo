import React from "react";

//Components
import Navbar from "../components/navbar/navbar.components.js";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </div>
  );
};

export default DefaultLayout;