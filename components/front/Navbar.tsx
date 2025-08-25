"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/log.png"
              width={100}
              height={100}
              alt="Weib Cleaning Company"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Home</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Service areas</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Contact us
            </span>
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Blog
            </span>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            <div className="hidden md:flex items-center space-x-2 text-gray-700">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-900" />
              </div>
              <Link href="tel:0754185102" className="font-medium">
                +256 754 185102
              </Link>
            </div>

            {/* Search Icon */}
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>

            {/* Free Quote Button */}
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-2 rounded-full">
              Free Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer py-2">
                <span>Home</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer py-2">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer py-2">
                <span>Service areas</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer py-2">
                <span>About us</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer block py-2">
                Contact us
              </span>
              <span className="text-gray-700 hover:text-gray-900 cursor-pointer block py-2">
                Blog
              </span>

              {/* Phone Number in Mobile */}
              <div className="flex items-center space-x-2 text-gray-700 py-2 md:hidden">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <span className="font-medium">+ 1 (180) 567-8990</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
