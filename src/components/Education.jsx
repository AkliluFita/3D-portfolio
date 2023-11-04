import { educationData } from "../data/educationData";
import { motion } from "framer-motion";
import AOS from "aos";
import {
  fadeIn,
  itemVariant,
  listItemVariant,
  textVariant,
} from "../utils/animate_func";
import { useEffect } from "react";

const SingleEducation = ({ item, index }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex-[1]  border-b-4 border-white h-[80%] flex flex-col gap-4 p-4 bg-[#018673]  rounded-lg"
    >
      <div className="flex flex-row flex-[2] justify-between">
        <div>
          <h1 className="text-[1.4rem] lg:text-[2rem] text-white">
            {item.title}
          </h1>
          <h5 className="text-[0.7rem] lg:text-[1rem]">{item.subTitle}</h5>
        </div>
        <div className="rounded-[50%] w-[6rem] h-[6rem]">
          <img
            src={item.img}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className=" flex flex-col flex-[2]">
        <h2 className=" text-white text-[0.9rem] lg:text-[1.2rem]">
          {item.subTitleTwo}
        </h2>
        {/* <motion.p
          initial={false}
          animate="show"
          variants={textVariant(0.5 * index)}
          className="mt-6"
        >
          {item.desc}
        </motion.p> */}
      </div>
      <div className="flex flex-col flex-[8] items-center gap-4 ">
        <h1 className="text-[1rem] lg:text-[1.3rem] flex-[1] text-white">
          Some of relevant course tha I took
        </h1>
        <motion.ul
          initial={false}
          animate="show"
          variants={listItemVariant()}
          className=" flex-[11] flex gap-4 flex-col p-4 text-white border border-white w-full"
        >
          {item.courseLists.map((course) => (
            <motion.li
              initial="hidden"
              animate="show"
              variants={itemVariant()}
              key={course}
              className="lg:text-[1rem] text-[0.9rem]"
            >
              {course}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <h2 className="p-2 lg:p-4 bg-bg_primary">{item.educationPeriod}</h2>
    </motion.div>
  );
};

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="bg-bg_primary h-auto lg:h-[100vh] flex flex-col gap-4 items-center border border-white">
      <h1
        className=" text-[2rem] lg:text-[3rem] text-white flex-[1] uppercase  "
        data-aos="fade-right"
      >
        My Education
      </h1>
      <div className="flex-[11]  w-[80%] h-full">
        <div
          className="flex flex-col h-full gap-10 lg:flex-row "
          data-aos="fade-right"
        >
          {educationData.map((item, index) => (
            <SingleEducation item={item} key={item.id} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
