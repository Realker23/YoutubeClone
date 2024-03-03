import React from "react";

const Button = ({name}) => {
  return (
    <button className="px-4 py-2 m-2 rounded-lg bg-gray-800 text-white">
      {name}
    </button>
  );
};

export default Button;
