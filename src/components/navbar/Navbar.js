import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Import your custom CSS for hover functionality

const MyNavbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="sticky-top">
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#">
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

          <Navbar.Collapse id="basic-navbar-nav" className={`${isCollapsed ? "" : "show"}`}>
            <Nav className="w-100 justify-content-around">
              <NavItemWithHover
                href="/"
                text="Home"
              />
              <NavItemWithHover
                text="Services"
                isDropdown
                isCollapsed={isCollapsed}
              />
              <NavItemWithHover
                href="/blog"
                text="Blogs"
              />
              <NavItemWithHover
                href="/about-us"
                text="About us"
              />
              <Nav.Item>
                <button className="primary-btn" href="/contact">
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

const NavItemWithHover = ({
  href,
  text,
  isDropdown,
  isCollapsed
}) => {
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
              <li><a  class="dropdown-item" href="/web-development">Web Development</a></li>
              <li><a class="dropdown-item" href="/mobile-app-development">Mobile App Development</a></li>
              <li><a   class="dropdown-item"  href="/custom-software-development">Custom Software Development</a></li>
              <li><a  class="dropdown-item" href="/devops-services">DevOps Services</a></li>
              <li><a  class="dropdown-item" href="/ui-ux-designing">UI/UX Designing</a></li>
              <li><a   class="dropdown-item"href="/seo">SEO</a></li>
            </ul>
          </div>
        </div>
      ) : (
        <Nav.Link href={href}>{text}</Nav.Link>
      )}
    </Nav.Item>
  );
};

export default MyNavbar;
