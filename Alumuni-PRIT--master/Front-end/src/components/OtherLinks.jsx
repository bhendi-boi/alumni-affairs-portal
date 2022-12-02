import { Link } from "react-router-dom";

const links = ["about", "gallery", "events", "login", "sign in"];
const OtherLinks = () => {
  return (
    <section className="bg-base-content">
      <ul role="list" className="flex justify-center gap-4 py-4">
        {links.map((link) => {
          return (
            <li
              key="link"
              className="underline capitalize text-sky-500 hover:text-blue-600 focus:text-blue-600 hover:scale-105 focus:scale-105"
            >
              <Link to={"/" + link}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OtherLinks;
