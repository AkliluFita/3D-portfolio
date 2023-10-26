import logoImg from "../assets/aklilu-logo.png";
import { motion } from "framer-motion";
import facebookImg from "../assets/facebook-64.png";
import whatsAppImg from "../assets/whatsapp-64.png";
import telegramImg from "../assets/telegram-64.png";
import twitterImg from "../assets/twitter-64.png";
import { MenuToggle } from "./elements/MenuToggle";
import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Links from "./Links";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const images = [facebookImg, whatsAppImg, telegramImg, twitterImg];

  return (
    <div className="h-14 lg:h-20 p-1 text-white bg-[#3F3D56]">
      <div className="flex flex-row items-center h-full lg:justify-between">
        <motion.div className=" flex-[1]  h-[7rem] w-[4rem]  shrink-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={logoImg}
            className="flex flex-shrink-0 object-contain  h-full  w-[6rem]  cursor-pointer"
          />
        </motion.div>
        <motion.div
          variants={variants}
          className="flex-row justify-around hidden  lg:flex md:items-center lg:flex-[2] w-[20rem] gap-2  "
        >
          <Links />
        </motion.div>
        <div className="flex flex-row justify-around flex-1 h-6 sm:h-8">
          {images.map((img) => (
            <motion.img
              key={img}
              src={img}
              whileHover={{ scale: 1.1 }}
              alt={img}
              className="cursor-pointer"
            />
          ))}
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom="100%"
          className="flex items-center justify-end flex-[1] pr-2  shrink-0 lg:hidden p-1"
        >
          <MenuToggle setIsOpen={setIsOpen} />
        </motion.div>
        {isOpen && (
          <div className="absolute top-[3.3rem] right-[1.2rem] lg:hidden border border-br_primary p-4 bg-[#000836] rounded-lg z-10">
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
