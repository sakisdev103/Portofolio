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
            My name is Thanos Trentsios. I am a Frontend Developer with strong
            skills at Javascript and ReactJs with work experience and
            project-build experience. In 2019 i went to my local university to
            study computer science. In the beggining of 2023 i served as a
            member of the special forces, because it was been my dream. For the
            future i want to work as front end web developer and continue to
            build applications.
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
