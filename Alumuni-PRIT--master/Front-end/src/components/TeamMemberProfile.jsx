import { FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const TeamMemberProfile = ({ name, emailId, imageURL, post }) => {
  return (
    <div className="card sm:w-80 bg-base-100 shadow-xl text-2xl text-base-content">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize">{post}</h2>
        <p>{name}</p>
        <div className="flex justify-center gap-4 w-full h-10">
          <motion.a href={"mailto:" + emailId} whileHover={{ scale: 1.1 }}>
            <FiMail size={30} />
          </motion.a>
          <motion.a href="" whileHover={{ scale: 1.1 }}>
            <FaLinkedinIn size={30} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
