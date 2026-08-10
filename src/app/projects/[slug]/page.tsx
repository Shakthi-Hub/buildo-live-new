import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projectsData } from "@/data/projects";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find(p => p.slug === resolvedParams.slug);
  
  return {
    title: project ? `${project.title} | Buildo Projects` : 'Project Not Found | Buildo',
    description: project ? project.description : `View details for this project.`,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Find the exact project from our data file
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-white text-brand-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-brand-orange hover:underline">Return to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      
      {/* Hero Image */}
      <div 
        className="w-full h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-brand-black/30" />
        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 max-w-7xl mx-auto w-full px-4">
          <Link href="/projects" className="inline-flex items-center text-brand-white hover:text-brand-orange transition-colors mb-4 backdrop-blur-sm bg-brand-black/20 px-4 py-2 rounded-full text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-white drop-shadow-md">{project.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <div className="prose prose-lg text-brand-black/70">
              <p>{project.description}</p>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((src, i) => (
                <div key={i} className="aspect-square bg-brand-black/5 rounded-xl overflow-hidden cursor-pointer group">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar Specs */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-black/10 sticky top-28">
              <h3 className="text-xl font-bold mb-6 border-b border-brand-black/10 pb-4">Project Details</h3>
              <ul className="space-y-4">
                <li>
                  <p className="text-brand-black/50 text-sm font-medium mb-1">Location</p>
                  <p className="font-semibold text-lg">{project.location}</p>
                </li>
                <li>
                  <p className="text-brand-black/50 text-sm font-medium mb-1">Project Type</p>
                  {/* @ts-expect-error - Handle old and new data structure */}
                  <p className="font-semibold text-lg">{project.projectType || (project.category === 'Salon' ? 'Salon Interior' : project.category)}</p>
                </li>
                <li>
                  <p className="text-brand-black/50 text-sm font-medium mb-1">Category</p>
                  {/* @ts-expect-error - Handle old and new data structure */}
                  <p className="font-semibold text-lg">{project.categoryLevel || (['Premium', 'Standard', 'Basic'].includes(project.plotSize) ? project.plotSize : 'Standard')}</p>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-brand-black/10">
                <a href="https://wa.me/919500417217" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-brand-orange text-brand-black font-bold py-3 rounded-full hover:bg-orange-400 transition-colors">
                  Enquire about similar project
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
