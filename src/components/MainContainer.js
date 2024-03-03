import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" bg-black p-2 w-11/12">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
