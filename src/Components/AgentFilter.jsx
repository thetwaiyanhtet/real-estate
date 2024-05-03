import React, { useState } from "react";
import star from "./Assets/star.png";

const AgentFilter = () => {
  const [menu, setMenu] = useState("agent");
  return (
    <div>
      <div className=" capitalize px-10 space-y-8 md:block">
        <div className=" md:text-base text-sm flex border items-center p-3 md:w-96 space-x-5">
          <p
            className={`p-3 px-5 ml-3 ${
              menu === "agent"
                ? " border rounded-2xl border-orange-900 bg-orange-100 "
                : ""
            }`}
            onClick={() => setMenu("agent")}
          >
            agent
          </p>
          <p
            className={`p-3 px-5 ${
              menu === "company"
                ? " border rounded-2xl border-orange-900 bg-orange-100 "
                : ""
            }`}
            onClick={() => setMenu("company")}
          >
            company
          </p>
        </div>
        <div className=" space-y-5">
          <p className=" font-semibold bg-gray-100 p-2 px-5 md:w-96 text-xl">
            reviews
          </p>
          <div className=" flex items-center justify-between space-x-3 w-72">
            <input type="checkbox" />
            <div className=" flex space-x-2 w-32">
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
            </div>
            <p>
              <span>5.0</span> reviews
            </p>
          </div>
          <div className=" flex items-center justify-between space-x-3 w-72">
            <input type="checkbox" />
            <div className=" flex space-x-2 w-32">
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
            </div>
            <p>
              <span>4.0</span> reviews
            </p>
          </div>
          <div className=" flex items-center justify-between space-x-3 w-72">
            <input type="checkbox" />
            <div className=" flex space-x-2 w-32">
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
            </div>
            <p>
              <span>3.0</span> reviews
            </p>
          </div>
          <div className=" flex items-center justify-between space-x-3 w-72">
            <input type="checkbox" />
            <div className=" flex space-x-2 w-32">
              <img src={star} alt="..." width={20} />
              <img src={star} alt="..." width={20} />
            </div>
            <p>
              <span>2.0</span> reviews
            </p>
          </div>
          <div className=" flex items-center justify-between space-x-3 w-72">
            <input type="checkbox" />
            <div className=" flex space-x-2 w-32">
              <img src={star} alt="..." width={20} />
            </div>
            <p>
              <span>1.0</span> reviews
            </p>
          </div>
          <p className=" text-red-400 text-sm hover:underline">see less</p>
        </div>
        <div className=" space-y-5 mt-5">
          <p className=" font-semibold bg-gray-100 p-2 px-5 md:w-96 text-xl">
            recommendations
          </p>
          <div className=" flex items-center space-x-3 w-20">
            <input type="checkbox" />
            <p>
              <span>50+</span>
            </p>
          </div>
          <div className=" flex items-center space-x-3 w-20">
            <input type="checkbox" />
            <p>
              <span>20+</span>
            </p>
          </div>
          <div className=" flex items-center space-x-3 w-20">
            <input type="checkbox" />
            <p>
              <span>10+</span>
            </p>
          </div>
          <p className=" text-red-400 text-sm hover:underline">see less</p>
        </div>
      </div>
    </div>
  );
};

export default AgentFilter;
