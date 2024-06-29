import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-white footer-bg">
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">
                  <a href="www.innoscripts.com">
                    <img
                      src="logo.png"
                      alt="Company Logo"
                      style={{ width: "50%" }}
                    />
                  </a>
                </h6>
                <p>
                  Our mission is to deliver innovative software solutions that help businesses achieve their goals. We specialize in web development, mobile app development, and custom software development. Our team is dedicated to providing high-quality services that meet the unique needs of each client.
                </p>
                {/* Social Links */}
              
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                {/* Links */}
                <h6 className="text-uppercase linkcolor">Services</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto headingcolor"
                  style={{ width: 60, height: 2 }}
                />
                <p className="">
                  <Link
                    to="/web-development"
                    className="headingcolor textDecoration"
                  >
                    <span className="navbar-nav1">
                      <span className="nav-link1">Web Development</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link
                    to="/mobile-app-development"
                    className="headingcolor textDecoration"
                  >
                    <span className="navbar-nav1">
                      <span className="nav-link1">Mobile App Development</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link
                    to="/custom-software-development"
                    className="headingcolor textDecoration"
                  >
                    <span className="navbar-nav1">
                      <span className="nav-link1">Custom Software</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link to="/dev-ops" className="headingcolor textDecoration">
                    <span className="navbar-nav1">
                      <span className="nav-link1">DevOps Services</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link to="/ui-ux" className="headingcolor textDecoration">
                    <span className="navbar-nav1">
                      <span className="nav-link1">UI/UX Design</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link to="/seo" className="headingcolor textDecoration">
                    <span className="navbar-nav1">
                      <span className="nav-link1">SEO</span>
                    </span>
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                {/* Links */}
                <h6 className="text-uppercase fw-bold linkcolor">Company</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto headingcolor"
                  style={{ width: 60, height: 2 }}
                />
                <p className="">
                  <Link to="/about" className="textDecoration headingcolor">
                    <span className="navbar-nav1">
                      <span className="nav-link1">About Us</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link to="/services" className="textDecoration headingcolor">
                    <span className="navbar-nav1">
                      <span className="nav-link1">Services</span>
                    </span>
                  </Link>
                </p>
                <p className="">
                  <Link to="/blogs" className="textDecoration headingcolor">
                    <span className="navbar-nav1">
                      <span className="nav-link1">Blogs</span>
                    </span>
                  </Link>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
                {/* Links */}
                <h6 className="text-uppercase fw-bold linkcolor">Contact Us</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto headingcolor"
                  style={{ width: 60, height: 2 }}
                />
                <p className="headingcolor">
                  <i className="fas fa-home me-3" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Johar+Town+Lahore,+Pakistan"
                    target="_blank"
                    className="textDecoration headingcolor"
                    rel="noopener noreferrer"
                  >
                    <span className="navbar-nav1">
                      <span className="nav-link1">
                        Johar Town Lahore, Pakistan
                      </span>
                    </span>
                  </a>
                </p>
                <p className="headingcolor">
                  <i className="fas fa-envelope me-3" />
                  <a
                    href="mailto:info@innoscripts.com"
                    className="textDecoration headingcolor"
                  >
                    <span className="navbar-nav1">
                      <span className="nav-link1">info@innoscripts.com</span>
                    </span>
                  </a>
                </p>
                <p className="headingcolor">
                  <i className="fas fa-phone me-3" />
                  <a
                    href="tel:+923440177289"
                    className="textDecoration headingcolor"
                  >
                    <span className="navbar-nav1">
                      <span className="nav-link1">+92 (344) 0177 289</span>
                    </span>
                  </a>
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/innoscript-technologies" className="text-white me-3 textDecoration" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61558155148952" className="text-white me-3 textDecoration" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" />
            </a>
            <a href="https://www.instagram.com" className="text-white me-3 textDecoration">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.twitter.com" className="text-white textDecoration">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <div className="copyright">
            © 2024 Copyright |
            <a className="text-white textDecoration" href="https://www.innoscripts.com/">
              www.innoscripts.com
            </a>
          </div>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
};

export default Footer;
