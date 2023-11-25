import useAOSInit from "../hooks/useAOSInit";

const Links = ({ className }) => {
  const menuItems = [
    { id: "0", text: "Home" },
    { id: "1", text: "About" },
    { id: "2", text: "Experience" },
    { id: "3", text: "Education" },
    { id: "4", text: "Skill" },
    { id: "5", text: "Testimonial" },
    { id: "6", text: "Contact" },
  ];

  useAOSInit();

  return (
    <>
      {menuItems.map((item) => (
        <a
          href={`#${item.text}`}
          key={item.id}
          className={`cursor-pointer  w-full text-center font-bold   uppercase  ${className} `}
        >
          <h1
            className="font-bold tracking-widest text-gray-800 font-primary dark:text-gray-200 hover:text-gray-500 hover:dark:text-gray-400"
            data-aos="fade-left"
          >
            {item.text}
          </h1>
        </a>
      ))}
    </>
  );
};

export default Links;
