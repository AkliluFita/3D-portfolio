import React from "react";
import { motion } from "framer-motion";

const leftSlideText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 50,
    },
  },
};
const rightSlideText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 50,
    },
  },
};

const SlideText = ({ sideType }) => {
  return (
    <>
      {sideType === "left" ? (
        <motion.div
          className="absolute top-0 dark:text-gray-700  text-gray-500  text-[3rem] font-bold opacity-50 whitespace-nowrap uppercase hidden lg:block w-1/2 font-mono"
          variants={leftSlideText}
          initial="initial"
          animate="animate"
        >
          Computer Engineer, Front-end Developer, Back-end Developer, Full-stack
          Developer, UI designer, Machine Learning(AI) Practitioner
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-0 dark:text-gray-700  text-gray-500  text-[3rem] font-bold opacity-50 whitespace-nowrap uppercase  hidden lg:block  w-1/2 font-mono"
          variants={rightSlideText}
          initial="initial"
          animate="animate"
        >
          HTML, CSS, Saas, Tailwind, Material UI, Javascript, Typescript,
          Golang, Python, Node.js, Express.js, MySQL, Postgres Figma, React,
          Next.js,
        </motion.div>
      )}
    </>
  );
};

export default SlideText;
