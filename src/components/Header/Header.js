import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsBoxArrowInLeft, BsBoxArrowInRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Images/logo.png'
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
   const logOut = () => {
     signOut(auth);
     localStorage.removeItem("accessToken");
   };


  return (
    <>
      <div className=" bg-info shadow-3xl fixed w-full top-0 z-20 lg:px-28 ">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <Link to="/" className=" text-xl flex items-center ">
              <img className="w-8 flex" src={logo} alt="logo" />
              <span className="text-base font-normal text-accent ml-2">
                Daily Task
              </span>
            </Link>
          </div>
          <div className="flex-none gap-2">
            {user ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex="0"
                  className="btn btn-ghost btn-circle avatar flex items-center mt-.5"
                >
                  <div className="w-10 rounded-full ">
                    <img
                      src="https://placeimg.com/80/80/people"
                      alt={user?.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <p className="text-sm text-accent flex items-center">
                      Name:
                      <span className="text-xs font-medium ">
                        {user?.displayName}
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="text-sm text-accent flex items-center">
                      <span className="text-xs font-medium ">
                        {user?.email}
                      </span>
                    </p>
                  </li>
                  <li>
                    {user ? (
                      <button
                        onClick={logOut}
                        className=" max-w-[7rem] mx-auto mt-4 flex items-center justify-center bg-primary text-white border-0 py-2 px-6 m-0"
                      >
                        <span className=" hidden sm:block">Logout</span>
                        <BsBoxArrowInRight className="sm:hidden text-white text-lg font-bold" />
                      </button>
                    ) : (
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary flex justify-center items-center"
                            : "hover:text-primary transition-colors duration-300 flex justify-center items-center"
                        }
                        to="/login"
                      >
                        <span className=" hidden sm:block">Login </span>
                        <BsBoxArrowInLeft className="sm:hidden text-primary text-lg font-bold" />
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                className="bg-primary border border-primary text-white text-sm py-2.5 px-6 rounded-md hover:border hover:border-primary hover:text-primary hover:bg-white transition-colors duration-500"
                to="/login"
              >
                <span className=" hidden sm:block">Login </span>
                <BsBoxArrowInLeft className="sm:hidden text-white text-lg font-bold" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
