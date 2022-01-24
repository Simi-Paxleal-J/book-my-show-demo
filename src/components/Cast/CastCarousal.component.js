import React from "react";
import Slider from "react-slick";

//Components
import {PrevArrow, NextArrow} from "../HeroCarousal/Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CastCard = (props) => {
  return (
      <>
        <div className="">
          <img
            className = "w-36 h-36 rounded-full"
            src={props.src}
            alt="Cast Card"
          />
        </div>
      </>
  );
};



const CastCardSlider = () => {

  var x=0
  var y=0

  const CastImage = [
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/zendaya-iein098146-03-07-2017-14-20-19.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jon-favreau-1055-24-03-2017-17-58-59.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jacob-batalon-1084051-03-07-2017-14-36-39.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/angourie-rice-38311-24-03-2017-16-05-52.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/marisa-tomei-23232-24-03-2017-17-29-33.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/jamie-foxx-920-24-03-2017-13-52-00.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/willem-dafoe-2526-24-03-2017-12-35-57.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/thomas-haden-church-2360-24-03-2017-12-39-19.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rhys-ifans-24003-24-03-2017-14-00-02.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/alfred-molina-117-24-03-2017-12-45-23.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-wong-300-05-04-2019-02-57-20.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-revolori-1071969-25-05-2017-15-25-49.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/hannibal-buress-1063322-24-03-2017-17-32-25.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/martin-starr-28494-24-03-2017-16-00-42.jpg",
    "https://in.bmscdn.com/iedb/artist/images/website/poster/large/j.b.-smoove-iein001121-24-03-2017-12-36-08.jpg"
  ];

  const CastName = [
    "Tom Holland",
    "Zendaya",
    "Benedict Cumberbatch",
    "Jon Favreau",
    "Jacob Batalon",
    "Angourie Rice",
    "Marisa Tomei",
    "Jamie Foxx",
    "Willem Dafoe",
    "Thomas haden Church",
    "Rhys ifans",
    "Alfred Molina",
    "Benedict Wong",
    "Tony Revolori",
    "Hannibal Buress",
    "Martin Starr",
    "J.B. Smoove"
  ];

  const CharName = [
    "As Spider-Man",
    "As MJ",
    "Actor",
    "As Happy Hogan",
    "As Ned Lees",
    "As Betty Brant",
    "As May Parker",
    "As Electro",
    "As Green Goblin",
    "Actor",
    "As Dr. Curt",
    "As Doc Ock",
    "As Wong",
    "As Flash",
    "As Coach Wilson",
    "As Mr. Harrington",
    "As Mr. Dell"
  ];

  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <>
      
      <Slider {...settings}>
      {CastImage.map((image)=> (
        <div className="">
          <CastCard src={image} />
          <h3 className="font-semibold text-center">
            {CastName[x++]}
          </h3>
          <p className="font-light text-center">
            {CharName[y++]}
          </p>
        </div>
      ))}
      </Slider>
  
    </>
  )
};

export default CastCardSlider;