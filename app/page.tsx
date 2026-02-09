"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import WorksModal from "@/components/WorksModal";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <ThemeToggle />

      <main>
        <Hero />

        <Section title="About">
          <p>アニメーションとUIが好きです。</p>
        </Section>

        <Section title="Works">
          <div className="grid">
            <div className="card" onClick={() => setOpen(true)}>
              Work 1
            </div>
          </div>
        </Section>
      </main>

      <WorksModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
