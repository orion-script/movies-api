// import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/Menu.svg";
import "./Header.css";
// import SearchBox from "../searchInput/Search";

const Header = ({ onSearchChange, searchField }) => {
  // const [searchField, setSearchField] = useState("");
  // const [loading, setLoading] = useState(false);

  // const onSearchChange = (event) => {
  //   const searchField = event.target.value.toLocaleLowerCase();
  //   setSearchField(searchField);
  // };

  // console.log(searchField);

  return (
    <div className="bg-red-900 flex flex-col w-full">
      <div className="bg-transparent flex w-full justify-between items-center h-12">
        <Link to="/">
          <img className="header__icon" src={Logo} />
        </Link>
        {/* <div className="flex">
          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span>Popular</spa n>
          </Link>
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span>Top Rated</span>
          </Link>
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span>Upcoming</span>
          </Link>
        </div> */}
        <input
          type="search"
          name=""
          id=""
          value={searchField}
          onChange={onSearchChange}
          className="text-black h-10 w-2/4 outline-none pl-3 mt-20 md:mt-0 hidden md:block border-2 rounded-lg"
          placeholder="What do you want to watch?"
        />
        <div className="flex items-center">
          <button className="mr-3 hidden md:block">Sign In</button>
          <img className="header__icon" src={Menu} />
        </div>
      </div>

      <input
        type="search"
        name=""
        id=""
        value={searchField}
        onChange={onSearchChange}
        className="text-black h-10 w-4/5 outline-none pl-3 mt-20 md:mt-0 md:hidden block border-2 rounded-lg m-auto my-5"
        placeholder="What do you want to watch?"
      />
    </div>
  );
};

export default Header;
