import { educationData } from "../data/educationData";
import { motion } from "framer-motion";
import {
  fadeIn,
  itemVariant,
  listItemVariant,
  textVariant,
} from "../utils/animate_func";

const SingleEducation = ({ item, index }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex-[1]  border-b-4 border-white h-[80%] flex flex-col gap-4 p-4 bg-[#3F3D56] rounded-lg"
    >
      <div className="flex flex-row flex-[2] justify-between">
        <div>
          <h1 className="text-[2rem]">{item.title}</h1>
          <h5 className="text-gray-400">{item.subTitle}</h5>
        </div>
        <div className="rounded-[50%] w-[6rem] h-[6rem]">
          <img
            src={item.img}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col flex-[2]">
        <h2 className="text-[1.2rem]">{item.subTitleTwo}</h2>
        <motion.p
          initial={false}
          animate="show"
          variants={textVariant(0.5 * index)}
          className="mt-6 text-gray-400"
        >
          {item.desc}
        </motion.p>
      </div>
      <div className="flex flex-col flex-[8] items-end gap-4 ">
        <h1 className="text-[1.3rem] flex-[1]">some of the list</h1>
        <motion.ul
          initial={false}
          animate="show"
          variants={listItemVariant()}
          className=" flex-[11] flex gap-4 flex-col p-4"
        >
          {item.courseLists.map((course) => (
            <motion.li
              initial="hidden"
              animate="show"
              variants={itemVariant()}
              key={course}
            >
              {course}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className="bg-[#000836] h-auto lg:h-[100vh] flex flex-col gap-10 items-center">
      <h1 className=" text-[3rem]  flex-[1] ">My Education Background</h1>
      <div className="flex-[11]  w-[80%] h-full">
        <div className="flex flex-col h-full gap-10 lg:flex-row ">
          {educationData.map((item, index) => (
            <SingleEducation item={item} key={item.id} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
