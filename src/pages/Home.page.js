import React, {useState, useEffect} from "react";
import axios from "axios";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";
import TopRated from "../components/TopRated/TopRated.component";
import Online from "../components/Online/Online.component";
import Outdoor from "../components/Outdoor/Outdoor.component";
import Laughter from "../components/Laughter/Laughter.component";
import Trending from "../components/Trending/Trending.component";


const HomePage = () => {
      const [popularMovies, setPopularMovies] = useState([]);
     
      useEffect(()=> {
        const requestPopularMovies = async () => {
          const getPopularMovies = await axios.get("/movie/popular");
          setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
      },[]);

      //console.log({popularMovies});

      
      
      const [TopRatedMovies, setTopRatedMovies] = useState([]);
     
      useEffect(()=> {
        const requestTopRatedMovies = async () => {
          const getTopRatedMovies = await axios.get("/movie/top_rated");
          setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
      },[]);

      //console.log({TopRatedMovies});


      const [OnlineMovies, setOnlineMovies] = useState([]);
     
      useEffect(()=> {
        const requestOnlineMovies = async () => {
          const getOnlineMovies = await axios.get("/discover/tv");
          setOnlineMovies(getOnlineMovies.data.results);
        };
        requestOnlineMovies();
      },[]);

      //console.log({OnlineMovies});


      const [OutdoorMovies, setOutdoorMovies] = useState([]);
     
      useEffect(()=> {
        const requestOutdoorMovies = async () => {
          const getOutdoorMovies = await axios.get("/movie/upcoming");
          setOutdoorMovies(getOutdoorMovies.data.results);
        };
        requestOutdoorMovies();
      },[]);

      //console.log({OutdoorMovies});



      const [LaughterMovies, setLaughterMovies] = useState([]);
     
      useEffect(()=> {
        const requestLaughterMovies = async () => {
          const getLaughterMovies = await axios.get("/movie/upcoming");
          setLaughterMovies(getLaughterMovies.data.results);
        };
        requestLaughterMovies();
      },[]);

      //console.log({LaughterMovies});

  return (

    <>
    <div className="flex flex-col gap-9 my-8">

    <div className="mx-auto px-24 py-3 container">
        <img
          src=" https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
          alt="Premier-Rupay"
          className="w-full h-full"
        />
      </div>

    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
     The Best of Entertainment
    </h1>
      <EntertainmentCardSlider />
    </div>


    <div className="bg-bms-700 py-10">
      <div className="mx-auto px-32 container">
        <img
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
          alt="Premier-Rupay"
          className="w-full h-full"
        />
      </div>

      <div className="mx-auto px-32 container">
        <Premier  PremierImages={popularMovies}/>
      </div>
    </div>


    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
     Online Streaming Events
    </h1>
    <Online  OnlineImages={OnlineMovies}/>
    </div>


    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
     Outdoor Events
    </h1>
    <Outdoor  OutdoorImages={OutdoorMovies}/>
    </div>


    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
     Laughter Therapy
    </h1>
    <Laughter LaughterImages={LaughterMovies}/>
    </div>


    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
     Popular Events
    </h1>
    <TopRated TopRatedImages={TopRatedMovies}/>
    </div>

    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-12">
     Trending Searches Right Now
    </h1>
    <div className="flex flex-wrap gap-4">
    <Trending />
    </div>
    </div>

    <div className="container mx-auto px-32">
    <h1 className="text-2xl font-bold text-gray-900 my-3">
     Explore Fun Events
    </h1>
    <Outdoor  OutdoorImages={OutdoorMovies}/>
    </div>

    </div>
    </>
  );
};

export default HomePage;