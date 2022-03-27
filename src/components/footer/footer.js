import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div className="sectionfooter">
      <div className="footer">
        <div className="social">
          <a href="https://github.com/vikas-nirmal">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/vikas__kumar321/">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vikas-nirmal-3b7768217/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="copyright">Vikas Kumar Nirmal © 2022</p>
      </div>
    </div>
  );
};

export default footer;
