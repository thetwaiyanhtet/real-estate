import React, { useState } from "react";
import Switch from "react-switch";

const OnOffSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <div className=" flex justify-between items-center my-5 w-80">
      <p>Compare Properties</p>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={50}
      />
      {/* <p>{checked ? "Switch is ON" : "Switch is OFF"}</p> */}
    </div>
  );
};

export default OnOffSwitch;
