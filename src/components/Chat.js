import React from "react";
import {FaUser} from "react-icons/fa";

const Chat = ({name, text}) => {
  return (
    <div className="flex items-center border border-white rounded-xl mt-2">
      <div className="flex font-semibold text-xl p-3 cursor-pointer">
        <FaUser />
      </div>
      <div>
        <span className="font-bold px-2">{name}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Chat;
