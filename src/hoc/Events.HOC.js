import React from "react";
import { Route } from "react-router-dom";

//Layouts
import EventsLayout from "../layouts/Events.layout";

const EventsHOC = ({ component: Component , ...rest }) => {
  return (
    <>
    <Route
    {...rest}
    component = {(props) => (
      <EventsLayout>
       <Component {...props} />
      </EventsLayout>
    )}
     />
    </>
  );
};

export default EventsHOC;