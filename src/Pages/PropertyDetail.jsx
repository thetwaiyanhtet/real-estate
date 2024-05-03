import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import CurrentPagePath from "../Components/CurrentPagePath";
import { BiHome } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import propertyDetail from "../Components/Assets/propertyDetail";
import Button from "../Components/Button";
import bed from "../Components/Assets/bed.png";
import bathTub from "../Components/Assets/bath-tub.png";
import area from "../Components/Assets/maximize 1.png";
import Accessibility from "../Components/Accessibility";
import Location from "../Components/Location";
import CalculateMortage from "../Components/CalculateMortage";
import SimilarResult from "../Components/SimilarResult";
import imgOne from "../Components/Assets/image-1.png";
import imgTwo from "../Components/Assets/image-2.png";
import imgThree from "../Components/Assets/image-3.png";
import imgFour from "../Components/Assets/image-4.png";
import imgFive from "../Components/Assets/image-5.png";
import PropertyInformation from "../Components/PropertyInformation";
import AgentCard from "../Components/AgentCard";
import Reliable from "../Components/Reliable";
import PopularSearch from "../Components/PopularSearch";

const PropertyDetail = () => {
  const [menu, setMenu] = useState("overview");
  const data = propertyDetail[0];

  return (
    <div>
      <div>
        <Navbar />
        <div className=" flex items-center space-x-5 capitalize bg-gray-100 p-4 pl-9 md:text-base text-sm">
          <BiHome className=" size-6" />
          <div className=" flex space-x-2 items-center">
            <div className=" opacity-70 cursor-pointer">
              <Link to="/">home</Link>
            </div>
            <div className=" opacity-70 flex space-x-2 cursor-pointer">
              <LiaGreaterThanSolid />
              <Link to="/propertyListing">
                <span>properties for rent</span>
              </Link>
            </div>
            <div className=" flex space-x-2 cursor-pointer">
              <LiaGreaterThanSolid /> <span>Detail</span>
            </div>
          </div>
        </div>
        <div className="p-7 pl-9 capitalize">
          <div className=" md:flex gap-3">
            <img src={imgOne} alt="..." width={800} />
            <div className=" flex flex-wrap md:w-[900px] md:mt-0 mt-3 gap-3">
              <img src={imgTwo} alt="..." className=" md:h-auto h-20" />
              <img src={imgThree} alt="..." className=" md:h-auto h-20" />
              <img src={imgFour} alt="..." className=" md:h-auto h-20" />
              <img src={imgFive} alt="..." className=" md:h-auto h-20" />
            </div>
          </div>
          <div className=" flex justify-between items-center my-7">
            <ul className="flex flex-wrap md:space-x-10 md:text-xl text-sm">
              <li
                className={`cate-menu ${
                  menu === "overview" ? "text-orange-900" : ""
                }`}
                onClick={() => setMenu("overview")}
              >
                Overview
                {menu === "overview" && (
                  <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
                )}
              </li>
              <li
                className={`cate-menu ${
                  menu === "propertyInformation" ? "text-orange-900" : ""
                }`}
                onClick={() => setMenu("propertyInformation")}
              >
                Property Information
                {menu === "propertyInformation" && (
                  <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
                )}
              </li>
              <li
                className={`cate-menu ${
                  menu === "a&a" ? "text-orange-900" : ""
                }`}
                onClick={() => setMenu("a&a")}
              >
                Amenities & Accessibility
                {menu === "a&a" && (
                  <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
                )}
              </li>
              <li
                className={`cate-menu ${
                  menu === "location" ? "text-orange-900" : ""
                }`}
                onClick={() => setMenu("location")}
              >
                Location
                {menu === "location" && (
                  <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
                )}
              </li>
              <li
                className={`cate-menu ${
                  menu === "others" ? "text-orange-900" : ""
                }`}
                onClick={() => setMenu("others")}
              >
                Others
                {menu === "others" && (
                  <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
                )}
              </li>
            </ul>
            <Button b_name="Contact Now" />
          </div>
          <div className=" flex ">
            <div>
              <div className=" border-b space-y-4 py-5 md:w-auto w-[70%]">
                <div className=" space-y-7">
                  <p className=" md:text-xl font-bold">{data.location}</p>
                  <p className=" font-semibold md:text-2xl text-orange-900">
                    {data.price} / Yearly
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-5 md:text-base text-xs">
                    <div className=" spec border md:w-auto w-32 p-2">
                      <img src={bed} alt="..." className=" md:w-7 w-5" />
                      <div>Bedrooms: {data.bedrooms}</div>
                    </div>
                    <div className=" spec border md:w-auto w-32 p-2">
                      <img src={bathTub} alt="..." className=" md:w-7 w-5" />
                      <div>Bathrooms: {data.bathrooms}</div>
                    </div>
                    <div className=" spec border md:w-auto w-32 p-2">
                      <img src={area} alt="..." className=" md:w-7 w-5" />
                      <div>Area: {data.area}</div>
                    </div>
                  </div>
                  <p className=" text-xl font-semibold">{data.title}</p>
                  <p>{data.description}</p>
                </div>
                <p>read more...</p>
              </div>
              <PropertyInformation />
            </div>
            <div>
              <AgentCard />
              <Reliable />
              <PopularSearch />
            </div>
          </div>
          <Accessibility />
          <Location />
          <CalculateMortage />
          <SimilarResult />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PropertyDetail;
