import { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/ProjectData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GlobeIcon } from "@radix-ui/react-icons";
// import "./projects.css";
import educationImg from "../assets/education/education.png";
import TooltipRadix from "./elements/Tooltip";

import { RxDotFilled } from "react-icons/rx";
import { dotsVariants, sliderVariants } from "../utils/animate_func";
import { GitHubLogoIcon, IdCardIcon } from "@radix-ui/react-icons";
import { FaYoutube } from "react-icons/fa";
import useAOSInit from "../hooks/useAOSInit";
// import "animate.css";
import YoutubeEmbed from "./elements/YoutubeEmbed";
import { FaProjectDiagram } from "react-icons/fa";
import Link from "./elements/Link";

const Projects = () => {
  const [currentBox, setCurrentBox] = useState(0);
  const [direction, setDirection] = useState("left");

  useAOSInit();

  const handleNext = () => {
    setDirection("right");
    setCurrentBox((prevIndex) =>
      prevIndex + 1 === projectData.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentBox((prevIndex) =>
      prevIndex - 1 < 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentBox(index);
    setDirection(index > currentBox ? "right" : "left");
  };

  return (
    <div className="relative flex flex-col items-center gap-4 bg-lightModeImage dark:bg-darkModeImage lg:h-screen">
      {/* <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>{" "} */}
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <FaProjectDiagram className="text-purple-600 text-[3rem]" />{" "}
        <h1 className="first-heading-text" data-aos="fade-right">
          My Projects
        </h1>
      </div>
      <div className="flex-[10] w-[90%] px-4  mb-[4rem]  md:w-[80%] h-full relative dark:bg-gray-900 border border-blue-600 bg-bg_secondary rounded-lg">
        <motion.div
          className="absolute top-[50%] left-0 bg-gray-600 p-2 rounded-[50%] opacity-50 hover:opacity-100"
          onClick={handlePrevious}
          variants={sliderVariants()}
          whileHover="hover"
        >
          <FaChevronLeft className="font-bold text-white  text-[2rem] cursor-pointer opacity-50" />
        </motion.div>
        <div className="flex flex-col h-full gap-6 lg:flex-row">
          <ProjectMedia setDirection={setCurrentBox} currentBox={currentBox} />
          <ProjectInfo currentBox={currentBox} />
        </div>
        <motion.div
          className="absolute top-[50%] right-0 bg-gray-600 p-2 rounded-[50%] opacity-50 hover:opacity-100"
          bg-gray-800
          onClick={handleNext}
          variants={sliderVariants()}
          whileHover="hover"
        >
          <FaChevronRight className="font-bold text-white  text-[2rem] cursor-pointer " />
        </motion.div>
        <motion.div className="flex items-center justify-center gap-4 cursor-pointer lg:gap-6">
          {projectData.map((_, index) => (
            <RxDotFilled
              key={index}
              initial="initial"
              animate={currentBox === index + 1 ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants()}
              className={` lg:text-[3rem] text-[1rem] ${
                currentBox === index
                  ? "text-red-600"
                  : "text-black dark:text-white"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectMedia = ({ setDirection, currentBox }) => {
  const [isPictureActive, setIsPictureActive] = useState(true);
  return (
    <div className="flex-[1]  rounded-lg flex flex-col">
      <div className="flex-[1]  flex justify-around items-center rounded-lg">
        <h1
          className={` ${
            isPictureActive
              ? "dark:border-purple-700 border border-purple-400"
              : ""
          } text-[1rem] tracking-wider lg:text-[1.5rem] px-4 rounded-lg dark:text-white text-black font-primary font-bold cursor-pointer`}
          onClick={() => setIsPictureActive(true)}
        >
          Image
        </h1>
        <h1
          className={` ${
            !isPictureActive
              ? "dark:border-purple-700 border border-purple-400"
              : ""
          } text-[1rem] tracking-wider lg:text-[1.5rem] px-4 rounded-lg dark:text-white text-black font-primary font-bold cursor-pointer`}
          onClick={() => setIsPictureActive(false)}
        >
          Video
        </h1>
      </div>
      <div className="flex-[11]  h-full w-full rounded-sm lg:p-8 p-4">
        {isPictureActive ? (
          <img
            src={projectData[currentBox].image}
            alt=""
            className="object-fill w-full h-full rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full object-fit">
            {projectData[currentBox].videoEmbedLink ? (
              <YoutubeEmbed embedId={projectData[currentBox].videoEmbedLink} />
            ) : (
              <h2 className="text-lg font-primary h-[10rem]">
                Video is not available
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectInfo = ({ currentBox }) => {
  return (
    <div className="flex-[1]   rounded-lg flex flex-col gap-6">
      <div
        className={`flex-[2] flex justify-center items-center   rounded-lg `}
      >
        <h1 className="font-bold text-black dark:text-white border-b w-full text-center border-purple-600  font-primary lg:text-[2rem] text-[1.3rem] tracking-wider">
          {projectData[currentBox].title}
        </h1>
      </div>
      <div className=" flex-[10] flex gap-6">
        <div className={` flex-[4] p-2 flex flex-col rounded-lg `}>
          <h1 className="flex-[1] text-base tracking-wider lg:text-[1.5rem] dark:text-white text-black font-primary font-bold ">
            Used tools
          </h1>
          <ul className="flex-[11]">
            {projectData[currentBox].tools.map((item) => (
              <li
                key={item}
                className="text-base text-gray-600 lg:text-2xl font-primary dark:text-gray-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex-[8] flex flex-col gap-2">
          <h1 className="flex-[2] text-[1rem] tracking-wider lg:text-[1.5rem] dark:text-white text-black font-primary font-bold">
            Project Detail Information
          </h1>
          <p className="flex-[8]  text-gray-600 lg-text-base text-[0.8rem] lg:text-[1.2rem] font-primary dark:text-gray-400 ">
            {projectData[currentBox].description}
          </p>
          <div className="flex-[2] flex items-center justify-around">
            <Link url={projectData[currentBox].githubLink}>
              <TooltipRadix
                text={
                  projectData[currentBox].githubLink
                    ? "click github link"
                    : "github not available"
                }
              >
                <GitHubLogoIcon className="lg:w-[2rem] lg:h-[2rem] w-[1rem] h-[1rem] dark:text-white text-black  cursor-pointer" />{" "}
              </TooltipRadix>
            </Link>
            <Link url="link">
              <TooltipRadix text={"Video not available yet"}>
                <FaYoutube className="lg:w-[2rem] lg:h-[2rem] w-[1rem] h-[1rem] dark:text-white text-black  cursor-pointer" />
              </TooltipRadix>
            </Link>
            <Link url={projectData[currentBox].webHostLink}>
              <TooltipRadix
                text={
                  projectData[currentBox].webHostLink
                    ? "click web link"
                    : "Web link not available"
                }
              >
                <GlobeIcon className="lg:w-[2rem] lg:h-[2rem] w-[1rem] h-[1rem] dark:text-white text-black  cursor-pointer" />
              </TooltipRadix>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};