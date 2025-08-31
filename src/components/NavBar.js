import { useState, useEffect } from "react";
import logo from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link navbar-link ${
                  activeLink === "home" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link navbar-link ${
                  activeLink === "skills" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projects"
                className={`nav-link navbar-link ${
                  activeLink === "projects" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle navbar-link"
                href="#more"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#a">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#b">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#c">
                    Something else
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="linkedin" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>let's connect</span>
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
};
