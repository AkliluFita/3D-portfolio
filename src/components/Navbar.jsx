import logoImg from "../assets/navbar/My_New_Log.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Links from "./Links";
import MenuToggle from "../components/elements/MenuToggle";
import AOS from "aos";
import TooltipRadix from "./elements/Tooltip";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../recoil/darkMode";
import {
  MoonIcon,
  SunIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Logo from "./elements/Logo";
import Link from "./elements/Link";

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
          ? "shadow-lg  h-12 lg:h-[5.5rem] dark:bg-gray-900 bg-gray-200 "
          : "h-14 lg:h-[6rem] dark:dark:bg-gray-800  bg-gray-200  "
      } w-full  fixed top-0 left-0 p-1 text-white z-[22] duration-300 ease-in-out`}
    >
      <div className="flex flex-row items-center h-full gap-4 lg:justify-between">
        <Logo className="justify-center" />
        <motion.div
          variants={variants}
          className="flex-row justify-around hidden lg:flex md:items-center lg:flex-[2] w-[20rem] gap-2"
        >
          <Links className=" text-[0.9rem]" />
        </motion.div>
        <div className="flex flex-row items-center h-full flex-[1] justify-center gap-4 lg:gap-8">
          <TooltipRadix text={!darkMode ? "Dark Mode" : "Light Mode"}>
            {!darkMode ? (
              <MoonIcon
                className="w-[1.3rem] h-[1.3rem] lg:h-[1.3rem] cursor-pointer dark:text-white text-black"
                onClick={toggleDarkMode}
              />
            ) : (
              <SunIcon
                className="w-[1.3rem] h-[1.3rem] lg:h-[1.3rem] cursor-pointer dark:text-white text-black"
                onClick={toggleDarkMode}
              />
            )}
          </TooltipRadix>

          <Link url="https://github.com/AkliluFita">
            <TooltipRadix text="Github">
              <GitHubLogoIcon className="w-[1.3rem] h-[1.3rem] lg:w-[1.5rem] lg:h-[1.5rem] cursor-pointer dark:text-white text-black" />
            </TooltipRadix>
          </Link>

          <Link url="https://www.linkedin.com/in/aklilu-fita-493679204/">
            <TooltipRadix text="Linkedin">
              <LinkedInLogoIcon className="w-[1.3rem] h-[1.3rem]  lg:w-[1.5rem] lg:h-[1.5rem] cursor-pointer dark:text-white text-black" />
            </TooltipRadix>
          </Link>
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
            className="absolute top-[3rem] right-[0.1rem] lg:hidden shadow-lg p-4 bg-gray-200 dark:bg-gray-800  z-10"
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
