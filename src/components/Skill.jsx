import { skillData } from "../data/skillData";
import BallCanvas from "./canvas/ball/BallCanvas";

const Skill = () => {
  return (
    <div className=" bg-cover bg-center bg-no-repeat bg-aboutBack flex flex-col p-8 h-[100vh] items-center  gap-4">
      <h1 className=" text-[3rem] text-center text-white flex-[2] uppercase">
        My Skills
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-between w-[80%] gap-2 p-4  flex-[10]">
        {skillData.map((item, index) => (
          <div key={index} className="  rounded-lg  w-[20rem] h-[10rem]  p-4">
            <BallCanvas icon={item.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
