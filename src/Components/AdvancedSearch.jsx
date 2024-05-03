import React from "react";

const AdvancedSearch = () => {
  return (
    <div>
      <div className=" px-10 pb-10 capitalize flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-y-5">
        <div className=" space-y-3">
          <p>rent type</p>
          <select
            name="rentType"
            id=""
            className="border outline-none p-3 px-5 w-[300px] md:w-72"
          >
            <option value="monthly">Monthly Rent</option>
            <option value="yearly">Yearly Rent</option>
          </select>
        </div>
        <div className=" space-y-3">
          <p>agency or company</p>
          <input
            type="text"
            className="border outline-none p-3.5 px-5 w-[300px] md:w-[378px]"
            placeholder="Type agency or company"
          />
        </div>
        <div className=" space-y-3">
          <p>keywords</p>
          <input
            type="text"
            className="border outline-none p-3.5 px-5 w-[300px] md:w-[462px]"
            placeholder="Add relevant keywords ( RC2 , MRT station )"
          />
        </div>
        <div className="space-y-3">
          <p>property size ( Sqft )</p>
          <select
            name="size"
            id=""
            className="border outline-none p-3 px-5 w-48"
          >
            <option value="any">Any</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
