import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-green-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          {/* Left Side - Heading and CTA */}
          <div className="flex-1">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-roboto leading-tight">
                Our Goal is to Wow
                <br />
                You With Every Clean
              </h2>
              {/* Decorative leaves */}
              <svg
                className="absolute -top-2 right-20 w-8 h-8 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 14 17 8z" />
              </svg>
              <svg
                className="absolute top-8 right-32 w-6 h-6 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 14 17 8z" />
              </svg>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors font-poppins">
              Get a Free Quote
            </button>
          </div>

          {/* Right Side - Newsletter */}
          <div className="flex-1 max-w-md">
            <h3 className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4 font-poppins">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter our email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 font-poppins"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors font-poppins">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 font-roboto">
              SERVICES
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-poppins">
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  House cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Deep cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Office cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Move in out cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Apartment cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Post construction cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Airbnb cleaning
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Recurring cleaning
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 font-roboto">
              CONTACT INFO
            </h4>
            <div className="space-y-4 text-sm font-poppins">
              <p className="text-gray-600">
                Kireka, Namugongo Road
                <br />
                Wakiso District, Uganda
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">
                  +256 754 185102
                </span>
              </div>
              <p className="text-gray-600 underline">info@weibecleaning.com</p>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 font-roboto">
              WORKING HOURS
            </h4>
            <div className="space-y-2 text-sm font-poppins">
              <div className="flex justify-between">
                <span className="text-gray-600">Mon - Fri:</span>
                <span className="text-gray-900">9:00am - 8:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="text-gray-900">10:00am - 8:00pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="text-gray-900">10:00am - 4:00pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-200 gap-4">
          <p className="text-gray-500 text-sm font-poppins">
            © 2025 Weibe Cleaning Services. All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-green-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-600 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
