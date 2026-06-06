"use client";

import { motion } from "framer-motion";
import { LAB, type Lang } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-16"
      style={{ background: "var(--color-navy)" }}
    >
      {/* Decorative radial glow — top right */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(97,97,255,0.18), transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Institution label */}
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 text-xs font-bold uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-montserrat, var(--font-heading))",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.18em",
          }}
        >
          {lang === "en"
            ? "Beihang University · School of Artificial Intelligence"
            : "北京航空航天大学 · 人工智能学院"}
        </motion.p>

        {/* Lab name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          {LAB.name[lang]}
        </motion.h1>

        {/* Tagline — xlarge-text style */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-montserrat, var(--font-heading))",
            fontSize: "clamp(1.2rem, 2.5vw, 1.625rem)",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.82)",
            maxWidth: "680px",
            marginBottom: "1.5rem",
          }}
        >
          {LAB.tagline[lang]}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.55)",
            maxWidth: "620px",
            marginBottom: "3rem",
          }}
        >
          {LAB.description[lang]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-4"
        >
          <a href="#research" className="btn-primary">
            {lang === "en" ? "Explore Research" : "了解研究方向"}
          </a>
          <a
            href="#members"
            className="btn-secondary"
            style={{ borderColor: "rgba(0,153,255,0.55)", color: "white" }}
          >
            {lang === "en" ? "Meet the Team" : "认识团队"}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
        >
          {[
            { num: "60+", label: lang === "en" ? "Publications" : "学术论文" },
            { num: "10+", label: lang === "en" ? "Nat'l Projects" : "国家级项目" },
            { num: "4", label: lang === "en" ? "Faculty Members" : "师资力量" },
            { num: `${new Date().getFullYear() - LAB.founded}+`, label: lang === "en" ? "Years" : "年" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-4xl font-extrabold mb-1"
                style={{ fontFamily: "var(--font-montserrat, var(--font-heading))", color: "var(--color-accent)" }}
              >
                {s.num}
              </div>
              <div
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
