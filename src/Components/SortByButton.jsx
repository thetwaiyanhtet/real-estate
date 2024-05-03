import React from "react";
import { HiSortDescending } from "react-icons/hi";

const SortByButton = () => {
  return (
    <div>
      <div className=" flex space-x-3 p-3 items-center border w-36 md:w-44 md:text-base text-sm">
        <HiSortDescending size={25} />
        <span className="mr-2">Sort:</span>
        <select name="sortby" id="" className="appearance-none outline-none">
          <option value="latest">Latest</option>
        </select>
      </div>
    </div>
  );
};

export default SortByButton;
