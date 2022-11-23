import { BsLinkedin, BsInstagram, BsYoutube, BsLink } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
//
const Contact = () => {
  const alumniPortalDomian = "alumniaffairs.iiitdm.ac.in";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("kjcn");
  };

  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="sm:w-[50%] sm:border-r px-6">
        <h5 className="text-3xl sm:text-5xl py-4 section-title">
          Contact Info
        </h5>
        <div className="px-2 py-2 text-lg">
          <h6 className="text-xl">Professor In Charge</h6>
          <p>Dr. </p>
        </div>
        <div className="px-2 py-2 text-lg">
          <h6 className="text-xl">Alumni Affairs Secratry</h6>
          <p>N Sree Dhyuti</p>
        </div>
        <div className="px-2 py-2 text-lg">
          <h6 className="text-xl">Alumni Affairs Joint Secratry</h6>
          <p>Srinidhi Balasubramanian</p>
        </div>
        <div className="px-2 mt-10">
          <ul className="flex gap-4">
            <li>
              <motion.a href={"https:" + `${alumniPortalDomian}`}>
                <BsLink className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
              </motion.a>
            </li>
            <li>
              <a href="mailto:alumniaffairs@iiitdm.ac.in">
                <SiGmail className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alumniaffairsiiitdm/">
                <BsInstagram className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/alumni-affairs-iiitdm/">
                <BsLinkedin className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out" />
              </a>
            </li>
            <li>
              <motion.a
                href="https://www.youtube.com/channel/UCYIVsibOwxldwfDLtkhQlZQ/"
                whileHover={{ scale: 1.1 }}
                animate={{ duration: 2 }}
                className="bg-white w-14"
              >
                <BsYoutube className="w-10 h-10 hover:text-sky-500 focus:text-sky-500 focus:scale-105 hover:scale-105 transition-all duration-300 ease-in-out;" />
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
      <form
        className="sm:w-[50%] px-6 flex flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="text-3xl mx-4 mt-4 sm:text-5xl section-title">
          Reach out!!!
        </p>
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="text"
          required
          placeholder="Name*"
          name="name"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="email"
          required
          placeholder="Email*"
          name="email"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
          type="text"
          required
          placeholder="Subject*"
          name="subject"
        />
        <input
          className="block mx-6 my-2 bg-transparent text-gray-700 text-lg px-4 py-2 border-solid border-b-2 border-gray-800 focus:outline-none  focus:border-blue-600 transition duration-1000"
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
    </div>
  );
};

export default Contact;
