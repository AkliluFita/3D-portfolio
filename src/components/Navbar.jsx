import logoImg from "../assets/aklilu-logo.png";
import { motion, useCycle } from "framer-motion";
import facebookImg from "../assets/facebook-64.png";
import whatsAppImg from "../assets/whatsapp-64.png";
import telegramImg from "../assets/telegram-64.png";
import twitterImg from "../assets/twitter-64.png";
import { MenuToggle } from "../assets/elements/MenuToggle";
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="h-20 p-1 text-white bg-[#000836] ]">
      <div className="flex flex-row items-center justify-between h-full ">
        <motion.div className=" basis-1/4 w-[5rem] h-[7rem] border border-white shrink-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={logoImg}
            className="flex flex-shrink-0 object-contain w-24 h-full border border-white"
          />
        </motion.div>
        <div className="flex flex-row items-center justify-between border border-red-500 basis-1/2 sm:hidden">
          <span>home</span>
          <span>Showcase</span>
          <span>about</span>
          <span>Experience</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-row justify-between h-10 mx-4 border border-white basis-1/4">
          <img src={facebookImg} alt="facebook" />
          <img src={whatsAppImg} alt="whatsApp" />
          <img src={telegramImg} alt="telegram" />
          <img src={twitterImg} alt="twitter" />
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom="100%"
          className="flex border border-yellow-400 basis-1/4 shrink-0 lg:hidden md:hidden"
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
