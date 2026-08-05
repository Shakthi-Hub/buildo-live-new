"use client";

import { motion } from "framer-motion";

const locations = [
  "Madurai",
  "Chennai",
  "Coimbatore",
  "Ramnad",
  "Tiruttai",
  "Salem",
  "Thiruchendur",
  "Trichy",
  "Kerala"
];

export default function LocationMarquee() {
  // We duplicate the list enough times so it easily fills the screen.
  // 4 sets total: animate to -50% means it moves exactly 2 sets before seamlessly looping.
  const marqueeItems = [...locations, ...locations, ...locations, ...locations];

  return (
    <section className="bg-brand-white py-12 md:py-20 overflow-hidden border-y border-gray-200">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        {/* Gradient fades on left and right edges for a smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-brand-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-brand-white to-transparent pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap"
          // Animate exactly half the total width of the container
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Change this number to make it faster/slower
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((loc, i) => (
            <div key={i} className="flex items-center mx-4 md:mx-8">
              <span 
                className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-transparent hover:text-[#050505] transition-colors duration-300 cursor-default"
                style={{ WebkitTextStroke: "1.5px rgba(13, 13, 13, 0.4)" }}
              >
                {loc}
              </span>
              <span className="mx-4 md:mx-8 text-[#050505] text-2xl md:text-4xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
