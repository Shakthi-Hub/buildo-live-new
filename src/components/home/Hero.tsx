"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#f4cb99]">
      
      {/* BACKGROUND TEXT AREA (Solid style like prashantparmar.com) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden pb-20">
        <motion.div 
          className="absolute top-[55%] w-full text-center md:w-auto md:top-[54%] md:bottom-auto md:left-auto md:right-4 lg:right-[2%] md:-translate-y-1/2 md:text-right"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative inline-block text-left md:text-right">
            {/* Outline Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-black uppercase tracking-widest whitespace-nowrap" 
                style={{ 
                  fontFamily: "'Agrandir Grand Heavy', 'Agrandir Tight', sans-serif",
                  WebkitTextStroke: "2px #0d0d0d", 
                  color: "transparent",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)" 
                }}>
              Arwin  
            </h1>
            {/* Solid Text with looping left-to-right animation */}
            <motion.h1 
              className="absolute top-0 left-0 w-full text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-black text-brand-black uppercase tracking-widest whitespace-nowrap"
              style={{ 
                fontFamily: "'Agrandir Grand Heavy', 'Agrandir Tight', sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)" 
              }}
              animate={{ 
                clipPath: [
                  "inset(0 100% 0 0)", 
                  "inset(0 0 0 0)", 
                  "inset(0 0 0 0)", 
                  "inset(0 100% 0 0)", 
                  "inset(0 100% 0 0)"
                ] 
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity,
                times: [0, 0.25, 0.5, 0.75, 1],
                delay: 1 
              }}
            >
              Arwin  
            </motion.h1>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-[62%] w-full text-center md:w-auto md:top-[68%] md:bottom-auto md:right-4 lg:right-[2%] md:-translate-y-1/2 md:text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative inline-block text-left md:text-right">
            {/* Outline Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-black uppercase tracking-widest whitespace-nowrap" 
                style={{ 
                  fontFamily: "'Agrandir Grand Heavy', 'Agrandir Tight', sans-serif",
                  WebkitTextStroke: "2px #0d0d0d", 
                  color: "transparent",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.1)", 
                  lineHeight: "1.2" 
                }}>
              Hari Haran
            </h1>
            {/* Solid Text with looping left-to-right animation */}
            <motion.h1 
              className="absolute top-0 left-0 w-full text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-black text-brand-black uppercase tracking-widest whitespace-nowrap"
              style={{ 
                fontFamily: "'Agrandir Grand Heavy', 'Agrandir Tight', sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)", 
                lineHeight: "1.2" 
              }}
              animate={{ 
                clipPath: [
                  "inset(0 100% 0 0)", 
                  "inset(0 0 0 0)", 
                  "inset(0 0 0 0)", 
                  "inset(0 100% 0 0)", 
                  "inset(0 100% 0 0)"
                ] 
              }}
              transition={{ 
                duration: 8, 
                ease: "easeInOut", 
                repeat: Infinity,
                times: [0, 0.25, 0.5, 0.75, 1],
                delay: 1 
              }}
            >
              Hari Haran
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* FOUNDERS IMAGE AREA: Upper quarter on mobile, centered left on desktop */}
      <motion.div
        className="absolute inset-0 flex items-start justify-center pt-[12vh] md:items-center md:justify-start md:pt-20 pointer-events-none z-10 md:pl-12 lg:pl-[10%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/founders001.png"
          alt="Er. S. Arwin and Er. A. Hariharan — Founders of Buildo"
          width={1800}
          height={1200}
          className="object-contain w-auto max-h-[50vh] md:max-h-[100vh]"
          priority
        />
      </motion.div>
      
      {/* Spacer to push quote to bottom */}
      <div className="flex-1"></div>

      {/* QUOTE AREA: Placed under the founders image. Pushed 25% down on mobile. */}
      <div className="w-full flex justify-center text-center px-8 sm:px-12 md:px-4 pb-28 md:pb-6 pt-[72vh] md:pt-8 relative z-20">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-brand-black font-medium italic leading-relaxed">
            &quot;Creating elegant spaces that combine creativity, functionality and quality.&quot;
          </p>
        </motion.div>
      </div>

    </section>
  );
}

