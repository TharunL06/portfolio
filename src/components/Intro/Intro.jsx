import React from "react";
import "./Intro.css";
import { Link } from "react-scroll"; // link is used to link other page like anchor tag
import hireme from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hi,</span>
        <span className="introtext">
          I'm <span className="introname">Tharun L</span>
          <br />
          Software Developer
        </span>
        <p className="intropara">
          "As a versatile software developer proficient in Python, Django, SQL,
          and frontend technologies (HTML, CSS, JS, React), with a keen interest
          in data science, my goal is to showcase my expertise and passion for
          building robust web applications. Through my portfolio, I aim to
          highlight a diverse range of projects that demonstrate my skills in
          full-stack development, while also emphasizing my ability to leverage
          data science techniques for meaningful insights. I am committed to
          delivering high-quality solutions that seamlessly blend innovation and
          user-centric design. Explore my portfolio to witness the intersection
          of my technical proficiency and creative problem-solving in the world
          of software development and data science."
        </p>
        <Link><button className="btn"><img src={hireme} alt="hire me" className="btnimg" />Hire me</button></Link>
      </div>
    </section>
  );
};

export default Intro;
