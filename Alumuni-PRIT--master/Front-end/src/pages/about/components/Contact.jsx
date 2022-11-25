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
        <BsLink className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
      ),
    },
    {
      href: "mailto:alumniaffairs@iiitdm.ac.in",
      icon: (
        <SiGmail className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
      ),
    },
    {
      href: "https://www.instagram.com/alumniaffairsiiitdm/",
      icon: (
        <BsInstagram className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
      ),
    },
    {
      href: "https://www.linkedin.com/company/alumni-affairs-iiitdm/",
      icon: (
        <BsLinkedin className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
      ),
    },
    {
      href: "https://www.youtube.com/channel/UCYIVsibOwxldwfDLtkhQlZQ/",
      icon: (
        <BsYoutube className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
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
    <section className="w-full flex flex-col sm:flex-row gap-4">
      <div className="sm:w-[50%] sm:border-r px-6">
        <h5 className="text-5xl py-4 text-slate-50 font-medium">
          Contact Info
        </h5>
        {people.map((person) => {
          return (
            <div key={person.role} className="px-2 py-2 capitalize">
              <p className="text-2xl text-slate-200">{person.role}</p>
              <p className="text-lg text-gray-300">{person.name}</p>
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
        <p className="text-5xl font-medium text-slate-50">Reach out !!</p>
        <input
          className="block mx-6 my-2 mt-4 bg-transparent text-slate-200 text-lg px-4 py-2  border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="text"
          required
          placeholder="Name*"
          name="name"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-slate-200 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="email"
          required
          placeholder="Email*"
          name="email"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-slate-200 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="text"
          required
          placeholder="Subject*"
          name="subject"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-slate-200 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="text"
          required
          placeholder="Message*"
          name="message"
        />
        <button
          type="submit"
          className="btn btn-primary btn-outline my-4 mx-2  self-center sm:self-end"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
