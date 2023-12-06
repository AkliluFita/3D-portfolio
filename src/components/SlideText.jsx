import { motion } from "framer-motion";
import { slideText } from "../utils/animate_func";
import { skillIconData } from "../data/skillData";

const SlideText = ({ sideType }) => {
  return (
    <>
      {sideType === "left" ? (
        <motion.div
          className="absolute top-[-5%] dark:text-gray-700  text-gray-500  text-[5rem] lg:text-[25rem] font-bold opacity-20 whitespace-nowrap uppercase  lg:block w-1/2 font-primary"
          // variants={slideText("-100%")}
          // initial="initial"
          // animate="animate"
        >
          Welcome to my portfolio
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-0 flex flex-row gap-8 font-bold text-gray-500 uppercase opacity-50 dark:text-gray-700 font-primary"
          variants={slideText("50%")}
          initial="initial"
          animate="animate"
        >
          {skillIconData.map((item) => (
            <item.icon
              key={item.name}
              className="lg:text-[4rem] mb-8 text-[3rem]  text-[#808080]"
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default SlideText;
