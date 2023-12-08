import { motion } from "framer-motion";
import { slideText } from "../utils/animate_func";
import { skillIconData } from "../data/skillData";

const SlideText = ({ sideType }) => {
  return (
    <>
      {sideType === "left" ? (
        <motion.div
          className="absolute bottom-[10%] dark:text-gray-700  text-gray-500  text-[0rem] lg:text-[35rem] font-bold opacity-20 whitespace-nowrap uppercase  lg:block w-1/2 font-primary"
          // variants={slideText("-100%")}
          // initial="initial"
          // animate="animate"
        >
          Aklilu
        </motion.div>
      ) : (
        <motion.div
          className="absolute bottom-[1%] flex flex-row gap-8 font-bold text-gray-500 uppercase opacity-20 dark:text-gray-700 font-primary"
          // variants={slideText("100%")}
          // initial="initial"
          // animate="animate"
        >
          {skillIconData.map((item) => (
            <item.icon
              key={item.name}
              className="lg:text-[8rem] mb-8 text-[0rem]  text-[#808080]"
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default SlideText;
