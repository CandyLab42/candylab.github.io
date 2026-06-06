import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
