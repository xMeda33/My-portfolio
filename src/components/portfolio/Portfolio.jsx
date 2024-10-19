import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Travelling agency",
    img: "/skypoint.png",
    desc: `• Implemented frontend for company’s web application using ReactJs.
• Was able to use RESTful APIs to make the website dynamic and easy to update.
• Responsible for the UI/UX design for the application.`,
    link: "https://skypoint.fi",
  },

  {
    id: 2,
    title: "Online Bookstore",
    img: "/bookstore.png",
    desc: `• Developed RESTful APIs using Node.js and Express for core functionalities like product management, user authentication, and order 
processing.
 • Integrated Stripe for secure payment processing, enabling customers to complete transactions using various payment methods
• Built the customer-facing storefront using React and TailwindCSS, allowing users to browse products, add items to the cart, and complete the 
checkout process.
• Utilized Material-UI (MUI) for the Admin Dashboard, providing a modern and responsive UI for managing products, categories, orders, and 
users.
 `,
    link: "https://bookstore-pearl-seven.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: item.desc
                  .replace(/\n/g, "<br />")
                  .replace(/•/g, "<span>&#8226;</span>"),
              }}
            ></p>
            <button>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                See demo
              </a>
            </button>
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
