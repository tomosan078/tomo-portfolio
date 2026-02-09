"use client";
import { useFadeUp } from "./useFadeUp";

export default function About() {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up" style={{ padding: "40px", background: "#fff", borderRadius: "24px" }}>
      <h2>About</h2>
      <ul>
        <li>💡 Web / UI Design</li>
        <li>🎨 Pastel & Minimal</li>
        <li>📍 Japan</li>
      </ul>
    </section>
  );
}
