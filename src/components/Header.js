import {RxHamburgerMenu} from "react-icons/rx";
import {FaSearch} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {IoIosSettings} from "react-icons/io";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../utils/menuToggleSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex px-5 w-full justify-between shadow-lg ">
      <div className="flex items-center h-16">
        <div
          className="flex font-semibold h-8 w-8 text-xl justify-center items-center cursor-pointer hover:bg-gray-200 hover:rounded-full"
          onClick={handleToggleMenu}
        >
          <RxHamburgerMenu />
        </div>
        <img
          className="h-16 px-6"
          src="https://miro.medium.com/v2/resize:fit:1140/1*vOLz8Q6QIwJBBTxYHf4HTg.jpeg"
          alt="youtube"
        />
      </div>
      <div className="flex w-2/3 h-16 items-center justify-center">
        <input
          className=" h-8 w-1/2 flex border px-4 rounded-l-full"
          type="text"
          placeholder="search"
        />
        <button className="text-gray-400 h-8 px-4 border rounded-r-full border-l-0 bg-gray-100">
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
