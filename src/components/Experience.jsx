import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import work_icon from "../assets/work-icon.png";
import { experienceData } from "../data/experienceData";
import demoImg from "../assets/experienceIcon/demo-80.png";
import detailImg from "../assets/experienceIcon/detail-80.png";
import githubImg from "../assets/experienceIcon/github-80.png";
import AOS from "aos";
import { useEffect } from "react";
import linkImg from "../assets/experienceIcon/link_animate_icon.gif";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <div className="flex flex-col items-center  bg-cover bg-center bg-no-repeat bg-aboutBack  gap-4 lg:h-[100vh] overflow-y-scroll">
      <h1
        className="text-[2rem] lg:text-[3rem] text-white  uppercase "
        data-aos="fade-right"
      >
        MY Experience
      </h1>
      <div className="w-full mt-8">
        <VerticalTimeline>
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className=" vertical-timeline-element--work"
              contentStyle={{
                background: "#018673",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              iconStyle={{
                background: "aqua",
                color: "#fff",
              }}
              icon={<img src={work_icon} />}
            >
              <div className="">
                <h3 className="vertical-timeline-element-title text-[1.2rem] uppercase text-white">
                  {item.title}
                </h3>
                <h4 className="flex items-center gap-2 vertical-timeline-element-subtitle fle-row">
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
                <p className=" text-white text-[0.8rem] ">{item.des}</p>
                <div className="flex flex-row items-center justify-end gap-4">
                  {item.demo_link !== null && (
                    <a rel="noreferrer" href={item.demo_link} target="_blank">
                      <img
                        src={demoImg}
                        alt=""
                        width="35px"
                        className="cursor-pointer"
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
                    <a rel="noreferrer" href={item.github_link} target="_blank">
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
