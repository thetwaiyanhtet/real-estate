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
        <div className=" flex md:justify-between">
          <div className="space-y-2">
            <p className=" md:text-2xl text-lg font-semibold md:w-auto w-40">agents found in singapore</p>
            <p className=" text-sm md:text-base underline">
              <span>154 </span> agents found
            </p>
          </div>
          <div className="mr-10 ml-5">
            <SortByButton />
          </div>
        </div>
        <div className=" md:space-y-7 mt-5">
          {agents.map((agent, index) => (
            <div
              key={index}
              className=" space-y-2 items-center md:justify-between md:flex border-b py-5"
            >
              <div className=" flex">
                <div className=" mr-7">
                  <img src={agentProfileOne} alt="..." width={70} />
                </div>
                <div className=" space-y-2">
                  <div className=" flex items-center space-x-3">
                    <p className=" font-semibold text-base md:text-xl">{agent.name}</p>
                    <img src={verified} alt="..." width={18} />
                  </div>
                  <p className=" md:text-base text-sm">{agent.workFor}</p>
                  <div className=" flex space-x-10  ">
                    <div className=" flex items-center md:space-x-9">
                      <div>{generateStar(agent.rating)}</div>
                      <p className="">{agent.rating}</p>
                    </div>
                    <p className=" underline md:text-base text-sm font-semibold">
                      {agent.recommendation} recommended
                    </p>
                  </div>
                  <div className=" flex space-x-7 md:text-base text-sm">
                    <p className=" w-44">experiences</p>
                    <p>{agent.exp}</p>
                  </div>
                  <div className=" flex space-x-7">
                    <p className=" w-44">posted listing</p>
                    <p>{agent.postedListing}</p>
                  </div>
                </div>
              </div>
              <div className=" rounded-full md:text-base text-xs p-2 border md:w-32 text-center w-24 ml-20">
                <button>
                  <Link to="/agent/agent:id">View Profile</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex mt-10 pr-10 w-full justify-center md:justify-end ">
          <button className=" text-orange-900 border p-3 w-40 h-12 border-orange-900">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentFound;
