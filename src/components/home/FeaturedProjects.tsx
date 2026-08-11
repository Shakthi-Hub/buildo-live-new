"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { projectsData } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-brand-white text-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-brand-black/60 max-w-2xl text-lg">
              A curated selection of our finest architectural and interior design projects.
            </p>
          </div>
          <Link href="/projects" className="hidden md:flex items-center text-brand-orange font-semibold hover:text-brand-black transition-colors">
            View All Projects <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative h-80 md:h-[450px] w-full overflow-hidden rounded-xl mb-6 bg-brand-black/5">
                  <Image 
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:left-6 md:right-6 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className="inline-block px-4 py-2 bg-transparent border border-white text-white md:bg-brand-orange md:border-none md:text-brand-black text-xs md:text-sm font-semibold rounded-full md:mb-3">
                      View Project
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  <div className="flex flex-col space-y-1.5 text-[15px] text-brand-black/70 mt-2">
                    <span><strong className="text-brand-black font-semibold">Location:</strong> {project.location}</span>
                    {/* @ts-expect-error - Handle old and new data structure */}
                    <span><strong className="text-brand-black font-semibold">Project Type:</strong> {project.projectType || (project.category === 'Salon' ? 'Salon Interior' : project.category)}</span>
                    {/* @ts-expect-error - Handle old and new data structure */}
                    <span><strong className="text-brand-black font-semibold">Category:</strong> {project.categoryLevel || (['Premium', 'Standard', 'Basic'].includes(project.plotSize) ? project.plotSize : 'Standard')}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-black transition-colors px-6 py-3 border border-brand-orange rounded-full">
            View All Projects <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

      </div>
    </section>
  );
}
