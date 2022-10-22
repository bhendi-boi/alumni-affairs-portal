import { motion } from "framer-motion";
const SubmitButton = ({ isDisabled, className, text }) => {
  // variables
  const whileTap = isDisabled ? {} : { scale: 0.99 };
  const whileHover = isDisabled ? {} : { scale: 1.01 };
  return (
    <motion.button
      type="submit"
      disabled={isDisabled}
      className={
        `${className}` +
        " rounded-md p-2 capitalize font-semibold " +
        (!isDisabled
          ? "border-green-500 bg-green-500  hover:bg-green-600 hover:border-green-600 text-white cursor-pointer"
          : " border-green-300  text-white  bg-green-300")
      }
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {text}
    </motion.button>
  );
};

export default SubmitButton;
