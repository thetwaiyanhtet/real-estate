import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const SaveButton = () => {
  return (
    <div>
      <div className=" flex items-center space-x-3 p-3 border w-28">
        <AiOutlineStar size={23} />
        <button>Save</button>
      </div>
    </div>
  );
};

export default SaveButton;
