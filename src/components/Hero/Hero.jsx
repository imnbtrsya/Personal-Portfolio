import "./Hero.css";

import profileImage from "../../assets/profile.png";
import sparkleImage from "../../assets/sparkle.png";
import resume from "../../assets/NUR IMAN BATRISYA.pdf";

import { HiArrowDownTray } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {

  const text = "Software Engineering Freshgraduate";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {

      setDisplayText(text.slice(0, index + 1));

      if (index >= text.length - 1) {

        clearInterval(typing);

        setTimeout(() => {
          setIsTyping(false);
        }, 500);
      }

      index++;

    }, 70);

    return () => clearInterval(typing);

  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <motion.p
          className="greeting"
          initial={{opacity:0, x:-50}}
          animate={{opacity:1, x:0}}
          transition={{
            duration:0.8
          }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{opacity:0, x:-50}}
          animate={{opacity:1, x:0}}
          transition={{
            duration:0.8,
            delay:0.2
          }}
        >
          NUR IMAN BATRISYA
        </motion.h1>

        <motion.h2
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay:0.8
          }}
        >
        {displayText}
        {isTyping && (
          <span className="typing-cursor">
          |
          </span>
        )}
        </motion.h2>

        <motion.p
          className="description"
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.8,
            delay:1.5
          }}
        >
          Passionate about developing responsive web and mobile 
          applications with a focus on clean design, intuitive 
          user experiences, and modern technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:1.8
          }}
        >
          <a
            href={resume}
            download="NUR IMAN BATRISYA.pdf"
            className="resume-btn"
          >
            <HiArrowDownTray />
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        initial={{
          opacity:0,
          x:80
        }}
        animate={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:1
        }}
      >
        <img
          className="profile-img"
          src={profileImage}
          alt="Nur Iman Batrisya"
        />

        <img
          className="sparkle"
          src={sparkleImage}
          alt="sparkle decoration"
        />

        <img
          className="sparkle-bottom"
          src={sparkleImage}
          alt="sparkle decoration"
        />
      </motion.div>
    </section>
  );
}

export default Hero;