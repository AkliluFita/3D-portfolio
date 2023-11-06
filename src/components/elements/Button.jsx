import { motion } from "framer-motion";
const Button = ({ text, className }) => {
  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 mb-2 mr-2 font-bold uppercase  lg:w-auto text-md lg:text-lg rounded-3xl  ${className}`}
      >
        {text}
      </motion.button>
    </>
  );
};

export default Button;
