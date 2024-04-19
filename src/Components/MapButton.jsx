import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const MapButton = () => {
  return (
    <div>
      <button className=" flex space-x-3 items-center p-3 border">
        <FaMapMarkedAlt size={25} />
        <p>Map View</p>
      </button>
    </div>
  );
};

export default MapButton;
