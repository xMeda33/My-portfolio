import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React e-commerce",
    img: "/people.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum maxime nesciunt omnis quisquam accusamus corrupti, aliquid consequuntur quaerat iure necessitatibus a minima aliquam? Sequi possimus eos incidunt quasi assumenda.",
  },
  {
    id: 2,
    title: "NextJS e-commerce",
    img: "https://www.pexels.com/photo/person-holding-debit-card-50987/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum maxime nesciunt omnis quisquam accusamus corrupti, aliquid consequuntur quaerat iure necessitatibus a minima aliquam? Sequi possimus eos incidunt quasi assumenda.",
  },
  {
    id: 3,
    title: "Me e-commerce",
    img: "https://www.pexels.com/photo/hands-on-a-laptop-keyboard-5474295/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum maxime nesciunt omnis quisquam accusamus corrupti, aliquid consequuntur quaerat iure necessitatibus a minima aliquam? Sequi possimus eos incidunt quasi assumenda.",
  },
  {
    id: 4,
    title: "GG e-commerce",
    img: "https://www.pexels.com/photo/close-up-photo-of-codes-1089440/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum maxime nesciunt omnis quisquam accusamus corrupti, aliquid consequuntur quaerat iure necessitatibus a minima aliquam? Sequi possimus eos incidunt quasi assumenda.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progress-bar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
