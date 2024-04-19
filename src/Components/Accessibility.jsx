import React from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GrElevator } from "react-icons/gr";
import { Ri24HoursLine } from "react-icons/ri";
import { BiSolidCar } from "react-icons/bi";

const Accessibility = () => {
  return (
    <div>
      <div className=" border-b w-[55%] pb-7">
        <h1>amentites & accessibility</h1>
        <div>
          <div className=" flex space-x-10">
            <div className=" flex items-center space-x-3">
              <FaSwimmingPool size={25} />
              <p>pool</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CgGym size={25} />
              <p>gym</p>
            </div>
            <div className=" flex items-center space-x-3">
              <BiSolidCar size={25} />
              <p>parking</p>
            </div>
            <div className=" flex items-center space-x-3">
              <GrElevator size={25} />
              <p>elevator</p>
            </div>
            <div className=" flex items-center space-x-3">
              <Ri24HoursLine size={25} />
              <p>24 hours electricity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
