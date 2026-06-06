"use client";

import { motion } from "framer-motion";
import { NEWS, type Lang } from "@/lib/data";

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Publication: { bg: "#e8eef7", text: "#003087" },
  发表: { bg: "#e8eef7", text: "#003087" },
  Award: { bg: "#fef9ee", text: "#92610a" },
  获奖: { bg: "#fef9ee", text: "#92610a" },
  Event: { bg: "#f0fdf4", text: "#15803d" },
  活动: { bg: "#f0fdf4", text: "#15803d" },
  Recruiting: { bg: "#fdf4ff", text: "#7e22ce" },
  招募: { bg: "#fdf4ff", text: "#7e22ce" },
};

export default function News({ lang }: { lang: Lang }) {
  return (
    <section id="news" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--color-buaa)" }}
          >
            {lang === "en" ? "Updates" : "动态"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
            {lang === "en" ? "News" : "最新动态"}
          </h2>
        </div>

        <div className="space-y-px rounded-2xl overflow-hidden border" style={{ borderColor: "var(--color-border)" }}>
          {NEWS.map((item, i) => {
            const tag = item.tag[lang];
            const colors = TAG_COLORS[tag] || { bg: "var(--color-buaa-muted)", text: "var(--color-buaa)" };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="flex gap-6 p-6 transition-colors duration-150"
                style={{ background: "white" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-surface)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}
              >
                {/* Date */}
                <div
                  className="shrink-0 text-sm font-mono w-16"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {item.date}
                </div>

                {/* Tag */}
                <div className="shrink-0">
                  <span
                    className="text-xs px-2 py-0.5 rounded font-medium"
                    style={{ background: colors.bg, color: colors.text }}
                  >
                    {tag}
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--color-ink)" }}>
                    {item.title[lang]}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-secondary)" }}>
                    {item.content[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
