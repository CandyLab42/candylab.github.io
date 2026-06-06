"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, LAB, type Lang } from "@/lib/data";

interface NavbarProps {
  lang: Lang;
  onLangChange: (l: Lang) => void;
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="font-semibold text-base tracking-tight"
          style={{ color: "var(--color-buaa)" }}
        >
          {LAB.name[lang]}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors duration-150"
              style={{ color: "var(--color-ink-secondary)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-buaa)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-ink-secondary)")}
            >
              {l.label}
            </a>
          ))}
          {/* Lang toggle */}
          <button
            onClick={() => onLangChange(lang === "en" ? "zh" : "en")}
            className="text-xs px-3 py-1.5 rounded-full border transition-colors duration-150"
            style={{
              borderColor: "var(--color-buaa)",
              color: "var(--color-buaa)",
            }}
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px mb-1.5 transition-all" style={{ background: "var(--color-ink)" }} />
          <span className="block w-5 h-px mb-1.5 transition-all" style={{ background: "var(--color-ink)" }} />
          <span className="block w-5 h-px transition-all" style={{ background: "var(--color-ink)" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t overflow-hidden"
            style={{ background: "white", borderColor: "var(--color-border)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm"
                  style={{ color: "var(--color-ink-secondary)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { onLangChange(lang === "en" ? "zh" : "en"); setMenuOpen(false); }}
                className="text-xs self-start px-3 py-1.5 rounded-full border"
                style={{ borderColor: "var(--color-buaa)", color: "var(--color-buaa)" }}
              >
                {lang === "en" ? "中文" : "EN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
