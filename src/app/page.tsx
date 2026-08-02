import { getRepositories } from "../lib/github";
import ProjectFilter from "../components/ProjectFilter";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default async function Home() {
  const repos = await getRepositories("ST0RM-Z");

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <Skills />
        <h2 className="text-3xl font-bold text-white text-center mb-12">Projects</h2>
        <ProjectFilter repos={repos} />
        <Footer />
      </div>
    </main>
  );
}