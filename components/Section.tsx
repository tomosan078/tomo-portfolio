import FadeIn from "./FadeIn";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <FadeIn>
        <h2>{title}</h2>
        {children}
      </FadeIn>
    </section>
  );
}
