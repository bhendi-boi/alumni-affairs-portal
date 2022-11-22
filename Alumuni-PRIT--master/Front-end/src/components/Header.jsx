import { useState } from "react";
import { Link } from "react-router-dom";

/* 
  props: 
        title = a string 
        links = an array of objects where each object is a link created using useState
        setLinks = corresponding setter function
*/

const Header = ({ title, links, setLinks }) => {
  const [activeLink, setActiveLink] = useState(null);

  // functions
  const handleClick = async (e) => {
    const updatedLinks = links.map((link) => {
      if (e.target.name === link.link) {
        setActiveLink(link);
        return { ...link, isActive: true };
      }
      return { ...link, isActive: false };
    });
    setLinks(updatedLinks);
    findActiveLink(updatedLinks);
  };

  const findActiveLink = (links) => {
    let found = false;
    links.map((link) => {
      if (link.isActive) {
        setActiveLink(link);
        found = true;
      }
    });
    if (!found) {
      setActiveLink(null);
    }
  };

  return (
    <header className="flex items-center h-28 w-full bg-base-content text-white sticky top-0 z-10 shadow-xl font-head">
      <Link
        to=""
        className="pl-6 pr-3 xs:px-6  capitalize font-medium"
        onClick={links && handleClick}
      >
        <h1 className="text-3xl sm:text-7xl">{title}</h1>
      </Link>
      {links && (
        <div className="flex gap-2 xs:gap-4 sm:gap-6 items-center">
          <p className="py-4 text-3xl xs:text-5xl">❯</p>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn-circle w-9 px-2 py-1 xs:px-4 xs:py-2 bg-base-100 text-blue-600 capitalize text-xl font-medium cursor-pointer"
            >
              {activeLink ? activeLink.name : "Navigate? "}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow rounded-box min-w-fit flex bg-base-100"
            >
              {links.map((link) => {
                return (
                  <li
                    key={link.link}
                    className={link.isActive ? "bordered" : ""}
                  >
                    <Link
                      to={link.link}
                      onClick={handleClick}
                      name={link.link}
                      className={
                        "capitalize text-2xl font-medium  text-gray-600 transition duration-500 hover:text-blue-600 " +
                        (link.isActive ? "text-blue-600" : "")
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
