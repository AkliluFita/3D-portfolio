import { educationData } from "../data/educationData";
import { motion } from "framer-motion";
import { fadeIn, itemVariant, listItemVariant } from "../utils/animate_func";
import ModalRadix from "./elements/Modal";
import { PiGlobeStandFill } from "react-icons/pi";
import useAOSInit from "../hooks/useAOSInit";
import { MdCastForEducation } from "react-icons/md";


const Education = () => {
  useAOSInit();
  return (
    <div className="relative flex flex-col items-center h-auto gap-4 bg-lightModeImage dark:bg-darkModeImage">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <MdCastForEducation className="text-purple-600 text-[3rem]" />{" "}
        <h1 className="first-heading-text" data-aos="fade-right">
          Education
        </h1>
      </div>
      <div className="flex-[11] w-[90%]  md:w-[80%]  ">
        <div
          className="flex flex-col  gap-10 lg:flex-row  lg:h-[90%] lg:p-8 py-6 "
          data-aos="fade-right"
        >
          {educationData.map((item, index) => (
            <Cards item={item} key={item.id} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

const Cards = ({ item, index }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex-[1] flex flex-col gap-2  lg:gap-4 p-4 bg-bg_secondary dark:bg-gray-900 rounded-lg border border-purple-800"
    >
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-[1.2rem] lg:text-[2rem] text-[#7F2F92] font-bold font-primary">
            {item.title}
          </h1>
          <div className="flex flex-col gap-4">
            <h5 className="text-[0.7rem] lg:text-[1rem] text-tx_additional font-primary">
              {item.subTitle}
            </h5>
            <h3 className=" p-1 lg:p-2 common_background dark:bg-bg_dark max-w-[15rem] text-center lg:text-base text-[0.8rem] text-tx_secondary font-primary">
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
      <div className="flex flex-row items-center gap-4 ">
        <PiGlobeStandFill className="text-[1.5rem] lg:text-[2rem] dark:text-white text-black" />
        <h2 className=" text-black text-[0.8rem] lg:text-[1.2rem] font-primary dark:text-gray-400 ">
          {item.subTitleTwo}
        </h2>
      </div>
      <hr className="h-[2px] w-full bg-br_primary border border-br_primary" />
      <div className="flex flex-col items-center gap-2  lg:gap-4 flex-[4]">
        <h1 className="text-[1rem] lg:text-[1.5rem] flex-[1] text-tx_secondary font-bold font-primary">
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
              className="lg:text-[1.2rem] text-[0.8rem] text-tx_additional list-disc list-outside font-primary dark:text-gray-400 "
            >
              {course}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex items-center justify-between gap-2 p-0 font-bold font-primary ">
        <ModalRadix
          content={{
            title: "Certificate Paper",
            desc: item.certificateDesc,
            image: item.certificatePaper,
          }}
        >
          <button className="lg:p-4 p-2 mb-2 mr-2 font-primary text-[0.6rem]  font-bold  uppercase text-black  dark:text-white lg:w-auto lg:text-lg rounded-3xl underline ">
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
          {item.thesisTitle && (
            <button className="lg:p-4 p-2 mb-2 mr-2 font-primary text-[0.6rem]  font-bold  uppercase text-black  dark:text-white lg:w-auto lg:text-lg rounded-3xl underline ">
              Thesis Title
            </button>
          )}
        </ModalRadix>
        <ModalRadix
          content={{
            title: "Thesis Book View",
            desc: "Thesis Approval Certificate with Jury members Signatures",
            image: item.thesisPaper2,
          }}
        >
          {item.thesisPaper1 && (
            <button className="lg:p-4 p-2 mb-2 mr-2 font-primary text-[0.6rem]  font-bold  uppercase text-black  dark:text-white lg:w-auto lg:text-lg rounded-3xl underline ">
              Thesis Book View
            </button>
          )}
        </ModalRadix>
      </div>
    </motion.div>
  );
};
