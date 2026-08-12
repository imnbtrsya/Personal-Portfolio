import "./Skills.css";

import { SiHtml5, SiCss, SiJavascript, SiPython, SiDart, SiPhp, SiFlutter, SiLaravel, SiReact, SiMysql, SiFirebase, SiPhpmyadmin, SiGithub, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">

        <div className="skill-card technical-card">

          <h3>Technical Skills</h3>

          <div className="skill-category">

            <p>Programming Languages</p>

            <div className="skill-tags">

              <span><SiHtml5 />HTML</span>

              <span><SiCss />CSS</span>

              <span><SiJavascript />JavaScript</span>

              <span><SiPython />Python</span>

              <span><SiDart />Dart</span>

              <span><SiPhp />PHP</span>

            </div>
          </div>

          <div className="skill-category">

            <p>Frameworks & Libraries</p>

            <div className="skill-tags">

              <span><SiReact />React.js</span>

              <span><SiFlutter />Flutter</span>

              <span><SiLaravel />Laravel</span>

            </div>
          </div>

          <div className="skill-category">

            <p>Database</p>

            <div className="skill-tags">

              <span><SiMysql />MySQL</span>

              <span><SiFirebase />Firebase Firestore</span>

              <span><SiPhpmyadmin />phpMyAdmin</span>

            </div>
          </div>

          <div className="skill-category">

            <p>Machine Learning</p>

            <div className="skill-tags">

              <span>K-Nearest Neighbors (KNN)</span>

              <span>Decision Tree</span>

              <span>Logistic Regression</span>

            </div>
          </div>
        </div>

        <div className="bottom-skills">

          <div className="skill-card">

            <h3>Tools & CMS</h3>

            <div className="simple-tags">

              <span><SiGithub />GitHub</span>

              <span><VscVscode />Visual Studio Code</span>

              <span><SiFigma />Figma</span>

              <span>Sitefinity</span>

            </div>
          </div>
          <div className="skill-card soft-card">

            <h3>Soft Skills</h3>

            <div className="soft-tags">

              <span>Teamwork</span>

              <span>Problem Solving</span>

              <span>Time Management</span>

              <span>Adaptability</span>

              <span>Fast Learner</span>

              <span>Attention to Detail</span>

              <span>Willing to Learn</span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;