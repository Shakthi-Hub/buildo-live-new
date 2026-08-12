"use client";

import { motion } from "framer-motion";

const regionData = [
  {
    region: "Madurai",
    locations: [
      "Kadachanendal", "Uchaparamedu", "Pudur", "Aathikulam", "Viraganoor", 
      "Kalavasal", "Madakulam", "Karupaiyurani", "Appanthirupathi", "Thirupalai", 
      "Aanaiyur", "Thirumangalam", "Othakadai", "Paravai", "Iyerbangalow", 
      "Chinthamani", "Avaniyapuram", "Perungudi", "Uthangudi", "Narasingam", "Bibi Kulam"
    ]
  },
  {
    region: "Chennai",
    locations: ["Ayyapakkam", "Kolathur", "Porur", "Annanagar", "Poththeri", "Maraimalai Nagar"]
  },
  {
    region: "Coimbatore",
    locations: ["Vadavalli", "Race course"]
  },
  {
    region: "Salem",
    locations: ["Thoppur", "Chinnathirupathi"]
  },
  {
    region: "Thoothukudi",
    locations: ["Udankudi", "Aathur"]
  },
  {
    region: "Virudhunagar",
    locations: ["Kariyappatti", "Aaviyur"]
  },
  {
    region: "Thiruvallur",
    locations: ["Thiruthani"]
  },
  {
    region: "Karaikal",
    locations: ["Thalatheru"]
  },
  {
    region: "Thirunelveli",
    locations: ["SBI Colony"]
  },
  {
    region: "Tanjavur",
    locations: ["Palliakragaram"]
  },
  {
    region: "Kumbakonam",
    locations: ["Kumbakonam"]
  },
  {
    region: "Arupukottai",
    locations: ["Telephone road"]
  },
  {
    region: "Namakkal",
    locations: ["Paramathivelure"]
  },
  {
    region: "Ramanathapuram",
    locations: ["Panaikulam"]
  }
];

export default function ActiveLocations() {
  return (
    <section className="py-24 bg-brand-black text-brand-white overflow-hidden relative border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
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

        <div className="max-w-6xl mx-auto space-y-12">
          {regionData.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-8 items-start pb-10 border-b border-brand-white/10 last:border-0 last:pb-0"
            >
              <div className="w-full md:w-1/4 shrink-0">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-orange mb-2">{group.region}</h3>
              </div>
              <div className="w-full md:w-3/4 flex flex-wrap gap-2 md:gap-3">
                {group.locations.map((loc, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-brand-white/10 bg-brand-white/5 hover:bg-brand-orange/20 hover:border-brand-orange/40 hover:text-brand-white transition-all duration-300 backdrop-blur-sm cursor-default"
                  >
                    <span className="text-sm md:text-base font-medium tracking-wide">
                      {loc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
