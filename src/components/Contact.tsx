const LINKS = [
  { label: "Email", value: "dhairya_arya@icloud.com", href: "mailto:dhairya_arya@icloud.com" },
  { label: "LinkedIn", value: "linkedin.com/in/dhairyaarya", href: "https://www.linkedin.com/in/dhairyaarya/" },
  { label: "GitHub", value: "github.com/ST0RM-Z", href: "https://github.com/ST0RM-Z" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-20 text-center">
      <h2 className="text-3xl font-bold text-ink mb-4">Contact</h2>
      <p className="text-ink/50 mb-10">Waterloo, ON — open to full-stack freelancing roles.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
            className="flex-1 border border-ink/10 rounded-xl p-4 bg-ink/5 backdrop-blur-xl hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-all"
          >
            <span className="block text-sm text-blue-600 dark:text-blue-300 mb-1">{link.label}</span>
            <span className="block text-ink/70 text-sm break-words">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
