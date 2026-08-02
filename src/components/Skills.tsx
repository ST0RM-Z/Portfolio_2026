const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Java", "C", "C++", "C#", "JavaScript", "PHP", "Python"],
  },
  {
    label: "Web Technologies",
    items: ["React", "React Native", "Node.js", "Express.js", "HTML5", "CSS3", "Sass", ".NET", "Django"],
  },
  {
    label: "Libraries",
    items: ["Material UI", "Bootstrap", "D3.js", "Chart.js"],
  },
  {
    label: "Database & API",
    items: ["MySQL", "MongoDB", "SQL", "GraphQL", "REST API"],
  },
  {
    label: "Testing & Tools",
    items: ["Jest", "Selenium", "Postman", "Git", "GitLab", "Jira"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Skills</h2>
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
                  key={item}
                  className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
