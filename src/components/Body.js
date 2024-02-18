import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import {useSelector} from "react-redux";

const Body = () => {
  const toggle = useSelector((store) => {
    return store.menuToggle.isMenuOpen;
  });

  console.log(toggle);

  return (
    <div className="text-center">
      <div>{toggle.toString()}</div>
      <div className="flex ">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
