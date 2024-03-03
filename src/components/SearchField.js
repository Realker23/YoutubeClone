import React from "react";

const SearchField = ({item}) => {
  return (
    <div className="">
      <div className="my-1 px-[15px] cursor-pointer hover:bg-[#3e3e3e] text-lg">
        {item}
      </div>
    </div>
  );
};

export default SearchField;
