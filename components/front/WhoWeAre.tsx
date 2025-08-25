import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhoWeAre() {
  return (
    <div className="md:p-10">
      <section className="py-16 lg:py-24 rounded-3xl bg-[#5b5b5b17] bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
        {/* Green accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-500"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div className="space-y-8">
              {/* Section Label */}
              <div className="flex items-center gap-3">
                <span className="font-poppins text-sm font-medium text-gray-600 uppercase tracking-wider">
                  WHO WE ARE
                </span>
                <div className="h-0.5 w-12 bg-yellow-400"></div>
              </div>

              {/* Main Heading */}
              <h2 className="font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                We Are the Best Option for a Sparkling Home
              </h2>

              {/* Description */}
              <p className="font-poppins text-gray-600 text-lg leading-relaxed">
                At Weibe Cleaning Services, our mission is to provide the most
                convenient platform for connecting you with exceptional,
                professional cleaners who deliver outstanding results.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-poppins text-gray-700 text-lg">
                    We always keep you up to date on your cleaning
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-poppins text-gray-700 text-lg">
                    The cleaners treat your home like their own home
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-poppins font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-cleaning-team-working-together-in-mod.png"
                  alt="Professional cleaning team working together in modern home"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
