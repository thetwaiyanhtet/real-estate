import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./Assets/logo.png";
import profile from "./Assets/profile.png";
import { BiSearch } from "react-icons/bi";
import { Menu, X } from "lucide-react";

const Searchbar = () => {
  return (
    <>
      <BiSearch className=" size-6" />
      <input
        type="text"
        placeholder="Search for something"
        className=" outline-none"
      />
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavLink className=" flex items-center nav-menu">
        properties<ion-icon name="chevron-down-outline"></ion-icon>
      </NavLink>
      <NavLink className="nav-menu">wanted listing</NavLink>
      <NavLink className="nav-menu" to="/agent">
        agents
      </NavLink>
      <NavLink className="nav-menu" to="/propertyGuide">
        property resources
        <ion-icon name="chevron-down-outline"></ion-icon>
      </NavLink>
      <NavLink className="nav-menu">faqs</NavLink>
      <NavLink className="nav-menu">contact</NavLink>
    </>
  );
};

const Language = () => {
  return (
    <div className="hidden md:flex space-x-3 justify-center items-center ">
      <div className="text-2xl cursor-pointer">
        <ion-icon name="globe-outline"></ion-icon>
      </div>
      <select name="language" id="" className="outline-none mb-2">
        <option value="EN">EN</option>
        <option value="MM">MM</option>
      </select>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" border-b-2 top-0 sticky bg-white z-20">
      <div className="flex justify-between items-center p-6 ">
        <NavLink to="/">
          <img src={logo} alt="..." width={140} />
        </NavLink>
        <div className=" space-x-14 uppercase font-semibold hidden md:flex">
          <NavLinks />
        </div>
        <div className=" w-72 border rounded-3xl py-2 px-3 justify-center items-center space-x-3 hidden md:flex">
          <Searchbar />
        </div>
        <Language />
        <img src={profile} alt="..." className=" hidden md:flex" />

        <button className="md:hidden flex" onClick={toggleNavBar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="space-y-7 flex items-center flex-col mb-7 transition-transform duration-75 ease-in-out">
          <div className="uppercase font-semibold space-y-3 flex items-center flex-col">
            <NavLinks />
          </div>
          <div className=" w-72 border rounded-3xl py-2 px-3 justify-center items-center space-x-3 flex">
            <Searchbar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
