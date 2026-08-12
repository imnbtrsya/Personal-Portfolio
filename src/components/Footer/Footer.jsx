import "./Footer.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {

  return (

    <footer className="footer">
        
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Nur Iman Batrisya</h2>
          <p>Software Engineering Freshgraduate</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <a
            href="https://www.linkedin.com/in/nurimanbatrisya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/imnbtrsya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=imnbtrsya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail />
            <span>Email</span>
          </a>
          
        </div>

      </div>

      <div className="footer-bottom">
        <p>Built with <strong>React.js + Vite</strong> using JavaScript</p>
        <p>© 2026 Nur Iman Batrisya. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;