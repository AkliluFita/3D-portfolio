// import BallCanvas from "./canvas/ball/BallCanvas";
// import BallModel from "./canvas/ball/BallModel";

const Skill = () => {
  const balls = Array.from({ length: 18 }, (_, i) => i + 1);
  return (
    <div className=" bg-[#000836] flex flex-col p-8">
      <h1 className=" text-[3rem] text-center text-white">My Skills</h1>
      <div className="flex flex-row flex-wrap items-center gap-4 p-4 ">
        {balls.map((ball, index) => (
          <div
            key={index}
            className="flex-[1] bg-[#00062B] rounded-lg border border-[#1D2452]"
          >
            {/* <BallCanvas> */}
            {/* <BallModel /> */}
            {/* </BallCanvas> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
