import React from "react";
import Button from "./Button";
import buildingOne from "./Assets/building-1.png";
import buildingTwo from "./Assets/building-2.png";
import buildingThree from "./Assets/building-3.png";
import { GrLocation } from "react-icons/gr";
import { IoArrowForward } from "react-icons/io5";

const LastSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-16 capitalize">
        <h1>latest projects</h1>
        <div className=" flex gap-10">
          <div className=" project-card">
            <div className=" bg-gray-600 w-36 p-3 text-xl text-white  absolute top-3">
              new project
            </div>
            <img src={buildingOne} alt="..."/>
            <div className=" space-y-1">
              <div className=" flex justify-between items-center">
                <p className=" flex text-2xl font-semibold">grand dunman</p>
                <IoArrowForward className=" size-6 hover:scale-125" />
              </div>
              <div className=" flex justify-between">
                <div className=" flex space-x-3">
                  <GrLocation />
                  <p>dunman road</p>
                </div>
                <p>
                  <span>101</span> Units
                </p>
              </div>
            </div>
          </div>
          <div className=" project-card">
            <div className=" bg-gray-600 w-36 p-3 text-xl text-white  absolute top-3">
              new project
            </div>
            <img src={buildingTwo} alt="..." />
            <div className="space-y-1">
              <div className=" flex justify-between items-center">
                <p className=" flex text-2xl font-semibold">Lentor Mansion</p>
                <IoArrowForward className=" size-6 hover:scale-125" />
              </div>
              <div className=" flex justify-between">
                <div className=" flex space-x-3">
                  <GrLocation />
                  <p>Mandai/Upper Thomas,North</p>
                </div>
                <p>
                  <span>148</span> Units
                </p>
              </div>
            </div>
          </div>
          <div className=" project-card">
            <div className=" bg-gray-600 w-36 p-3 text-xl text-white  absolute top-3">
              new project
            </div>
            <img src={buildingThree} alt="..."  />
            <div className=" space-y-1">
              <div className=" flex justify-between items-center">
                <p className=" flex text-2xl font-semibold">Lentoria</p>
                <IoArrowForward className=" size-6 hover:scale-125" />
              </div>
              <div className=" flex justify-between">
                <div className=" flex space-x-3">
                  <GrLocation />
                  <p>East Coast</p>
                </div>
                <p>
                  <span>234</span> Units
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button b_name="More Property" />
      </div>
    </div>
  );
};

export default LastSection;
