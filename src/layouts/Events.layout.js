import React from "react";

//Components
import MovieNavbar from "../components/navbar/movieNavbar.component.js";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const EventsLayout = (props) => {
  return (
    <div>
      <MovieNavbar />
      <HeroCarousal />
      {props.children}
    </div>
  );
};

export default EventsLayout;