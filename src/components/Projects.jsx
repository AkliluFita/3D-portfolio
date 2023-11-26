import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectImages } from "../data/ProjectData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./projects.css";
import educationImg from "../assets/education/education.png";
import { RxDotFilled } from "react-icons/rx";

const Projects = () => {
  const [currentBox, setCurrentBox] = useState(0);

  const handleNext = () => {
    setCurrentBox((prevIndex) =>
      prevIndex + 1 === projectImages.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentBox((prevIndex) =>
      prevIndex - 1 < 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentBox(index);
  };

  return (
    <div className="bg-lightModeImage dark:bg-darkModeImage  h-auto lg:h-[100vh] flex flex-col gap-4 items-center relative">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>{" "}
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={educationImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1 className="first-heading-text" data-aos="fade-right">
          My Projects
        </h1>
      </div>
      <div className="flex-[11] w-[90%]   md:w-[80%] border border-white p-8 relative">
        <div className="absolute top-[50%] left-0" onClick={handlePrevious}>
          <FaChevronLeft className="font-bold text-white text-[2rem]" />
        </div>
        <div className="flex h-full gap-6 border border-white">
          <div className="flex-[1] border border-red-600 flex flex-col gap-4">
            <div className="flex-[1] border border-white flex justify-around items-center">
              <h1>Image</h1>
              <h1>Video</h1>
            </div>
            <div className="flex-[11] border border-white h-full">
              <img
                src={projectImages[currentBox].image}
                alt=""
                className="object-fill h-full"
              />
            </div>
          </div>
          <div className="flex-[1] border border-white flex flex-col gap-6">
            <div className="border border-white flex-[2] flex justify-center items-center">
              <h1>{projectImages[currentBox].title}</h1>
            </div>
            <div className="border border-white flex-[10] flex gap-6">
              <div className="border border-white flex-[4] p-2">
                <h1>used tools</h1>
                <ul>
                  <li>react</li>
                  <li>mysql</li>
                  <li>css</li>
                  <li>html</li>
                  <li>node</li>
                  <li>express</li>
                </ul>
              </div>
              <div className="border border-white flex-[8]"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] right-0" onClick={handleNext}>
          <FaChevronRight className="font-bold text-white  text-[2rem]" />
        </div>
        <div className="flex gap-6 border">
          {projectImages.map((_, index) => (
            <RxDotFilled
              key={index}
              className={` ${currentBox === index ? "text-red-600" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
