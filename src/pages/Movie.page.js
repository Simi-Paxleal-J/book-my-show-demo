import React from "react";

import Description from "../components/Description/Description.component";
import Images from "../components/Images/Images.component";
import Background from "../components/Background/Background.component";
import CastCardSlider from "../components/Cast/CastCarousal.component";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_SIpI3V518ltQqP",
    amount: 10000,
    currency: "INR",
    name: "BMS Clone",
    description: "Movie Purchase",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };

  let rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return (
    <>  
      
<div className="">

  <div className="relative h-96">
    <Background />
  </div>

  <div className="absolute h-96 flex items-center justify-start z-10 top-9 my-11 px-32 bg-gradient-to-r from-black">
      <Images />
  <div className="mx-4 w-full h-64">
      <Description title="Spider-Man: No Way Home"/>
      <div>
          <button onClick={launchRazorPay} class="mx-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Book Now
          </button>
      </div>
  </div>
  </div>

  <div className="m-10 ml-44 mr-96">

  <h1 className="text-3xl">About the movie</h1>

  <h3 className="mt-7 text-base">For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero.</h3>
  <br></br>
  <h3 className="text-base">When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</h3>

  </div>

    <div className="m-10 ml-44 mr-96">

      <h1 className="text-3xl mb-10">Cast</h1>
      <CastCardSlider />

    </div>

    <div className="m-10 ml-44 mr-96">

      <h1 className="text-3xl mb-10">Crew</h1>
      <CastCardSlider />

    </div>

</div>
      
    </>
  );
};

export default Movie;