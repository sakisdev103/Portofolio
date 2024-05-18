import React, { useState } from "react";
import { useFetchProjects } from "../fetchProjects";

const ProjectList = () => {
  const { isLoading, projects } = useFetchProjects();

  //Show more projects

  const [showMore, setShowMore] = useState(false);
  const [readMore, setReadMore] = useState({
    id: -1,
    show: false,
  });

  const showMoreFunc = () => {
    setShowMore(!showMore);
  };

  const readMoreFunc = (id) => {
    if (readMore.id === id) {
      setReadMore({
        id: -1,
        show: !readMore.show,
      });
    } else {
      setReadMore({
        id,
        show: !readMore.show,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container-fluid text-center my-5 ">
        <div
          className="spinner-border text-light"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3>
        <span>02.</span>Work
      </h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
        {projects
          .slice(0, showMore === false ? "4" : projects.length)
          .map((project) => {
            const { id, name, link, image, description, technologies } =
              project;
            return (
              <div className="col" key={id}>
                <div className="card p-3">
                  <img src={image} className="card-img-top" alt="Project" />
                  <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">
                      {readMore.id === id
                        ? description
                        : description.slice(0, 50) + `...`}
                      <button className="btn" onClick={() => readMoreFunc(id)}>
                        {readMore.id === id ? "READ LESS" : "READ MORE"}
                      </button>
                    </p>
                    <p style={{ color: "hsl(205, 86%, 81%)" }}>
                      {technologies + ""}
                    </p>
                    <div className="text-center">
                      <a className="btn" href={link}>
                        Live Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="container text-center my-4">
        <button onClick={showMoreFunc} className="btn">
          {showMore === true ? `Show Less` : `Show More`}
        </button>
      </div>
    </>
  );
};

export default ProjectList;
