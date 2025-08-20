import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="md:px-10 md:py-10  ">
      <section
        className="pt-20 rounded-[]  overflow-hidden pb-12 px-10 sm:px-6 lg:px-8 relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/cleaning-lady-modern-kitchen.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Sparkly Residential and Commercial Cleaning Services
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stop wasting your precious free time cleaning, relax while we
                make your home sparkle!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-full text-lg">
                  Free Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 rounded-full text-lg font-medium bg-transparent"
                >
                  Our Services
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Professional
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Convenient</span>
                </div>
              </div>
            </div>

            {/* Right Content - Google Reviews Badge */}
            <div className="relative lg:flex lg:justify-end">
              <div className="bg-white rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-900">4.8</span>
                  <span className="text-blue-600 font-medium">G</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">480 Reviews</p>

                {/* Small profile images */}
                <div className="flex -space-x-2 mt-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
