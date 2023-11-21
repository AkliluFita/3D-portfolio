import { motion } from "framer-motion";
const Button = ({ text, className }) => {
  return (
    <>
      <motion.button
        type="button"
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.95 }}
        className={`btn-primary ${className}`}
      >
        {text}
      </motion.button>
    </>
  );
};

export default Button;
