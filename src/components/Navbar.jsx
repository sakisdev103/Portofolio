import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const categories = [
    { name: "Home", link: "" },
    { name: "About", link: "about" },
    { name: "Work", link: "work" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-sm p-3">
        <div className="container">
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/36/null/external-developer-web-development-flaticons-lineal-color-flat-icons-2.png"
            className="navbar-brand"
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse ${nav === false && "collapse"} `}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb2 mb-lg-0">
              {categories.map((category) => {
                return (
                  <li className="nav-item" key={category.id}>
                    <a href={`#${category.link}`}>{category.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
