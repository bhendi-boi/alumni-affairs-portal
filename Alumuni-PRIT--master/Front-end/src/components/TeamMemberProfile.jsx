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
    <div className="card sm:w-80 bg-base-100 mx-6 my-4 shadow-xl text-2xl text-base-content">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="team member image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize">{post}</h2>
        <p>{name}</p>
        <div className="flex justify-center gap-4 w-full h-10">
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
