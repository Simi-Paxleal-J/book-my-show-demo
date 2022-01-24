import React from "react";
import {BiChevronRight, BiSearch, BiShareAlt} from "react-icons/bi";
const NavSm = () => {
  return (
    <>
    <div className="text-gray-800 flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
   </div>
   <div className="w-8 h-8">
      <BiShareAlt className="w-full h-full" />
   </div>
</div>
    </>
  )
};
const NavLg = () => {
  return (
    <>
        <div className="px-40 h-20 w-full flex items-center justify-between " >
          <div className="w-3/5 flex items-center justify-start">
            <img src="https://www.crafin.in/wp-content/uploads/2019/04/bookmyshow.png" 
              className="h-20 w-40 "
            >
            </img>
            <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full "
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
          </div>
        
        <div className="w-2/5 flex justify-end">
          <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
              Sign In
          </button>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
     <nav className="">
        <div className="md:hidden">{/*Mobile Screen*/}
          <NavSm />
        </div>
        <div className="hidden md:block lg:hidden">{/*Tablet Screen*/}
          <NavSm />
        </div>
        <div className="bg-gray-800  hidden lg:flex">{/*Large Screen*/}
        <NavLg />
        </div>
     </nav>
    </>
  );
};

export default MovieNavbar;