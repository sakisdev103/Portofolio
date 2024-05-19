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
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-gap-4">
        {projects
          .slice(0, showMore === false ? "6" : projects.length)
          .map((project) => {
            const {
              id,
              name,
              link,
              gitLink,
              image,
              description,
              technologies,
            } = project;
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
                    <div className="d-flex align-items-center gap-1">
                      {technologies.map((tech) => {
                        return (
                          <p
                            key={tech}
                            className="p-2 text-center rounded"
                            style={{
                              backgroundColor: "#000",
                              fontSize: "0.8rem",
                            }}
                          >
                            {tech}
                          </p>
                        );
                      })}
                    </div>
                    <div className="d-flex gap-3 align-items-center justify-content-center">
                      <a href={link}>
                        <svg
                          stroke="#e5e5e5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="2.5rem"
                          width="2.5rem"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                          <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                          <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                          <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                          <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                          <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                          <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                          <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                          <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                        </svg>
                      </a>
                      <a href={gitLink}>
                        <svg
                          stroke="#e5e5e5"
                          fill="#e5e5e5"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-slate-500 hover:text-black duration-300"
                          height="2.5rem"
                          width="2.5rem"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
                        </svg>
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
