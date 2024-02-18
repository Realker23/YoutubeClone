import React from "react";
import MenuItems from "./MenuItems";
import {useSelector} from "react-redux";
import MenuItemSecondary from "./MenuItemSecondary";

const Sidebar = () => {
  const toggle = useSelector((store) => {
    return store.menuToggle.isMenuOpen;
  });

  return toggle ? <MenuItems /> : <MenuItemSecondary />;
};

export default Sidebar;
