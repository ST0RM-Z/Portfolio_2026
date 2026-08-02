const JOBS = [
  {
    role: "IT Operations Analyst",
    company: "TD Bank, Toronto, ON",
    period: "Feb 2024 – Present",
    bullets: [
      "Provide daily production support for enterprise applications, ensuring stability, availability, and performance.",
      "Troubleshoot and resolve incidents, coordinating escalation with minimal impact to business stakeholders.",
      "Partner with developers and infrastructure teams to schedule releases and reduce change implementation time.",
      "Collaborate on Disaster Recovery (DR) planning, testing, and documentation to ensure business continuity.",
    ],
  },
  {
    role: "Customer Support Representative",
    company: "Majorel, Waterloo, ON",
    period: "Jul 2023 – Dec 2023",
    bullets: [
      "Resolved customer issues and technical guidance requests while maintaining KPI-driven service standards.",
      "Documented accounts and identified trends to help improve support quality and training.",
    ],
  },
  {
    role: "App Developer",
    company: "Padhya Software Technology, Ahmedabad, India",
    period: "Jul 2021 – Nov 2021",
    bullets: [
      "Collaborated with a distributed team to deliver a project on an online platform.",
      "Applied risk-taking, troubleshooting, and critical thinking to minimize project risk and evaluate progress.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-ink text-center mb-10">Experience</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {JOBS.map((job) => (
          <div
            key={`${job.role}-${job.company}`}
            className="border border-ink/10 rounded-2xl p-6 bg-ink/5 backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
              <span className="text-sm text-ink/40">{job.period}</span>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-300 mb-4">{job.company}</p>
            <ul className="list-disc list-inside text-ink/60 text-sm space-y-2">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
