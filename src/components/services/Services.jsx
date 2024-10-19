import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      description: "A versatile programming language for web development.",
    },
    {
      id: 2,
      name: "Node.js",
      description:
        "A runtime environment for executing JavaScript on the server.",
    },
    {
      id: 3,
      name: "React",
      description:
        "A powerful JavaScript library for building user interfaces.",
    },
    {
      id: 4,
      name: "Next.js (Currently learning)",
      description:
        "A React framework for building server-side rendered applications.",
    },
  ];
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="text-container" variants={variants}>
        <p>My skills</p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/code.png" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> and
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Technologies</motion.b> I
            know.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ background: "lightgray", color: "black" }}
            className="box"
          >
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
            <button>
              <a
                href="#Portfolio"
                onClick={(e) => scrollToSection(e, "Portfolio")}
              >
                GO
              </a>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
