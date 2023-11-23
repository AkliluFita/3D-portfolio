import cyprusImg from "../assets/education/cyprusLogo.png";
import haramayaLogo from "../assets/education/haramayaLogo.png";
import masterCertificate from "../assets/education/Diploma1.jpg";
import degreeCertificate from "../assets/education/Tempo_degre.jpeg";
import thesis1 from "../assets/education/Thesis_paper1.jpg";
import thesis2 from "../assets/education/Thesis_paper2.jpg";

export const educationData = [
  {
    id: 1,
    title: "Haramaya University",
    subTitle: "Bachelor of Electrical and Computer Engineering",
    img: haramayaLogo,
    subTitleTwo: "One of the well-known Hights Ranked University",
    courseLists: [
      "The basics Computer engineering",
      "The basics Electrical engineering",
      "The basics of Embedded System",
      "Programming languages (C++, Java)",
    ],
    educationPeriod: "09/2014 - 07/2017",
    certificatePaper: degreeCertificate,
    certificateDesc: null,
    thesisTitle: null,
    thesisPaper1: null,
    thesisPaper2: null,
  },

  {
    id: 2,
    title: "Cyprus International University",
    img: cyprusImg,
    subTitle: "Master of Computer Engineering,",
    subTitleTwo:
      "One of the well-known International University in Northern Cyprus",
    courseLists: [
      "Advanced Database (Oracle, SQL Server)",
      "Advanced Programming language (Java)",
      "Advanced Network Programming (Socket Program, HTTP, and so on, with C Program)",
      "Network and Communication System",
      "Machine Learning and Deep Learning",
    ],
    educationPeriod: "10/2019 - 10/2021",
    certificatePaper: masterCertificate,
    certificateDesc: "This is my Msc Certificate Paper",
    thesisTitle:
      "Text Classification for binary sentiment using Machine Learning and Deep Learning Algorithms",
    thesisPaper1: thesis1,
    thesisPaper2: thesis2,
  },
];
