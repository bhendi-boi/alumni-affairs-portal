import { motion } from "framer-motion";
const SubmitButton = ({ isDisabled, className, text, color }) => {
  // variables
  const whileTap = isDisabled ? {} : { scale: 0.99 };
  const whileHover = isDisabled ? {} : { scale: 1.01 };
  return (
    <motion.button
      type="submit"
      disabled={isDisabled}
      className={
        `${className}` +
        " rounded-md p-2 capitalize font-semibold bg-emerald-500 " +
        (!isDisabled
          ? `border-${color}-500 bg-${color}-500 hover:bg-${color}-600 focus:bg-${color}-600 focus:border-${color}-600 text-base-100 cursor-pointer`
          : " border-green-500  text-base-100  bg-green-500")
      }
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{
        type: "spring",
        damping: 125,
      }}
    >
      {text}
    </motion.button>
  );
};

export default SubmitButton;
