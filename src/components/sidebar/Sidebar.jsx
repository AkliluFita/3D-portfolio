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
      className=" h-[100vh] w-full  z-40 dark:bg-gray-800 p-4  "
    >
      <div className="  h-[25rem] flex flex-col justify-between items-start">
        <Links className="text-start" />
      </div>
    </motion.div>
  );
};

export default Sidebar;
