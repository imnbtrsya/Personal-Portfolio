import "./Contact.css";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiCheck } from "react-icons/hi2";

function Contact() {

  const [copied, setCopied] = useState("");

  const copyText = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => {
      setCopied("");
    }, 2000);
  };


  return (

    <section id="contact" className="contact">

      <h2 className="contact-title">Contact</h2>

      <div className="contact-container">

        <div className="contact-card">

          <a
            href="https://www.linkedin.com/in/nurimanbatrisya"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon"/>

            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
            </div>

          </a>

          <button
            className="copy-btn"
            onClick={() =>
              copyText(
                "https://www.linkedin.com/in/nurimanbatrisya",
                "linkedin"
              )
            }
          >
            {
              copied === "linkedin"
              ? <HiCheck />
              : <FaCopy />
            }
          </button>

        </div>

        <div className="contact-card">

          <a
            href="https://github.com/imnbtrsya"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon"/>

            <div>
              <h3>GitHub</h3>
              <p>View my projects and code</p>
            </div>

          </a>

          <button
            className="copy-btn"
            onClick={() =>
              copyText(
                "https://github.com/imnbtrsya",
                "github"
              )
            }
          >
            {
              copied === "github"
              ? <HiCheck />
              : <FaCopy />
            }
          </button>

        </div>

        <div className="contact-card">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=imnbtrsya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <HiOutlineMail className="contact-icon"/>

            <div>
              <h3>Email</h3>
              <p>Send me an email</p>
            </div>

          </a>

          <button
            className="copy-btn"
            onClick={() =>
              copyText(
                "imnbtrsya@gmail.com",
                "email"
              )
            }
          >
            {
              copied === "email"
              ? <HiCheck />
              : <FaCopy />
            }
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;