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
          <p>どうも。tomosan078と申します。私の周りは団体運営者さんとかサーバー運営者さんが
いっぱいいますが、私は特に団体や、サーバー運営等は特にしていません。
AGAMES公式Discordでボランティアでお助けをしています。そんな感じの人です。
知らない方とはあまり関わらない方針で行っています。
私を紹介する為のポートフォリオですが...よろしくお願いいたします。
        </Section>

        <Section title="Works">
          <div className="grid">
            <div className="card" onClick={() => setOpen(true)}>
              AGAMES Official Discord Moderator
            </div>
          </div>
        </Section>
      </main>

      <WorksModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
