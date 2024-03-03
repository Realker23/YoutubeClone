import React from "react";
import {GoHomeFill} from "react-icons/go";
import {FaRegUser} from "react-icons/fa";
import {MdOutlineSubscriptions} from "react-icons/md";
import {Link} from "react-router-dom";

const MenuItems = () => {
  return (
    <div className="w-60 bg-black h-full  justify-start text-white text-base transition-all">
      <div className="Home m-2 pb-2 border-b border-gray-100">
        <div className="flex items-center text-base cursor-pointer">
          <GoHomeFill />
          <span className="px-4 py-2">
            <Link to={"/"}>Home</Link>{" "}
          </span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Shorts</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Live</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Youtube Music</span>
        </div>
      </div>
      <div className="You m-2 pb-2 border-b border-gray-100 ">
        <div className="flex items-center text-base cursor-pointer">
          <FaRegUser />
          <span className="px-4 py-2">Your Channel</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">History</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Liked</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Watch Later</span>
        </div>
      </div>
      <div className="Subscription m-2 pb-2 border-b border-gray-100 ">
        <div className="flex items-center text-base cursor-pointer">
          <MdOutlineSubscriptions />
          <span className="px-4 py-2">Subscription</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Akshay Saini</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">WION</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">RoadSideCoder</span>
        </div>
        <div className="flex items-center text-base cursor-pointer">
          <span className="px-4 py-2">Hindustan times</span>
        </div>
      </div>
      <div className="Explore"></div>
      <div className="Report"></div>
      <div className="About"></div>
    </div>
  );
};

export default MenuItems;
