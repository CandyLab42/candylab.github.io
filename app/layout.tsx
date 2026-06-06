import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍬</text></svg>",
  },
  title: "CandyLab — Beihang University",
  description:
    "CandyLab at Beihang University studies complex networks, swarm intelligence, social big data, and brain cognition-driven AI.",
  keywords: ["complex networks", "swarm intelligence", "AI", "Beihang University", "北航", "CandyLab"],
  openGraph: {
    title: "CandyLab — Beihang University",
    description: "Research group at BUAA School of Artificial Intelligence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
