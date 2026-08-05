"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingTeaser() {
  return (
    <section className="py-24 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h2>
        <p className="text-brand-white/70 max-w-2xl mx-auto mb-16 text-lg">
          No hidden costs. Choose a package that fits your vision and budget. All packages include end-to-end project management.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic */}
          <div className="bg-brand-white/5 border border-brand-white/10 p-8 rounded-2xl text-left hover:border-brand-orange/50 transition-colors">
            <h3 className="text-2xl font-semibold mb-2">Basic</h3>
            <div className="text-4xl font-bold text-brand-orange mb-6">
              ₹2400 <span className="text-sm text-brand-white/60 font-normal">/ sqft</span>
            </div>
            <ul className="space-y-4 mb-8 text-brand-white/80">
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Floor Plan & Elevation</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Basic structural drawing</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Hand Mould (red) Bricks</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Ghana Teak Main Door</li>
            </ul>
          </div>

          {/* Standard */}
          <div className="bg-gradient-to-b from-brand-orange/20 to-brand-white/5 border border-brand-orange p-8 rounded-2xl text-left transform md:-translate-y-4 shadow-2xl shadow-brand-orange/10 relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-orange text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-semibold mb-2">Standard</h3>
            <div className="text-4xl font-bold text-brand-orange mb-6">
              ₹2600 <span className="text-sm text-brand-white/60 font-normal">/ sqft</span>
            </div>
            <ul className="space-y-4 mb-8 text-brand-white/80">
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Floor Plan & Elevation</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Footing/Column/Beam drawings</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Wirecut (red) Bricks</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Nigeria Teak Main Door</li>
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-brand-white/5 border border-brand-white/10 p-8 rounded-2xl text-left hover:border-brand-orange/50 transition-colors">
            <h3 className="text-2xl font-semibold mb-2">Premium</h3>
            <div className="text-4xl font-bold text-brand-orange mb-6">
              ₹2800 <span className="text-sm text-brand-white/60 font-normal">/ sqft</span>
            </div>
            <ul className="space-y-4 mb-8 text-brand-white/80">
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> 3D Visualization, Electrical & Plumbing</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Premium emulsion / Apex Painting</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> 4/2 or 5.3/2.9 vitrified Tiles</li>
              <li className="flex items-start"><Check className="text-brand-orange mr-3 shrink-0" size={20}/> Myanmar Teak Main Door</li>
            </ul>
          </div>
        </div>

        <Link href="/pricing" className="inline-block bg-brand-orange text-brand-black font-semibold px-8 py-4 rounded-full hover:bg-orange-400 transition-colors">
          See Full Pricing Details
        </Link>
      </div>
    </section>
  );
}
