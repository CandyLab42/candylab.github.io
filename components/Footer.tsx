"use client";

import { type Lang, LAB, NAV } from "@/lib/data";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ background: "var(--color-navy)" }}>
      {/* Divider between Join and Footer */}
      <div
        aria-hidden="true"
        style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Col 1 — Lab info */}
          <div>
            <div
              className="text-lg font-extrabold mb-3"
              style={{
                fontFamily: "var(--font-montserrat, var(--font-heading))",
                color: "white",
              }}
            >
              {LAB.name[lang]}
            </div>
            <p className="text-sm leading-relaxed mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              <a
                href={LAB.affiliationUrl}
                className="transition-opacity duration-150"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
              >
                {LAB.affiliation[lang]}
              </a>
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Beijing, China
            </p>
          </div>

          {/* Col 2 — Nav links */}
          <div
            style={{ borderLeft: "1px solid rgba(97,97,255,0.35)", paddingLeft: "3rem" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                fontFamily: "var(--font-montserrat, var(--font-heading))",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
              }}
            >
              {lang === "en" ? "Quick Links" : "快速导航"}
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV[lang].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-montserrat, var(--font-heading))",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Sub-footer */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} {LAB.name[lang]}, Beihang University. All rights reserved.
          </p>
          <a
            href={`mailto:${LAB.email}`}
            className="text-xs transition-colors duration-150"
            style={{ color: "rgba(255,255,255,0.3)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
          >
            {LAB.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
