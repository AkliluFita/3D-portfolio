import logoImg from "../../assets/navbar/My_New_Log.png";
import { motion } from "framer-motion";

const Logo = ({ className }) => {
  return (
    <motion.div
      className={` flex-[1] h-full shrink-0 ml-2 flex flex-row items-center gap-2  ${className}`}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src={logoImg}
        className="flex flex-shrink-0 object-cover w-[2.5rem] lg:w-[4rem] cursor-pointer"
      />{" "}
    </motion.div>
  );
};  

export default Logo;
