"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#f4cb99]">
      
      {/* BACKGROUND TEXT AREA (Solid style like prashantparmar.com) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden pb-20">
        <motion.div 
          className="absolute bottom-[12%] left-4 md:bottom-auto md:left-auto md:right-12 lg:right-[10%] md:top-[54%] md:-translate-y-1/2 md:text-right"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[6vw] font-black text-brand-black uppercase tracking-widest break-words" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
            Arwin  
          </h1>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-[12%] right-4 md:bottom-auto md:right-12 lg:right-[10%] md:top-[68%] md:-translate-y-1/2 text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[6vw] font-black text-brand-black uppercase tracking-widest break-words" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)", lineHeight: "1.2" }}>
            Hari Haran
          </h1>
        </motion.div>
      </div>

      {/* FOUNDERS IMAGE AREA: Centered on mobile, aligned to the left on desktop */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center md:justify-start pointer-events-none z-10 pt-20 md:pl-12 lg:pl-[10%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/founders001.png"
          alt="Er. S. Arwin and Er. A. Hariharan — Founders of Buildo"
          width={1800}
          height={1200}
          className="object-contain w-auto"
          style={{ maxHeight: "100vh" }}
          priority
        />
      </motion.div>
      
      {/* Spacer to push quote to bottom */}
      <div className="flex-1"></div>

      {/* QUOTE AREA: Placed under the founders image. Pushed 25% down on mobile. */}
      <div className="w-full flex justify-center text-center px-4 pb-4 md:pb-6 pt-[25vh] md:pt-8 relative z-20">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-brand-black font-medium italic leading-relaxed">
            &quot;Creating elegant spaces that combine creativity, functionality and quality.&quot;
          </p>
        </motion.div>
      </div>

    </section>
  );
}
