"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamStrip() {
  return (
    <section className="py-20 bg-brand-black text-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Founders Photo */}
          <motion.div
            className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <Image
                src="/founders001.png"
                alt="Er. S. Arwin (Founder) and Er. A. Hariharan (Co-Founder) — Buildo"
                width={700}
                height={700}
                className="w-full h-auto object-contain rounded-2xl bg-[#f0ede8]"
              />
              {/* Name overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black/80 via-brand-black/30 to-transparent rounded-b-2xl p-6">
                <div className="flex justify-around">
                  <div className="text-center">
                    <p className="font-bold text-lg text-brand-white">S. Arwin</p>
                    <p className="text-brand-orange font-medium text-sm uppercase tracking-widest">Founder</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-brand-white">A. Hariharan</p>
                    <p className="text-brand-orange font-medium text-sm uppercase tracking-widest">Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-white leading-tight">
              The Minds Behind Buildo
            </h2>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-6">
              Founded in 2018, Buildo is the vision of <strong className="text-brand-white">S. Arwin</strong> and <strong className="text-brand-white">A. Hariharan</strong>. Together, they have transformed the architectural landscape in Madurai and across Tamil Nadu, bringing 58+ dream homes to life with uncompromising quality.
            </p>
            <p className="text-brand-white/70 text-lg leading-relaxed mb-8">
              Recognizing the stress homeowners face during construction, they integrated architectural design, interior detailing, and end-to-end execution under one roof — making the journey from first sketch to final handover seamless.
            </p>
            <Link href="/about" className="inline-block px-8 py-3 bg-brand-orange text-brand-black font-semibold rounded-full hover:bg-orange-400 transition-colors">
              Meet the Founders
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
