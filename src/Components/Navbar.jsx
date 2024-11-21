import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/auth/profile">Profile</NavLink>
      </li>
      {user && user?.email ? (
        <li>
          <div>
            <NavLink onClick={logout} to="/auth/login">
              Logout
            </NavLink>
          </div>
        </li>
      ) : (
        <li>
          <NavLink to="/auth/login">Login</NavLink>
        </li>
      )}

      {user && user?.email ? (
        <li className="ml-4 p-2 font-bold border border-blue-300">
          {user.displayName}
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    // #8ce4e9
    <div className="bg-[#007B99]  ">
      <div className="navbar  w-11/12 mx-auto ">
        <div className="flex-1 animate__animated   animate__lightSpeedInLeft ">
          <a className="btn btn-ghost bg-[#D6E0E5] hover:bg-[#cbd8dd] text-[#3C4858] normal-case  text-xl ">
            <NavLink to="/">Eco-Adventure</NavLink>
          </a>
        </div>
        <div className="flex-none">
          {/* Mobile Menu */}
          <div className="dropdown z-10 dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu items-center text-[#007B99] menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal text-white px-1">{links}</ul>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
          <div className="tooltip tooltip-bottom z-10" data-tip={user?.displayName}>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             
             {/* -----image------- */}
             <div className="w-10 rounded-full">
               {/* <img src={`"https://via.placeholder.com/40"`} alt="User Profile" /> */}
               {user && user?.email ? (
                 <img src={user.photoURL} alt="User Profile" />
               ) : (
                 <img
                   src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
                   alt="User Profile"
                 />
               )}
             </div>
           </label>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
