import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="py-24 text-center scroll-mt-20">
      <Image
        src="/Dp.jpg"
        alt="Dhairya Arya"
        width={128}
        height={128}
        priority
        className="mx-auto mb-6 rounded-full border border-white/10 object-cover"
      />
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Dhairya Arya</h1>
      <p className="text-xl text-blue-300 mb-4">Full-Stack Developer</p>
      <p className="text-lg text-white/50 max-w-2xl mx-auto">
        I build scalable web applications with React, Node.js, PHP, and MongoDB —
        with production support experience keeping enterprise systems reliable
        along the way.
      </p>
    </section>
  );
}
