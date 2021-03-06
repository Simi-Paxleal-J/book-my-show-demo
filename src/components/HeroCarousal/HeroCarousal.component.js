import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Components
import {PrevArrow, NextArrow} from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

  const [images, setImages] = useState([]);

  useEffect(()=> {
    const requestNowPlayingMovies= async() => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  },[]);

  console.log({images});

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "160px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
/*
const images = ["https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1639173925921-5d5fd027713c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
"https://images.unsplash.com/photo-1639152306957-446a29b71e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1639156012933-acde9b3cc753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
"https://images.unsplash.com/photo-1639183813792-f17ae5736d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1639139124041-b9cb9fe26685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
];
*/
  return (
    <>

    <HeroSlider {...settings}>
     {images.map((image)=>(
       <div className="w-20 h-96 px-1 py-1">
        <img src={`https://image.tmdb.org/t/p/w500${image.backdrop_path}`} alt="test-img" className=" rounded-md w-full h-96" />
       </div>
     ))}
    </HeroSlider>

    </>
  );
};

export default HeroCarousal;

/*
<HeroSlider {...settings}>
     {images.map((image)=>(
       <div className="w-20 h-96 px-2 py-3">
        <img src={image} alt="test-img" className="rounded-md w-full h-full px-1" />
       </div>
     ))}
    </HeroSlider>
*/