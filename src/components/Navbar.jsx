import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Links from "./Links";
import MenuToggle from "../components/elements/MenuToggle";
import TooltipRadix from "./elements/Tooltip";
import {
  MoonIcon,
  SunIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Logo from "./elements/Logo";
import Link from "./elements/Link";
import useAOSInit from "../hooks/useAOSInit";
import useStickyOnScroll from "../hooks/useStickyOnScroll";
import useDarkMode from "../hooks/useDarkMode";
import { links } from "../utils/constant";

const Navbar = () => {
  const isSticky = useStickyOnScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();

  useAOSInit();

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
        <div className="flex-row justify-around hidden lg:flex md:items-center lg:flex-[2] w-[20rem] gap-2">
          <Links className=" text-[0.9rem]" />
        </div>
        <div className="flex flex-row items-center h-full flex-[1] justify-center gap-4 lg:gap-8">
          <TooltipRadix text={!darkMode ? "Dark Mode" : "Light Mode"}>
            {!darkMode ? (
              <MoonIcon className="icon-primary" onClick={toggleDarkMode} />
            ) : (
              <SunIcon className="icon-primary" onClick={toggleDarkMode} />
            )}
          </TooltipRadix>

          <Link url={links.GITHUB}>
            <TooltipRadix text="Github">
              <GitHubLogoIcon className="icon-primary" />
            </TooltipRadix>
          </Link>

          <Link url={links.LINKEDIN}>
            <TooltipRadix text="Linkedin">
              <LinkedInLogoIcon className="icon-primary" />
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
