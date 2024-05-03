import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";

const SearchFilter = () => {
  return (
    <div>
      <div className=" capitalize my-7 flex md:flex-row flex-col md:items-center justify-around md:px-3.5 pl-10 md:space-y-0 space-y-5 ">
        <div className=" space-y-3">
          <p>location ( city or State )</p>
          <div className=" flex space-x-5">
            <div className=" flex p-3 bg-gray-100 w-72 space-x-3">
              <FaLocationDot />
              <input
                type="text"
                placeholder="Enter Loaction"
                className=" bg-gray-100 outline-none"
              />
            </div>
          </div>
        </div>
        <div className=" space-y-8">
          <p>{""}</p>
          <select
            name="type"
            id=""
            className=" bg-red-200 p-3 px-5 outline-none w-32"
          >
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
          </select>
        </div>
        <div className=" space-y-3">
          <p>property type</p>
          <select
            name="porpertytype"
            id=""
            className="border outline-none p-3 px-5 w-52"
          >
            <option value="residential">Residential</option>
          </select>
        </div>
        <div className="space-y-3">
          <p>bedrooms & baths</p>
          <select
            name="bedAndBath"
            id=""
            className="border outline-none p-3 px-5 w-52"
          >
            <option value="any">Any</option>
          </select>
        </div>
        <div className="space-y-3">
          <p>price</p>
          <select
            name="price"
            id=""
            className="border outline-none p-3 px-5 w-52"
          >
            <option value="any">Any</option>
          </select>
        </div>
        <div className=" mt-8">
          <select name="filter" id="" className="border outline-none p-3 px-5">
            <option value="advancedFilter">Advanced Filter</option>
          </select>
        </div>
        <div className=" mt-8">
          <Button b_name="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
