import { Tilt } from "react-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { aboutMeCardData, aboutMeProfileData } from "../data/aboutMeData";



const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <div className="  lg:h-[100vh] common_background p-4 flex flex-col gap-4 items-center  overflow-y-scroll ">
      <h1
        className=" text-[2rem] lg:text-[3rem] text-tx_secondary uppercase font-bold  mt-[95px] "
        data-aos="fade-right"
      >
        About me
      </h1>
      <div
        className="flex-[2]  text-tx_secondary flex flex-col gap-2 items-center  "
        data-aos="fade-right"
      >
        <h3 className="text-[1.2rem] lg:text-[2rem] uppercase font-bold">
          Computer Engineer || Web Developer
        </h3>
        <p className=" lg:text-[1.3rem] text-[.8rem] lg:w-1/2  w-full text-tx_additional text-center">
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
        className="flex flex-col items-center justify-between h-full p-4 bg-bg_primary border border-[#7F2F92] rounded-lg shadow-xl g-3 "
        data-aos="flip-left"
      >
        <div className="flex items-center w-1/2 h-[3rem] text-center justify-center p-2">
          <img src={item.icon} alt="icon" className="h-[5rem] w-[5rem] " />
        </div>
        <h1 className="p-2 text-lg font-bold rounded-lg text-tx_secondary lg:text-2xl">
          {item.title}
        </h1>
        <p className="text-tx_additional text-[0.8rem] lg:text-[1rem] text-center">
          {item.desc}
        </p>
        <div className=" flex flex-row items-center justify-center text-[1.5rem] text-[#7F2F92]  w-full p-1 gap-2">
          <div className="flex flex-row text-sm  flex-[3]">
            <ul className="flex flex-row flex-wrap items-center gap-2 ">
              {item.tool.map((i) => (
                <li
                  key={i}
                  className="p-1 text-black text-[0.8rem] lg:text-[1rem] rounded-md common_background"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[1] text-sm h-full flex flex-col justify-around gap-2 ">
            <div>
              <h1>Experience</h1>
              <h3>{item.experiencePeriod}:years</h3>
            </div>
            <button className="p-2 text-white bg-bt_primary rounded-2xl ">
              Detail
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
