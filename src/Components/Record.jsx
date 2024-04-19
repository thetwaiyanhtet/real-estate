import React from "react";

const Record = () => {
  return (
    <div>
      <div className=" capitalize mx-10 my-10">
        <div>
          <p className=" font-bold text-2xl">record ( past 12 months )</p>
          <div className=" flex items-center justify-around bg-gray-100 px-5 py-7 rounded-xl my-7 text-center">
            <div>
              <p className=" text-xl font-semibold mb-2">390</p>
              <p>property listing</p>
            </div>
            <div>
              <p className=" text-xl font-semibold mb-2">287</p>
              <p>sold out</p>
            </div>
            <div>
              <p className=" text-xl font-semibold mb-2">214 sell</p>
              <p>deal type</p>
            </div>
            <div>
              <p className=" text-xl font-semibold mb-2">73 rent</p>
              <p>deal type</p>
            </div>
            <div>
              <p className=" text-xl font-semibold mb-2">1.2 million</p>
              <p>deal amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
