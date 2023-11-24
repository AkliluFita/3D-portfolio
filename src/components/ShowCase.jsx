import Button from "./elements/Button";
import { showCaseData } from "../data/showCaseData";
import sampleImg from "../assets/showCase/showCaseImg.svg";
import SlideText from "./SlideText";
import SocialIcons from "./elements/SocialIcons";
import Link from "./elements/Link";
import useAOSInit from "../hooks/useAOSInit";
import { links } from "../utils/constant";

const ShowCase = () => {
  useAOSInit();

  return (
    <div className="flex lg:flex-row items-center w-full h-auto lg:h-screen gap-4 p-4 bg-lightModeImage dark:bg-darkModeImage  flex-col relative z-[1] mt-[50px] lg:mt-[95px] bg-cover  bg-center">
      <SlideText sideType="left" />
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[200px]"></div>
      <div
        className=" flex-[1] h-full  flex flex-col items-center justify-center p-2 z-[1] "
        data-aos="fade-right"
      >
        <div className="flex flex-col lg:w-[75%] gap-4  md:p-4 rounded-lg p-2 md:items-start items-center ">
          <h1 className=" showcase-title-text">{showCaseData.title}</h1>
          <h2 className="flex flex-col showcase-name-text">
            {showCaseData.name}
            <span className=" text-[0.7rem] lg:text-[1.2rem] font-primary font-bold">
              {showCaseData.position}
            </span>
          </h2>
          <p className="text-lg font-bold tracking-wider text-center text-gray-800 font-secondary dark:text-white md:text-3xl">
            {showCaseData.description}
          </p>
          <SocialIcons />
          <div className="flex flex-row justify-center gap-4 p-2 mt-4 ">
            {/* <Button text={"Hire Me"} className="text-black common_background" /> */}
            <Link url={links.RESUME}>
              <Button
                text={"Download CV"}
                className="text-white bg-purple-600"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className=" flex-[1] h-full  w-full flex flex-col justify-center z-[1] relative object-cover items-center"
        data-aos="fade-left"
      >
        <img src={sampleImg} alt="sampleImg" className="w-[90%]" />
      </div>
      <SlideText sideType="right" />
    </div>
  );
};

export default ShowCase;
