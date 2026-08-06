"use client";

import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a
        href="tel:+919080050005"
        className="bg-brand-black text-brand-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center border border-brand-white/10"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/919080050005"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      </a>
    </div>
  );
}
