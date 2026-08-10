"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Madurai",
    text: "Buildo transformed our vision into reality. Their attention to detail and transparent pricing made the entire construction process smooth and stress-free.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Senthil",
    location: "Thanjavur",
    text: "The interior design team is phenomenal. They maximized our space perfectly, blending modern aesthetics with traditional elements just as we requested.",
    rating: 5
  },
  {
    id: 3,
    name: "Karthik",
    location: "Thirunelveli",
    text: "Highly professional team. From the initial 3D visualization to the final handover, they were committed to quality. The Myanmar teak finish is exquisite.",
    rating: 5
  },
  {
    id: 4,
    name: "Toni & Guy Management",
    location: "Karaikal",
    text: "The modern interior design executed for our Karaikal branch perfectly captured the premium customer experience we wanted to offer. Buildo's team was exceptional.",
    rating: 5
  },
  {
    id: 5,
    name: "Mr. Sriram",
    location: "Madakulam, Madurai",
    text: "From conceptualization to the final build, the team ensured our residential project was completed flawlessly. Their build quality is truly commendable.",
    rating: 5
  },
  {
    id: 6,
    name: "Glamglow Salon",
    location: "Namakkal",
    text: "We wanted an inviting space for our new salon. Buildo delivered an incredible commercial interior that perfectly aligns with our brand identity. The detail is stunning.",
    rating: 5
  },
  {
    id: 7,
    name: "Mr. Aravind",
    location: "Ayapakkam, Chennai",
    text: "Building our dream villa in Chennai was a smooth experience thanks to Buildo. They managed the entire 1800 sq.ft construction efficiently, keeping us updated at every stage.",
    rating: 5
  },
  {
    id: 8,
    name: "Mr. Gopi",
    location: "Kolathur, Chennai",
    text: "Our villa project exceeded all expectations. The architectural finesse and material quality used by Buildo reflect their commitment to excellence. Highly recommended.",
    rating: 5
  },
  {
    id: 9,
    name: "Mr. Ameen",
    location: "Ramnad",
    text: "Choosing Buildo for our residential project in Ramnad was the best decision. Their structural expertise and on-time delivery without compromising aesthetics really stood out.",
    rating: 5
  },
  {
    id: 10,
    name: "Mr. Thatchina Moorthy",
    location: "Madurai",
    text: "Our premium residence project was handled with utmost professionalism. The architectural planning and flawless execution gave us exactly the luxurious home we envisioned.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-brand-black">Client Stories</h2>
        
        <div className="relative bg-brand-white/50 rounded-3xl p-8 md:p-12 shadow-xl border border-brand-black/5">
          <div className="flex justify-center space-x-1 mb-6 text-brand-orange">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
          
          <p className="text-2xl md:text-3xl text-brand-black/80 font-medium leading-snug mb-8 italic">
            &quot;{testimonials[current].text}&quot;
          </p>
          
          <div>
            <h4 className="text-xl font-bold text-brand-black">{testimonials[current].name}</h4>
            <p className="text-brand-orange font-semibold">{testimonials[current].location}</p>
          </div>

          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-orange hover:text-brand-black transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 bg-brand-black text-brand-white rounded-full hover:bg-brand-orange hover:text-brand-black transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-brand-orange' : 'bg-brand-black/20'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
