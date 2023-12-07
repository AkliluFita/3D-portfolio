import imageGallery from "../assets/project/project_imageGallary.png";
import inventory from "../assets/project/project_inventory.png";
import starImport from "../assets/project/project_starImport.png";
import porfolio from "../assets/project/project_Portfolio.png";
export const projectData = [
  {
    id: 1,
    title: "Image Gallery",
    description: `Using cutting-edge technologies like React,
     JavaScript, MySQL, Styled Components, Node, Context API, 
     Multer, and JWT, I have created a seamless platform for 
     gathering and accessing photo pictures. Easily organize 
     and retrieve your images with my intuitive interface
      and efficient backend infrastructure. Explore our website
       and experience the convenience 
    it brings to managing your photography collection.`,
    tools: [
      "React",
      "Javascript",
      "Mysql",
      "Styled Component",
      "Node",
      "Context API",
      "Multer",
      "JWT",
    ],
    image: imageGallery,
    videoEmbedLink: null,
  },
  {
    id: 2,
    title: "Local-Ecommerce",
    description: `As a significant milestone in my web development journey, 
    I spearheaded the development of Starlight Import P.L.C's official
     eCommerce platform, which marked their inaugural online presence.
      The platform was successfully launched on their website,
       (https://starlightimport.com/), in June 2022. To create this platform,
        I utilized React, Material UI, and Firebase, combining their powerful
         features to deliver a seamless and engaging user experience.`,
    tools: ["React", "Javascript", "Firebase", "MUI", "Anted", "Context API"],
    image: starImport,
    videoEmbedLink: null,
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: `I worked remotely with a contractor group on 
    developing a comprehensive inventory management system 
    for a reputable garage company. The system includes 
    various roles, such as admin, cashier, accountant, 
    and storekeeper, each with specific activities. 
    It covers stock registration, receipt creation, 
    transaction management, and comprehensive reporting.
     This project pushed my skills to new heights and 
     delivered exceptional outcomes.`,
    tools: [
      "Vite",
      "Typescript",
      "Mysql",
      "Node",
      "Scss",
      "MUI",
      "React-Redux",
      "React-router",
      "",
    ],
    image: inventory,
    videoEmbedLink: null,
  },
  {
    id: 3,
    title: "Porfolio",
    description: `I've created a stunning showcase using tools like Vite, 
    JavaScript, Radix, email.js, Tailwind, react-toastify, recoil, 
    and framer motion. With lightning-fast performance, dynamic elements, 
    responsive design, seamless communication, modern aesthetics, 
    informative notifications, efficient state management, and 
    captivating animations, my portfolio is a true testament to 
    my web development expertise. Explore and experience my work firsthand.`,
    tools: [
      "Vite",
      "Javascript",
      "Radix",
      "email.js",
      "Tailwind",
      "react-toastify",
      "recoil",
      "framer motion",
    ],
    image: porfolio,
    videoEmbedLink: null,
  },
];
