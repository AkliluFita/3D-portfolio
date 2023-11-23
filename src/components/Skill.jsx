import { useEffect } from "react";
import { skillIconData, skillTextData } from "../data/skillData";
import BallCanvas from "./canvas/ball/BallCanvas";
import AOS from "aos";
import skillImg from "../assets/skillIcon/skill.png";
import listArrowImg from "../assets/skillIcon/list_arrow.png";
import TooltipRadix from "../components/elements/Tooltip";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className=" bg-cover bg-center bg-no-repeat common_background dark:bg-darkModeImage flex flex-col lg:p-8 p-2 lg:h-[100vh] items-center  gap-4 relative">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>
      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={skillImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1 className=" text-[2rem] tracking-widest lg:text-[3rem] bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text text-transparent  uppercase font-bold font-primary   ">
          My Skills
        </h1>
      </div>
      <div
        className="flex gap-4 flex-[10] lg:flex-row flex-col lg:px-8  lg:w-[80%] w-[90%]"
        data-aos="fade-right"
      >
        <div className="flex-[1]  lg:p-4 p-1 dark:bg-gray-800 bg-bg_secondary rounded-lg border border-purple-500">
          <div className="flex flex-col w-full gap-4 p-1 lg:p-4">
            <h1 className="text-center text-[1.5rem] tracking-wider lg:text-[2rem] dark:text-white text-black font-primary font-bold ">
              My Skill Lists
            </h1>
            <ul className=" flex-[11] flex gap-2 lg:gap-4 flex-col lg:p-6 text-black  w-full">
              {skillTextData.map((item) => (
                <li
                  key={item.id}
                  className="lg:text-[1.2rem] text-[0.9rem]  list-disc list-outside font-primary dark:text-white text-black flex items-center flex-row  justify-between gap-8"
                >
                  <div className="flex items-center gap-2 ">
                    <img
                      src={listArrowImg}
                      alt=""
                      className="lg:w-[2rem] w-[1.5rem]"
                    />
                    <h1 className="font-primary uppercase lg:text-[1.1rem] text-[0.8rem]">
                      {item.title}
                    </h1>
                  </div>
                  <span className="lg:text-[1.1rem] text-[0.8rem] text-tx_secondary font-primary font-bold text-end">
                    {item.subTitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex   flex-wrap items-center justify-between  lg:gap-2 gap-4 p-2   flex-[1]  rounded-lg dark:bg-gray-800 bg-bg_secondary border border-purple-500">
          {skillIconData.map((item) => (
            <TooltipRadix text={item.name} key={item.name}>
              <item.icon className="lg:text-[6rem] text-[4rem] text-[#808080] " />
            </TooltipRadix>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
