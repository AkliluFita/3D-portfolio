import React from "react";
import SocialIcons from "./elements/SocialIcons";
import logoImg from "../assets/navbar/my_new_logo.png";

const Footer = () => {
  return (
    <div className=" h-auto lg:h-[30rem] w-full p-4 bg-[#dadfe4] text-black ">
      <div className="flex flex-col h-full gap-4 p-4">
        <div className="flex-[1] border-b-4 border-br_primary flex flex-row gap-4 items-center p-2">
          <img
            src={logoImg}
            className="flex flex-shrink-0 object-cover w-[2.5rem] lg:w-[4rem] cursor-pointer"
          />{" "}
          <h1 className="text-sm font-bold lg:text-lg text-tx_primary">
            Aklilu_Dev
          </h1>
        </div>
        <div className="flex-[4] flex lg:flex-row gap-8  flex-col">
          <div className="flex flex-col justify-between gap-6  flex-[1]">
            <h1 className="text-[1.1rem] font-bold lg:text-3xl text-tx_secondary">
              Addis Ababa
            </h1>
            <p className="text-[0.8rem] lg:text-lg text-tx_additional">
              Agencium Ltd, 31 Ashcombe, London NW5 1QU, UK
            </p>
            <div className="flex flex-col items-center gap-2 ">
              <h1 className="lg:text-2xl text-[1.1rem] font-bold text-start text-tx_secondary">
                Social
              </h1>
              <SocialIcons />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 flex-[1]">
            <h1 className="text-[1.1rem] font-bold lg:text-3xl text-tx_secondary">
              Phone Numbers
            </h1>
            <div className="text-[0.8rem] lg:text-lg text-tx_additional">
              <h1>234234-7899234-u8y230</h1>
              <h1>234234-7899234-u8y230</h1>
              <h1>234234-7899234-u8y230</h1>
            </div>
            <div className="flex flex-col items-center gap-2 flex-[1] text-tx_additional">
              <h1 className="lg:text-2xl text-[1.1rem] font-bold text-start text-tx_secondary ">
                Email
              </h1>
              <h2 className="text-[0.8rem] lg:text-lg">
                peace123selam456@gmail.com
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4  flex-[1]">
            <h1 className="text-[1.1rem]  font-bold lg:text-3xl text-tx_secondary">
              Main Menu
            </h1>
            <div className="flex flex-col lg:gap-4 gap-2 text-tx_additional text-[0.8rem] lg:text-lg">
              <span>Home</span>
              <p>Contact</p>
              <p>About Me</p>
              <p>Education</p>
              <p>Skills</p>
              <p>Contact</p>
            </div>
          </div>
          <div className=" flex flex-col gap-4 flex-[1] ">
            <h1 className="text-[1.1rem]  font-bold lg:text-3xl text-tx_secondary">
              Subscribe
            </h1>
            <div className="flex flex-col justify-between w-full h-full gap-20 text-tx_additional">
              <h2>Frigate mackerel snake mackerel</h2>
              <div className="flex flex-row w-full gap-2 ">
                <input
                  type="text"
                  className="p-2 h-[5rem] bg-transparent border-2 border-br_primary flex-[2]"
                  placeholder="Email"
                />
                <button className="text-white flex-[1] bg-bt_primary font-bold">
                  Subscribe
                </button>
              </div>
              <h2>Designed By Aklilu Jemal Fita</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
