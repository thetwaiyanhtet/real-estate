import React from "react";
import MapButton from "./MapButton";
import SortByButton from "./SortByButton";
import { properties } from "./Assets/apartment";
import bed from "./Assets/bed.png";
import bathTub from "./Assets/bath-tub.png";
import area from "./Assets/maximize 1.png";
import SaveButton from "./SaveButton";
import ViewButton from "./ViewButton";
import buildingOne from "./Assets/List-Image-1.png";
import ResultSelector from "./ResultSelector";
import { Link } from "react-router-dom";

const SearchResult = () => {
  return (
    <div>
      <div className=" capitalize -mt-6">
        <h1>properties for rent in singapore</h1>
        <p>
          <span>16,823</span> properties found for rent
        </p>
        <div className=" my-5 flex justify-between w-[89.5%]">
          <ResultSelector />
          <div className=" flex space-x-3">
            <MapButton />
            <SortByButton />
          </div>
        </div>
        <div className=" gap-14 flex flex-wrap my-10 w-[95%]">
          {properties.map((property, index) => (
            <Link to="/propertyListing/propertyDetail">
              <div key={index} className=" space-y-3">
                <img src={buildingOne} alt="..." />
                <p>{property.location}</p>
                <p className=" font-semibold text-2xl">
                  {property.description}
                </p>
                <p className=" text-xl font-semibold text-orange-900">
                  {" "}
                  {property.price}
                </p>
                <div className=" flex space-x-4">
                  <div className=" spec">
                    <img src={bed} alt="..." width={30} />
                    <div>Bedrooms: {property.bedrooms}</div>
                  </div>
                  <div className=" spec">
                    <img src={bathTub} alt="..." width={30} />
                    <div>Bathrooms: {property.bathrooms}</div>
                  </div>
                  <div className=" spec">
                    <img src={area} alt="..." width={30} />
                    <div>Area: {property.area}</div>
                  </div>
                </div>
                <div className=" flex justify-between items-center">
                  <div className=" flex space-x-5">
                    <SaveButton />
                    <ViewButton />
                  </div>
                  <img src={require(`${property.ownedBy}`).default} alt="..." />
                </div>
              </div>
            </Link>
          ))}
          <div className=" flex items-end w-full justify-end mr-20">
            <button className=" text-orange-900 border p-3 w-40 h-12 border-orange-900">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
