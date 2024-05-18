import React from "react";
import ProjectList from "./ProjectList";
import About from "./About";
import Intro from "./Intro";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <main className="container-fluid p-3">
        <div className="container">
          <Intro />
        </div>
        <div className="container my-5" id="about">
          <About />
        </div>
        <div className="container my-5" id="work">
          <ProjectList />
        </div>
        <div className="container my-5">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Main;
