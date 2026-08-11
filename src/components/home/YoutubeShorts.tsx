"use client";

import React from "react";
import { motion } from "framer-motion";

// You can replace these with your actual YouTube Shorts links
const shortsVideos = [
  "https://www.youtube.com/shorts/JWKHWRrp1-M",
  "https://youtube.com/shorts/OpiDCqmdHGo",
  "https://youtube.com/shorts/1HyemcT40P4",
  "https://youtube.com/shorts/TWRwgiNRYh0",
  "https://youtube.com/shorts/sLWWIwBW0ok"
 
];

// Helper to convert standard shorts/youtube links to embed links
const getEmbedUrl = (url: string) => {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtube.com/shorts/")) {
    videoId = url.split("youtube.com/shorts/")[1].split("?")[0];
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split("?")[0].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  }
  
  if (videoId) {
    // We add rel=0 to prevent showing unrelated videos, and controls=1 (default) for play/pause
    return `https://www.youtube.com/embed/${videoId}?rel=0&controls=1`;
  }
  return url; // fallback
};

export default function YoutubeShorts() {
  return (
    <section className="py-20 bg-brand-white text-brand-black border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Latest Shorts</h2>
          <p className="text-brand-black/60 max-w-2xl mx-auto text-lg">
            Get a quick glimpse into our premium designs and ongoing projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {shortsVideos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative w-full max-w-[320px] sm:w-[320px] aspect-[9/16] bg-brand-black/5 rounded-2xl overflow-hidden shadow-lg"
            >
              {video ? (
                  <iframe
                  src={getEmbedUrl(video)}
                  title={`YouTube Shorts ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-brand-black/40 p-6 text-center">
                  Add YouTube Short Link Here
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
