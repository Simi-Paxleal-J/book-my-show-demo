import React from "react";
import {BiChevronRight} from "react-icons/bi";
import {FaHeart} from "react-icons/fa"

const Description = (props) => {
  let iconStyles = { color: "red"};
    return(
        <>
<h2 className="mx-3 text-white text-5xl font-bold">{props.title}</h2>

<div className="mx-3 m-2 font-bold text-3xl text-white flex justify-start ">
    <div className="flex items-center justify-start">
      <FaHeart style={iconStyles}/>
      <h2>&nbsp;92%</h2>
    </div>
    <div className="flex items-end justify-start">
      <h4 className="text-lg">&nbsp;330.8K ratings</h4>
      <BiChevronRight />
    </div>
    
</div>

<div className="mx-3 m-2 px-2 flex items-center justify-between rounded bg-gray-600">

  <div>
    <span className="text-xl font-bold">Add your ratings & review</span>
    <br></br>
    <span className="text-lg">Your rating matter</span>
  </div>

  <div>
    <button className="m-2 bg-white text-black font-bold py-2 px-4 rounded">
      Rate Now
    </button>
  </div>

</div>

<span className="mx-3 my-1 px-2 text-lg w-full text-black bg-white font-bold rounded">2D,3D,4DX,IMAX 2D</span>
<br></br>
<span className="mx-3 px-2 my-1 text-lg w-full text-black bg-white font-bold rounded">English,Hindi,Telugu,kannada,Tamil</span>

<h3 className="m-3 text-xl text-white font-bold">2h 28m . Action, Adventure, Sci-Fi . UA . 16 Dec 2021</h3>
        </>
    );
};

export default Description;
