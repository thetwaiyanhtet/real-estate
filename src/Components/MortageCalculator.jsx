import React from "react";
import { IoArrowForward } from "react-icons/io5";
import CalculateMortage from "./CalculateMortage";

const MortageCalculator = () => {
  return (
    <div>
      <div className=" capitalize mx-20">
        {/* <h1>mortage calculator</h1> */}
        <div className=" flex justify-between items-start">
          <CalculateMortage />
          <div>
            <div className=" space-y-7 bg-gray-100 w-[700px] py-5 px-10 rounded-2xl mb-3 mt-20">
              <p className=" font-semibold text-xl">
                estimate your monthly mortage payment
              </p>
              <div className=" flex w-[450px] text-white text-center">
                <p className=" w-[68%] bg-emerald-700">68%</p>
                <p className=" w-[32%] bg-emerald-400">32%</p>
              </div>
              <div className=" flex space-x-10">
                <div className=" flex space-x-3 items-center">
                  <p className=" rounded-full bg-emerald-700 w-2 h-2"></p>
                  <p> SGD 13,455 Principle</p>
                </div>
                <div className=" flex space-x-3 items-center">
                  <p className=" rounded-full bg-emerald-400 w-2 h-2"></p>
                  <p> SGD 1,045 Interest</p>
                </div>
              </div>
              <div className=" flex space-x-7">
                <div className=" space-y-2">
                  <p>monthly payment</p>
                  <p className=" font-semibold">1,774 SGD</p>
                </div>
                <div className=" space-y-2">
                  <p>interest rate</p>
                  <p className=" font-semibold">4.49 %</p>
                </div>
                <div className=" space-y-2">
                  <p>downtown payment</p>
                  <p className=" font-semibold">2,000 SGD ( 20 % )</p>
                </div>
                <div className=" space-y-2">
                  <p>loan type</p>
                  <p className=" font-semibold">3 years</p>
                </div>
              </div>
            </div>
            <p>
              we found ( 5,879 listings ) for this budget.
              <span className=" underline">explore properties</span>
            </p>
            <div className=" mt-14 space-y-5">
              <p className=" font-semibold text-xl">explore mortage packages</p>
              <div className=" flex space-x-5">
                <div className=" flex space-x-10 border rounded-2xl w-[340px] px-4 py-7">
                  <div className=" space-y-1">
                    <p className=" text-orange-900"> $$ 1,549/month</p>
                    <p>2.95 % interest, 20 years fixed</p>
                  </div>
                  <IoArrowForward />
                </div>
                <div className=" flex space-x-10 border rounded-2xl w-[340px] px-4 py-7">
                  <div className=" space-y-1" >
                    <p className=" text-orange-900"> $$ 1,549/month</p>
                    <p>2.95 % interest, 20 years fixed</p>
                  </div>
                  <IoArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-20">
          <h1 className=" mb-10">how to calculate mortage</h1>
          <p>How to use our mortgage calculator to easily estimate payments:</p>
          <ul className=" list-decimal p-3 leading-8 my-2">
            <li>
              Enter your home price. In the Home price field, input the price of
              the home you’re buying (or the current value of your home if
              you’re refinancing). 
            </li>
            <li>
              Enter your down payment. In the Down payment field, input
              the amount of your down payment (if you're buying) or the amount
              of equity you have (if you're refinancing). You can input either a
              dollar amount or percentage.
            </li>
            <li>
              Enter your loan term. In the Loan term field, enter the length of
              your loan — usually 30 years, but could be 20, 15 or 10.
            </li>
            <li>
              Enter your interest rate. In the Interest rate field, input the
              rate you expect to pay or are currently paying. Our calculator
              defaults to the current average rate, but you can adjust this
              percentage.
            </li>
            <li>
              Enter your ZIP code. In the ZIP code field, input your zip code.
            </li>
            <li>Click Update.</li>
          </ul>
          <p>
            Bankrate's calculator also estimates property taxes, homeowners
            insurance and homeowners association fees. You can edit these
            amounts, or even edit them to zero, as you're shopping for a loan. 
            In addition, the calculator allows you to input extra payments
            (under the “Amortization” tab). This can help you decide whether to
            prepay your mortgage and by how much.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortageCalculator;
