import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { aboutMeCardData, aboutMeProfileData } from "../data/aboutMeData";
import aboutMeImg from "../assets/about/about_me.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full h-auto gap-[3.3rem] p-4 common_background dark:bg-darkModeImage">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>

      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={aboutMeImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1
          className=" text-[2rem] lg:text-[3rem] bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text text-transparent  uppercase font-bold font-primary   "
          data-aos="fade-right"
        >
          About me
        </h1>
      </div>
      <div
        className="flex-[2]  text-tx_secondary flex flex-col gap-4 items-center  "
        data-aos="fade-right"
      >
        <h3 className="text-[1.2rem] lg:text-[2rem] uppercase font-bold font-primary">
          Full-Stack Web Developer
        </h3>
        <p className=" lg:text-[1.2rem] text-[.8rem] lg:w-1/2  w-full text-tx_additional dark:text-gray-400 text-center font-primary">
          {aboutMeProfileData}
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-8 p-4 lg:p-8 flex-[3]  w-full">
        {aboutMeCardData.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default About;

const Cards = ({ item }) => {
  // used for box animate with scroll
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Tilt
      // options={{ scale: 1 }}
      className="flex-[1] "
    >
      <div
        className="flex flex-col items-center justify-between h-full p-4 border border-purple-500 rounded-lg lg:max-w-full bg-bg_primary dark:bg-gray-800 g-3"
        data-aos="flip-left"
      >
        <div className="flex items-center w-1/2 h-[3rem] text-center justify-center p-2">
          <img
            src={item.icon}
            alt="icon"
            className="lg:h-[5rem] lg:w-[5rem] h-[4rem] w-[4rem]"
          />
        </div>
        <h1 className="p-2 text-lg font-bold rounded-lg font-primary text-tx_secondary lg:text-2xl">
          {item.title}
        </h1>
        <p className="text-tx_additional text-[0.8rem] lg:text-[0.9rem] text-center font-primary dark:text-gray-400 ">
          {item.desc}
        </p>
        <div className=" flex flex-row items-center justify-between text-[1.5rem]   w-full p-1 gap-4">
          <div className="flex flex-row text-sm   lg:w-[14rem] max-w-[13rem]">
            <ul className="flex flex-row flex-wrap items-center gap-2 ">
              {item.tool.map((i) => (
                <li
                  key={i}
                  className="p-1 text-black text-[0.7rem] lg:text-[0.9rem] rounded-md common_background font-primary"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-around h-full gap-2 text-sm ">
            <div>
              <h1 className="font-bold font-primary text-tx_secondary">
                Experience
              </h1>
              <h3 className="font-bold text-black font-primary dark:text-white">
                {item.experiencePeriod}:-years
              </h3>
            </div>
            {/* <button className="p-2 text-white bg-purple-600 font-primary rounded-2xl ">
              Detail
            </button> */}
          </div>
        </div>
      </div>
    </Tilt>
  );
};
