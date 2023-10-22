import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Skill from "./components/Skill";
import Works from "./components/Works";

export default function App() {
  return (
    <div className="bg-[#201E26]">
      <Navbar />
      <ShowCase />
      <div>
        <About />
        <Experience />
        <Skill />
        <Works />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

// #2B2C39
// #201E26
