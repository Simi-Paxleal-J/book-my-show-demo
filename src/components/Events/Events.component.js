import React from "react";


const EventsCard = (props) => {
  
    return(
       
      <>
        <div className="">
          <img
            className = "w-48 h-72 rounded-lg"
            src={props.src}
            alt="Cast Card"
          />
        </div>
      </>
  );
};


const Events = () => {

    var x=0
    var y=0
    var z=0
    var w=0

  const EventImage = [
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00321135-nhnrpcjxyp-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321206-pykqfswzae-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307978-cjebeyfsaz-portrait.jpg",
    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131211-gexprwvkcq-portrait.jpg"
    ];

  const EventName = [
    "Silver Learnings",
    "Chaar Log Hasengey",
    "Art and Craft Online",
    "Smart Phone Photography"
];

  const EventSubName = [
    "Multiple Venues",
    "Watch On Zoom",
    "Watch On Zoom",
    "Watch On Zoom"
];

const EventCat = [
    "Health and Fitness",
    "Stand up Comedy",
    "Arts and Crafts",
    "Photography",
];

const EventPrice = [
    "$395",
    "$199",
    "$366",
    "$1200"
];


  return (
    <>
      
     <div className="flex items-center justify-center gap-x-4">
     {EventImage.map((image)=> (
        <div className="">
          <EventsCard src={image} />
          <h3 className="font-bold mt-3">
            {EventName[x++]}
          </h3>
          <p className="font-semibold">
            {EventSubName[y++]}
          </p>
          <p className="font-medium">
            {EventCat[z++]}
          </p>
          <p className="font-light mb-10">
            {EventPrice[w++]}
          </p>
        </div>
      ))}
     </div>
    </>
    );
};

export default Events;