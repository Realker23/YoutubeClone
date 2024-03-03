import React from "react";
import Sidebar from "./Sidebar";
// import MainContainer from "./MainContainer";
import {Outlet} from "react-router-dom";
// import {useSelector} from "react-redux";

const Body = () => {
  // const toggle = useSelector((store) => {
  //   return store.menuToggle.isMenuOpen;
  // });

  // // console.log(toggle);

  return (
    <div>
      {/* <div>{toggle.toString()}</div> */}
      <div className="flex h-full bg-black">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
