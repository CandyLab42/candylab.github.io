"use client";

import { useState } from "react";
import type { Lang } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Members from "@/components/Members";
import News from "@/components/News";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <main>
      <Navbar lang={lang} onLangChange={setLang} />
      <Hero lang={lang} />
      <Research lang={lang} />
      <Publications lang={lang} />
      <Members lang={lang} />
      <News lang={lang} />
      <Join lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
