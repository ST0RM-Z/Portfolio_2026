import type { Metadata } from "next";
import Script from "next/script";
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

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
      </head>
      <body className="bg-background text-ink">{children}</body>
    </html>
  );
}
