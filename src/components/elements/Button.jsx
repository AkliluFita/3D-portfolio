import { motion } from "framer-motion";
const Button = ({ text, className }) => {
  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 lg:p-4 mb-2 mr-2 font-bold uppercase  lg:w-auto text-[0.8rem] lg:text-lg rounded-3xl font-primary  dark:shadow-white ${className}`}
      >
        {text}
      </motion.button>
    </>
  );
};

export default Button;
