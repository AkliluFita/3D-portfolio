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
import GoTopButton from "./components/elements/GoUpButton";

export default function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  setTimeout(() => {
    setIsLoadingPage(false);
  }, 4000);

  if (isLoadingPage) {
    return <MyLogoLoading />;
  }
  return (
    <div className="bg-white">
      <section id="Home">
        <Navbar />
        <ShowCase />
      </section>
      <div>
        <section id="About">
          <About />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Skill">
          <Skill />
        </section>
        <section id="Testimonial">
          <Testimonial />
        </section>
      </div>
      <section id="Contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
      <GoTopButton />
    </div>
  );
}


// #2B2C39
// #201E26
