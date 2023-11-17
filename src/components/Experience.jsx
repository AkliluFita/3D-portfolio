import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import work_icon from "../assets/work-icon.png";
import { experienceData } from "../data/experienceData";
import demoImg from "../assets/experienceIcon/demo-80.png";
import githubImg from "../assets/experienceIcon/github-80.png";
import AOS from "aos";
import { useEffect } from "react";
import linkImg from "../assets/experienceIcon/link_animate_icon.gif";
import experienceImg from "../assets/experienceIcon/experience.png";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../recoil/darkMode";

const Experience = () => {
  const [darkMode] = useRecoilState(darkModeAtom);
  const background = darkMode ? "#1F2937" : "#dadfe4";
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="flex flex-col items-center  common_background dark:bg-darkModeImage  gap-4 lg:h-[100vh] overflow-y-scroll relative">
      <div className=" absolute top-0 h-[5rem] w-full bg-purple-600 blur-[150px]"></div>

      <div className="mt-[95px] flex flex-row items-center gap-4">
        <img src={experienceImg} alt="" className="w-[4rem] h-[3rem]" />
        <h1
          className=" text-[2rem] lg:text-[3rem] bg-gradient-to-r from-indigo-500  to-pink-500 bg-clip-text text-transparent  uppercase font-bold font-primary   "
          data-aos="fade-right"
        >
          My Experience
        </h1>
      </div>
      <div className="w-full mt-8">
        <VerticalTimeline>
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className=" vertical-timeline-element--work"
              contentStyle={{
                background: background,
                color: "#7F2F92",
                border: "1px solid #7F2F92",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #7F2F92",
              }}
              date={item.date}
              iconStyle={{
                background: "#7F2F92",
                fontWeight: "bold",
                color: "#7F2F92",
              }}
              icon={<img src={work_icon} />}
            >
              <div className="">
                <h3 className="vertical-timeline-element-title text-[1.2rem] uppercase text-tx_secondary font-bold font-primary">
                  {item.title}
                </h3>
                <h4 className="flex flex-row items-center gap-2 text-sm text-gray-800 font-primary dark:text-gray-200 vertical-timeline-element-subtitle">
                  Company:- {item.subTitle}{" "}
                  {item.web_link !== null && (
                    <a rel="noreferrer" href={item.web_link} target="_blank">
                      <img
                        id="link"
                        src={linkImg}
                        alt=""
                        width="15rem"
                        className="cursor-pointer"
                      />
                    </a>
                  )}
                </h4>
                <p className=" text-gray-600 text-[0.7rem] lg:text-[0.9rem] font-primary dark:text-gray-400  ">
                  {item.des}
                </p>
                <div className="flex flex-row items-center justify-end gap-4 mt-2">
                  {item.demo_link !== null && (
                    <a
                      rel="noreferrer"
                      href={item.demo_link}
                      target="_blank"
                      className="px-2 bg-gray-800 rounded-lg"
                    >
                      <img
                        src={demoImg}
                        alt=""
                        width="35px"
                        className="cursor-pointer "
                      />
                    </a>
                  )}
                  {/* <img
                    src={detailImg}
                    alt=""
                    width="35px"
                    className="cursor-pointer"
                  /> */}
                  {item.github_link !== null && (
                    <a
                      rel="noreferrer"
                      href={item.github_link}
                      target="_blank"
                      className="px-2 bg-gray-800 rounded-lg "
                    >
                      <img
                        src={githubImg}
                        alt=""
                        width="35px"
                        className="cursor-pointer"
                      />
                    </a>
                  )}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
