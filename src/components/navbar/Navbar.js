import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Import your custom CSS for hover functionality
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeMenu = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  return (
    <header className="sticky-top">
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Innoscript logo" className="logo-img" />
          </Navbar.Brand>

          {/* Custom menu button for mobile */}
          <div
            className={`container1 d-lg-none ${isCollapsed ? "" : "change"}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${isCollapsed ? "" : "show"}`}
          >
            <Nav className="w-100 justify-content-around">
              <NavItemWithHover to="/" text="Home" closeMenu={closeMenu} />
              <NavItemWithHover
                text="Services"
                isDropdown
                isCollapsed={isCollapsed}
                closeMenu={closeMenu}
              />
              <NavItemWithHover to="/blog" text="Blogs" closeMenu={closeMenu} />
              <NavItemWithHover
                to="/about-us"
                text="About us"
                closeMenu={closeMenu}
              />
              <Nav.Item>
                <button
                  className="primary-btn"
                  as={Link}
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact us
                </button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const NavItemWithHover = ({ to, text, isDropdown, isCollapsed, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Nav.Item
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {isDropdown ? (
        <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
          <Nav.Link
            className="dropdown-toggle"
            role="button"
            aria-expanded={isDropdownOpen}
            onClick={handleDropdownToggle}
          >
            {text}
          </Nav.Link>
          <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <ul>
              <li>
                <Link
                  className="dropdown-item"
                  to="/web-development"
                  onClick={closeMenu}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/mobile-app-development"
                  onClick={closeMenu}
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/custom-software-development"
                  onClick={closeMenu}
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/devops-services"
                  onClick={closeMenu}
                >
                  DevOps Services
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/ui-ux-designing"
                  onClick={closeMenu}
                >
                  UI/UX Designing
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/seo" onClick={closeMenu}>
                  SEO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Nav.Link as={Link} to={to} onClick={closeMenu}>
          {text}
        </Nav.Link>
      )}
    </Nav.Item>
  );
};

export default MyNavbar;
