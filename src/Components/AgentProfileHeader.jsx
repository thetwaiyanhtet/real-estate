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
        <div className=" flex space-x-5 justify-between items-baseline border rounded-xl bg-gray-100 p-7 px-10 m-10">
          <div className=" flex space-x-5">
            <img src={agentProfile} alt="..." width={100} />
            <div className=" space-y-3">
              <div className=" flex items-center space-x-3">
                <p className=" font-semibold text-xl">{firstData.name}</p>
                <img src={verified} alt="..." width={18} />
              </div>
              <p>{firstData.workFor}</p>
              <div className=" flex space-x-10 ">
                <div>{generateStar(firstData.rating)}</div>
                <p>{firstData.rating}</p>
                <p className=" underline font-semibold">
                  {firstData.recommendation} recommended
                </p>
              </div>
            </div>
          </div>
          <div className=" flex space-x-3">
            <EmailButton />
            <CallButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileHeader;
