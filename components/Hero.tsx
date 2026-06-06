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
      style={{ background: "white" }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.3,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--color-buaa)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className="text-xs font-medium px-3 py-1 rounded-full tracking-wide uppercase"
              style={{ background: "var(--color-buaa-muted)", color: "var(--color-buaa)" }}
            >
              {lang === "en" ? "Beihang University · School of AI" : "北京航空航天大学 · 人工智能学院"}
            </span>
          </motion.div>

          {/* Lab name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: "var(--color-ink)" }}
          >
            {LAB.name[lang]}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xl font-light mb-8 tracking-widest uppercase"
            style={{ color: "var(--color-buaa)", letterSpacing: "0.15em" }}
          >
            {LAB.tagline[lang]}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: "var(--color-ink-secondary)" }}
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
            <a
              href="#research"
              className="px-6 py-3 text-sm font-medium rounded-full transition-all duration-200"
              style={{ background: "var(--color-buaa)", color: "white" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-buaa-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-buaa)")}
            >
              {lang === "en" ? "Explore Research →" : "了解研究方向 →"}
            </a>
            <a
              href="#members"
              className="px-6 py-3 text-sm font-medium rounded-full border transition-all duration-200"
              style={{ borderColor: "var(--color-border)", color: "var(--color-ink-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-buaa)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-buaa)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-ink-secondary)";
              }}
            >
              {lang === "en" ? "Meet the Team" : "认识团队"}
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          {[
            { num: "60+", label: lang === "en" ? "Publications" : "学术论文" },
            { num: "10+", label: lang === "en" ? "Nat'l Projects" : "国家级项目" },
            { num: "4", label: lang === "en" ? "Faculty" : "师资力量" },
            { num: `${new Date().getFullYear() - LAB.founded}+`, label: lang === "en" ? "Years" : "年" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "var(--color-buaa)" }}
              >
                {s.num}
              </div>
              <div className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
