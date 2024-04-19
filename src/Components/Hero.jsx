import React from "react";
import heroBackground from "./Assets/hero-background.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className=" flex flex-col justify-center items-center">
          <h1 className="capitalize mt-20 text-5xl">
            search today, move tomorrow
          </h1>
          <div className=" backdrop-blur-md rounded-md p-10 space-y-7 mt-10">
            <div className=" flex space-x-7">
              <div>
                <p className="">Location (State)</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Any Location ( State )
                  </option>
                  <option value="">Yangon</option>
                </select>
              </div>
              <div>
                <p className="">Location (City)</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Any Location ( City )
                  </option>
                  <option value="">Yangon</option>
                </select>
              </div>
              <div>
                <p className="">Search For</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Rent
                  </option>
                  <option value="">Buy</option>
                </select>
              </div>
              <div>
                <p className="">Property Type</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Any Type
                  </option>
                  <option value="">Exclusive</option>
                </select>
              </div>
            </div>
            <div className=" flex space-x-7">
              <div>
                <p className="">Bedrooms</p>
                <select name="state" id="state" className=" search-box ">
                  <option value="" selected>
                    Any
                  </option>
                  <option value=""></option>
                </select>
              </div>
              <div>
                <p className="">Price ( Min )</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Any
                  </option>
                  <option value=""></option>
                </select>
              </div>
              <div>
                <p className="">Price ( Max )</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Any
                  </option>
                  <option value=""></option>
                </select>
              </div>
              <div>
                <p className="">Property Type</p>
                <select name="state" id="state" className=" search-box">
                  <option value="" selected>
                    Any Type
                  </option>
                  <option value="">Exclusive</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" capitalize flex justify-between w-[1200px] mt-10">
            <p className="search">search by typing</p>
            <p className="search">advanced search</p>
            <p className="search">map search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
