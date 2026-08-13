import "./Projects.css";

import portfolioImage from "../../assets/portfolio-logo.png";
import pawparentImage from "../../assets/PawParent-logo.png";
import mpsImage from "../../assets/mpscholar-logo.png";
import strokeImage from "../../assets/stroke-prediction.png";
import stroke from "../../assets/Early-Stroke-Prediction.pdf";

import { FaGithub } from "react-icons/fa";
import { HiOutlineGlobeAlt, HiOutlineDocumentText, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState  } from "react";

import "swiper/css";
import "swiper/css/pagination";

function Projects() {

const [isBeginning, setIsBeginning] = useState(true);
const [isEnd, setIsEnd] = useState(false);
const [expandedProject, setExpandedProject] = useState(null);

  const projects = [

    {
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website built with React.js, featuring responsive design, smooth navigation, animations, and project showcases to highlight my frontend development skills.",

      technologies: [
        "React,js + Vite",
        "HTML",
        "CSS",
      ],

      github: "https://github.com/imnbtrsya/portfolio",

      demo: "https://imnbtrsya.github.io/portfolio/",

      image: portfolioImage,
    },

    {
      title: "Paw Parent",
      description:
        "Paw Parent is a responsive website built with React.js and Vite for a cat-sitting service. It allows customers to view services, pricing, and business information, with direct WhatsApp booking integration.",

      technologies: [
        "React.js + Vite",
        "HTML",
        "CSS",
      ],

      github: "https://github.com/imnbtrsya/pawparent",

      demo: "https://imnbtrsya.github.io/pawparent/",

      image: pawparentImage,
    },

    {
        title: "Early Stroke Prediction",

        description:
            "A machine learning system for early stroke risk prediction using patient health data. KNN, Logistic Regression, and Decision Tree models were compared to identify the best-performing model.",

        technologies: [
            "Python",
            "Flask",
            "scikit-Learn",
            "Machine Learning",
        ],

        github: "https://github.com/imnbtrsya/Early-Stroke-Prediction",

        demo: "https://early-stroke-prediction-4dz2.onrender.com/",

        paper: stroke,

        image: strokeImage,
    },

  ];

  return (

    <section
      id="projects"
      className="projects"
    >

      <h2 className="projects-title">
        Projects
      </h2>
    <div className="swiper-wrapper-container">

    <button
        className={`project-prev ${isBeginning ? "hide-arrow" : ""}`}
        onClick={() => {
            document
                .querySelector(".projects-swiper")
                ?.swiper.slidePrev();
        }}
    >
        <HiOutlineChevronLeft />
    </button>


    <Swiper
    modules={[Pagination]}

    pagination={{
        clickable: true,
    }}

    onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }}

    onSwiper={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    }}

    spaceBetween={30}

    watchOverflow={true}

    breakpoints={{
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },

        601: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        901: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }}

    className="projects-swiper"
>

        {projects.map((project, index) => (

            <SwiperSlide key={index}>

                <div className="project-card">

                    <img
                        src={project.image}
                        alt={project.title}
                    />

                    <div className="project-content">

                        <h3>{project.title}</h3>

                        <div className="project-description">
    <p className={expandedProject === index ? "expanded" : ""}>
        {project.description}
    </p>

    {project.description.length > 150 && (
        <button
            className="read-more"
            onClick={() =>
                setExpandedProject(
                    expandedProject === index ? null : index
                )
            }
        >
            {expandedProject === index ? "Read less" : "Read more"}
        </button>
    )}
</div>

                        <div className="project-tags">

                            {project.technologies.map((tech, i) => (
                                <span key={i}>
                                    {tech}
                                </span>
                            ))}

                        </div>

                        <div className="project-buttons">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                <FaGithub />
                                GitHub
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="demo-btn"
                                >
                                    <HiOutlineGlobeAlt />
                                    Live Demo
                                </a>
                            )}

                            {project.paper && (
                              <a
                                href={project.paper}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-btn"
                              >
                                <HiOutlineDocumentText />
                                Research Paper
                                </a>
                            )}

                        </div>

                    </div>

                </div>

            </SwiperSlide>

        ))}

    </Swiper>


    <button
        className={`project-next ${isEnd ? "hide-arrow" : ""}`}
        onClick={() => {
            document
                .querySelector(".projects-swiper")
                ?.swiper.slideNext();
        }}
    >
        <HiOutlineChevronRight />
    </button>

    </div>
    </section>

  );

}

export default Projects;