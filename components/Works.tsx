"use client";
import { useFadeUp } from "./useFadeUp";

export default function Works() {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up" style={{ padding: "80px 20px" }}>
      <h2>Works</h2>
      <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
        {["Portfolio Site", "Landing Page", "Coming Soon"].map((title) => (
          <div
            key={title}
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "20px",
              transition: "transform .3s ease",
            }}
          >
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
