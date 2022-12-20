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
    <header className="sticky top-0 z-10 flex items-center w-full h-16 bg-white shadow-xl md:h-20 font-head">
      <Link
        to=""
        className="px-4 font-medium capitalize"
        onClick={links && handleClick}
      >
        <h1 className="text-3xl sm:text-5xl text-title">{title}</h1>
      </Link>
      {links && (
        <div className="flex items-center gap-2 xs:gap-4 sm:gap-6">
          <span className="py-2 text-3xl sm:py-4">❯</span>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="px-2 py-1 text-xl font-medium capitalize cursor-pointer text-slate-50 btn-circle w-9 xs:px-4 xs:py-2 bg-base-content"
            >
              {activeLink ? activeLink.name : "Navigate? "}
            </label>
            <ul
              tabIndex={0}
              className="flex shadow dropdown-content menu rounded-box min-w-fit bg-base-100"
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
