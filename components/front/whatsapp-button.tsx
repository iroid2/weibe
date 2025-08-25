"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+256754185102";
  const message =
    "Hello! I would like to inquire about your cleaning services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="h-6 w-6" />

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full opacity-75 group-hover:opacity-100 animate-ping"></div>
        <div className="absolute inset-0 bg-green-300 rounded-full opacity-50 group-hover:opacity-75 animate-ping animation-delay-75"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </button>
  );
}
