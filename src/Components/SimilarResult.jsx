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

const SimilarResult = () => {
  // State to track the color of the heart icon
  const [heartColor, setHeartColor] = useState("white");

  // Function to handle button click and change heart icon color
  const handleButtonClick = () => {
    // Toggle the color between black and blue (for example)
    const newColor = heartColor === "white" ? "skyblue" : "white";
    setHeartColor(newColor);
  };

  return (
    <div>
      <div className=" capitalize flex flex-col items-center space-y-7 my-3">
        <div className=" bg-orange-900 w-20 h-2"></div>
        <h1>more like this</h1>
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
                <div className=" font-bold text-xl">
                  {apartment.description}
                </div>
                <div className=" font-bold text-orange-900 text-2xl">
                  {apartment.price}
                </div>
                <div className=" flex space-x-4">
                  <div className=" spec">
                    <img src={bed} alt="..." width={30} />
                    <div>Bedrooms: {apartment.bedrooms}</div>
                  </div>
                  <div className=" spec">
                    <img src={bathTub} alt="..." width={30} />
                    <div>Bathrooms: {apartment.bathrooms}</div>
                  </div>
                  <div className=" spec">
                    <img src={area} alt="..." width={30} />
                    <div>Area: {apartment.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarResult;
