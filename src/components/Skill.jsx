import { skillData } from "../data/skillData";
import BallCanvas from "./canvas/ball/BallCanvas";

const Skill = () => {
  return (
    <div className=" bg-[#000836] flex flex-col p-8 h-[100vh]">
      <h1 className=" text-[3rem] text-center text-white">My Skills</h1>
      <div className="flex flex-row flex-wrap items-center gap-4 p-4 ">
        {skillData.map((item, index) => (
          <div
            key={index}
            className="flex-[1] bg-[#00062B] rounded-lg border border-[#1D2452]"
          >
            <BallCanvas icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
