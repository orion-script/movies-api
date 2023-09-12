import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/Menu.svg";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ onSearchChange, searchField, handleSearch }) => {
  return (
    <div className="bg-gray-800 text-[#fff] flex w-full justify-between items-center h-auto px-5 md:px-10 pb-5">
      <Link to="/">
        <img className="header__icon hidden md:block" src={Logo} />
      </Link>

      <div className="w-11/12 md:w-2/4 h-10 flex justify-between">
        <input
          required
          type="search"
          name=""
          id=""
          value={searchField}
          onChange={onSearchChange}
          className="text-black h-full w-8/12 md:w-10/12 outline-none pl-3 border-2 rounded-lg"
          placeholder="What do you want to watch?"
        />
        <button
          onClick={handleSearch}
          className="bg-red-900 h-full w-[20%] md:w-[12%] rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="items-center hidden md:flex">
        <button className="mr-3">Sign In</button>
        <img className="header__icon" src={Menu} />
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
