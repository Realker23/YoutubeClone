import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "JavaScript",
    "React",
    "Gaming",
    "Music",
    "bhajan",
    "sports",
    "Live",
    "Songs",
    "JavaScript",
    "React",
    "Gaming",
    "Music",
    "bhajan",
    "sports",
    "Live",
    "Songs",
    "JavaScript",
    "React",
    "Gaming",
    "Music",
    "bhajan",
    "sports",
    "Live",
    "Songs",
  ];

  const box = document.querySelector(".box");
  // console.log(box);

  const leftScroll = () => {
    // const w = box.clientWidth;
    box.scrollLeft = box.scrollLeft - 200;
  };

  const rightScroll = () => {
    // const w = box.clientWidth;
    box.scrollLeft = box.scrollLeft + 200;
  };

  return (
    <div className="flex items-center justify-start">
      <button
        className="left h-10 w-10 hover:bg-gray-400 text-white rounded-full"
        onClick={leftScroll}
      >
        -
      </button>
      <div className="box flex  overflow-hidden scroll-smooth w-5/6 opacity-40 ">
        {buttonList.map((buttontext, index) => {
          return <Button key={index} name={buttontext} />;
        })}
      </div>
      <button
        className="left h-10 w-10 hover:bg-gray-400 text-white rounded-full"
        onClick={rightScroll}
      >
        +
      </button>
    </div>
  );
};

export default ButtonList;
