import { motion } from "framer-motion";
import Links from "../Links";

const Sidebar = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      className=" h-[20rem] w-[15rem] flex flex-col justify-between items-start z-40 dark:bg-gray-800 bg-white  "
    >
      <Links className="text-black bg-white  dark:bg-gray-800 dark:text-white" />
    </motion.div>
  );
};

export default Sidebar;
