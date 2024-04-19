import React from "react";
import { Link } from "react-router-dom";
import SortByButton from "./SortByButton";
import agents from "./Assets/agents";
import verified from "./Assets/verified.png";
import agentProfileOne from "./Assets/agent-profile-1.png";
import { generateStar } from "./Assets/agents";

const AgentFound = () => {
  return (
    <div>
      <div className=" capitalize">
        <div className=" flex justify-between">
          <div className="space-y-2">
            <p className=" text-2xl font-semibold">agents found in singapore</p>
            <p>
              <span>154 </span> agents found
            </p>
          </div>
          <div className="mr-10">
            <SortByButton />
          </div>
        </div>
        <div className=" space-y-7 mt-5">
          {agents.map((agent, index) => (
            <div
              key={index}
              className=" space-y-2 justify-between  flex items border-b py-5 pb-10"
            >
              <div className=" flex">
                <div className=" w-24">
                  <img src={agentProfileOne} alt="..." width={70} />
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
              <div className=" rounded-full p-2.5 px-5 border h-10 mr-10">
                <button>
                  <Link to="/agent/agent:id">View Profile</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex mt-10 pr-10 w-full justify-end ">
          <button className=" text-orange-900 border p-3 w-40 h-12 border-orange-900">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentFound;
