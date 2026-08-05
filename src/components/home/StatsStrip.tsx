"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsStrip() {
  return (
    <section className="bg-brand-black text-brand-white py-16 border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-white/20">
          
          <div className="pt-8 md:pt-0">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-orange mb-2">
              <AnimatedCounter end={58} suffix="+" />
            </h2>
            <p className="text-brand-white/70 text-lg uppercase tracking-wider font-medium">Projects Completed</p>
          </div>
          
          <div className="pt-8 md:pt-0">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-orange mb-2">
              <AnimatedCounter end={14} suffix="+" />
            </h2>
            <p className="text-brand-white/70 text-lg uppercase tracking-wider font-medium">Ongoing Projects</p>
          </div>
          
          <div className="pt-8 md:pt-0">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-orange mb-2">
              2018
            </h2>
            <p className="text-brand-white/70 text-lg uppercase tracking-wider font-medium">Established</p>
          </div>

        </div>
      </div>
    </section>
  );
}
