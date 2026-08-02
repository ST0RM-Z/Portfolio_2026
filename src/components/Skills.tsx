const CORE_STACK = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3 / Sass"],
  },
  {
    label: "Frontend",
    items: ["React", "React Router", "Chakra UI"],
  },
  {
    label: "Backend & API",
    items: ["Node.js", "Express.js", "GraphQL (Apollo)", "REST API"],
  },
  {
    label: "Data & CMS",
    items: ["MongoDB (Mongoose)", "MySQL", "D3.js", "WordPress"],
  },
];

const ALSO_PROFICIENT = [
  "Java", "C", "C++", "C#", "Python", "Django", ".NET",
  "Selenium", "Jest", "Postman", "Jira", "GitLab", "Azure",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Skills</h2>
      <p className="text-center text-white/40 text-sm mb-10">
        Core stack, based on what I actually ship in public repos
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {CORE_STACK.map((group) => (
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

      <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl">
        <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-4">
          Also proficient in
        </h3>
        <div className="flex flex-wrap gap-2">
          {ALSO_PROFICIENT.map((item) => (
            <span
              key={item}
              className="text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
