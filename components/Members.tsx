"use client";

import { motion } from "framer-motion";
import { MEMBERS, type Lang, type Member } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function MemberCard({ member, lang, index }: { member: Member; lang: Lang; index: number }) {
  const initials = member.name[lang]
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="p-6 rounded-2xl border transition-all duration-300"
      style={{ background: "white", borderColor: "var(--color-border)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,48,135,0.08)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-buaa)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
      }}
    >
      {/* Avatar */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold mb-4"
        style={{ background: "var(--color-buaa-muted)", color: "var(--color-buaa)" }}
      >
        {initials}
      </div>

      <h3 className="text-base font-semibold mb-0.5" style={{ color: "var(--color-ink)" }}>
        {member.name[lang]}
      </h3>
      <p className="text-sm mb-3" style={{ color: "var(--color-buaa)" }}>
        {member.role[lang]}
      </p>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-ink-secondary)" }}>
        {member.bio[lang]}
      </p>

      {/* Interests */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {member.interests[lang].slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded"
            style={{ background: "var(--color-surface)", color: "var(--color-ink-muted)", border: "1px solid var(--color-border)" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Email */}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-xs transition-colors duration-150"
          style={{ color: "var(--color-ink-muted)" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-buaa)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-muted)")}
        >
          {member.email}
        </a>
      )}
    </motion.div>
  );
}

export default function Members({ lang }: { lang: Lang }) {
  const pi = MEMBERS.filter((m) => m.group === "pi");
  const researchers = MEMBERS.filter((m) => m.group === "researcher");

  return (
    <section id="members" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--color-buaa)" }}
          >
            {lang === "en" ? "People" : "团队"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
            {lang === "en" ? "Members" : "团队成员"}
          </h2>
        </div>

        {/* PI */}
        <div className="mb-12">
          <h3
            className="text-xs font-medium uppercase tracking-widest mb-6 pb-3 border-b"
            style={{ color: "var(--color-ink-muted)", borderColor: "var(--color-border)" }}
          >
            {lang === "en" ? "Principal Investigator" : "课题组长"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pi.map((m, i) => (
              <MemberCard key={m.slug} member={m} lang={lang} index={i} />
            ))}
          </div>
        </div>

        {/* Researchers */}
        <div>
          <h3
            className="text-xs font-medium uppercase tracking-widest mb-6 pb-3 border-b"
            style={{ color: "var(--color-ink-muted)", borderColor: "var(--color-border)" }}
          >
            {lang === "en" ? "Faculty" : "师资"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchers.map((m, i) => (
              <MemberCard key={m.slug} member={m} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
