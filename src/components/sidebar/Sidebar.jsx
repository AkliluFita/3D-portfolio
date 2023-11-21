import Links from "../Links";

const Sidebar = () => {
  return (
    <div className=" h-[100vh] w-full  z-40 dark:bg-gray-800 p-4  ">
      <div className="  h-[25rem] flex flex-col justify-between items-start">
        <Links className="text-start" />
      </div>
    </div>
  );
};

export default Sidebar;
