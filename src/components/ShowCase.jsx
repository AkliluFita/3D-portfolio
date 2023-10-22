import { showCaseData } from "../data/showCaseData";
// import ComputersCanvas from "./canvas/computer/ComputerCanvas";
// import ComputerDraco from "./canvas/computer/ComputerDraco";
// import Model from "./canvas/computer/ComputerDraco";
// import ComputerModel from "./canvas/computer/ComputerModel";

const ShowCase = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-screen gap-4 p-4 bg-no-repeat bg-fill bg-[#00062B] ">
      <div className=" flex-[1] h-full text-white flex flex-col items-center justify-center p-4  border border-white">
        <div className="flex flex-col gap-8 p-4 h-1/2 w-[90%]  border border-white">
          <h1 className="text-[4rem]">{showCaseData.title}</h1>
          <h2 className="text-4xl text-purple-600"> {showCaseData.name}</h2>
          <p className="text-3xl">{showCaseData.description}</p>
          <div className="flex flex-row justify-center gap-4 p-2 mt-4">
            <button
              type="button"
              className="p-4 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              My Demo sdfsdfsdf
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              My Demo sdfsdfsdf
            </button>
          </div>
        </div>
      </div>
      {/* <div className=" flex-[1] h-full border border-white"> */}
      {/* <ComputersCanvas> */}
      {/* <ComputerDraco /> */}
      {/* <ComputerModel /> */}
      {/* </ComputersCanvas> */}
      {/* </div> */}
    </div>
  );
};

export default ShowCase;
