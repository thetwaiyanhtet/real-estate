import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AreaGuide from "../Components/AreaGuide";
import BuildingGuide from "../Components/BuildingGuide";
import NeighborhoodGuide from "../Components/NeighborhoodGuide";

const PropertyResourcePage = () => {
    const [menu, setMenu] = useState("area");
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
      <div className=" p-3 px-10 my-7 capitalize">
        <ul className=" flex space-x-7">
          <li
            className={`cate-menu ${menu === "area" ? "text-orange-900" : ""}`}
            onClick={() => setMenu("area")}
          >
            area guide
            {menu === "area" && (
              <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
            )}
          </li>
          <li
            className={`cate-menu ${
              menu === "building" ? "text-orange-900" : ""
            }`}
            onClick={() => setMenu("building")}
          >
            building guide
            {menu === "building" && (
              <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
            )}
          </li>
          <li
            className={`cate-menu ${
              menu === "neighborhood" ? "text-orange-900" : ""
            }`}
            onClick={() => setMenu("neighborhood")}
          >
            neighborhood guide
            {menu === "neighborhood" && (
              <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
            )}
          </li>
        </ul>
      </div>
      {menu === "area" && <AreaGuide />}
      {menu === "building" && <BuildingGuide />}
      {menu === "neighborhood" && <NeighborhoodGuide/>}
      <Footer />
    </div>
  );
};

export default PropertyResourcePage;
