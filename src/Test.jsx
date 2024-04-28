import { motion } from "framer-motion";
function Test() {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div>
      <div className="course">
        <motion.ul initial="hidden" animate="visible" variants={variants}>
          {items.map((item, index) => (
            <motion.li variants={variants} custom={index} key={index}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Test;
