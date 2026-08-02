type Skill = { name: string; verified?: boolean };

const SKILL_GROUPS: { label: string; items: Skill[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", verified: true },
      { name: "TypeScript", verified: true },
      { name: "PHP", verified: true },
      { name: "C#", verified: true },
      { name: "Python", verified: true },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", verified: true },
      { name: "React Router", verified: true },
      { name: "Chakra UI", verified: true },
      { name: "HTML5", verified: true },
      { name: "CSS3 / Sass", verified: true },
    ],
  },
  {
    label: "Backend & API",
    items: [
      { name: "Node.js", verified: true },
      { name: "Express.js", verified: true },
      { name: "GraphQL (Apollo)", verified: true },
      { name: "REST API", verified: true },
      { name: "ASP.NET", verified: true },
      { name: "Django" },
    ],
  },
  {
    label: "Data & CMS",
    items: [
      { name: "MongoDB (Mongoose)", verified: true },
      { name: "MySQL", verified: true },
      { name: "D3.js", verified: true },
      { name: "WordPress", verified: true },
    ],
  },
  {
    label: "Testing & Tools",
    items: [
      { name: "Git", verified: true },
      { name: "Docker", verified: true },
      { name: "Selenium" },
      { name: "Jest" },
      { name: "Postman" },
      { name: "Jira" },
      { name: "GitLab" },
      { name: "Azure" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Skills</h2>
      <p className="text-center text-white/40 text-sm mb-10">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2 align-middle" />
        Demonstrated in my repos — the rest is from coursework and professional experience
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={
                    item.verified
                      ? "text-xs text-white/80 bg-blue-500/15 border border-blue-400/30 px-3 py-1 rounded-full"
                      : "text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  }
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
