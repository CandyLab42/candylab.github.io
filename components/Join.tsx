"use client";

import { type Lang, LAB } from "@/lib/data";

export default function Join({ lang }: { lang: Lang }) {
  const t =
    lang === "en"
      ? {
          section: "Opportunities",
          heading: "Join Us",
          body: "We are actively recruiting motivated PhD students, Master's students, and research interns. We look for candidates with strong mathematical foundations and genuine curiosity about complex systems, AI, or game theory.",
          positions: ["PhD Students", "Master's Students", "Research Interns", "Postdoctoral Fellows"],
          cta: "Send your CV and a brief statement of interest to",
          contact: LAB.email,
        }
      : {
          section: "机会",
          heading: "加入我们",
          body: "我们长期招募有志向的博士研究生、硕士研究生及科研实习生。我们欢迎具备扎实数学基础、对复杂系统、人工智能或博弈论有浓厚兴趣的同学。",
          positions: ["博士研究生", "硕士研究生", "科研实习生", "博士后"],
          cta: "请将简历及研究兴趣说明发送至",
          contact: LAB.email,
        };

  return (
    <section
      id="join"
      className="relative"
      style={{ background: "var(--color-navy)" }}
    >
      {/* Diagonal top edge: white triangle masks the top-left, creating a slanted transition */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "white",
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{
            fontFamily: "var(--font-montserrat, var(--font-heading))",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.18em",
          }}
        >
          {t.section}
        </p>

        <h2
          className="text-4xl font-extrabold mb-6"
          style={{
            color: "white",
            maxWidth: "600px",
          }}
        >
          {t.heading}
        </h2>

        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.7)", maxWidth: "580px", lineHeight: 1.75 }}
        >
          {t.body}
        </p>

        {/* Position pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {t.positions.map((p) => (
            <span
              key={p}
              className="text-sm font-semibold px-5 py-2"
              style={{
                fontFamily: "var(--font-montserrat, var(--font-heading))",
                border: "1.5px solid rgba(0,153,255,0.45)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {p}
            </span>
          ))}
        </div>

        {/* Contact CTA */}
        <p
          className="text-sm mb-2"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {t.cta}
        </p>
        <a
          href={`mailto:${t.contact}`}
          className="text-lg font-bold transition-opacity duration-150"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-montserrat, var(--font-heading))" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          {t.contact}
        </a>
      </div>
    </section>
  );
}
