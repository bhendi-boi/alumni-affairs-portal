import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const user = !null;
  return (
    <>
      <nav className="navbar sticky top-0 bg-base-100 drop-shadow-md">
        <div className="navbar-start sticky w-full">
          {/* dropdown  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/community" className="justify-between">
                  Community
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="menu bg-base-100 w-56 rounded-box">
                  <li className="hover-bordered">
                    <a>COMPUTER SCIENCE</a>
                  </li>
                  <li className="hover-bordered">
                    <a>ELECTRONICS</a>
                  </li>
                  <li className="hover-bordered">
                    <a>MECHANICAL</a>
                  </li>
                  <li className="hover-bordered">
                    <a>SMART MANUFACTURING</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/signup">Join Us</Link>
              </li>
              <li>
                <a>Jobs/Mentoring</a>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          {/* logo starts */}
          <div className="flex align-center">
            <div>
              <div className="w-36 rounded">
                <a href="http://www.iiitdm.ac.in" target="_blank">
                  <img src="https://www.iiitdm.ac.in/img/BrandBook/SecondaryLogo.png" />
                </a>
              </div>
            </div>
            <Link
              to="/"
              className=" my-3 text-cornflower-blue wrap text-left  normal-case text-xl"
            >
              ALUMNI PORTAL
            </Link>
          </div>
          {/* logo ends
           */}
        </div>
        {/* get started */}
        <div className={user ? "hidden" : ""}>
          <Link to="/login" className="btn btn-outline mx-2 px-6">
            Login
          </Link>
        </div>
        {/* avatar */}
        <div className={(user ? "" : "hidden") + " dropdown dropdown-end mx-5"}>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* avatar ends */}
      </nav>
    </>
  );
};

export default Navigation;
