import React, { useState } from "react";
import apartOne from "./Assets/apartment-1.png";
// import apartTwo from "./Assets/apartment-2.png";
// import apartThree from "./Assets/apartment-3.png";
// import apartFour from './Assets/apartment-4.png';
// import apartFive from './Assets/apartment-5.png';
// import apartSix from "./Assets/apartment-6.png";
import apartments from "./Assets/apartment";
import bed from "./Assets/bed.png";
import bathTub from "./Assets/bath-tub.png";
import area from "./Assets/maximize 1.png";
import { AiFillHeart } from "react-icons/ai";
import Button from "./Button";

const CategoryMenu = () => {
  const [menu, setMenu] = useState("residential");

  return (
    <>
      <li
        className={`cate-menu ${
          menu === "residential" ? "text-orange-900" : ""
        }`}
        onClick={() => setMenu("residential")}
      >
        residential{" "}
        {menu === "residential" && (
          <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
        )}
      </li>
      <li
        className={`cate-menu ${
          menu === "commercial" ? "text-orange-900" : ""
        }`}
        onClick={() => setMenu("commercial")}
      >
        commercial{" "}
        {menu === "commercial" && (
          <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
        )}
      </li>
      <li
        className={`cate-menu ${menu === "land" ? "text-orange-900" : ""}`}
        onClick={() => setMenu("land")}
      >
        land{" "}
        {menu === "land" && <hr className="mt-2 w-[80%] h-1 bg-orange-900" />}
      </li>
      <li
        className={`cate-menu ${
          menu === "apartments" ? "text-orange-900" : ""
        }`}
        onClick={() => setMenu("apartments")}
      >
        apartments{" "}
        {menu === "apartments" && (
          <hr className="mt-2 w-[80%] h-1 bg-orange-900" />
        )}
      </li>
      <li
        className={`cate-menu ${menu === "house" ? "text-orange-900" : ""}`}
        onClick={() => setMenu("house")}
      >
        house{" "}
        {menu === "house" && <hr className="mt-2 w-[80%] h-1 bg-orange-900" />}
      </li>
      <li
        className={`cate-menu ${menu === "office" ? "text-orange-900" : ""}`}
        onClick={() => setMenu("office")}
      >
        office{" "}
        {menu === "office" && <hr className="mt-2 w-[80%] h-1 bg-orange-900" />}
      </li>
    </>
  );
};

const SectionTwo = (props) => {
  // State to track the color of the heart icon
  const [heartColor, setHeartColor] = useState("white");

  // Function to handle button click and change heart icon color
  const handleButtonClick = () => {
    // Toggle the color between black and blue (for example)
    const newColor = heartColor === "white" ? "skyblue" : "white";
    setHeartColor(newColor);
  };

  return (
    <div className=" capitalize flex flex-col items-center space-y-7 my-3">
      <div className=" flex items-center">
        <h1 className=" text-xl md:text-4xl font-semibold">listing of over 5,024 properties ( for rent ) </h1>
        <span className=" text-2xl mt-3">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-5 space-y-0 md:space-x-10 md:text-xl text-base gap-5">
        <CategoryMenu />
      </div>
      <div>
        <div className="flex flex-wrap p-8 gap-12 gap-y-16 items-center justify-center">
          {apartments.map((apartment, index) => (
            <div key={index} className=" relative space-y-3">
              {/* <img src={apartment.image} alt={apartment.description} /> */}
              <img src={apartOne} alt="..." className=" hover:scale-105" />
              <button
                className=" absolute top-0 right-7 "
                onClick={handleButtonClick}
              >
                <AiFillHeart
                  className="text-2xl text-white"
                  style={{ color: heartColor }}
                />
              </button>
              <div>{apartment.location}</div>
              <div className=" font-bold text-xl">{apartment.description}</div>
              <div className=" font-bold text-orange-900 text-2xl">
                {apartment.price}
              </div>
              <div className=" flex space-x-4 text-xs md:text-base">
                <div className=" spec">
                  <img src={bed} alt="..." className=" md:w-7 w-5" />
                  <div>Bedrooms: {apartment.bedrooms}</div>
                </div>
                <div className=" spec">
                  <img src={bathTub} alt="..." className=" md:w-7 w-5" />
                  <div>Bathrooms: {apartment.bathrooms}</div>
                </div>
                <div className=" spec">
                  <img src={area} alt="..." className=" md:w-7 w-5" />
                  <div>Area: {apartment.area}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button b_name="More Property" />
    </div>
  );
};

export default SectionTwo;
