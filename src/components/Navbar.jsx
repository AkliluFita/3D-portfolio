import logoImg from "../assets/navbar/my_new_logo.png";
import { motion } from "framer-motion";
import { MenuToggle } from "./elements/MenuToggle";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Links from "./Links";
import githubImg from "../assets/navbar/github.png";
import moonImg from "../assets/navbar/moon.png";
import sunImg from "../assets/navbar/sun.png";
import AOS from "aos";
import TooltipRadix from "./elements/Tooltip";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../recoil/darkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

  // darkMode function
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // scroll function
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
          ? "shadow-md h-12 lg:h-[5.5rem] dark:bg-gray-600/30 backdrop-blur-sm bg-gray-200 dark:backdrop-blur-sm"
          : "h-14 lg:h-[6rem] dark:bg-gray-800  bg-gray-200  shadow-lg"
      } w-full  fixed top-0 left-0 p-1 text-white z-[22] duration-300 ease-in-out`}
    >
      <div className="flex flex-row items-center h-full gap-4 lg:justify-between">
        <motion.div className=" flex-[1] h-full shrink-0 ml-2 flex flex-row items-center gap-2 justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={logoImg}
            className="flex flex-shrink-0 object-cover w-[2.5rem] lg:w-[4rem] cursor-pointer"
          />{" "}
          <h1 className="text-sm font-bold dark:text-white lg:text-lg text-tx_primary">
            Aklilu_Dev
          </h1>
        </motion.div>
        <motion.div
          variants={variants}
          className="flex-row justify-around hidden lg:flex md:items-center lg:flex-[2] w-[20rem] gap-2"
        >
          <Links className=" text-[0.9rem]" />
        </motion.div>
        <div className="flex flex-row items-center h-full flex-[1] justify-center gap-4 lg:gap-8">
          <TooltipRadix text={!darkMode ? "Dark Mode" : "Light Mode"}>
            <img
              src={!darkMode ? moonImg : sunImg}
              alt=""
              className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] cursor-pointer"
              onClick={toggleDarkMode}
            />
          </TooltipRadix>

          <a
            rel="noreferrer"
            href="https://github.com/AkliluFita"
            target="_blank"
            className="px-2 rounded-lg "
          >
            <TooltipRadix text="Github">
              <img
                src={githubImg}
                alt=""
                className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] cursor-pointer"
              />
            </TooltipRadix>
          </a>
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
            className="absolute top-[3rem] right-[0.1rem] lg:hidden shadow-lg p-4 bg-gray-200 dark:bg-gray-800 rounded-lg z-10"
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
