"use client";
import { motion } from "framer-motion";

const text = "tomosan078";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="char"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
      <p>Normal Students Developer</p>
    </section>
  );
}
