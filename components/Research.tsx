"use client";

import { motion } from "framer-motion";
import { RESEARCH, type Lang } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Research({ lang }: { lang: Lang }) {
  return (
    <section id="research" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--color-buaa)" }}
          >
            {lang === "en" ? "What We Do" : "研究领域"}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--color-ink)" }}
          >
            {lang === "en" ? "Research Areas" : "研究方向"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {RESEARCH.map((area, i) => (
            <motion.div
              key={area.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group p-8 rounded-2xl border transition-all duration-300 cursor-default"
              style={{
                background: "white",
                borderColor: "var(--color-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-buaa)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,48,135,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Number */}
              <div
                className="text-4xl font-bold mb-4 opacity-10 select-none"
                style={{ color: "var(--color-buaa)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-ink)" }}
              >
                {area.title[lang]}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--color-ink-secondary)" }}
              >
                {area.description[lang]}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {area.keywords[lang].map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{ background: "var(--color-buaa-muted)", color: "var(--color-buaa)" }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
