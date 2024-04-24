import React from "react";
import mall from "./Assets/shopping-center 1.png";
import school from "./Assets/school 1.png";
import park from "./Assets/playground 1.png";
import building from "./Assets/skyscraper 1.png";
import cityViewBg from "./Assets/landscape town.png";

const SectionThree = () => {
  const propertyCards = [
    { icon: school, text: "nearby school", qty: 219 },
    { icon: building, text: "nearby downtown", qty: 473 },
    { icon: mall, text: "nearby malls", qty: 351 },
    { icon: park, text: "nearby parks", qty: 151 },
  ];
  return (
    <div className=" capitalize flex flex-col items-center relative w-full h-[600px] my-10 text-white">
      {/* <div style={{ backgroundImage: `url(${cityViewBg})` }}></div> */}
      <img src={cityViewBg} alt="..." className=" absolute w-full h-full" />
      <div className=" z-50 flex flex-col items-center space-y-10 md:space-y-24">
        <h1 className=" mt-20 text-2xl md:text-3xl">find property nearby</h1>
        <div className=" flex flex-wrap gap-8 md:gap-12 justify-center">
          {propertyCards.map((propertyCard, index) => (
            <div key={index} className="property-card">
              <img src={propertyCard.icon} alt="..." className=" md:w-14 w-9" />
              <p className=" font-semibold text-sm md:text-lg text-center">
                {propertyCard.text}
              </p>
              <p className=" underline text-sm md:text-base">{propertyCard.qty} properties</p>
            </div>
          ))}
        </div>
        <button className=" underline"> Explore More</button>
      </div>
    </div>
  );
};

export default SectionThree;
