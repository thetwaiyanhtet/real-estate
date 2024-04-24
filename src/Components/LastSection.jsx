import React from "react";
import Button from "./Button";
import buildingOne from "./Assets/building-1.png";
import buildingTwo from "./Assets/building-2.png";
import buildingThree from "./Assets/building-3.png";
import { GrLocation } from "react-icons/gr";
import { IoArrowForward } from "react-icons/io5";

const LastSection = () => {
  const projects = [
    {
      name: "grand dunman",
      location: "dunman road",
      totalUnits: "101",
    },
    {
      name: "lentor mansion",
      location: "mandai/upper thomas,north",
      totalUnits: "148",
    },
    {
      name: "lentoria",
      location: "east coast",
      totalUnits: "234",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-16 capitalize">
        <h1 className=" text-2xl font-semibold md:text-3xl">latest projects</h1>
        <div className=" flex gap-5 md:gap-10 flex-wrap items-center justify-center p-5">
          {projects.map((project, index) => (
            <div className=" project-card">
              <div className=" bg-gray-600 w-36 p-3 text-xl text-white  absolute top-3">
                new project
              </div>
              <div key={index} className=" space-y-1">
                <img src={buildingOne} alt="..." />
                <div className=" flex justify-between items-center">
                  <p className=" flex text-2xl font-semibold">{project.name}</p>
                  <IoArrowForward className=" size-6 hover:scale-125" />
                </div>
                <div className=" flex justify-between">
                  <div className=" flex space-x-3">
                    <GrLocation />
                    <p>{project.location}</p>
                  </div>
                  <p>
                    <span>{project.totalUnits}</span> Units
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button b_name="More Property" />
      </div>
    </div>
  );
};

export default LastSection;
