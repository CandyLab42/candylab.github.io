"use client";

import { useState, useEffect } from "react";
import { NAV, LAB, type Lang } from "@/lib/data";

interface NavbarProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="px-4 h-16 flex items-center text-sm font-semibold transition-all duration-150"
      style={{
        fontFamily: "var(--font-montserrat, var(--font-heading))",
        color: hovered ? "var(--color-navy)" : "var(--color-text-secondary)",
        boxShadow: hovered ? "inset 0 -7px 0 #0099ff" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = NAV[lang];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "0 1px 0 #eeeeee",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center text-xs font-extrabold shrink-0"
            style={{
              background: "var(--color-navy)",
              color: "white",
              fontFamily: "var(--font-montserrat, var(--font-heading))",
            }}
          >
            BU
          </div>
          <span
            className="font-bold text-sm tracking-tight"
            style={{ fontFamily: "var(--font-montserrat, var(--font-heading))", color: "var(--color-navy)" }}
          >
            {LAB.name[lang]}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
          <button
            onClick={() => onLangChange(lang === "en" ? "zh" : "en")}
            className="ml-4 pl-4 text-xs font-bold uppercase tracking-wider transition-colors duration-150"
            style={{
              fontFamily: "var(--font-montserrat, var(--font-heading))",
              color: "var(--color-text-muted)",
              borderLeft: "1px solid #eeeeee",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-navy)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")}
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block h-px w-6" style={{ background: "var(--color-text)" }} />
          <span className="block h-px w-6" style={{ background: "var(--color-text)" }} />
          <span className="block h-px w-6" style={{ background: "var(--color-text)" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white" style={{ borderColor: "#eeeeee" }}>
          <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-semibold border-b"
                style={{
                  fontFamily: "var(--font-montserrat, var(--font-heading))",
                  color: "var(--color-text)",
                  borderColor: "#eeeeee",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { onLangChange(lang === "en" ? "zh" : "en"); setMenuOpen(false); }}
              className="mt-4 mb-2 text-xs font-bold uppercase self-start"
              style={{ fontFamily: "var(--font-montserrat, var(--font-heading))", color: "var(--color-text-muted)" }}
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
