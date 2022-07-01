import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/Images/logo.png'

const Header = () => {
  return (
    <>
      <div className=" bg-info shadow-3xl fixed w-full top-0 z-20 ">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
             <img className="w-10" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="/" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="/" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
