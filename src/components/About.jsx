import { Tilt } from "react-tilt";
import icon from "../assets/full-stack-icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { aboutMeCardData, aboutMeProfileData } from "../data/aboutMeData";
import React from "react";
import Button from "./elements/Button";

const About = () => {
  return (
    <div className="lg:h-[100vh] bg-[#000836] p-4 flex flex-col gap-4 text-center">
      <h1 className="text-[3rem] text-white flex-[1] uppercase">About me</h1>
      <div className="flex-[2]  w-1/2 text-white flex flex-col gap-2">
        <h3 className="text-[2rem] uppercase">Overview Profile</h3>
        <p className=" text-[1.3rem] ">{aboutMeProfileData}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-8 p-8 flex-[3] ">
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
        className="flex flex-col items-center justify-between h-full p-4 border-br_primary border rounded-lg bg-[#00062B] g-3 "
        data-aos="flip-left"
      >
        <div className="flex items-center w-1/2 h-[3rem] text-center justify-center p-2">
          <img
            src={item.icon}
            alt="icon"
            className="h-full scale-150 bg-[#000836] "
          />
        </div>
        <h1 className="p-2 text-2xl text-white rounded-lg">{item.title}</h1>
        <p className="text-white">{item.desc}</p>
        <div className=" flex flex-row items-center justify-center text-[1.5rem] text-white  w-full p-1 gap-2">
          <div className="flex flex-row text-sm  flex-[3]">
            <ul className="flex flex-row flex-wrap items-center gap-2 ">
              {item.tool.map((i) => (
                <li key={i} className="p-1 text-black rounded-md bg-slate-400">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[1] text-sm h-full flex flex-col justify-around gap-2 ">
            <div>
              <h1>Experience</h1>
              <h3>3 years</h3>
            </div>
            <button className="p-2 border border-br_primary rounded-2xl focus:outline-none hover:bg-blue-700">
              Detail
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

