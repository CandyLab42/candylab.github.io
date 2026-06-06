"use client";

import { motion } from "framer-motion";
import { NEWS, type Lang } from "@/lib/data";

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  Publication: { bg: "rgba(0,153,255,0.1)", color: "#004080" },
  发表:        { bg: "rgba(0,153,255,0.1)", color: "#004080" },
  Award:       { bg: "rgba(255,165,0,0.12)", color: "#7a4500" },
  获奖:        { bg: "rgba(255,165,0,0.12)", color: "#7a4500" },
  Event:       { bg: "rgba(0,180,80,0.1)",  color: "#005e29" },
  活动:        { bg: "rgba(0,180,80,0.1)",  color: "#005e29" },
  Recruiting:  { bg: "rgba(82,82,216,0.1)", color: "#2e2e8a" },
  招募:        { bg: "rgba(82,82,216,0.1)", color: "#2e2e8a" },
};

export default function News({ lang }: { lang: Lang }) {
  return (
    <section id="news" className="py-24" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-montserrat, var(--font-heading))",
              color: "var(--color-accent)",
              letterSpacing: "0.15em",
            }}
          >
            {lang === "en" ? "Updates" : "动态"}
          </p>
          <h2 className="section-heading text-4xl font-bold" style={{ color: "var(--color-navy)" }}>
            {lang === "en" ? "News" : "最新动态"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((item, i) => {
            const tag = item.tag[lang];
            const ts = TAG_STYLES[tag] ?? { bg: "rgba(0,153,255,0.1)", color: "#004080" };
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="p-7 flex flex-col transition-all duration-200"
                style={{ background: "var(--color-surface)", boxShadow: "0 0 0 1px transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 2px #0099ff, 0 8px 32px rgba(0,0,102,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px transparent";
                  (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
                }}
              >
                {/* Tag + date row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase px-2.5 py-1 tracking-wide"
                    style={{
                      fontFamily: "var(--font-montserrat, var(--font-heading))",
                      background: ts.bg,
                      color: ts.color,
                    }}
                  >
                    {tag}
                  </span>
                  <span
                    className="text-xs font-medium tabular-nums"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="animated-underline text-sm font-bold mb-3 inline leading-snug"
                  style={{
                    fontFamily: "var(--font-montserrat, var(--font-heading))",
                    color: "var(--color-navy)",
                  }}
                >
                  {item.title[lang]}
                </h3>

                {/* Content */}
                <p
                  className="text-sm leading-relaxed mt-auto"
                  style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}
                >
                  {item.content[lang]}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
