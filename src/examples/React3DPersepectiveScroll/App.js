import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Window from "./window.png";

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 0.1], [8, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 80]);

  return (
    <div className="App">
      <p>Introducing</p>
      <h1 className="title">Your Awesome Website</h1>
      <motion.div
        className="card"
        style={{ translateY, scale, perspective: 200, rotateX }}
      >
        <img src={Window} className="card-image" alt="figma window" />
      </motion.div>
    </div>
  );
}
