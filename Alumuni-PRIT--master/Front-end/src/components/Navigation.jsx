import React, { useState } from "react";
import { Link } from "react-router-dom";

import primaryLogo from "../assets/aa_logo.png";
import iiitdmLogo from "../assets/iiitdm.jpg";

// context
import { useUserContext } from "../context/UserContext";

const Navigation = () => {
  const { user, login, logout } = useUserContext();

  return (
    <nav className="navbar sticky flex items-center top-0 z-100 bg-base-100 h-16 w-screen drop-shadow-md">
      <div className="navbar-start sticky w-full ">
        {/* dropdown  */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
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
                  <Link to="/community/cs">COMPUTER SCIENCE</Link>
                </li>
                <li className="hover-bordered">
                  <Link to="/community/ec">ELECTRONICS</Link>
                </li>
                <li className="hover-bordered">
                  <Link to="/community/me">MECHANICAL</Link>
                </li>
                <li className="hover-bordered">
                  <Link to="/community/sm">SMART MANUFACTURING</Link>
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
            {user ? (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        {/* logo starts */}
        <div className="flex flex-row items-center gap-2 md:ml-4">
          <div>
            <div className="w-14 rounded">
              <a href="http://www.iiitdm.ac.in" target="_blank">
                <img className="w-full" src={iiitdmLogo} />
              </a>
            </div>
          </div>
          <p className="text-sm">x</p>
          <div>
            <div className="w-14 rounded">
              <Link to="/">
                <img className="w-full" src={primaryLogo} />
              </Link>
            </div>
          </div>
        </div>
        {/* logo ends*/}
      </div>
      {/* navbar-start ends */}
      <div className="w-full justify-end md:justify-between flex items-center">
        <div className="hidden md:flex">
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/community">
                  Community
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link to="/community/cs">Comuter Science</Link>
                  </li>
                  <li>
                    <Link to="/community/ec">Electronics</Link>
                  </li>
                  <li>
                    <Link to="/community/me">Mechanical</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden xs:block">
          {!user && (
            <button
              onClick={() => login()}
              className="btn btn-outline mx-2 sm:px-6 self-end"
            >
              Login
            </button>
          )}
          {user && (
            <div className="dropdown dropdown-end mx-3">
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
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={() => logout()}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* get started */}
    </nav>
  );
};

export default Navigation;
