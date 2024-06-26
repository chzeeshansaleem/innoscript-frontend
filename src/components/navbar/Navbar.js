import React ,{useState} from "react";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const menuButton = (e) => {
    setIsCollapsed(!isCollapsed);
    e.currentTarget.classList.toggle("change");
  };
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Innoscript logo" className="logo-img" />
          </a>
          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={(e) => menuButton(e)}

          >
            <div class="container">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-around">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown" id="servicesDropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/web-development">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/mobile-app-development">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/custom-software-development"
                    >
                      Custom Software Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/devops-services">
                      DevOps Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/ui-ux-designing">
                      UI/UX Designing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/seo">
                      SEO
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <button className=" contactBtn" href="#contact">
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
