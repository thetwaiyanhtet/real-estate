import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className=" w-72 border rounded-3xl py-2 px-3 flex justify-center items-center space-x-3">
      <BiSearch className=" size-6" />
      <input
        type="text"
        placeholder="Search for something"
        className=" outline-none"
      />
    </div>
  );
};

export default Searchbar;
