import { Link } from "react-router-dom";

import primaryLogo from "../assets/aa_logo.png";
import iiitdmLogo from "../assets/iiitdm.jpg";

// context
import { useUserContext } from "../context/UserContext";

const Navigation = () => {
  const { user, logout } = useUserContext();

  const linksClassName = "uppercase text-xl hover-bordered";

  return (
    <nav className="navbar sticky flex items-center top-0 z-10 bg-gray-800 text-slate-50 h-16 w-full text-xl font-medium drop-shadow-md shadow-base-100 border-b border-slate-400">
      <div className="navbar-start w-full">
        {/* dropdown  */}
        <div className="dropdown md:hidden  bg-gray-800 z-50">
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
          {/* mobile nav */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-44 sm:w-52"
          >
            <li className={linksClassName}>
              <Link to="/">Home</Link>
            </li>
            <li className={linksClassName}>
              <Link to="/about">About</Link>
            </li>
            <li className={linksClassName}>
              <Link to="/events">Events</Link>
            </li>
            <li className={linksClassName}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className={linksClassName}>
              <Link to="/signup">Join Us</Link>
            </li>
            <li className={linksClassName}>
              <Link to="/services">Services</Link>
            </li>
            <li className={linksClassName}>
              <Link to="/fund">Fund</Link>
            </li>
            {user ? (
              <li className={linksClassName}>
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              <li className={linksClassName}>
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
                <img className="w-full " src={iiitdmLogo} />
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
      <div className="justify-end md:justify-between flex items-center">
        <div className="hidden z-20 md:flex">
          <div className="flex-none">
            {/* desktop nav */}
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/fund">Fund</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden xs:block">
          {!user && (
            <Link
              to="/login"
              className="btn btn-outline text-slate-50 mx-2 sm:px-6 self-end"
            >
              Login
            </Link>
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
