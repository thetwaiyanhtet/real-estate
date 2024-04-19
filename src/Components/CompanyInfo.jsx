import React from "react";
import company from "./Assets/company.png";
import { Link } from 'react-router-dom';

const CompanyInfo = () => {
  return (
    <div>
      <div className=" capitalize mx-10 my-7">
        <p className=" font-bold text-2xl">company</p>
        <div className=" flex items-center space-x-5">
          <img src={company} alt="..." />
          <div className=" space-y-3">
            <p>jade & co company </p>
            <p className=" underline text-orange-900">
              <Link to="/agent/companyDetail">view company</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
