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
      className=" h-[20rem] w-[15rem] flex flex-col justify-between items-center z-40"
    >
      <Links />
    </motion.div>
  );
};

export default Sidebar;
