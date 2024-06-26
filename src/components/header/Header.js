import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Ensure you have the styles for any additional custom styling
import { HEADER } from "../../constants/Constants";
const Header = () => {
    const titleStyle = {
       marginTop: '10rem'
    };
  return (
    <header style={titleStyle} className=" text-center py-5">
      <div className="container">
        <h1 className="display-4 font-weight-bold header-heading">
          {HEADER.TITLE_1}
        </h1>
        <h1 className="display-4 font-weight-bold text-warning header-heading">
        {HEADER.TITLE_2}
        </h1>
        <p className="lead text-muted mt-4">
          {HEADER.DESCRIPTION}
        </p>
        <button className="primary-btn mt-3">Contact us</button>
      </div>
    </header>
  );
};

export default Header;
