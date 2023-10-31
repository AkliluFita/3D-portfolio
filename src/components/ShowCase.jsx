import Button from "./elements/Button";
import { showCaseData } from "../data/showCaseData";
import sampleImg from "../assets/showCase/showcaseImg.png";
import Box3D from "./canvas/box/Box3D";
import { motion } from "framer-motion";
import SlideText from "./SlideText";

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
  return (
    <div className="flex lg:flex-row items-center w-full h-screen gap-4 p-4  bg-fill bg-cover bg-center bg-no-repeat bg-showcaseBack flex-col relative z-[1]">
      <SlideText sideType="left" />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Box3D />
      </div>
      <motion.div
        className=" flex-[1] h-full  flex flex-col items-center justify-center p-2 z-[1]"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col lg:w-[80%] gap-8  md:p-4 bg-[aqua] bg-opacity-30 rounded-lg p-2"
          variants={textVariants}
        >
          <motion.h1
            className=" text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold"
            variants={textVariants}
          >
            {showCaseData.title}
          </motion.h1>
          <motion.h2 className="text-3xl font-bold text-black uppercase md:text-4xl">
            {" "}
            {showCaseData.name}
          </motion.h2>
          <p className="text-2xl font-bold md:text-3xl">
            {showCaseData.description}
          </p>
          <div className="flex flex-row justify-center gap-4 p-2 mt-4">
            <Button text={"see detail"} />
            <Button text={"see demo"} />
          </div>
        </motion.div>
      </motion.div>
      <div className=" flex-[1] h-full  w-full flex flex-col justify-center z-[1] relative object-cover bitems-center">
        <img src={sampleImg} alt="ggs" className="w-[70%]" />
      </div>
      <SlideText sideType="right" />
    </div>
  );
};

export default ShowCase;
