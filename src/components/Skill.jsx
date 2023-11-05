import { useEffect } from "react";
import { skillData } from "../data/skillData";
import BallCanvas from "./canvas/ball/BallCanvas";
import AOS from "aos";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className=" bg-cover bg-center bg-no-repeat common_background flex flex-col p-8 lg:h-[100vh] items-center  gap-4">
      <h1
        className=" text-[2rem] lg:text-[3rem] text-[#7F2F92] uppercase font-bold  mt-[95px] "
        data-aos="fade-right"
      >
        My Skills
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-between  gap-2 p-4  flex-[10] ">
        {skillData.map((item, index) => (
          <div
            key={index}
            className="  rounded-lg  w-[20rem] h-[10rem]  p-4  bg-[#dadfe4]  bg-opacity-30 border border-[#7F2F92]"
          >
            <BallCanvas icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
