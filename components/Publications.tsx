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
    pdf: "PDF",
    doi: "DOI",
  };

  return (
    <section id="publications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-3"
              style={{ color: "var(--color-buaa)" }}
            >
              {t.section}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
              {t.heading}
            </h2>
          </div>
          <a
            href="#"
            className="text-sm transition-colors duration-150 shrink-0"
            style={{ color: "var(--color-ink-muted)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
          >
            {t.viewAll}
          </a>
        </div>

        <div className="space-y-4">
          {SAMPLE_PUBS.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex gap-5 p-6 rounded-2xl border transition-all duration-200"
              style={{ background: "white", borderColor: "var(--color-border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-buaa)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,48,135,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Year badge */}
              <div
                className="shrink-0 text-xs font-mono font-medium px-2.5 py-1 rounded self-start mt-0.5"
                style={{ background: "var(--color-buaa-muted)", color: "var(--color-buaa)" }}
              >
                {pub.year}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium mb-1 leading-snug" style={{ color: "var(--color-ink)" }}>
                  {pub.title}
                </h3>
                <p className="text-sm mb-2" style={{ color: "var(--color-ink-secondary)" }}>
                  {pub.authors}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded"
                    style={{ background: "var(--color-surface)", color: "var(--color-ink-secondary)", border: "1px solid var(--color-border)" }}
                  >
                    {pub.venue_short}
                  </span>
                  <a
                    href={pub.doi}
                    className="text-xs transition-colors duration-150"
                    style={{ color: "var(--color-ink-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
                  >
                    {t.doi} ↗
                  </a>
                  <a
                    href={pub.doi}
                    className="text-xs transition-colors duration-150"
                    style={{ color: "var(--color-ink-muted)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
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
