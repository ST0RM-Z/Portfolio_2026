import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhairya Arya | Full-Stack Developer",
  description: "Portfolio of Dhairya Arya — full-stack developer, showcasing projects pulled live from GitHub.",
  openGraph: {
    title: "Dhairya Arya | Full-Stack Developer",
    description: "Portfolio of Dhairya Arya — full-stack developer, showcasing projects pulled live from GitHub.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}