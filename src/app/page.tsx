import { getRepositories } from "../lib/github";
import ProjectFilter from "../components/ProjectFilter";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default async function Home() {
  const repos = await getRepositories("ST0RM-Z");

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-slate-950 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <section id="projects" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Projects</h2>
            <ProjectFilter repos={repos} />
          </section>
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
