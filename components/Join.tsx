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
      className="py-24"
      style={{ background: "var(--color-buaa)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            {t.section}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "white" }}>
            {t.heading}
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            {t.body}
          </p>

          {/* Position pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {t.positions.map((p) => (
              <span
                key={p}
                className="text-sm px-4 py-2 rounded-full border"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Contact CTA */}
          <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
            {t.cta}
          </p>
          <a
            href={`mailto:${t.contact}`}
            className="text-lg font-medium transition-opacity duration-150"
            style={{ color: "white" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
