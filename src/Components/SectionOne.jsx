import React from "react";
import { Link } from "react-router-dom";
import saleIcon from "./Assets/sale-home 1.png";
import rentIcon from "./Assets/rent.png";
import agentIcon from "./Assets/agent.png";
import buildingIcon from "./Assets/building.png";
import calculatorIcon from "./Assets/calculator 1.png";
import listingIcon from "./Assets/listing.png";

const SectionOne = () => {
  return (
    <div className=" capitalize flex flex-col items-center justify-center my-10 space-y-14">
      <div className=" bg-orange-900 w-20 h-2"></div>
      <h1>explore property tools & info</h1>
      <div>
        <div className=" flex flex-col gap-7">
          <div className=" flex space-x-5">
            <div className="category">
              <img src={saleIcon} alt="..." />
              <span>properties for sell</span>
            </div>
            <Link to="/propertyListing">
              <div className="category">
                <img src={rentIcon} alt="..." />
                <span>properties for rent</span>
              </div>
            </Link>
            <div className="category">
              <img src={agentIcon} alt="..." />
              <span>find agents/broker</span>
            </div>
          </div>
          <div className=" flex space-x-5">
            <div className="category">
              <img src={listingIcon} alt="..." />
              <span>wanted listing</span>
            </div>
            <div className="category">
              <img src={buildingIcon} alt="..." />
              <span>advertise with us</span>
            </div>
            <div className="category">
              <img src={calculatorIcon} alt="..." />
              <span>mortage calculator</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-orange-900 w-20 h-2"></div>
    </div>
  );
};

export default SectionOne;
