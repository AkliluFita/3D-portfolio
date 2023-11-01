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
          className="absolute top-0 text-white  text-[3rem] font-bold opacity-50 whitespace-nowrap uppercase hidden lg:block border border-black w-1/2"
          variants={leftSlideText}
          initial="initial"
          animate="animate"
        >
          Computer Engineer, Front-end Developer, Back-end Developer, Full-stack
          Developer, UI designer, Machine Learning(AI) Practitioner
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-0 text-white  text-[3rem] font-bold opacity-50 whitespace-nowrap uppercase  hidden lg:block border border-black w-1/2"
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
