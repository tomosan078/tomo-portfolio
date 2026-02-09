"use client";
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const circles = document.querySelectorAll(".bg-circle");

    const onScroll = () => {
      const y = window.scrollY * 0.08;
      circles.forEach((circle, i) => {
        (circle as HTMLElement).style.transform =
          `translateY(${-y * (i + 1)}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
