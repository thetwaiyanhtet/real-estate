import React from 'react'
import verifiedUnfilled from "./Assets/verified-unfilled.png";

const Available = () => {
  return (
    <div>
      <div className=" text-sm md:text-base bg-green-100 md:p-7 p-4 rounded-lg m-5">
        <div className=" space-y-3">
          <div className=" flex items-center space-x-2">
            <img src={verifiedUnfilled} alt="..." width={30} />
            <p className=" text-green-600 font-semibold text-lg">
              Available & Accurate Listing
            </p>
          </div>
          <p className=" md:ml-9 md:w-96">
            We can assure that the description and photos for this property are
            very accurate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Available
