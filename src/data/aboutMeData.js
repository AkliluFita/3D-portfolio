import frontend from "../assets/about/frontend-100.png";
import backend from "../assets/about/backend-100.png";
import fullstack from "../assets/about/full-stack-100.png";
import machineLearning from "../assets/about/machine-learning-100.png";
import uxDesign from "../assets/about/ux-design.png";

export const aboutMeProfileData = ` As a Master Computer Engineer, I have gained extensive knowledge and experience in various computer-related courses. 
With a strong passion for web design and development, I have acquired proficiency in diverse technologies, enabling me to pursue my goal of becoming a skilled and well experienced web developer. 
I have successfully developed various web applications, including blogs, e-commerce sites, inventory management systems, and real estate digital platforms.
 `;

export const aboutMeCardData = [
  {
    id: 1,
    icon: frontend,
    title: "Frontend Developer",
    tool: ["Html", "Css", "Javascript", "Typescript", "react.js", "next.js"],
    desc: `I excel as a frontend developer, combining my artistic eye with technical expertise to create visually stunning and user-friendly interfaces.
     I craft seamless experiences that captivate users and optimize their interaction with web applications.`,
    experiencePeriod: 3,
  },
  {
    id: 2,
    icon: backend,
    title: "Backend Developer",
    tool: ["Node.js", "Express", "MySQL", "Postgres", "Python", "Django"],
    desc: `I am well enough in backend development, leveraging my expertise in languages such as Python, Javascript, or Node.js to build robust and scalable server-side solutions.
     With a strong foundation in databases, APIs, and server architecture.`,
    experiencePeriod: 2,
  },
  {
    id: 3,
    icon: fullstack,
    title: "Fullstack Developer",
    tool: [
      "Html",
      "Css",
      "Javascript",
      "react.js",
      "Express",
      "MySQL",
      "Postgres",
      "Django",
      "Python",
    ],
    desc: `As a fullstack developer, I combine frontend and backend expertise to create seamless and integrated web applications. 
     I deliver visually appealing and technologically sound solutions that meet modern user needs.`,
    experiencePeriod: 2,
  },
  {
    id: 4,
    icon: machineLearning,
    title: "AI Practitioner",
    tool: [
      "Machine Learning",
      "Text Classification",
      "Python",
      "Keras",
      "NLP",
      "RNNs",
    ],
    desc: `I specialize in text classification. Using advanced NLP techniques, 
    I develop models that accurately categorize and analyze textual data,
     enabling businesses to extract valuable insights and automate content classification.`,
    experiencePeriod: 1,
  },
  {
    id: 1,
    icon: uxDesign,
    title: "UI/UX Designer",
    tool: ["Figma", "Canva", "Photo shope"],
    desc: `I am an experienced UI/UX designer specializing in Figma, with additional proficiency in Canva and Photoshop. 
    My expertise lies in creating user-friendly interfaces, and I have a keen eye for detail. With Figma as my primary tool,
     I craft visually appealing designs that prioritize user experience.
     `,
    experiencePeriod: 1,
  },
];
