import ThemePicker from "./ThemePicker";

import { FaHashtag } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { LuBinary } from "react-icons/lu";
import { ImQuotesRight } from "react-icons/im";
import { FaKey } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdOutlineQrCode2 } from "react-icons/md";
import { FaFileImage } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-col h-screen p-1 bg-base-200 w-1/6">
      <Link to="/" className="flex items-center justify-center p-4">
        <img src="toolbox.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold">Lil Tools</h1>
      </Link>

      <div className="divider m-0" />

      <nav className="flex-1">
        <ul className="menu menu-vertical px-1 text-lg">
          <li>
            <NavLink to="/hashes">
              <FaHashtag />
              Hash Generator
            </NavLink>
          </li>
          <li>
            <NavLink to="/unix-time">
              <FaClock />
              Unix Time Converter
            </NavLink>
          </li>
          <li>
            <NavLink to="/json">
              <FaCode />
              JSON Formatter
            </NavLink>
          </li>
          <li>
            <NavLink to="/ascii">
              <LuBinary />
              ASCII Converter
            </NavLink>
          </li>
          <li>
            <NavLink to="/base64">
              <ImQuotesRight />
              Base64 String Encode
            </NavLink>
          </li>
          <li>
            <NavLink to="/base64-image">
              <FaFileImage />
              Base64 Image Encode
            </NavLink>
          </li>
          <li>
            <NavLink to="/uuid">
              <FaKey />
              UUID Generator
            </NavLink>
          </li>
          <li>
            <NavLink to="/url-parser">
              <FaLink />
              URL Parser
            </NavLink>
          </li>
          <li>
            <NavLink to="/qr-code">
              <MdOutlineQrCode2 />
              QR Code Generator
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="divider m-0" />

      <ThemePicker />
    </div>
  );
};

export default NavBar;
