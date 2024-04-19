import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MortageCalculator from "../Components/MortageCalculator";
import MortageBlogs from "../Components/MortageBlogs";

const MortagePage = () => {
  const [menu, setMenu] = useState("calculator");

  return (
    <div>
      <Navbar />
      <div className=" flex items-center space-x-5 capitalize bg-gray-100 p-4 pl-9">
        <BiHome className=" size-6" />
        <div className=" flex space-x-2 items-center">
          <div className=" opacity-70 cursor-pointer">
            <Link to="/">home</Link>
          </div>
          <div className=" flex space-x-2 cursor-pointer">
            <LiaGreaterThanSolid />
            <Link to="/agent">
              <span>property guide</span>
            </Link>
          </div>
        </div>
      </div>
      <div className=" my-7 mx-20">
        <ul className=" flex space-x-7">
          <li
            className={` cate-menu ${
              menu === "calculator" ? "text-orange-900" : ""
            }`}
            onClick={() => setMenu("calculator")}
          >
            MORTAGE CALCULATOR
            {menu === "calculator" && (
              <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
            )}
          </li>
          <li
            className={` cate-menu ${
              menu === "blogs" ? "text-orange-900" : ""
            }`}
            onClick={() => setMenu("blogs")}
          >
            MORTAGE BLOGS
            {menu === "blogs" && (
              <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
            )}
          </li>
        </ul>
      </div>
      {menu === "calculator" && <MortageCalculator />}
      {menu === "blogs" && <MortageBlogs/>}
      <Footer />
    </div>
  );
};

export default MortagePage;
