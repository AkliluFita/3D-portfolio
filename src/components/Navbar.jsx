import logoImg from "../assets/navbar/my_new_logo.png";
import { motion } from "framer-motion";
import { MenuToggle } from "./elements/MenuToggle";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Links from "./Links";
import githubImg from "../assets/navbar/github.png";
import moonImg from "../assets/navbar/moon.png";
import AOS from "aos";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

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

  return (
    <div
      className={` ${
        isSticky
          ? "shadow-md  h-14 lg:h-24 common_background "
          : "  h-[4rem] lg:h-[5.5rem] showcase_background shadow-lg"
      } w-full  fixed top-0 left-0   p-1 text-white  z-[22]      duration-300 ease-in-out`}
    >
      <div className="flex flex-row items-center h-full gap-4 lg:justify-between">
        <motion.div className=" flex-[1]  h-full   shrink-0 ml-2 flex flex-row items-center gap-2  justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={logoImg}
            className="flex flex-shrink-0 object-cover w-[2.5rem] lg:w-[4rem] cursor-pointer"
          />{" "}
          <h1 className="text-sm font-bold lg:text-lg text-tx_primary">
            Aklilu_Dev
          </h1>
        </motion.div>
        <motion.div
          variants={variants}
          className="flex-row justify-around hidden  lg:flex md:items-center lg:flex-[2] w-[20rem] gap-2 "
        >
          <Links className="text-black text-[1.3rem] " />
        </motion.div>
        {/* <SocialIcons /> */}
        <div className="flex flex-row items-center h-full  flex-[1] justify-center gap-4 lg:gap-8">
          <img
            src={moonImg}
            alt=""
            className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] cursor-pointer"
          />
          <img
            src={githubImg}
            alt=""
            className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] cursor-pointer"
          />
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
          <div
            className="absolute top-[4rem] right-0 lg:hidden shadow-lg p-4 common_background rounded-lg z-10"
            data-aos="fade-left"
          >
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
