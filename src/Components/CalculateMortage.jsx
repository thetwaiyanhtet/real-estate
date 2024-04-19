import React from "react";
import tick from "./Assets/tick.png";

const CalculateMortage = () => {
  return (
    <div>
      <div className=" capitalize">
        <h1>calculate mortage</h1>
        <div className=" space-y-8">
          <div className=" space-y-2">
            <p>property price</p>
            <div className=" border p-3 w-[330px] flex items-center bg-gray-100">
              <input
                type="text"
                className="outline-none bg-transparent pr-12"
                value="10,000"
              />
              SGD
            </div>
          </div>
          <div className=" space-y-2">
            <p>downtown payment</p>
            <select
              name="payment"
              id=""
              className=" outline-none w-[330px] border p-3 appearance-none"
            >
              <option value="20%">20%</option>
              <option value="40%">40%</option>
              <option value="60%">60%</option>
              <option value="80%">80%</option>
              <option value="100%">100%</option>
            </select>
          </div>
          <div className=" space-y-2">
            <p>loan type</p>
            <select
              name="loanType"
              id=""
              className=" outline-none w-[330px] border p-3 appearance-none"
            >
              <option value="5">5 years fixed</option>
              <option value="10">10 years fixed</option>
              <option value="20">20 years fixed</option>
              <option value="30">30 years fixed</option>
            </select>
          </div>
          <div className=" space-y-2">
            <p>interest rate</p>
            <div className=" border p-3 w-[330px] flex items-center bg-gray-100">
              <input
                type="number"
                className="outline-none bg-transparent pr-12"
                value="4.49"
              />
              %
            </div>
          </div>
          <div className=" space-y-2">
            <p>home insurance</p>
            <div className=" border p-3 w-[330px] flex items-center bg-gray-100">
              <input
                type="text"
                className="outline-none bg-transparent pr-12"
                value="500"
              />
              SGD
            </div>
          </div>
          <div className=" flex justify-between w-[330px]">
            <div className=" flex space-x-2">
              <img src={tick} alt="..." />
              <p>monthly payment</p>
            </div>
            <p className=" font-semibold">500 USD</p>
          </div>
          <div className=" bg-gray-100 w-[330px] text-sm py-2 px-1">
            <p>Are you finding is this in you buying budget ?</p>
            <span className=" underline cursor-pointer">
              Calculate your buying power
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateMortage;
