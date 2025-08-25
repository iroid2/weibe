export function Services() {
  const services = [
    {
      title: "House Cleaning",
      description:
        "Professional residential cleaning with experienced team and quality equipment",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&crop=center",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      title: "Office Cleaning",
      description:
        "Commercial cleaning services for offices and business spaces",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop&crop=center",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      title: "Deep Cleaning",
      description:
        "Intensive cleaning service for thorough sanitization and maintenance",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Move In Out Cleaning",
      description:
        "Specialized cleaning for property transitions and relocations",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="md:p-10">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider font-poppins">
                OUR SERVICES
              </span>
              <div className="ml-2 w-8 h-0.5 bg-yellow-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-roboto">
              Here's What We Can
              <br />
              Do for You
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-yellow-100 to-green-100 rounded-3xl p-4 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 95% 0%, 100% 15%, 100% 100%, 0% 100%)",
                    }}
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 font-roboto">
                    {service.title}
                  </h3>

                  {/* Learn More Button */}
                  <button className="w-full bg-white rounded-full py-3 px-6 text-gray-700 font-medium font-poppins hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group">
                    <span>Learn more</span>
                    <svg
                      className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
