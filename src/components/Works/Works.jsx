import React from "react";
import "./Works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Expereince</h2>
      <span className="worksdesc"></span>
      <div className="worksimgs">
        <img src={portfolio1} alt="" className="workimg" />
        <img src={portfolio2} alt="" className="workimg" />
        <img src={portfolio3} alt="" className="workimg" />
        <img src={portfolio4} alt="" className="workimg" />
        <img src={portfolio5} alt="" className="workimg" />
        <img src={portfolio6} alt="" className="workimg" />
      </div>
      <button className="workbtn">See more</button>
    </section>
  );
};

export default Works;
