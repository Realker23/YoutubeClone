import React from "react";
import {GoHomeFill} from "react-icons/go";
import {Link} from "react-router-dom";

const MenuItemSecondary = () => {
  return (
    <div className="text-white mx-4 text-lg">
      <span className="px-4 py-2 text-center text-xl">
        <Link to={"/"}>
          <GoHomeFill />
        </Link>
      </span>
    </div>
  );
};

export default MenuItemSecondary;
