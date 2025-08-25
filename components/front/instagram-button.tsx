"use client";

import { Instagram } from "lucide-react";

export function InstagramButton() {
  const instagramHandle = "@weibecleaning";

  const handleInstagramClick = () => {
    const url = `https://www.instagram.com/${instagramHandle}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-42 right-6 z-50 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Follow us on Instagram"
      style={{ bottom: "10.5rem" }}
    >
      <div className="relative">
        <Instagram className="h-6 w-6" />

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-pink-400 rounded-full opacity-75 group-hover:opacity-100 animate-ping"></div>
        <div className="absolute inset-0 bg-pink-300 rounded-full opacity-50 group-hover:opacity-75 animate-ping animation-delay-75"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Follow us on Instagram
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </button>
  );
}
