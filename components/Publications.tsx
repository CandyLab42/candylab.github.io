"use client";

import { motion } from "framer-motion";
import { type Lang } from "@/lib/data";

const SAMPLE_PUBS = [
  {
    year: 2024,
    title: "Cooperative dynamics in heterogeneous social networks under bounded rationality",
    authors: "Tang S., Wang X., Chen X.",
    venue: "Proceedings of the National Academy of Sciences",
    venue_short: "PNAS",
    doi: "#",
  },
  {
    year: 2023,
    title: "Emergence of cooperation in evolutionary game theory with adaptive reward mechanisms",
    authors: "Chen X., Liu L., Tang S.",
    venue: "AAAI Conference on Artificial Intelligence",
    venue_short: "AAAI",
    doi: "#",
  },
  {
    year: 2023,
    title: "Spreading dynamics on temporal networks: Beyond static approximations",
    authors: "Liu L., Wang X., Tang S.",
    venue: "New Journal of Physics",
    venue_short: "NJP",
    doi: "#",
  },
  {
    year: 2022,
    title: "Brain-inspired collective intelligence for multi-agent decision making",
    authors: "Wang X., Tang S.",
    venue: "Nature Communications",
    venue_short: "Nat. Commun.",
    doi: "#",
  },
];

export default function Publications({ lang }: { lang: Lang }) {
  const t = {
    section: lang === "en" ? "Output" : "成果",
    heading: lang === "en" ? "Selected Publications" : "代表性论文",
    viewAll: lang === "en" ? "View all on Google Scholar →" : "在 Google Scholar 查看全部 →",
    doi: "DOI",
    pdf: "PDF",
  };

  return (
    <section id="publications" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-16 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                fontFamily: "var(--font-montserrat, var(--font-heading))",
                color: "var(--color-accent)",
                letterSpacing: "0.15em",
              }}
            >
              {t.section}
            </p>
            <h2 className="section-heading text-4xl font-bold" style={{ color: "var(--color-navy)" }}>
              {t.heading}
            </h2>
          </div>
          <a
            href="#"
            className="animated-underline text-sm font-medium shrink-0"
            style={{
              fontFamily: "var(--font-montserrat, var(--font-heading))",
              color: "var(--color-text-muted)",
            }}
          >
            {t.viewAll}
          </a>
        </div>

        <div className="space-y-px">
          {SAMPLE_PUBS.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex gap-6 p-6 transition-colors duration-150"
              style={{ background: "white" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f0f6ff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}
            >
              {/* Year */}
              <div
                className="shrink-0 text-xs font-bold tabular-nums pt-0.5"
                style={{
                  fontFamily: "var(--font-montserrat, var(--font-heading))",
                  color: "var(--color-accent)",
                  minWidth: "2.5rem",
                }}
              >
                {pub.year}
              </div>

              <div className="min-w-0 flex-1">
                {/* Title with animated underline */}
                <h3
                  className="animated-underline text-sm font-semibold mb-1.5 leading-snug inline"
                  style={{
                    fontFamily: "var(--font-montserrat, var(--font-heading))",
                    color: "var(--color-navy)",
                  }}
                >
                  {pub.title}
                </h3>
                <p className="text-sm mt-1 mb-2" style={{ color: "var(--color-text-secondary)" }}>
                  {pub.authors}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-xs font-bold uppercase px-2.5 py-1"
                    style={{
                      background: "var(--color-navy)",
                      color: "white",
                      fontFamily: "var(--font-montserrat, var(--font-heading))",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {pub.venue_short}
                  </span>
                  <a
                    href={pub.doi}
                    className="animated-underline text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t.doi} ↗
                  </a>
                  <a
                    href={pub.doi}
                    className="animated-underline text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t.pdf} ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
