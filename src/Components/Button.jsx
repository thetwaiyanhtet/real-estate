import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

const Button = (props) => {
  const b_name = props.b_name;

  return (
    <div>
      <button className=" bg-orange-900 px-7 py-3.5 text-white hover:scale-105">
        {b_name}
      </button>
    </div>
  );
};

export default Button;

export const EmailButton = () => {
  return (
    <div>
      <div className=" flex items-center justify-center space-x-4 border p-3 bg-gray-700 text-white h-10 md:w-36 w-26">
        <IoIosMail size={30} />
        <button>Email</button>
      </div>
    </div>
  );
};

export const CallButton = () => {
  return (
    <div>
      <div className=" flex items-center justify-center space-x-4 border p-3 border-gray-500 h-10 md:w-36 w-26">
        <BsTelephone size={23} />
        <button>Call</button>
      </div>
    </div>
  );
};
