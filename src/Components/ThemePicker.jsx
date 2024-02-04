import { FaAngleUp } from "react-icons/fa";

const themes = [
  "dark",
  "light",
  "dracula",
  "synthwave",
  "aqua",
  "retro",
  "garden",
];

const ThemePicker = () => {
  return (
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
          {themes.map((theme) => {
            return (
              <li>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label={theme}
                  value={theme}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ThemePicker;
