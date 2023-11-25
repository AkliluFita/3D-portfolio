import { motion } from "framer-motion";
import { slideText } from "../utils/animate_func";

const SlideText = ({ sideType }) => {
  return (
    <>
      {sideType === "left" ? (
        <motion.div
          className="absolute top-[-20%] dark:text-gray-700  text-gray-500  text-[40rem] font-bold opacity-20 whitespace-nowrap uppercase hidden lg:block w-1/2 font-primary"
          variants={slideText("-100%")}
          initial="initial"
          animate="animate"
        >
          Computer Engineer, Front-end Developer, Back-end Developer, Full-stack
          Developer, UI designer, Machine Learning(AI) Practitioner
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-0 dark:text-gray-700  text-gray-500  text-[3rem] font-bold opacity-50 whitespace-nowrap uppercase  hidden lg:block  w-1/2 font-primary"
          variants={slideText("100%")}
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
