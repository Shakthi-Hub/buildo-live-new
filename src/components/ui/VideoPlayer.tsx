"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
}

export default function VideoPlayer({ videoUrl, posterUrl }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden group shadow-2xl bg-brand-black/5"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={togglePlay}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        className="w-full h-auto object-cover aspect-video"
        loop
        playsInline
        onEnded={() => setIsPlaying(false)}
      />

      {/* Overlay & Controls */}
      <AnimatePresence>
        {(!isPlaying || isHovering) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 flex items-center justify-center transition-colors duration-500 ${
              isPlaying ? "bg-black/20" : "bg-black/40"
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-20 h-20 flex items-center justify-center bg-brand-orange/90 backdrop-blur-md rounded-full shadow-xl text-brand-black border-2 border-transparent hover:border-white/50 transition-all"
            >
              {isPlaying ? (
                <Pause fill="currentColor" size={32} />
              ) : (
                <Play fill="currentColor" size={32} className="ml-2" />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
