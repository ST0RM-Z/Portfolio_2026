export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold text-white text-center mb-10">About</h2>
      <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl">
        <p className="text-white/70 leading-relaxed mb-6">
          I&apos;m a versatile full-stack developer and IT operations analyst based in
          Waterloo, ON, with hands-on experience across the full software development
          lifecycle and production support environments. I bridge the gap between
          building robust solutions and keeping enterprise systems running reliably —
          from shipping features to resolving live incidents.
        </p>
        <p className="text-white/70 leading-relaxed mb-6">
          Passionate about clean code, automation, and problem-solving, I aim to deliver
          user-focused, efficient, and reliable digital solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/60">
          <div>
            <span className="text-white/90 font-semibold">Web Development</span>
            <p>Conestoga College, Waterloo, ON — Graduated with Distinction (2022–2023)</p>
          </div>
          <div>
            <span className="text-white/90 font-semibold">B.Eng, Information Technology</span>
            <p>Gujarat Technological University, India (2015–2019)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
