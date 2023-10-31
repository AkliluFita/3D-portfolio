import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Skill from "./components/Skill";

export default function App() {
  return (
    <div className="bg-[#201E26]">
      <section id="home">
        <Navbar />
        <ShowCase />
      </section>
      <hr className="h-[10px] bg-[aqua]" />
      <div>
        <section id="about">
          <About />
        </section>
        <hr className="h-[10px] bg-[aqua]" />
        <section id="experience">
          <Experience />
        </section>
        <hr className="h-[10px] bg-[aqua]" />
        <section id="education">
          <Education />
        </section>

        <hr className="h-[10px] bg-[aqua]" />
        <section id="skill">
          <Skill />
        </section>
      </div>
      <hr className="h-[10px] bg-[aqua]" />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

// #2B2C39
// #201E26
