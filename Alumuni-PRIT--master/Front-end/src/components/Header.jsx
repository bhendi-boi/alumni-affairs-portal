import { Link } from "react-router-dom";

const Header = ({ title, links, setLinks }) => {
  const handleClick = (e) => {
    const updatedLinks = links.map((linkItem) => {
      if (e.target.name === linkItem.link) {
        return { ...linkItem, isActive: true };
      }
      return { ...linkItem, isActive: false };
    });
    setLinks(updatedLinks);
  };
  return (
    <header className="flex items-center h-32 text-white">
      <Link
        to=""
        className="text-5xl  sm:text-7xl px-6 py-2 capitalize font-medium"
      >
        <h1>{title}</h1>
      </Link>
      {links && (
        <div className="flex gap-6">
          <p className="py-4 text-5xl">❯</p>
          <ul className="hidden  md:flex gap-8 items-center">
            {links.map((linkItem) => {
              return (
                <li key={linkItem.link}>
                  <Link
                    to={linkItem.link}
                    onClick={handleClick}
                    name={linkItem.link}
                    className={
                      "capitalize text-2xl  text-gray-600 transition duration-500 hover:text-blue-600 " +
                      (linkItem.isActive ? "text-blue-600" : "")
                    }
                  >
                    {linkItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
