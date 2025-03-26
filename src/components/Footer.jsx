import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer m-3">
      <div className="footer-content d-flex justify-content-between align-items-center">
        <div className="footer-left col-md-6 m-1 p-2 d-flex align-items-center">
          <h4 className="footer-logo me-2">
            <video width="70%" autoPlay loop muted>
              <source src="G.mp4" type="video/mp4" />
              <source src="logo.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </h4>
          <div>
            <p>Developed By: Njuguini</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer-right col-md-6 m-2 p-2">
          
          <div className="d-flex justify-content-start">
            {" "}
            {/* Added d-flex to make links horizontal */}
            <Link to="/about" className="me-4">
              About Us
            </Link>{" "}
            {/* Added margin end for spacing */}
            <Link to="/contact">Contact Us</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
