import { Link } from "react-router-dom";

import primaryLogo from "../assets/aa_logo.png";
import iiitdmLogo from "../assets/iiitdm.jpg";

// context
import { useUserContext } from "../context/UserContext";

const Navigation = () => {
  const { user, logout } = useUserContext();

  const LINKS_CLASSNAME = "uppercase text-xl hover-bordered";

  return (
    <nav className="sticky top-0 z-20 sm:z-10 w-full h-16 text-xl font-medium text-gray-900 bg-white border-b  navbar">
      <div className="w-full navbar-start">
        {/* dropdown  */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="p-2 mt-3 bg-white shadow menu menu-compact dropdown-content rounded-box w-44 sm:w-52"
          >
            <li className={LINKS_CLASSNAME}>
              <Link to="/">Home</Link>
            </li>
            <li className={LINKS_CLASSNAME}>
              <Link to="/about">About</Link>
            </li>
            <li className={LINKS_CLASSNAME}>
              <Link to="/events">Events</Link>
            </li>
            <li className={LINKS_CLASSNAME}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className={LINKS_CLASSNAME}>
              <Link to="/signup">Join Us</Link>
            </li>
            <li className={LINKS_CLASSNAME}>
              <Link to="/services">Services</Link>
            </li>
            <li className={LINKS_CLASSNAME}>
              <Link to="/fund">Fund</Link>
            </li>
            {user ? (
              <li className={LINKS_CLASSNAME}>
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              <li className={LINKS_CLASSNAME}>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        {/* logo starts */}
        <div className="flex flex-row items-center gap-2 md:ml-4">
          <div>
            <div className="rounded w-14">
              <a href="http://www.iiitdm.ac.in" target="_blank">
                <img className="w-full " src={iiitdmLogo} />
              </a>
            </div>
          </div>
          <p className="text-sm">x</p>
          <div>
            <div className="rounded w-14">
              <Link to="/">
                <img className="w-full" src={primaryLogo} />
              </Link>
            </div>
          </div>
        </div>
        {/* logo ends*/}
      </div>
      {/* navbar-start ends */}
      <div className="flex items-center justify-end md:justify-between">
        <div className="z-20 hidden md:flex">
          <div className="flex-none">
            {/* desktop nav */}
            <ul className="p-0 menu menu-horizontal">
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
            <Link to="/login" className="self-end mx-2 btn btn-outline sm:px-6">
              Login
            </Link>
          )}
          {user && (
            <div className="mx-3 dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-20 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
