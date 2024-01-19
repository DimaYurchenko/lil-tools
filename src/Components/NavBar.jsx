import { FaHashtag } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex flex-col h-screen p-1 bg-base-200">
      {/* TODO: NavLink instead of <a>, this probably breaks theme when clicked */}
      <a href="/" className="flex items-center justify-center p-4">
        <img src="toolbox.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold text-white">Lil Tools</h1>
      </a>

      <div className="divider m-0" />

      <nav className="flex-1">
        <ul className="menu menu-vertical px-1 text-lg">
          <li>
            <NavLink to="/hashes">
              <FaHashtag />
              Hash
            </NavLink>
          </li>
          <li>
            <NavLink to="/unix-time">
              <FaClock />
              Unix Time
            </NavLink>
          </li>
          <li>
            <NavLink to="/json">
              <FaCode />
              JSON Formatter
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="divider m-0" />

      {/* Theme picker*/}
      <div className="flex justify-center mt-auto">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1 btn-neutral">
            Theme
            <FaAngleUp />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="dark"
                value="dark"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="light"
                value="light"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="dracula"
                value="dracula"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
