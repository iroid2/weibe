"use client";

import { Facebook } from "lucide-react";

export function FacebookButton() {
  const facebookPage = "weibecleaningservices";

  const handleFacebookClick = () => {
    const url = `https://m.facebook.com/p/Weibe-Cleaning-Services-61579208743498/&ved=2ahUKEwiNt-q3rqaPAxUz2AIHHQ8gBFkQFnoECCMQAQ&usg=AOvVaw3er084MvIA3UYfjSs7s5yd`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleFacebookClick}
      className="fixed bottom-60 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Follow us on Facebook"
      style={{ bottom: "15rem" }}
    >
      <div className="relative">
        <Facebook className="h-6 w-6" />

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-blue-400 rounded-full opacity-75 group-hover:opacity-100 animate-ping"></div>
        <div className="absolute inset-0 bg-blue-300 rounded-full opacity-50 group-hover:opacity-75 animate-ping animation-delay-75"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Follow us on Facebook
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </button>
  );
}
