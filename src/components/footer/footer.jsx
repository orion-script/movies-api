import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
function footer() {
  return (
    <div className="w-11/12 md:w-2/4 m-auto h-auto mt-10 flex flex-col text-center py-5 font-mono">
      <div className="flex items-center w-4/5 m-auto justify-between">
        <AiFillFacebook className="w-8 h-8 shadow-lg cursor-pointer" />
        <BsInstagram className="w-8 h-8 shadow-lg cursor-pointer" />
        <BsTwitter className="w-8 h-8 shadow-lg cursor-pointer" />
        <BsYoutube className="w-8 h-8 shadow-lg cursor-pointer" />
      </div>

      <ul className="flex items-center my-5 w-4/5 m-auto justify-between text-sm md:text-lg">
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

      <p className="text-medium">
        2023 MovieBox by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hades-portfolio.vercel.app/"
          className="text-red-700 text-base font-thin border-b-2 border-gray-800"
        >
          HadesCodes
        </a>
      </p>
    </div>
  );
}

export default footer;
