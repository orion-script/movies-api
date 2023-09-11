// import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
function footer() {
  return (
    <div className="w-2/4 m-auto h-auto mt-10 flex flex-col text-center font-sans py-5">
      <div className="flex items-center w-4/5 m-auto justify-between">
        <AiFillFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>

      <ul className="flex items-center my-5 w-4/5 m-auto justify-between">
        <li>
          <a href="#">Conditions of Use</a>
        </li>
        <li>
          <a href="#">Privacy & Policy</a>
        </li>
        <li>
          <a href="#">Press Room</a>
        </li>
      </ul>

      <p>
        2023 MovieBox by{" "}
        <a href="https://hades-portfolio.vercel.app/">HadesCodes</a>
      </p>
    </div>
  );
}

export default footer;
