import { BsLinkedin, BsInstagram, BsYoutube, BsLink } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
//
const Contact = () => {
  const alumniPortalDomian = "https://alumniaffairs.iiitdm.ac.in";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("kjcn");
  };

  const links = [
    {
      href: { alumniPortalDomian },
      icon: (
        <BsLink className="w-10 h-10 transition-all duration-300 ease-in-out hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105" />
      ),
    },
    {
      href: "mailto:alumniaffairs@iiitdm.ac.in",
      icon: (
        <SiGmail className="w-10 h-10 transition-all duration-300 ease-in-out hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105" />
      ),
    },
    {
      href: "https://www.instagram.com/alumniaffairsiiitdm/",
      icon: (
        <BsInstagram className="w-10 h-10 transition-all duration-300 ease-in-out hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105" />
      ),
    },
    {
      href: "https://www.linkedin.com/company/alumni-affairs-iiitdm/",
      icon: (
        <BsLinkedin className="w-10 h-10 transition-all duration-300 ease-in-out hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105" />
      ),
    },
    {
      href: "https://www.youtube.com/channel/UCYIVsibOwxldwfDLtkhQlZQ/",
      icon: (
        <BsYoutube className="w-10 h-10 transition-all duration-300 ease-in-out hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105" />
      ),
    },
  ];

  const people = [
    {
      role: "professor in charge",
      name: "Dr. ....",
    },
    {
      role: "alumni affairs secratry",
      name: "n sree dhyuti",
    },
    {
      role: "almuni affairs joint secratry",
      name: "srinidhi balasubramanian",
    },
  ];

  return (
    <section className="flex flex-col w-full gap-4 sm:flex-row text-paragraph">
      <div className="sm:w-[50%] border-b sm:border-r px-6">
        <h2 className="py-4 text-5xl font-medium text-subtitle">
          Contact Info
        </h2>
        {people.map((person) => {
          return (
            <div key={person.role} className="px-2 py-2 capitalize">
              <p className="text-base">{person.role}</p>
              <p className="text-xl text-zinc-800 ">{person.name}</p>
            </div>
          );
        })}
        <div className="px-2 py-4">
          <ul className="flex gap-4">
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <motion.a href={link.href}>{link.icon}</motion.a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <form
        className="sm:w-[50%] px-6 flex flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-5xl font-medium text-subtitle">Reach out !!</h2>
        <h2 className="text-5xl font-medium text-subtitle">Reach out !!</h2>
        <input
          className="block px-4 py-2 mx-6 my-2 mt-4 text-lg transition duration-1000 bg-transparent border-b-2 border-gray-600 border-solid focus:outline-none hover:border-blue-600 focus:border-blue-600"
          type="text"
          required
          placeholder="Name*"
          name="name"
        />
        <input
          className="block px-4 py-2 mx-6 my-2 text-lg transition duration-1000 bg-transparent border-b-2 border-gray-600 border-solid focus:outline-none hover:border-blue-600 focus:border-blue-600"
          type="email"
          required
          placeholder="Email*"
          name="email"
        />
        <input
          className="block px-4 py-2 mx-6 my-2 text-lg transition duration-1000 bg-transparent border-b-2 border-gray-600 border-solid focus:outline-none hover:border-blue-600 focus:border-blue-600"
          type="text"
          required
          placeholder="Subject*"
          name="subject"
        />
        <input
          className="block px-4 py-2 mx-6 my-2 text-lg transition duration-1000 bg-transparent border-b-2 border-gray-600 border-solid focus:outline-none hover:border-blue-600 focus:border-blue-600"
          type="text"
          required
          placeholder="Message*"
          name="message"
        />
        <button
          type="submit"
          className="self-center mx-2 my-4 btn btn-primary btn-outline sm:self-end"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
