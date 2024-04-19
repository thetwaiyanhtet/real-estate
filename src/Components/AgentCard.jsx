import React from "react";
import agent from "./Assets/agentProfile.png";
import verified from "./Assets/verified.png";
import star from "./Assets/star.png";
import { BsTelephone } from "react-icons/bs";
import { IoIosMail, IoMdArrowForward } from "react-icons/io";

const AgentCard = () => {
  return (
    <div>
      <div className=" capitalize border w-[500px] rounded-xl flex flex-col justify-center py-3">
        <div className=" flex items-center justify-around p-3">
          <div className=" flex items-center space-x-3">
            <img src={agent} alt="..." width={80} />
            <div className=" space-y-2">
              <div className=" flex space-x-3 items-center">
                <p className=" font-semibold text-lg">ryan besona</p>
                <img src={verified} alt="..." />
              </div>
              <div>
                <span>agent from </span>
                <span className=" underline text-orange-900">
                  fam properties
                </span>
              </div>
            </div>
          </div>
          <div className=" space-y-2">
            <img src={star} alt="..." width={25} />
            <p>5.0</p>
          </div>
        </div>
        <div className=" flex p-3 justify-center space-x-7">
          <div className=" flex items-center space-x-4 border p-3 px-5 w-44">
            <BsTelephone size={25} />
            <button>Call Now</button>
          </div>
          <div className=" flex items-center space-x-4 border p-3 px-5 w-44">
            <IoIosMail size={30} />
            <button>Message</button>
          </div>
        </div>
        <div className=" flex items-center justify-between p-3 px-14">
          <p className=" text-orange-900">view all properties</p>
          <IoMdArrowForward size={25} />
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
