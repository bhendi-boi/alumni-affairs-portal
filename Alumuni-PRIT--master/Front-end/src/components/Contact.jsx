import {
  FiLink2,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
//
const Contact = () => {
  const alumniPortalDomian = "alumniaffairs.iiitdm.ac.in";
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("kjcn");
  };

  return (
    <div className="w-full h-96 flex bg-pink-200">
      <div className="w-[50%] border-r px-6">
        <h5 className="text-3xl py-4">Contact Info</h5>
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
              <a href={"https:" + `${alumniPortalDomian}`}>
                <FiLink2 size={36} />
              </a>
            </li>
            <li>
              <a href="mailto:alumniaffairs@iiitdm.ac.in">
                <FiMail size={36} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/alumniaffairsiiitdm/">
                <FiInstagram size={36} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/alumni-affairs-iiitdm/">
                <FiLinkedin size={36} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCYIVsibOwxldwfDLtkhQlZQ/">
                <FiYoutube size={36} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form
        className="w-[50%] px-6 flex flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="text-3xl mx-4 mt-4 ">Reach out!!!</p>
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
          className="w-[20%] self-end mx-6 my-4 p-2 bg-blue-600 text-slate-50 border-2 rounded-md border-pink-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
