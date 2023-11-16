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
import wellDoneImg from "../assets/education/well_done.png";
import educationImg from "../assets/education/education.png";
import ModalRadix from "./elements/Modal";

const SingleEducation = ({ item, index }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex-[1] flex flex-col gap-2 lg:gap-4 p-4 bg-bg_secondary dark:bg-gray-800 rounded-lg shadow-inner shadow-purple-500"
    >
      <div className="flex flex-row flex-[2] justify-between">
        <div>
          <h1 className="text-[1.2rem] lg:text-[2rem] text-[#7F2F92] font-bold font-mono">
            {item.title}
          </h1>
          <div className="flex flex-col gap-4">
            <h5 className="text-[0.7rem] lg:text-[1rem] text-tx_additional font-mono">
              {item.subTitle}
            </h5>
            <h3 className=" p-1 lg:p-2 common_background max-w-[15rem] text-center text-tx_secondary font-mono">
              {item.educationPeriod}
            </h3>
          </div>
        </div>
        <div className="rounded-[50%] h-[4rem]  w-[4rem] lg:w-[6rem] lg:h-[6rem]">
          <img
            src={item.img}
            alt="img"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className=" flex flex-row flex-[2] items-center gap-4">
        <img src={wellDoneImg} alt="" className="w-[3rem]" />
        <h2 className=" text-black text-[0.8rem] lg:text-[1.2rem] font-mono dark:text-gray-400 ">
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
      <hr className="h-[2px] w-full bg-br_primary border border-br_primary" />
      <div className="flex flex-col flex-[8] items-center lg:gap-4 gap-4 ">
        <h1 className="text-[1rem] lg:text-[1.5rem] flex-[1] text-tx_secondary font-bold font-mono">
          Some of relevant courses that I took
        </h1>
        <motion.ul
          initial={false}
          animate="show"
          variants={listItemVariant()}
          className=" flex-[11] flex gap-2 lg:gap-2 flex-col p-4 lg:p-6 text-black  w-full"
        >
          {item.courseLists.map((course) => (
            <motion.li
              initial="hidden"
              animate="show"
              variants={itemVariant()}
              key={course}
              className="lg:text-[1.2rem] text-[0.8rem] text-tx_additional list-disc list-outside font-mono dark:text-gray-400 "
            >
              {course}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {item.id === 2 && (
        <h2 className="flex items-center justify-between gap-2 p-2 font-mono font-bold lg:p-4">
          <ModalRadix
            content={{
              title: "Certificate Paper",
              desc: item.certificateDesc,
              image: item.certificatePaper,
            }}
          >
            <button className="lg:p-4 p-2 mb-2 mr-2 font-mono text-[0.6rem]  font-bold  uppercase text-black  dark:text-white lg:w-auto lg:text-lg rounded-3xl underline ">
              Certificate Paper
            </button>
          </ModalRadix>
          <ModalRadix
            content={{
              title: "Thesis Title",
              desc: item.thesisTitle,
              image: item.thesisPaper1,
            }}
          >
            <button className="lg:p-4 p-2 mb-2 mr-2 font-mono text-[0.6rem]  font-bold  uppercase text-black  dark:text-white lg:w-auto lg:text-lg rounded-3xl underline ">
              Thesis Title
            </button>
          </ModalRadix>
          <ModalRadix
            content={{
              title: "Thesis Book View",
              desc: "Thesis Approval Certificate with Jury members Signatures",
              image: item.thesisPaper2,
            }}
          >
            <button className="lg:p-4 p-2 mb-2 mr-2 font-mono text-[0.6rem]  font-bold  uppercase text-black  dark:text-white lg:w-auto lg:text-lg rounded-3xl underline ">
              Thesis Book View
            </button>
          </ModalRadix>
        </h2>
      )}
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
    <div className="common_background dark:bg-darkModeImage  h-auto lg:h-[100vh] flex flex-col gap-4 items-center border border-white">
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={educationImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1
          className=" text-[2rem] lg:text-[3rem] bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text text-transparent  uppercase font-bold font-mono   "
          data-aos="fade-right"
        >
          Education
        </h1>
      </div>
      <div className="flex-[11] w-[90%]  md:w-[80%]  ">
        <div
          className="flex flex-col  gap-10 lg:flex-row  lg:h-[95%] "
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
