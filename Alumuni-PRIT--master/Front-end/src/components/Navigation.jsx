import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="navbar sticky top-0 bg-base-100 drop-shadow-md">
        <div
          className="navbar-start sticky 
        "
        >
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
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
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
                </a>
                <ul class="menu bg-base-100 w-56 rounded-box">
                  <li class="hover-bordered">
                    <a>COMPUTER SCIENCE</a>
                  </li>
                  <li class="hover-bordered">
                    <a>ELECTRONICS</a>
                  </li>
                  <li class="hover-bordered">
                    <a>MECHANICAL</a>
                  </li>
                  <li class="hover-bordered">
                    <a>SMART MANUFACTURING</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Join Us</a>
              </li>
              <li>
                <a>Jobs/Mentoring</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          {/* logo starts */}
          <div className="flex align-center">
            <div>
              <div class="w-36 rounded">
                <img
                  className=" "
                  src="https://www.iiitdm.ac.in/img/BrandBook/SecondaryLogo.png"
                />
              </div>
            </div>
            <a className=" my-3   text-cornflower-blue wrap text-left text-2xl normal-case text-xl">
              ALUMNI PORTAL
            </a>
          </div>
          {/* logo ends
           */}
        </div>
        <div className="navbar-center hidden sticky lg:flex">
          <ul className="menu menu-horizontal  p-0">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0} z-50>
              <a className="z-50">
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
              </a>
              <ul class="menu bg-base-100 w-56 rounded-box ">
                <li class="hover-bordered">
                  <a>COMPUTER SCIENCE</a>
                </li>
                <li class="hover-bordered">
                  <a>ELECTRONICS</a>
                </li>
                <li class="hover-bordered ">
                  <a>MECHANICAL</a>
                </li>
                <li class="hover-bordered">
                  <a>SMART MANUFACTURING</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Forum</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Join Us</a>
            </li>
            <li>
              <a>Jobs/Mentoring</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        {/* get started */}
        <div className="">
          <a className="btn btn-outline mx-2 px-6">LOGIN</a>
        </div>
        {/* avatar */}
        <div className="dropdown dropdown-end mx-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-xl">
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
      </div>
    </>
  );
};

export default Navigation;
