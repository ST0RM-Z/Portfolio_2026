// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <p className="text-white/50">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}