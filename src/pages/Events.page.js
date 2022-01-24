import React from "react";

//import Temp from "../components/temp.js";
import Filters from "../components/Filters/Filters.component";
import Events from "../components/Events/Events.component";

const EventsPage = () => {
    return(
        <>
        <div className="bg-gray-200 ">

            <div className="flex items-start ml-32 mr-14">

            <div className="">
            <h1 className="text-bold text-3xl my-10">Filters</h1>
            <Filters />
            </div>

            <div className="mr-14">
            <h1 className="text-bold text-3xl ml-12 m-10">Events in the place</h1>
            <div className="flex flex-wrap space-x-3 items-baseline ml-12 mr-14 max-w-max">
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Workshops</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Online Streaming Events</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Comedy Shows</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Kids</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Spirutiality</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Online Streaming Events</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Conferences</span>
            </div>
            
            <div className="flex space-x-3 m-3 ml-12">
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Celebrity Wishes</span>
                <span className="bg-white border text-red-600 border-gray-400 rounded-2xl px-3 py-2 text-xs">Performances</span>
            </div>

            <div className="mt-8">
            <Events />
            <Events />
            <Events />
            </div>
            
            </div>

            </div>

        </div>
        
        </>
    );
};

export default EventsPage;