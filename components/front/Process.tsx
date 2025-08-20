import { Calendar, Sparkles, Armchair } from "lucide-react";

export default function Process() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            HOW IT WORKS ✨
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Quick and Easy
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-green-200 rounded-full flex items-center justify-center relative">
                <Calendar className="w-12 h-12 text-green-600" />
                {/* Decorative leaves */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
                <div className="absolute -top-1 -right-4 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-16 transform -translate-y-1/2">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                  <path
                    d="M2 10H58M58 10L48 2M58 10L48 18"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Free Quote
            </h3>
            <p className="text-gray-600 max-w-xs">
              Tell us about your home and choose the date you want.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-green-200 rounded-full flex items-center justify-center relative">
                <Sparkles className="w-12 h-12 text-green-600" />
                {/* Decorative leaves */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
                <div className="absolute -top-1 -right-4 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-16 transform -translate-y-1/2">
                <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                  <path
                    d="M2 10H58M58 10L48 2M58 10L48 18"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Clean</h3>
            <p className="text-gray-600 max-w-xs">
              Our seasoned team of full-time cleaners will transform your home.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-green-200 rounded-full flex items-center justify-center relative">
                <Armchair className="w-12 h-12 text-green-600" />
                {/* Decorative leaves */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
                <div className="absolute -top-1 -right-4 w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Relax</h3>
            <p className="text-gray-600 max-w-xs">
              Sit back and enjoy how amazing your home or business looks now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
