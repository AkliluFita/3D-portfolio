import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Skill from "./components/Skill";
import MyLogoLoading from "./components/MyLogoLoadng";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

export default function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  setTimeout(() => {
    setIsLoadingPage(false);
  }, 5000);

  if (isLoadingPage) {
    return <MyLogoLoading />;
  }
  return (
    <div className="bg-white">
      <section id="Home">
        <Navbar />
        <ShowCase />
      </section>
      {/* <BorderLine /> */}
      <div>
        <section id="About">
          <About />
        </section>
        {/* <BorderLine /> */}
        <section id="Experience">
          <Experience />
        </section>
        {/* <BorderLine /> */}
        <section id="Education">
          <Education />
        </section>

        {/* <BorderLine /> */}
        <section id="Skill">
          <Skill />
        </section>
        {/* <BorderLine /> */}
        <section id="Testimonial">
          <Testimonial />
        </section>
      </div>
      {/* <BorderLine /> */}
      <section id="Contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

const BorderLine = () => {
  return <hr className="h-[5px] bg-[#7F2F92]" />;
};

// #2B2C39
// #201E26
