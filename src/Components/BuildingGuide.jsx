import React from "react";
import { ImLocation } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import locations from "./Assets/locations";
import imgOne from "./Assets/district-7.png";
import Button from "./Button";

const BuildingGuide = () => {
  return (
    <div>
      <div className=" capitalize flex flex-col justify-center items-center">
        <h1 className=" text-center">building guide</h1>
        <div className=" flex my-5 space-x-3">
          <div className=" flex bg-gray-100 rounded-full p-3 w-44 items-center justify-between">
            <div className=" flex space-x-3">
              <FaHouse />
              <select
                name="type"
                id="type"
                className=" outline-none bg-transparent appearance-none"
              >
                <option value="condo">Condo</option>
                <option value="flat">Flat</option>
              </select>
            </div>
            <label htmlFor="type">
              <BiChevronDown size={25} />
            </label>
          </div>
          <div className="flex  space-x-3">
            <div className=" border rounded-full bg-gray-100 p-3 flex w-96 space-x-3 ">
              <ImLocation />
              <input
                type="text"
                className=" outline-none bg-transparent"
                placeholder="Find by District"
              />
            </div>
            <button className=" bg-orange-900 p-3 w-36 border rounded-full text-white">
              Search
            </button>
          </div>
        </div>
        <div className=" flex flex-wrap p-5 my-7 justify-center gap-10">
          {locations.map((location, index) => (
            <div key={index} className=" space-y-3">
              <img src={imgOne} alt="..." />
              <p className=" font-semibold">{location.location}</p>
            </div>
          ))}
        </div>
        <Button b_name="Load More" />
      </div>
    </div>
  );
};

export default BuildingGuide;
