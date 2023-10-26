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
          className="absolute top-0 text-blue-600  text-[3rem] font-bold opacity-10 whitespace-nowrap uppercase hidden lg:block"
          variants={leftSlideText}
          initial="initial"
          animate="animate"
        >
          hello this is aklilu jemal fita hello this is aklilu jemal fita hello
          this is aklilu jemal fita hello this is aklilu jemal fita
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-0 text-blue-600  text-[3rem] font-bold opacity-10 whitespace-nowrap uppercase  hidden lg:block"
          variants={rightSlideText}
          initial="initial"
          animate="animate"
        >
          hello this is aklilu jemal fita hello this is aklilu jemal fita hello
          this is aklilu jemal fita hello this is aklilu jemal fita
        </motion.div>
      )}
    </>
  );
};

export default SlideText;
