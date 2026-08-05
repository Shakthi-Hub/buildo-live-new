import Link from "next/link";

export const metadata = {
  title: "Our Projects | Buildo",
  description: "Browse our portfolio of architectural design, construction, and interior design projects in Tamil Nadu.",
};

import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  // In production, this would use next-sanity GROQ queries
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-brand-black/10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Portfolio</h1>
        <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">
          Explore a selection of our 58+ completed projects across Tamil Nadu.
        </p>
        
        {/* Placeholder Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {["All", "Residential", "Bungalow", "Interior", "Event"].map(cat => (
            <button key={cat} className={`px-6 py-2 rounded-full font-medium transition-colors ${cat === 'All' ? 'bg-brand-black text-brand-white' : 'bg-brand-black/5 text-brand-black/70 hover:bg-brand-black/10'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-72 w-full overflow-hidden rounded-xl mb-4 bg-brand-black/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.thumbnail})` }}
                  />
                  <div className="absolute top-4 right-4 bg-brand-white/90 backdrop-blur text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {project.category}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  <p className="text-brand-black/60 mb-2 text-sm font-medium">{project.location}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 border border-brand-black text-brand-black font-semibold rounded-full hover:bg-brand-black hover:text-brand-white transition-colors">
            Load More Projects
          </button>
        </div>
      </section>
    </div>
  );
}
