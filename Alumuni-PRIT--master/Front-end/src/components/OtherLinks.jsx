import { Link } from "react-router-dom";

const links = [
  {
    name: "home",
    link: "",
  },
  {
    name: "about us",
    link: "about",
  },
  {
    name: "events",
    link: "events",
  },
  {
    name: "gallery",
    link: "gallery",
  },
  {
    name: "alumni services",
    link: "services",
  },
  {
    name: "alumni fund",
    link: "fund",
  },
];
const OtherLinks = () => {
  return (
    <section className="bg-base-content sm:absolute bottom-0 left-0 w-full px-6 py-4">
      <p className="text-white text-xl sm:hidden">Useful Links 👇</p>
      <ul
        role="list"
        className="flex flex-col sm:flex-row justify-center  gap-2 sm:gap-4 pt-2"
      >
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className="hover:underline focus-within:underline capitalize text-sky-500"
            >
              <Link to={"/" + link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OtherLinks;
