import React from "react";
import {BiChevronDown , BiChevronUp} from "react-icons/bi";


const Filters = () => {

    return(
        <>
        <p className="flex items-center justify-between m-2 bg-white text-black w-80 h-14 p-4">

        <div className="flex items-center justify-start">
             <button><BiChevronDown /> </button>
             &nbsp;Data
        </div>
        <div>Clear</div>

         </p>

         <p className="flex items-center justify-between m-2 bg-white text-black w-80 h-14 p-4">

        <div className="flex items-center justify-start">
             <button><BiChevronDown /></button>
             &nbsp;Languages
        </div>
        <div>Clear</div>

         </p>

         <p className="flex items-center justify-between m-2 bg-white text-black w-80 h-14 p-4">

        <div className="flex items-center justify-start">
             <button><BiChevronDown /></button>
             &nbsp;Categories
        </div>
        <div>Clear</div>

         </p>

         <p className="flex items-center justify-between m-2 bg-white text-black w-80 h-14 p-4">

        <div className="flex items-center justify-start">
             <button><BiChevronDown /></button>
             &nbsp;More Filters
        </div>
        <div>Clear</div>

         </p>

         <p className="flex items-center justify-between m-2 bg-white text-black w-80 h-14 p-4">

        <div className="flex items-center justify-start">
             <button><BiChevronDown /></button>
             &nbsp;Price
        </div>
        <div>Clear</div>

         </p>

         <p className="flex justify-center items-center m-2 text-red-600 rounded-md border border-red-400 p-2 h-9">Browse by Venues</p>

         
        </>
    );
};

export default Filters;