import React from "react";
import { useFetchIcons } from "../fetchIcons";

const About = () => {
  const { icons } = useFetchIcons();

  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-6">
          <h3>
            <span>01.</span>About Me
          </h3>
          <p>
            Hello! My name is Thanos Trentsios. I am a passionate Frontend
            Developer specializing in JavaScript and ReactJS. My journey in the
            world of coding began in 2019 when I enrolled at my local university
            to study computer science. During my academic career, I not only
            acquired a solid foundation in software development but also honed
            my skills through various projects and work experiences. In early
            2023, I had the unique opportunity to serve as a member of the
            special forces, fulfilling a lifelong dream. This experience
            instilled in me a sense of discipline, resilience, and teamwork,
            qualities that I bring into my professional life as a developer.
            Looking ahead, my goal is to continue evolving as a frontend
            developer, creating innovative and user-friendly applications. I am
            excited about the future and eager to contribute to cutting-edge
            projects that make a real difference.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h3>My Skills</h3>
          <div className="row ">
            <div className="col">
              <h5>Front End Development</h5>
              <div className="d-flex gap-1">
                {icons.slice(0, 3).map((icon) => {
                  const { id, image, name } = icon;
                  return (
                    <img
                      key={id}
                      src={image}
                      alt={name}
                      className="my-2 mx-1"
                    />
                  );
                })}
              </div>
            </div>
            <div className="col">
              <h5>Back End Development</h5>
              <div className="d-flex gap-3">
                {icons.slice(3, 6).map((icon) => {
                  const { id, image, name } = icon;
                  return (
                    <img
                      key={id}
                      src={image}
                      alt={name}
                      className="my-2 mx-1"
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-3">
              <h5>Frameworks</h5>
              {icons.slice(6, 9).map((icon) => {
                const { id, image, name } = icon;
                return (
                  <img key={id} src={image} alt={name} className="my-2 mx-1" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
