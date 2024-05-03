import React, { useState } from "react";
import propertyDetail from "../Components/Assets/propertyDetail";

const PropertyInformation = () => {
  const [propMenu, setPropMenu] = useState("generalInformation");
  const data = propertyDetail[0];

  return (
    <div>
      <div className=" border-b w-[55%]">
        <h1 className=" font-semibold text-lg md:text-3xl">property information</h1>
        <ul className=" flex space-x-5 ">
          <li
            className={`${
              propMenu === "generalInformation" ? "proprerty-menu" : ""
            } p-2`}
            onClick={() => setPropMenu("generalInformation")}
          >
            general informations
          </li>
          <li
            className={`${
              propMenu === "buildingInformations" ? "proprerty-menu" : ""
            } p-2`}
            onClick={() => setPropMenu("buildingInformations")}
          >
            building informations
          </li>
          <li
            className={`${
              propMenu === "indoorFeatures" ? "proprerty-menu" : ""
            } p-2`}
            onClick={() => setPropMenu("indoorFeatures")}
          >
            indoor features
          </li>
          <li
            className={`${
              propMenu === "outdoorFeatures" ? "proprerty-menu" : ""
            } p-2`}
            onClick={() => setPropMenu("outdoorFeatures")}
          >
            outdoor features
          </li>
        </ul>
        <div className=" space-y-3 my-5">
          <div className=" flex justify-start">
            <p className=" w-40 opacity-70">property id</p>
            <span> {data.id}</span>
          </div>
          <div className=" flex justify-start">
            <p className=" w-40 opacity-70">property type</p>
            <span> {data.type}</span>
          </div>
          <div className=" flex justify-start">
            <p className=" w-40 opacity-70">purpose for</p>
            <span> {data.purpose}</span>
          </div>
          <div className=" flex justify-start">
            <p className=" w-40 opacity-70">rooms</p>
            <span>
              {data.bedrooms} bedrooms , {data.bathrooms} bathrooms
            </span>
          </div>
          <div className=" flex justify-start">
            <p className=" w-40 opacity-70">address</p>
            <span> {data.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
