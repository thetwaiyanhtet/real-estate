import React from "react";
import agentProfile from "./Assets/agent-profile-1.png";
import verified from "./Assets/verified.png";
import { generateStar } from "./Assets/agents";
import { CallButton, EmailButton } from "./Button";

const AgentProfileHeader = (props) => {
  const data = props.data;
  const firstData = data[0];

  return (
    <div>
      <div className=" capitalize">
        <div className=" md:flex justify-between items-baseline border rounded-xl bg-gray-100 p-7 md:px-10 m-10">
          <div className=" flex space-x-5">
            <img
              src={agentProfile}
              alt="..."
              className=" md:w-24 md:h-24 w-14 h-14"
            />
            <div className=" space-y-3">
              <div className=" flex items-center space-x-3">
                <p className=" font-semibold md:text-xl text-base">
                  {firstData.name}
                </p>
                <img src={verified} alt="..." width={18} />
              </div>
              <p className=" md:text-base text-sm">{firstData.workFor}</p>
              <div className=" md:flex md:space-x-10 ">
                <div className=" flex space-x-10
                 items-center">
                  <div>{generateStar(firstData.rating)}</div>
                  <p>{firstData.rating}</p>
                </div>
                <p className=" underline font-semibold">
                  {firstData.recommendation} recommended
                </p>
              </div>
            </div>
          </div>
          <div className=" flex space-x-3 md:mt-0 mt-5">
            <EmailButton />
            <CallButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileHeader;
