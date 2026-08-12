import "./SplashScreen.css";

import sparkleImage from "../../assets/sparkle.png";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SplashScreen({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 3600);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.section
      className="splash"
      animate={
        exit
          ? {
              y: "-100%",
            }
          : {}
      }
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
    >

      {/* ================= CONTENT ================= */}

      <div className="splash-content">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
          }}
        >
          Welcome
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
        >
          to my
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.0,
            duration: 0.9,
          }}
        >
          Portfolio
        </motion.h2>

        {/* ================= TOP SPARKLE ================= */}

        <motion.img
          src={sparkleImage}
          alt="sparkle"
          className="splash-sparkle-top"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: -15,
          }}
          transition={{
            delay: 2.0,
            duration: 0.7,
          }}
        />

        {/* ================= LEFT SPARKLE ================= */}

        <motion.img
          src={sparkleImage}
          alt="sparkle"
          className="splash-sparkle-left"
          initial={{
            opacity: 0,
            scale: 0,
            rotate: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 8,
          }}
          transition={{
            delay: 2.2,
            duration: 0.7,
          }}
        />

      </div>

    </motion.section>
  );
}

export default SplashScreen;
