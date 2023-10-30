import { workData } from "../data/workData";

const SingleWork = () => {
  return <div className="">education</div>;
};

const Education = () => {
  return (
    <div className="bg-[#000836]  relative">
      <h1 className=" text-[3rem] text-center text-white flex-[2] ">
        My Education
      </h1>
      <div className="flex-[2]">
        {workData.map((item) => (
          <SingleWork item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Education;
