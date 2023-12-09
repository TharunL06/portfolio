import React from "react";
import "./Skills.css";
import python from "../../assets/python.png";
import dj2 from "../../assets/dj2.png";
import sql from "../../assets/sql.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I do</span>
      <span className="skilldesc">
        "Experienced software developer proficient in Python, Django, SQL, and
        frontend tech (HTML, CSS, JS, React). Excels in full-stack development,
        creative problem-solving, and user-centric design. Passionate about
        showcasing expertise through diverse projects integrating software
        development and data science."
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={python} alt="python" className="skillbarimg" />
          <div className="skillbartext"></div>
          <h2>Python</h2>
          <p>
            Leveraged Python extensively for automation testing in previous
            roles, demonstrating proficiency in scripting and test automation.
          </p>
        </div>
      </div>
      <div className="skillbars">
        <div className="skillbar">
          <img src={dj2} alt="dj2" className="skillbarimg" />
          <div className="skillbartext"></div>
          <h2>Django</h2>
          <p>
            Specialized in Django for software development, creating robust and
            scalable web applications with a focus on efficient backend
            architecture.
          </p>
        </div>
      </div>
      <div className="skillbars">
        <div className="skillbar">
          <img src={sql} alt="sql" className="skillbarimg" />
          <div className="skillbartext"></div>
          <h2>Sql</h2>
          <p>
            Utilized SQL for effective database management, ensuring data
            integrity, optimizing queries, and contributing to seamless
            data-driven applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
