import { Button } from "@/components/ui/button";

export function BlogSection() {
  return (
    <div className="p-10">
      <section className="py-16  px-4 bg-[#5b5b5b17] rounded-3xl">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider font-poppins">
                FROM OUR BLOG
              </span>
              <div className="w-8 h-0.5 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-roboto">
              Cleaning Tips From Pros
            </h2>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center"
                  alt="Professional cleaning sofa with vacuum"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium uppercase tracking-wider rounded-full mb-3 font-poppins">
                  ORGANIZING
                </span>
                <h3 className="text-xl font-bold text-gray-900 font-roboto leading-tight">
                  The Deep Cleaning and Organizing
                </h3>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop&crop=center"
                  alt="Eco-friendly cleaning products arranged in circles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium uppercase tracking-wider rounded-full mb-3 font-poppins">
                  CLEANING
                </span>
                <h3 className="text-xl font-bold text-gray-900 font-roboto leading-tight">
                  Eco Friendly Products for Cleaning
                </h3>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
                  alt="Family moving with boxes and cleaning supplies"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium uppercase tracking-wider rounded-full mb-3 font-poppins">
                  TIPS
                </span>
                <h3 className="text-xl font-bold text-gray-900 font-roboto leading-tight">
                  House Cleaning Services Before Moving in
                </h3>
              </div>
            </article>
          </div>

          {/* More Tips Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="px-8 py-3 border-2 border-green-500 text-green-700 hover:bg-green-50 rounded-full font-medium font-poppins bg-transparent"
            >
              More Tips
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
