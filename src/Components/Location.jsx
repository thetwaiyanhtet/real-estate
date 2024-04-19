import React from "react";
import location from "./Assets/location.png";
import locationIcon from "./Assets/l-icon-1.png";
import schoolIcon from "./Assets/l-icon-2.png";
import hospitalIcon from "./Assets/l-icon-3.png";
import mallIcon from "./Assets/l-icon-4.png";
import parkIcon from "./Assets/l-icon-5.png";
import { IoArrowForward } from "react-icons/io5";

const Location = () => {
  return (
    <div>
      <div className=" capitalize  border-b pb-7 w-[55%]">
        <h1>location</h1>
        <div className=" flex space-x-5">
          <div className=" relative">
            <img src={location} alt="..." width={150} />
            <img
              src={locationIcon}
              alt="..."
              width={45}
              className=" absolute top-14 left-12"
            />
            <div className=" flex justify-between my-4">
              <p>view location</p>
              <IoArrowForward />
            </div>
          </div>
          <div className=" relative">
            <img src={location} alt="..." width={150} />
            <img
              src={schoolIcon}
              alt="..."
              width={45}
              className=" absolute top-14 left-12"
            />
            <div className=" flex justify-between my-4">
              <p>nearby school</p>
              <IoArrowForward />
            </div>
          </div>
          <div className=" relative">
            <img src={location} alt="..." width={150} />
            <img
              src={hospitalIcon}
              alt="..."
              width={45}
              className=" absolute top-14 left-12"
            />
            <div className=" flex justify-between my-4">
              <p>nearby hospital</p>
              <IoArrowForward />
            </div>
          </div>
          <div className=" relative">
            <img src={location} alt="..." width={150} />
            <img
              src={mallIcon}
              alt="..."
              width={45}
              className=" absolute top-14 left-12"
            />
            <div className=" flex justify-between my-4">
              <p>nearby malls</p>
              <IoArrowForward />
            </div>
          </div>
          <div className=" relative">
            <img src={location} alt="..." width={150} />
            <img
              src={parkIcon}
              alt="..."
              width={45}
              className=" absolute top-14 left-12"
            />
            <div className=" flex justify-between my-4">
              <p>nearby parks</p>
              <IoArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
