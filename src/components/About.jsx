import React from "react";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
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
        <div className="col-12 col-md-6">
          <h3>My Skills</h3>
          <div className="row gap-4">
            <div className="col">
              <h5>Front End Development</h5>
              <div className="d-flex gap-1">
                <img
                  src="https://img.icons8.com/color/36/000000/html-5--v1.png"
                  alt="icon"
                />
                <img
                  src="https://img.icons8.com/color/36/000000/javascript--v1.png"
                  alt="icon"
                />
                <img
                  src="https://img.icons8.com/color/36/000000/css3.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="col">
              <h5>Back End Development</h5>
              <div className="d-flex gap-3">
                <img
                  src="https://img.icons8.com/officel/36/000000/php-logo.png"
                  alt="icon"
                />
                <img
                  src="https://img.icons8.com/color/36/000000/nodejs.png"
                  alt="icon"
                />
              </div>
            </div>
            <h3>Frameworks</h3>
            <div className="d-flex gap-2">
              <img
                src="https://img.icons8.com/plasticine/36/000000/react.png"
                alt="icon"
              />
              <img
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/36/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png"
                alt="icon"
              />
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-color-tal-revivo.png"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
