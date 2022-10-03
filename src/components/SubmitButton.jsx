import { motion } from "framer-motion";
const SubmitButton = ({ isDisabled, className }) => {
  // variables
  const whileTap = isDisabled ? {} : { scale: 0.97 };
  const whileHover = isDisabled ? {} : { scale: 1.02 };
  return (
    <motion.button
      type="submit"
      disabled={isDisabled}
      className={
        `${className}` +
        " rounded-md p-2 " +
        (!isDisabled
          ? "bg-green-600 border-green-600 text-white cursor-pointer"
          : " border-green-300  text-white  bg-green-300")
      }
      whileHover={whileHover}
      whileTap={whileTap}
    >
      Submit
    </motion.button>
  );
};

export default SubmitButton;
