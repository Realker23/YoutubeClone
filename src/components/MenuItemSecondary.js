import React from "react";
import {GoHomeFill} from "react-icons/go";
import {Link} from "react-router-dom";

const MenuItemSecondary = () => {
  return (
    <div className="text-white">
      <GoHomeFill />
      <span className="px-4 py-2">
        <Link to={"/"}>Home</Link>{" "}
      </span>
    </div>
  );
};

export default MenuItemSecondary;
