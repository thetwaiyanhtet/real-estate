import React from "react";
import agents from "./Assets/agents";
import verified from "./Assets/verified.png";
import agentProfileOne from "./Assets/agent-profile-1.png";
import { generateStar } from "./Assets/agents";

const AgentSlideshow = () => {
  return (
    <div className=" capitalize mx-10 my-10">
      <p className=" text-2xl font-semibold">agents</p>
      <div className="flex space-x-5 mt-5 overflow-x-hidden">
        {agents.map((agent, index) => (
          <div
            key={index}
            className=" space-y-2 justify-between  flex items py-5 pb-10"
          >
            <div className=" flex space-x-3 w-[500px]">
              <div className=" w-24">
                <img src={agentProfileOne} alt="..." width={80} />
              </div>
              <div className=" space-y-2">
                <div className=" flex items-center space-x-3">
                  <p className=" font-semibold text-xl">{agent.name}</p>
                  <img src={verified} alt="..." width={18} />
                </div>
                <p>{agent.workFor}</p>
                <div className=" flex space-x-10  ">
                  <div className=" flex items-center space-x-2">
                    <div>{generateStar(agent.rating)}</div>
                    <p className="">{agent.rating}</p>
                  </div>
                  <p className=" underline font-semibold">
                    {agent.recommendation} recommended
                  </p>
                </div>
                <div className=" flex space-x-7">
                  <p className=" w-44">experiences</p>
                  <p>{agent.exp}</p>
                </div>
                <div className=" flex space-x-7">
                  <p className=" w-44">posted listing</p>
                  <p>{agent.postedListing}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentSlideshow;
