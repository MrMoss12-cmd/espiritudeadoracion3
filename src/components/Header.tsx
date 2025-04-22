"use client"

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Remove this line
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20, // Start slightly above
      transition: { duration: 0.2, ease: "easeOut" }
    },
    visible: {
      opacity: 1,
      y: 0, // Slide down to original position
      transition: { duration: 0.3, ease: "easeIn" }
    },
    exit: {
      opacity: 0,
      y: -20, // Slide back up
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };


  return (
    <header className="bg-transparent text-white fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-xl font-bold">LOGO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-sm font-medium hover:text-gray-300">About Us</Link>
            <Link href="/academics" className="text-sm font-medium hover:text-gray-300">Academics</Link>
            <Link href="/student-life" className="text-sm font-medium hover:text-gray-300">Student Life</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-300">Contact Us</Link>
            <Link href="/apply" className="bg-red-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-red-700">
              Ver en Vivo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Wrap with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            // Convert nav to motion.nav and apply variants
            <motion.nav
              className="md:hidden pb-4 pt-2 bg-black/90 absolute left-0 right-0 top-full shadow-lg" // Added positioning and shadow
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit" // Apply exit animation
            >
              <Link href="/about" className="block py-2 px-4 text-sm hover:text-gray-300">About Us</Link>
              <Link href="/academics" className="block py-2 px-4 text-sm hover:text-gray-300">Academics</Link>
              <Link href="/student-life" className="block py-2 px-4 text-sm hover:text-gray-300">Student Life</Link>
              <Link href="/contact" className="block py-2 px-4 text-sm hover:text-gray-300">Contact Us</Link>
              <div className="px-4 pt-2">
                <Link href="/apply" className="inline-block bg-red-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-red-700">
                  Ver en Vivo
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;