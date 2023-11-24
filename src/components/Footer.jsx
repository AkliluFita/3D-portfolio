import React, { useEffect } from "react";
import SocialIcons from "./elements/SocialIcons";
import logoImg from "../assets/navbar/My_New_Log.png";
import AOS from "aos";
import Logo from "./elements/Logo";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div
      className=" h-auto lg:h-[30rem] w-full p-4 bg-[#dadfe4] text-black dark:bg-gray-800 "
      // data-aos="fade-up"
    >
      <div className="flex flex-col h-full gap-4 p-4">
        <div className="flex-[1] border-b-2 border-br_primary p-2">
          <Logo className="justify-start" />
        </div>
        <div className="flex-[4] flex lg:flex-row gap-8  flex-col">
          <div className="flex flex-col  gap-8   flex-[1]">
            <h1 className="text-[1.1rem] font-bold lg:text-3xl text-tx_secondary font-primary  ">
              Address
            </h1>
            <div className="text-[0.8rem] lg:text-lg text-tx_additional font-primary dark:text-gray-400 flex flex-col gap-2">
              <h2 className=" font-primary">
                Megenagna, Addis Ababa, Ethiopia
              </h2>
              <h2 className=" font-primary">
                aklilufita@gmail.com / weaba123abdu@gmail.com
              </h2>
              <h2 className=" font-primary">+251962713194</h2>
            </div>
            <div className="flex flex-col items-center gap-2 ">
              <h1 className="lg:text-2xl text-[1.1rem] font-bold text-start text-tx_secondary font-primary">
                Social
              </h1>
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 flex-[1]">
            <h1 className="text-[1.1rem] font-bold lg:text-3xl text-tx_secondary font-primary">
              Here is I am
            </h1>
            <div className="text-[0.8rem] lg:text-lg text-tx_additional font-primary dark:text-gray-400 ">
              <h1 className=" font-primary">Frontend Developer</h1>
              <h1 className=" font-primary">Backend Developer</h1>
              <h1 className=" font-primary">Machine Learning Practitioner</h1>
            </div>
            <div className="flex flex-col  gap-2 flex-[1] text-tx_additional">
              <h1 className="lg:text-2xl text-[1.1rem] font-bold text-start text-tx_secondary font-primary ">
                Website Owner
              </h1>
              <h2 className="text-[0.8rem] lg:text-lg font-primary dark:text-gray-400 ">
                Aklilu Jemal Fita
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 flex-[1]">
            <h1 className="text-[1.1rem]  font-bold lg:text-3xl text-tx_secondary font-primary">
              Main Menu
            </h1>
            <div className="flex flex-col lg:gap-4 gap-2 text-tx_additional text-[0.8rem] lg:text-lg dark:text-gray-400 font-primary  ">
              <span className=" font-primary">Home</span>
              <span className=" font-primary">Contact</span>
              <span className=" font-primary">About Me</span>
              <span className=" font-primary">Education</span>
              <span className=" font-primary">Skills</span>
              <span className=" font-primary">Contact</span>
            </div>
          </div>
          {/* <div className=" flex flex-col gap-4 flex-[1] ">
            <h1 className="text-[1.1rem]  font-bold lg:text-3xl text-tx_secondary">
              Subscribe
            </h1>
            <div className="flex flex-col justify-between w-full h-full gap-20 text-tx_additional dark:text-gray-400">
              <h2 className="font-primary ">Frigate mackerel snake mackerel</h2>
              <div className="flex flex-row w-full gap-2 ">
                <input
                  type="text"
                  className="p-2 h-[5rem] bg-transparent border-2 border-br_primary flex-[2]"
                  placeholder="Email"
                />
                <button className="text-white flex-[1] bg-bt_primary font-bold font-primary">
                  Subscribe
                </button>
              </div>
              <h2 className="font-primary dark:text-gray-400">
                Designed By Aklilu Jemal Fita
              </h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
