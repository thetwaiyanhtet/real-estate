import React from "react";


const PersonalInformation = (props) => {
  const data = props.data;
  const firstData = data[0];
  return (
    <div>
      <div className=" capitalize mx-10 my-5">
        <div className=" mt-3">
          <p className=" text-2xl font-bold">personal infromation</p>
          <div className=" md:flex md:space-x-20 md:space-y-0 space-y-5 items-baseline">
            <div className=" space-y-5 mt-5">
              <div className=" flex">
                <p className=" w-40">specialization</p>
                <p>{firstData.specialization}</p>
              </div>
              <div className=" flex">
                <p className=" w-40">nationality</p>
                <p>{firstData.nationality}</p>
              </div>
              <div className=" flex">
                <p className=" w-40">language</p>
                <p>{firstData.language}</p>
              </div>
              <div className=" flex">
                <p className=" w-40">experience</p>
                <p>{firstData.exp}</p>
              </div>
              <div className=" flex">
                <p className=" w-40">social</p>
                <p className=" underline">{firstData.social}</p>
              </div>
            </div>
            <div className=" md:w-[65%] leading-7">
              <p>{firstData.briefInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
