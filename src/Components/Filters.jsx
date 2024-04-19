import React from "react";
import map from "./Assets/map.png";
import OnOffSwitch from "./OnOffSwitch";

const Filters = () => {
  return (
    <div>
      <div className=" pl-10 capitalize">
        <img src={map} alt="..." width={350} />
        <OnOffSwitch />
        <div className=" space-y-7">
          <div className=" space-y-3 w-[350px]">
            <p className=" font-semibold bg-gray-100 p-2">amenities</p>
            <div className=" space-x-3">
              <input type="checkbox" name="pool" id="pool" />
              <label htmlFor="pool">Pool</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="carParking" id="carParking" />
              <label htmlFor="carParking">Car Parking</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="gym" id="gym" />
              <label htmlFor="gym">Gym</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="pet" id="pet" />
              <label htmlFor="pet">Pet Friendly</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="wifi" id="wifi" />
              <label htmlFor="wifi">Wifi Included</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="ac" id="ac" />
              <label htmlFor="ac">Air Conditioned</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="electricity" id="electricity" />
              <label htmlFor="electricity">24 Hours Electricity</label>
            </div>
            <p className=" text-red-400 text-sm hover:underline">see less</p>
          </div>
          <div className=" space-y-3 w-[350px]">
            <p className=" font-semibold bg-gray-100 p-2">accessibility</p>
            <div className=" space-x-3">
              <input type="checkbox" name="elevator" id="elevator" />
              <label htmlFor="elevator">Elevator</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="in-room" id="in-room" />
              <label htmlFor="in-room">In-room Accessibility</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="wheelchair" id="wheelchair" />
              <label htmlFor="wheelchair">Wheelchair Accessible</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="barrier-free" id="barrier-free" />
              <label htmlFor="barrier-free">Barrier-free Design</label>
            </div>
            <p className=" text-red-400 text-sm hover:underline">see less</p>
          </div>
          <div className=" space-y-3 w-[350px]">
            <p className=" font-semibold bg-gray-100 p-2">nearby places</p>
            <div className=" space-x-3">
              <input type="checkbox" name="school" id="school" />
              <label htmlFor="school">School</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="markets" id="markets" />
              <label htmlFor="markets">Markets</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="mall" id="mall" />
              <label htmlFor="mall">Shopping Malls</label>
            </div>
            <div className=" space-x-3">
              <input type="checkbox" name="stations" id="stations" />
              <label htmlFor="stations">Stations</label>
            </div>
            <p className=" text-red-400 text-sm hover:underline">see less</p>
          </div>
          <div className=" space-y-3 w-[350px]">
            <p className=" font-semibold bg-gray-100 p-2">payment type</p>
            <div className=" space-x-3">
              <input type="checkbox" name="home-loan" id="home-loan" />
              <label htmlFor="home-loan">Home Loan</label>
            </div>
            <div className=" space-x-3">
              <input
                type="checkbox"
                name="downtown-under50"
                id="downtown-under50"
              />
              <label htmlFor="downtown-under50">Downtown 20%-50%</label>
            </div>
            <div className=" space-x-3">
              <input
                type="checkbox"
                name="downtown-over50"
                id="downtown-over50"
              />
              <label htmlFor="downtown-over50">Downtown 50%-90%</label>
            </div>
            <p className=" text-red-400 text-sm hover:underline">see less</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
