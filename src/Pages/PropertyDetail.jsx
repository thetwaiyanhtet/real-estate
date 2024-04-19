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
        <div className=" flex items-center space-x-5 capitalize bg-gray-100 p-4 pl-9">
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
          <div className=" flex gap-3">
            <img src={imgOne} alt="..." width={800} />
            <div className=" flex flex-wrap w-[900px] gap-3">
              <img src={imgTwo} alt="..." width={350} />
              <img src={imgThree} alt="..." width={350} />
              <img src={imgFour} alt="..." width={350} />
              <img src={imgFive} alt="..." width={350} />
            </div>
          </div>
          <div className=" flex justify-between items-center my-7">
            <ul className="flex space-x-10 text-xl">
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
              <div className=" border-b space-y-4 py-5 w-[55%]">
                <div className=" space-y-7">
                  <p className=" text-xl font-bold">{data.location}</p>
                  <p className=" font-semibold text-2xl text-orange-900">
                    {data.price} / Yearly
                  </p>
                  <div className=" flex space-x-4">
                    <div className=" spec border p-2">
                      <img src={bed} alt="..." width={30} />
                      <div>Bedrooms: {data.bedrooms}</div>
                    </div>
                    <div className=" spec border p-2">
                      <img src={bathTub} alt="..." width={30} />
                      <div>Bathrooms: {data.bathrooms}</div>
                    </div>
                    <div className=" spec border p-2">
                      <img src={area} alt="..." width={30} />
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
