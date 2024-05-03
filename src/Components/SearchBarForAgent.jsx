import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";

const SearchBarForAgent = () => {
  return (
    <div>
      <div>
        <div className=" capitalize my-7 flex md:flex-row flex-col md:items-center justify-around px-3.5 md:space-y-0 space-y-5 ">
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
          <div className=" space-y-3">
            <p>agent name or company</p>
            <input
              type="text"
              className="border outline-none p-3 px-5 w-72 bg-gray-100"
              placeholder="Enter Name"
            />
          </div>
          <div className="space-y-3">
            <p>languages</p>
            <select
              name="language"
              id=""
              className="border outline-none p-3 px-5 w-52"
            >
              <option value="eng">English</option>
              <option value="mm">Myanmar</option>
              <option value="jpn">Japan</option>
            </select>
          </div>
          <div className="space-y-3">
            <p>work for</p>
            <select
              name="price"
              id=""
              className="border outline-none p-3 px-5 w-52"
            >
              <option value="any">Any</option>
            </select>
          </div>
          <div className="space-y-3">
            <p>experiences</p>
            <select
              name="exp"
              id=""
              className="border outline-none p-3 px-5 w-52"
            >
              <option value="any">Any</option>
            </select>
          </div>
          <div className=" mt-8">
            <Button b_name="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarForAgent;
