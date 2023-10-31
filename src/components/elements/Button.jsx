import { motion } from "framer-motion";
const Button = ({ text }) => {
  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.1, color: "rgb(182, 204, 227)" }}
        whileTap={{ scale: 0.95 }}
        className="w-[10rem] p-4 mb-2 mr-2 text-lg  rounded-2xl focus:outline-none  focus:z-10 focus:ring-4 focus:ring-gray-200 bg-[#018673] font-bold text-black hover:text-white"
      >
        {text}
      </motion.button>
    </>
  );
};

export default Button;
