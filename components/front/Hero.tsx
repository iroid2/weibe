import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className=" py-4 md:px-10 md:py-10 md:mt-[2rem]">
      <section
        className="pt-12 md:pt-20 mt-4 rounded-lg md:rounded-[2.4rem] overflow-hidden pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 relative min-h-[70vh] md:min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cleaning-lady-modern-kitchen.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center min-h-[60vh] md:min-h-[80vh]">
            {/* Left Content */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Sparkly Residential and Commercial Cleaning Services
              </h1>

              <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Stop wasting your precious free time cleaning, relax while we
                make your home sparkle!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg w-full sm:w-auto">
                  Free Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-lg font-medium bg-transparent w-full sm:w-auto"
                >
                  Our Services
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-col xs:flex-row sm:flex-row gap-4 md:gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    Professional
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    Friendly
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    Convenient
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Google Reviews Badge */}
            <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-900 text-base md:text-lg">
                    4.8
                  </span>
                  <span className="text-blue-600 font-medium text-base md:text-lg">
                    G
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  480 Reviews
                </p>

                {/* Small profile images */}
                <div className="flex -space-x-1.5 md:-space-x-2 mt-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
