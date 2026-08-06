"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-20 lg:bottom-28 left-0 z-50 flex flex-col space-y-2">
      <motion.a
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        whileHover={{ width: 82, backgroundColor: "#e27a03ff" }}
        href="tel:+919080050005"
        className="bg-[#e39c4a] text-white w-[68px] h-12 rounded-r-2xl shadow-md flex items-center justify-center overflow-hidden origin-left will-change-auto lg:will-change-transform"
        aria-label="Call Us"
      >
        <Phone size={20} className="mr-1 shrink-0" />
      </motion.a>
      <motion.a
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.65 }}
        whileHover={{ width: 82, backgroundColor: "#db7c0fff" }}
        href="https://wa.me/919080050005"
        className="bg-[#e39c4a] text-white w-[68px] h-12 rounded-r-2xl shadow-md flex items-center justify-center overflow-hidden origin-left will-change-auto lg:will-change-transform"
        aria-label="WhatsApp Us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 shrink-0"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      </motion.a>
    </div>
  );
}
