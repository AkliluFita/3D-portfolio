import { useState } from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/ProjectData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./projects.css";
import educationImg from "../assets/education/education.png";
import { RxDotFilled } from "react-icons/rx";
import { dotsVariants, sliderVariants } from "../utils/animate_func";
import { GitHubLogoIcon, IdCardIcon } from "@radix-ui/react-icons";
import { FaYoutube } from "react-icons/fa";
import useAOSInit from "../hooks/useAOSInit";
// import "animate.css";
import YoutubeEmbed from "./elements/YoutubeEmbed";

const Projects = () => {
  const [currentBox, setCurrentBox] = useState(0);
  const [direction, setDirection] = useState("left");
  const [isPictureActive, setIsPictureActive] = useState(true);

  const border_secondary = "dark:border-purple-700 border border-purple-400";

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
    <div className="bg-lightModeImage dark:bg-darkModeImage  h-auto lg:h-[100vh] flex flex-col gap-4 items-center relative">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>{" "}
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={educationImg} alt="" className="" />
        <h1 className="first-heading-text" data-aos="fade-right">
          My Projects
        </h1>
      </div>
      <div className="flex-[11] w-[90%] border border-purple-800 mb-[4rem]  md:w-[80%] p-8 relative dark:bg-gray-900 bg-bg_secondary rounded-lg">
        <motion.div
          className="absolute top-[50%] left-0"
          onClick={handlePrevious}
          variants={sliderVariants()}
          whileHover="hover"
        >
          <FaChevronLeft className="font-bold text-white text-[2rem] cursor-pointer" />
        </motion.div>
        <div className="flex flex-col h-full gap-6 lg:flex-row ">
          <div className="flex-[1]  rounded-lg flex flex-col">
            <div className="flex-[1]  flex justify-around items-center border-t bg-gray-800 dark:border-purple-600  rounded-lg">
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
            <div className="flex-[11]  h-full w-full">
              {isPictureActive ? (
                <img
                  src={projectData[currentBox].image}
                  alt=""
                  className="w-full h-full object-fit"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full object-fit">
                  {projectData[currentBox].videoEmbedLink ? (
                    <YoutubeEmbed
                      embedId={projectData[currentBox].videoEmbedLink}
                    />
                  ) : (
                    <h2 className="text-lg font-primary">
                      Video is not available
                    </h2>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex-[1]   rounded-lg flex flex-col gap-6">
            <div
              className={`flex-[2] flex justify-center items-center bg-gray-800   rounded-lg ${border_secondary} `}
            >
              <h1 className="font-bold text-black dark:text-white   font-primary lg:text-[2rem] text-[1.3rem] tracking-wider">
                {projectData[currentBox].title}
              </h1>
            </div>
            <div className=" flex-[10] flex gap-6">
              <div
                className={` flex-[4] p-2 flex flex-col rounded-lg bg-gray-800 ${border_secondary} `}
              >
                <h1 className="flex-[1] text-base tracking-wider lg:text-[1.5rem] dark:text-white text-black font-primary font-bold ">
                  Used tools
                </h1>
                <ul className="flex-[11]">
                  {projectData[currentBox].tools.map((item) => (
                    <li
                      key={item}
                      className="text-base lg:text-2xl font-primary"
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
                  <GitHubLogoIcon className="lg:w-[2rem] lg:h-[2rem] w-[1rem] h-[1rem]" />{" "}
                  <IdCardIcon className="lg:w-[2rem] lg:h-[2rem] w-[1rem] h-[1rem]" />
                  <FaYoutube className="lg:w-[2rem] lg:h-[2rem] w-[1rem] h-[1rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute top-[50%] right-0"
          bg-gray-800
          onClick={handleNext}
          variants={sliderVariants()}
          whileHover="hover"
        >
          <FaChevronRight className="font-bold text-white  text-[2rem] cursor-pointer" />
        </motion.div>
        <motion.div className="flex items-center justify-center gap-4 mt-4 cursor-pointer lg:gap-6">
          {projectData.map((_, index) => (
            <RxDotFilled
              key={index}
              initial="initial"
              animate={currentBox === index + 1 ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants()}
              className={` lg:text-[3rem] text-[1rem] ${
                currentBox === index ? "text-red-600" : ""
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
