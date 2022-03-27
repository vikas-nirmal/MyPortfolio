import React from "react";
import "./About.css";
import imgAbout from "../../img/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={imgAbout} alt="about-image" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">Hey, I am vikas Nirmal.</p>
        <p className="about-desc">
          Recent computer science graduate with passion for developing scalable
          web applications and working across the full stack. I am looking to
          join forces with tech companies to continue to grow my skill set while
          contributing to the positive outcome of making people "richer,smarter,
          and happier".
        </p>
      </div>
    </div>
  );
};

export default About;
