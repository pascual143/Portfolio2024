import React from "react";

import Wheel from "../components/wheel";
import Menu from "../components/menu";
import Dev from "../components/dev";
import Letters from "../components/letters"
import Contact from "../components/contact";
// import ContactSection from "../sections/contactSection";
import ProjectsSection from "../sections/projectsSection";
import TechnologiesSection from "../sections/technologiesSection";
import CurriculumSection from "../sections/curriculumSection";

const Home = () => {
  return (
    <>
      <div className="home_div">
        <Contact />
        <Menu />
        <Letters />
        <Wheel />
        <Dev />
      </div>
      <div className="flex justify-end">
        <ProjectsSection />
      </div>
      <div className="flex justify-end">
        <TechnologiesSection />
      </div>
      <div className="flex justify-end">
        <CurriculumSection />
      </div>
    </>
  );
};

export default Home;
