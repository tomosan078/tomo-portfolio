"use client";
import { useFadeUp } from "./useFadeUp";

export default function Contact() {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up" style={{ textAlign: "center", padding: "80px 20px" }}>
      <h2>Contact</h2>
      <a href="mailto:hello@tomo.work">Let’s work together!</a>
    </section>
  );
}
