import React from "react";
import ThemeController from "./ThemeController";
import { Link } from "react-router-dom";

const TitleBar = () => {
  return (
    <div className="px-8 text-accent-content h-16 bg-accent mx-4 mt-4 flex items-center justify-between sticky top-4 z-10 rounded-3xl">
      <div>
        <a href="/home" className="text-4xl">
          Fam Fusion
        </a>
      </div>
      <div className="flex gap-4">
        <Link to="/about-us" className="btn btn-sm btn-ghost">
          Liked Profiles
        </Link>
        <Link to="/adopt-now" className="btn btn-sm btn-primary">
          Adopt Now
        </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-sm btn-ghost">
            Profile
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-28 p-2 shadow-2xl text-base-content"
          >
            <li>
              <Link className=" btn btn-sm btn-block btn-ghost">
                Edit Profile
              </Link>
            </li>
            <li></li>
            <li>
              <Link className=" btn btn-sm btn-block btn-ghost">History</Link>
              <Link className=" btn btn-sm btn-block btn-ghost">Settings</Link>
            </li>
          </ul>
        </div>
        <ThemeController />
      </div>
    </div>
  );
};

export default TitleBar;
