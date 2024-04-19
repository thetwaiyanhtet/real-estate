import React from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.png";
import SearchBar from "./Searchbar";
import profile from "./Assets/profile.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <Link to="/">
        <img src={logo} alt="..." width={140} />
      </Link>
      <ul className=" flex space-x-14 uppercase font-semibold">
        <li className=" flex items-center nav-menu">
          properties<ion-icon name="chevron-down-outline"></ion-icon>
        </li>
        <li className="nav-menu">wanted listing</li>
        <li className="nav-menu">
          <Link to="/agent">agents</Link>
        </li>
        <li className="nav-menu">
          <Link to="/propertyGuide">property resources</Link>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </li>
        <li className="nav-menu">faqs</li>
        <li className="nav-menu">contact</li>
      </ul>
      <SearchBar />
      <div className=" flex space-x-3 justify-center items-center ">
        <div className="text-2xl cursor-pointer">
          <ion-icon name="globe-outline"></ion-icon>
        </div>
        <select name="language" id="" className="outline-none mb-2">
          <option value="EN">EN</option>
          <option value="MM">MM</option>
        </select>
      </div>
      <img src={profile} alt="..." />
    </div>
  );
};

export default Navbar;
