import React from "react";
import {GoHomeFill} from "react-icons/go";

const MenuItems = () => {
  return (
    <div className="w-1/5 bg-black h-full flex justify-start text-white">
      <div className="Home m-2 pb-2 border-b border-gray-100 ">
        <div className="flex items-center text-xl cursor-pointer">
          <GoHomeFill />
          <span className="px-4 py-2">Home</span>
        </div>
        <div className="flex items-center text-xl cursor-pointer">
          <span>Shorts</span>
        </div>
        <div className="flex items-center text-xl cursor-pointer">
          <span>Live</span>
        </div>
        <div className="flex items-center text-xl cursor-pointer">
          <span>Youtube Music</span>
        </div>
      </div>
      <div className="You"></div>
      <div className="Subscription"></div>
      <div className="Explore"></div>
      <div className="Report"></div>
      <div className="About"></div>
    </div>
  );
};

export default MenuItems;
