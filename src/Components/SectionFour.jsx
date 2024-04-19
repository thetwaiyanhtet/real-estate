import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import partnerOne from "./Assets/partner-1.png";
import partnerTwo from "./Assets/partner-2.png";
import partnerThree from "./Assets/partner-3.png";
import partnerFour from "./Assets/partner-4.png";
import partnerFive from "./Assets/partner-5.png";
import Button from "./Button";

const SectionFour = () => {
  const partners = [
    { image: partnerOne, name: "YAS Properties", property: 128 },
    { image: partnerTwo, name: "Banke Agency", property: 105 },
    { image: partnerThree, name: "Tiger Group", property: 137 },
    { image: partnerFour, name: "FAM Properties", property: 109 },
    { image: partnerFive, name: "Nation Wide", property: 112 },
  ];

  return (
    <div className=" capitalize flex flex-col items-center justify-center my-10 space-y-20">
      <div className=" bg-orange-900 w-20 h-2"></div>
      <h1>our brand partners</h1>
      <div className=" flex items-center space-x-10">
        <IoIosArrowBack className=" size-16 hover:scale-150" />
        <div className="partner-container">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.image} alt="..." />
              <p className="font-semibold text-xl">{partner.name}</p>
              <p className="underline">
                <span>{partner.property}</span> listed properties
              </p>
            </div>
          ))}
        </div>
        <IoIosArrowForward className=" size-16 hover:scale-150" />
      </div>
      <Button b_name="More Property" />
      <div className=" bg-orange-900 w-20 h-2"></div>
    </div>
  );
};

export default SectionFour;
