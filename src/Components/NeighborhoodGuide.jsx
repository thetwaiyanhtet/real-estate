import React from 'react';
import { ImLocation } from "react-icons/im";
import locations from "./Assets/locations";
import imgOne from "./Assets/district-7.png";
import Button from "./Button";


const NeighborhoodGuide = () => {
  return (
    <div>
      <div className=" capitalize flex flex-col justify-center items-center">
        <h1 className=" text-center">neighborhood guide</h1>
        <div className="flex  space-x-3 my-5">
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
}

export default NeighborhoodGuide
