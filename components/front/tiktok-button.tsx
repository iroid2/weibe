"use client";

const TikTokIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export function TikTokButton() {
  const tiktokHandle = "@weibecleaning";

  const handleTikTokClick = () => {
    const url = `https://www.tiktok.com/${tiktokHandle}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleTikTokClick}
      className="fixed bottom-24 right-6 z-50 bg-black hover:bg-gray-800 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Follow us on TikTok"
    >
      <div className="relative">
        <TikTokIcon />

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gray-700 rounded-full opacity-75 group-hover:opacity-100 animate-ping"></div>
        <div className="absolute inset-0 bg-gray-600 rounded-full opacity-50 group-hover:opacity-75 animate-ping animation-delay-75"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Follow us on TikTok
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </button>
  );
}
