import Button from "./elements/Button";
import { showCaseData } from "../data/showCaseData";
// import ComputersCanvas from "./canvas/computer/ComputerCanvas";
// import ComputerDraco from "./canvas/computer/ComputerDraco";
// import Model from "./canvas/computer/ComputerDraco";
// import ComputerModel from "./canvas/computer/ComputerModel";
import sampleImg from "../assets/showCaseImg.svg";
import Box3D from "./canvas/box/Box3D";
import { motion } from "framer-motion";
import SlideText from "./SlideText";
import animateImg from "../assets/showCase/web_animation.gif";

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
    <div className="flex lg:flex-row items-center w-full h-screen gap-4 p-4 bg-no-repeat bg-fill bg-[#00062B]  flex-col relative z-[1]">
      <SlideText sideType="left" />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <Box3D />
      </div>
      <motion.div
        className=" flex-[1] h-full text-white flex flex-col items-center justify-center p-2 z-[1]"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col w-full gap-8 md:p-4 "
          variants={textVariants}
        >
          <motion.h1
            className=" text-[2rem] md:text-[3rem] lg:text-[4rem]"
            variants={textVariants}
          >
            {showCaseData.title}
          </motion.h1>
          <motion.h2 className="text-3xl text-blue-600 md:text-4xl">
            {" "}
            {showCaseData.name}
          </motion.h2>
          <p className="text-2xl text-gray-400 md:text-3xl">
            {showCaseData.description}
          </p>
          <div className="flex flex-row justify-center gap-4 p-2 mt-4">
            <Button text={"see detail"} />
            <Button text={"see demo"} />
          </div>
        </motion.div>
      </motion.div>
      <div className=" flex-[1] h-full  w-full flex flex-col justify-center z-[1] relative">
        {/* <ComputersCanvas> */}
        {/* <ComputerDraco /> */}
        {/* <ComputerModel /> */}
        {/* </ComputersCanvas> */}
        <img src={sampleImg} alt="ggs" />
        <img
          src={animateImg}
          alt=""
          className="absolute left-[21%] "
          width="200px"
        />
      </div>
      <SlideText sideType="right" />
    </div>
  );
};

export default ShowCase;
