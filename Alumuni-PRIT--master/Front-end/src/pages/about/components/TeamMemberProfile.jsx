import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { motion } from "framer-motion";

/* 
  use this component to display a person's profile
  props: 
        name = a string which is person's name
        imageURL = image source relative to parent component
        emailId = person's email id
        post = persons post
*/

const TeamMemberProfile = ({ name, emailId, linkedIn, imageURL, post }) => {
  return (
    <div className="w-full my-4 text-2xl bg-white shadow-xl card sm:w-80 text-base-content">
      <picture className="self-center w-48 h-48 mt-6 overflow-hidden bg-yellow-400 rounded-full">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="team member image"
          className="object-cover w-full h-full aspect-square"
        />
      </picture>
      <div className="items-center text-center card-body">
        <h2 className="capitalize card-title">{post}</h2>
        <p>{name}</p>
        <div className="flex justify-center w-full h-10 gap-4">
          <motion.a
            href={"mailto:" + emailId}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <SiGmail size={30} />
          </motion.a>
          <motion.a
            href={linkedIn}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <FaLinkedinIn size={30} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
