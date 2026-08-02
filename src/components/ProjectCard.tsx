export default function ProjectCard({ 
  title, 
  description, 
  link, 
  stars, 
  forks, 
  language 
}: { 
  title: string; 
  description: string; 
  link: string; 
  stars: number; 
  forks: number; 
  language: string 
}) {
  return (
    // Added 'flex flex-col' to the main container
    <div className="flex flex-col w-full relative group border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 ease-out hover:-translate-y-2">
      {/* The Glow effect */}
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Added 'flex-grow' to this wrapper to fill available space */}
      <div className="relative z-10 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h2>
        
        <p className="text-white/70 mb-6 text-sm leading-relaxed line-clamp-3">
          {description || "No description provided for this repository."}
        </p>
        
        {/* 'mt-auto' forces this section to the bottom of the flex container */}
        <div className="mt-auto">
          <div className="flex items-center gap-4 text-xs font-medium text-white/60 mb-6">
            <span className="flex items-center gap-1">⭐ {stars ?? 0}</span>
            <span className="flex items-center gap-1">🍴 {forks ?? 0}</span>
            <span className="bg-white/10 px-2 py-1 rounded-md text-white/90">
              {language || "N/A"}
            </span>
          </div>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm hover:text-white transition-colors"
          >
            View on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}