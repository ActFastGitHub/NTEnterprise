// components/Navbar.tsx

"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white text-2xl font-bold tracking-wide"
            >
              NT Enterprise
            </button>
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection("home")} className="text-gray-300 hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-white transition">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-white transition">
              About Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-white transition">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-gray-300 hover:text-white">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-gray-300 hover:text-white">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-gray-300 hover:text-white">
              About Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-gray-300 hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
