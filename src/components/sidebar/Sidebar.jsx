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
      className=" h-[20rem] w-[15rem] flex flex-col justify-between items-start z-40   "
    >
      <Links className=" border-b border-[0.5px]  common_background text-black text-[]" />
    </motion.div>
  );
};

export default Sidebar;
