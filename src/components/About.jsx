import { Tilt } from "react-tilt";
import icon from "../assets/full-stack-icon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cards = () => {
  // used for box animate with scroll
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Tilt
      // options={{ scale: 1 }}
      className="flex-[1]  "
    >
      <div
        className="flex flex-col items-center justify-around h-full p-4 border-[#1D2452] border rounded-lg bg-[#00062B] "
        data-aos="flip-left"
      >
        <div className=" flex-[1] ">
          <img src={icon} alt="icon" className="scale-150" />
        </div>
        <div className="flex-[1]  flex items-center justify-center text-[1.5rem] text-white ">
          Full-Stuck Developer
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const cards = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="h-[70vh] bg-[#000836] p-4 flex flex-col gap-4 text-center">
      <h1 className="text-[3rem] text-white flex-[3]">About me</h1>

      <div className="flex flex-row flex-wrap gap-8 p-8 flex-[9] ">
        {cards.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default About;
