"use client";

import { motion } from "framer-motion";
import { MEMBERS, type Lang, type Member } from "@/lib/data";

function MemberCard({ member, lang, index }: { member: Member; lang: Lang; index: number }) {
  const initials = member.name["en"]
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="p-7 transition-all duration-200"
      style={{ background: "white", boxShadow: "0 0 0 1px transparent" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 2px #0099ff, 0 8px 32px rgba(0,0,102,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px transparent";
      }}
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 flex items-center justify-center text-base font-extrabold mb-5"
        style={{
          background: "var(--color-navy)",
          color: "white",
          fontFamily: "var(--font-montserrat, var(--font-heading))",
        }}
      >
        {initials}
      </div>

      <h3
        className="text-base font-bold mb-1"
        style={{
          fontFamily: "var(--font-montserrat, var(--font-heading))",
          color: "var(--color-navy)",
        }}
      >
        {member.name[lang]}
      </h3>
      <p
        className="text-sm font-medium mb-4"
        style={{
          fontFamily: "var(--font-montserrat, var(--font-heading))",
          color: "var(--color-accent)",
        }}
      >
        {member.role[lang]}
      </p>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
        {member.bio[lang]}
      </p>

      {/* Interests */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {member.interests[lang].slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1"
            style={{
              background: "rgba(0,153,255,0.07)",
              color: "var(--color-navy)",
              border: "1px solid rgba(0,153,255,0.18)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="animated-underline text-xs"
          style={{ color: "var(--color-text-muted)" }}
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

  const GroupLabel = ({ text }: { text: string }) => (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-6 pb-3"
      style={{
        fontFamily: "var(--font-montserrat, var(--font-heading))",
        color: "var(--color-text-muted)",
        letterSpacing: "0.12em",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {text}
    </p>
  );

  return (
    <section id="members" className="py-24" style={{ background: "var(--color-surface)" }}>
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
            {lang === "en" ? "People" : "团队"}
          </p>
          <h2 className="section-heading text-4xl font-bold" style={{ color: "var(--color-navy)" }}>
            {lang === "en" ? "Members" : "团队成员"}
          </h2>
        </div>

        <div className="mb-12">
          <GroupLabel text={lang === "en" ? "Principal Investigator" : "课题组长"} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pi.map((m, i) => (
              <MemberCard key={m.slug} member={m} lang={lang} index={i} />
            ))}
          </div>
        </div>

        <div>
          <GroupLabel text={lang === "en" ? "Faculty" : "师资"} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchers.map((m, i) => (
              <MemberCard key={m.slug} member={m} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
