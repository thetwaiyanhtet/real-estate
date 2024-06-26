import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AgentProfileHeader from "../Components/AgentProfileHeader";
import PersonalInformation from "../Components/PersonalInformation";
import CompanyInfo from "../Components/CompanyInfo";
import Reliable from "../Components/Reliable";
import Available from "../Components/Available";
import Record from "../Components/Record";
import CompanyProperties from "../Components/CompanyProperties";
import agents from "../Components/Assets/agents";

const AgentDetailPage = () => {
  const [menu, setMenu] = useState("about");
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
            <div className=" opacity-70 flex space-x-2 cursor-pointer">
              <LiaGreaterThanSolid />
              <Link to="/agent">
                <span>find agents</span>
              </Link>
            </div>
            <div className=" flex space-x-2 cursor-pointer">
              <LiaGreaterThanSolid />
              <Link to="/agent/agent:id">
                <span>agent detail</span>
              </Link>
            </div>
          </div>
        </div>
        <AgentProfileHeader data={agents} />
        <div className=" p-3 px-10 capitalize">
          <ul className=" flex space-x-7">
            <li
              className={`cate-menu ${
                menu === "about" ? "text-orange-900" : ""
              }`}
              onClick={() => setMenu("about")}
            >
              about
              {menu === "about" && (
                <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
              )}
            </li>
            <li
              className={`cate-menu ${
                menu === "records" ? "text-orange-900" : ""
              }`}
              onClick={() => setMenu("records")}
            >
              property records
              {menu === "records" && (
                <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
              )}
            </li>
            <li
              className={`cate-menu ${
                menu === "properties" ? "text-orange-900" : ""
              }`}
              onClick={() => setMenu("properties")}
            >
              properties
              {menu === "properties" && (
                <hr className="mt-2 w-[80%] h-0.5 bg-orange-900" />
              )}
            </li>
          </ul>
        </div>
        <PersonalInformation data={agents} />
        <div className=" md:flex items-center md:space-x-10">
          <CompanyInfo />
          <Reliable />
          <Available />
        </div>
        <Record />
        <CompanyProperties />
        <Footer />
      </div>
    </div>
  );
};

export default AgentDetailPage;
