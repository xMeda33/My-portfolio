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
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            delectus mollitia culpa repellat blanditiis! Nam est aliquam
            recusandae! Modi natus voluptatem nihil voluptate. Beatae voluptatem
            ducimus, hic natus corrupti nulla?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            delectus mollitia culpa repellat blanditiis! Nam est aliquam
            recusandae! Modi natus voluptatem nihil voluptate. Beatae voluptatem
            ducimus, hic natus corrupti nulla?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            delectus mollitia culpa repellat blanditiis! Nam est aliquam
            recusandae! Modi natus voluptatem nihil voluptate. Beatae voluptatem
            ducimus, hic natus corrupti nulla?
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            delectus mollitia culpa repellat blanditiis! Nam est aliquam
            recusandae! Modi natus voluptatem nihil voluptate. Beatae voluptatem
            ducimus, hic natus corrupti nulla?
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
