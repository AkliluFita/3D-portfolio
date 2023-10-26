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

const Experience = () => {
  return (
    <div className="flex flex-col item-center  bg-[#000836] gap-8">
      <div className=" text-[3rem] text-center text-white">
        <h1>MY Experience</h1>
      </div>
      <div className="mt-8">
        <VerticalTimeline>
          {experienceData.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#00062B", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img src={work_icon} />}
            >
              <div className="">
                <h3 className="vertical-timeline-element-title text-[1.2rem] uppercase">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Company:- {item.subTitle}
                </h4>
                <p className=" text-gray-400 text-[0.8rem] ">{item.des}</p>
                <div className="flex flex-row items-center justify-end gap-4">
                  <img src={demoImg} alt="" width="35px" />
                  <img src={detailImg} alt="" width="35px" />
                  <img src={githubImg} alt="" width="35px" />
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
