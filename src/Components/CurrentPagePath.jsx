import React from "react";
import { BiHome } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const CurrentPagePath = () => {
  return (
    <div>
      <div className=" flex items-center space-x-5 capitalize bg-gray-100 p-4 pl-9">
        <BiHome className=" size-6" />
        <div className=" flex space-x-2 items-center">
          <div className=" opacity-70 cursor-pointer">
            <Link to="/">home</Link>
          </div>
          <div className=" flex space-x-2 cursor-pointer">
            <LiaGreaterThanSolid />
            <span>properties for rent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPagePath;
