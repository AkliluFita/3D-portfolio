import erbugImg from "../assets/testimonial/Erbuğ_PIC.jpg";
import yaredImg from "../assets/testimonial/Yareb_Pic.jpeg";
import AvatarImg from "../assets/testimonial/avatar_Pic.jpg";
import ErbugRecommon from "../assets/testimonial/Erbug_Recom.jpg";
import yaredRecommon from "../assets/testimonial/Mereb_Tech.jpg";
import AvatarRecommon from "../assets/testimonial/Haramaya_recom.jpg";

export const testimonialData = [
  {
    id: 1,
    name: "Prof. Dr. Erbug CELEBI",
    personImg: erbugImg,
    person_info:
      "My supervise recommendation paper at cyprus international university",
    title: `Director of the Artificial Intelligence Application and Research Center @ CIU`,
    desc: `I have known him as a thesis supervisor for around 9 month while he was student
    at department of Computer Engineering(Msc). During his period he showed that he is a successful, hardworking and talented student `,
    email: "ecelebi@ciu.edu.tr",
    linkedin_link:
      "https://www.linkedin.com/in/erbugcelebi/?originalSubdomain=cy",
    recommendationPaper: ErbugRecommon,
  },
  {
    id: 2,
    name: "Prof. Dr. Sukhbir Singh",
    personImg: AvatarImg,
    person_info:
      "My teacher and adviser recommendation paper @ Haramaya University",
    title: "Electrical and Computer Engineering Department",
    desc: ` I have known him for more than 3 years as a student of Electrical and Computer Engineering. 
    I found him to be an intelligent.mature and technically sound with analytical bent fo mind`,
    email: "sukhbir_2008@redffimail.com",
    linkedin_link: null,
    recommendationPaper: AvatarRecommon,
  },
  {
    id: 3,
    name: "Mr. Yared Tadese",
    personImg: yaredImg,
    person_info:
      "My project manager and CEO recommendation paper @ Mereb technology company",
    title: "Project Manager in Mere Technology Software Company(CEO)",
    desc: `He Worked as a full-stack developer at Mereb Tehnology from 17, 2022 until August 02, 2023. During this time. 
    I am thoroughly impressed with his skill and dedication`,
    email: "yared@mereb.tech",
    linkedin_link:
      "https://www.linkedin.com/in/yared-taddese-720ba0142/?originalSubdomain=et",
    recommendationPaper: yaredRecommon,
  },
];
