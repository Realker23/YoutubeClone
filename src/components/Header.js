import {RxHamburgerMenu} from "react-icons/rx";
import {FaSearch} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {IoIosSettings} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../utils/menuToggleSlice";
import {useEffect, useState} from "react";
import {YOUTUBE_SEARCH_API} from "../utils/contants";
// import Sidebar from "./Sidebar";
import SearchField from "./SearchField";
import {cacheResult} from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [enableSuggestion, setEnableSuggestion] = useState(false);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //lets use debouncing 200ms
    const timer = setTimeout(() => {
      if (searchQuery && searchCache[searchQuery]) {
        setSearchData(searchCache[searchQuery]);
      } else {
        fetchSearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearch = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    const data = json[1];
    console.log(data);
    setSearchData(data);
    dispatch(
      cacheResult({
        [searchQuery]: data,
      })
    );
    //data is an array containing search result
  };

  // const inputBox = document.querySelector(".input");

  return (
    <div className="flex px-5 w-full justify-between shadow-lg ">
      <div className="flex items-center h-16">
        <div
          className="flex font-semibold h-8 w-8 text-xl justify-center items-center cursor-pointer hover:bg-gray-200 hover:rounded-full"
          onClick={() => handleToggleMenu()}
        >
          <RxHamburgerMenu />
        </div>
        <img
          className="h-16 px-6"
          src="https://miro.medium.com/v2/resize:fit:1140/1*vOLz8Q6QIwJBBTxYHf4HTg.jpeg"
          alt="youtube"
        />
      </div>
      <div className="flex w-2/3 h-16 items-center justify-center ">
        <div className="relative w-1/2">
          <input
            className=" input h-8 w-full flex border border-[#242424] px-4 rounded-l-full "
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setEnableSuggestion(true)}
            onBlur={() => setEnableSuggestion(false)}
          />
          {enableSuggestion && searchData[0] && (
            <div className="absolute text-white bg-[#242424] w-full mt-1 py-4  rounded-lg  top-8 z-10">
              {/* <p className=""> {searchData[0]}</p> */}
              {searchData.map((e, index) => {
                return <SearchField key={index} item={e} />;
              })}
            </div>
          )}
        </div>
        <button className="text-gray-400 h-8 px-4 border border-[#242424] rounded-r-full border-l-0 bg-[#242424]">
          <FaSearch />
        </button>
      </div>
      <div className="h-16 flex items-center">
        <div className="flex font-semibold text-xl p-3 cursor-pointer">
          <FaUser />
        </div>
        <div className="flex font-semibold text-xl cursor-pointer">
          <IoIosSettings />
        </div>
      </div>
    </div>
  );
};

export default Header;
