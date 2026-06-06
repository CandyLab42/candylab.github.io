"use client";

import { motion } from "framer-motion";
import { RESEARCH, type Lang } from "@/lib/data";

export default function Research({ lang }: { lang: Lang }) {
  return (
    <section id="research" className="py-24" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label + heading */}
        <div className="mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-montserrat, var(--font-heading))",
              color: "var(--color-accent)",
              letterSpacing: "0.15em",
            }}
          >
            {lang === "en" ? "What We Do" : "研究领域"}
          </p>
          <h2
            className="section-heading text-4xl font-bold"
            style={{ color: "var(--color-navy)" }}
          >
            {lang === "en" ? "Research Areas" : "研究方向"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {RESEARCH.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="p-8 transition-all duration-250"
              style={{
                background: "var(--color-surface)",
                boxShadow: "0 0 0 1px transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 2px #0099ff, 0 8px 32px rgba(0,0,102,0.08)";
                (e.currentTarget as HTMLElement).style.background = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px transparent";
                (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
              }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{
                  fontFamily: "var(--font-montserrat, var(--font-heading))",
                  color: "var(--color-navy)",
                }}
              >
                {area.title[lang]}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)", lineHeight: 1.75 }}
              >
                {area.description[lang]}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {area.keywords[lang].map((kw) => (
                  <span
                    key={kw}
                    className="text-xs font-medium px-3 py-1"
                    style={{
                      background: "rgba(0,153,255,0.08)",
                      color: "var(--color-navy)",
                      border: "1px solid rgba(0,153,255,0.2)",
                    }}
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
