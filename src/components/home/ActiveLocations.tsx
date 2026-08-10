"use client";

import { motion } from "framer-motion";

const locations = [
  "Gayathri Nagar",
  "Gomathipuram",
  "TVS Nagar",
  "LKT Nagar",
  "TWAD Nagar",
  "Vijayadhaya",
  "Veerapandi",
  "Mattuthavani",
  "Kovil Papakudi",
  "Alanganallur",
  "Karaikudi",
  "Othakadai",
  "Ellis Nagar",
  "T&G",
  "Suryanagar",
  "Ramnadu",
];

export default function ActiveLocations() {
  return (
    <section className="py-24 bg-brand-black text-brand-white overflow-hidden relative border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          >
            Designed <span className="text-brand-orange">Here</span> Built Across Tamil Nadu & Kerala.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-white/70"
          >
           Serving clients across Tamil Nadu & Kerala, bringing thoughtful architecture, construction and interiors to every project.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-3 md:px-6 md:py-4 rounded-full border border-brand-white/10 bg-brand-white/5 hover:bg-brand-orange/20 hover:border-brand-orange/40 hover:text-brand-white transition-all duration-300 backdrop-blur-sm cursor-default"
            >
              <span className="text-sm md:text-base font-medium tracking-wide">
                {loc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
