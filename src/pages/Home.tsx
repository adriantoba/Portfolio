import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import Simulation from "./simplerfluid";
import SideBarRuler from "../components/nav/SidebarRuler";
import { Hero } from "./hero/Hero";
import { Heading } from "../components/nav/Heading";

export const Home = () => {
  return (
    <>
      <Simulation />
      <SideBarRuler />
      <Heading />
      <div className="ml-32 lg:ml-18 mt-18">
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
};
