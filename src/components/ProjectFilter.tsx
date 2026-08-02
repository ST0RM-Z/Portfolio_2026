"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Repo = {
  id: number;
  title: string;
  description: string;
  link: string;
  stars: number;
  forks: number;
  language: string;
};

export default function ProjectFilter({ repos }: { repos: Repo[] }) {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredRepos = repos.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesLang = language === "All" || r.language === language;
    return matchesSearch && matchesLang;
  });

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredRepos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredRepos.length / projectsPerPage);

  const languages = ["All", ...Array.from(new Set(repos.map((r) => r.language)))];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title & Toolbar: Now using gap-8 to match the grid's gap */}
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <input
            type="text"
            aria-label="Search projects"
            placeholder="Search projects..."
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-white flex-grow focus:outline-none focus:border-blue-500 transition-colors"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          {/* Ensure dropdown has a consistent width or flex-basis */}
          <select
            aria-label="Filter by language"
            className="bg-slate-900 border border-white/10 rounded-xl p-4 text-white md:w-58 focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              setLanguage(e.target.value);
              setCurrentPage(1);
            }}
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>

      {currentProjects.length === 0 ? (
        <p className="text-center text-white/50 py-16">
          {repos.length === 0
            ? "No projects to show right now — check back soon."
            : "No projects match your search."}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
          {currentProjects.map((repo) => (
            <div key={repo.id} className="flex w-full max-w-sm">
              <ProjectCard {...repo} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-8 mt-16">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 disabled:opacity-30 transition-all"
          >
            Previous
          </button>
          <span className="text-white/40 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 disabled:opacity-30 transition-all"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}