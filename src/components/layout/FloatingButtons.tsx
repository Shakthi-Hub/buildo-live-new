"use client";

import { Phone, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function FloatingButtons() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only on client side to avoid hydration mismatch
    audioRef.current = new Audio('/bg-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6; // Set volume to 60%
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio playback failed. Please check if the file exists and restart your dev server:", e);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-20 lg:bottom-28 left-0 z-50 flex flex-col space-y-2">
      <motion.a
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        whileHover={{ width: 82, backgroundColor: "#e27a03ff" }}
        href="tel:+919500417217"
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
        href="https://wa.me/919500417217"
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
      <motion.a
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.72 }}
        whileHover={{ width: 82, backgroundColor: "#db7c0fff" }}
        href="https://instagram.com/buildo.in"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#e39c4a] text-white w-[68px] h-12 rounded-r-2xl shadow-md flex items-center justify-center overflow-hidden origin-left will-change-auto lg:will-change-transform"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 shrink-0"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </motion.a>
      <motion.button
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
        whileHover={{ width: 82, backgroundColor: "#db7c0fff" }}
        onClick={togglePlay}
        className="bg-[#e39c4a] text-white w-[68px] h-12 rounded-r-2xl shadow-md flex items-center justify-center overflow-hidden origin-left will-change-auto lg:will-change-transform cursor-pointer"
        aria-label="Play Music"
      >
        {isPlaying ? (
          <Pause size={20} className="mr-1 shrink-0" />
        ) : (
          <Play size={20} className="mr-0.5 shrink-0" />
        )}
      </motion.button>
    </div>
  );
}
