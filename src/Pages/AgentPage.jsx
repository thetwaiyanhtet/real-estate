import React from "react";
import { BiHome } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBarForAgent from "../Components/SearchBarForAgent";
import AgentFilter from "../Components/AgentFilter";
import AgentFound from "../Components/AgentFound";

const AgentPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className=" flex items-center space-x-5 capitalize bg-gray-100 p-4 pl-9">
          <BiHome className=" size-6" />
          <div className=" flex space-x-2 items-center">
            <div className=" opacity-70 cursor-pointer">
              <Link to="/">home</Link>
            </div>
            <div className=" flex space-x-2 cursor-pointer">
              <LiaGreaterThanSolid />
              <Link to="">
                <span>find agents</span>
              </Link>
            </div>
          </div>
        </div>
        <SearchBarForAgent />
        <div className=" md:flex mt-12">
          <div className=" md:w-[30%]">
            <AgentFilter />
          </div>
          <div className=" md:w-[70%] md:p-0 p-5">
            <AgentFound />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AgentPage;
