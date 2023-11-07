import Button from "./elements/Button";
import { showCaseData } from "../data/showCaseData";
import sampleImg from "../assets/showCaseImg.svg";
// import Box3D from "./canvas/box/Box3D";
import { motion } from "framer-motion";
import SlideText from "./SlideText";
import AOS from "aos";
import { useEffect } from "react";
import SocialIcons from "./elements/SocialIcons";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ShowCase = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="flex lg:flex-row items-center w-full h-auto lg:h-screen gap-4 p-4 bg-showcaseBack  flex-col relative z-[1] mt-[95px] bg-cover bg-center ">
      <SlideText sideType="left" />
      {/* <div className="absolute  top-[0] right-[0]">
        <Box3D />
      </div> */}
      <motion.div
        className=" flex-[1] h-full  flex flex-col items-center justify-center p-2 z-[1] "
        data-aos="fade-right"
      >
        <motion.div
          className="flex flex-col lg:w-[75%] gap-4  md:p-4 rounded-lg p-2 items-center "
          variants={textVariants}
        >
          <motion.h1
            className=" text-[1.5rem] md:text-[3rem] lg:text-[2.8rem] font-bold text-tx_primary"
            variants={textVariants}
          >
            {showCaseData.title}
          </motion.h1>
          <motion.h2 className="text-[2rem] font-bold text-tx_primary uppercase md:text-[3.8rem]">
            {" "}
            {showCaseData.name}
          </motion.h2>
          <p className="text-lg font-bold text-center text-tx_primary md:text-3xl">
            {showCaseData.description}
          </p>
          <SocialIcons />
          <div className="flex flex-row justify-center gap-4 p-2 mt-4">
            <Button text={"Hire Me"} className="text-black common_background" />
            <Button text={"Download CV"} className="text-white bg-bt_primary" />
          </div>
        </motion.div>
      </motion.div>
      <div
        className=" flex-[1] h-full  w-full flex flex-col justify-center z-[1] relative object-cover items-center"
        data-aos="fade-left"
      >
        <img src={sampleImg} alt="ggs" className="w-[70%]" />
      </div>
      <SlideText sideType="right" />
    </div>
  );
};

export default ShowCase;
