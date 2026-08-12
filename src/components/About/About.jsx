import "./About.css";

import { useState } from "react";
import { HiUser, HiAcademicCap, HiCheckBadge, HiBriefcase, HiOutlineEye } from "react-icons/hi2";

function About() {

  const [showCertificate, setShowCertificate] = useState(false);

  return (
    
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-grid">
        <div className="card about-card">
          <h3><HiUser className="card-icon" />About</h3>
          <p>
            I'm Nur Iman Batrisya, a Software Engineering graduate
            with a strong interest in frontend development. I enjoy
            developing responsive and user-friendly applications while
            continuously learning new technologies and improving my
            development skills.
          </p>
        </div>

        <div className="card education-card">
          <h3><HiAcademicCap className="card-icon" />Education</h3>
          <p><strong>Bachelor of Computer Science (Software Engineering) with Honours</strong></p>

          <p>Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)</p>

          <p>2022 - 2026</p>
        </div>

        <div className="card award-card">
          <h3><HiCheckBadge className="card-icon" />Dean's Award</h3>

          <p>Recognised for excellent academic performance.</p>

          <p>Semester 7 • GPA: 3.54</p>

          {/*<button
            className="certificate-btn"
            onClick={() => setShowCertificate(true)}
          >
            <HiOutlineEye />
            View Certificate
          </button>
          */}
        </div>

        <div className="card internship-card">
          <h3><HiBriefcase className="card-icon" />Internship</h3>

          <p><strong>Web Development Intern / IT Specialist Intern</strong></p>

          <p>Vintedge Sdn. Bhd.</p>

          <p>March 2026 - August 2026</p>

          <div className="internship-tags">
            <span>Sitefinity</span>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>React.js</span>
          </div>
        </div>
      </div>

      {/*
      {showCertificate && (
        <div
          className="about-certificate-modal"
          onClick={() => setShowCertificate(false)}
        >
          <div
            className="about-certificate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="about-certificate-wrapper">
              <button
                className="about-close-btn"
                onClick={() => setShowCertificate(false)}
              >
                ×
              </button>

              <img
                src="/AWS-certificate.jpg"
                alt="Dean's Award Certificate"
              />
            </div>
          </div>
        </div>
      )}
        */}
    </section>
  );
}

export default About;