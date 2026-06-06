"use client";

import { type Lang, LAB, NAV } from "@/lib/data";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="py-12 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <div className="text-base font-semibold mb-2" style={{ color: "var(--color-buaa)" }}>
              {LAB.name[lang]}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
              <a
                href={LAB.affiliationUrl}
                className="transition-colors duration-150"
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
              >
                {LAB.affiliation[lang]}
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {NAV[lang].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-150"
                style={{ color: "var(--color-ink-muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between gap-2"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
            © {new Date().getFullYear()} {LAB.name[lang]}, Beihang University.
          </p>
          <a
            href={`mailto:${LAB.email}`}
            className="text-xs transition-colors duration-150"
            style={{ color: "var(--color-ink-muted)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
          >
            {LAB.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
