"use client";
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#education", label: "Education" },
    { href: "/#projects", label: "Projects" },
    { href: "/#achievement", label: "Achievements" },
    { href: "/#github", label: "Contrib Stats" },
    { href: "/#contact", label: "Contact" }
  ];

  return (
    <nav className="z-50 transition-all duration-300 bg-transparent py-4">
      <div className="container mx-auto px-2">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl relative">
            <button
              className="md:hidden absolute right-1.5 top-3 -translate-y-1/2 text-white my-4 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <ul className="hidden md:flex flex-wrap justify-center gap-1.5 rounded-full glass-panel px-3 py-1 backdrop-blur-md ring-2 ring-blue-600/20">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-200 
                              transition-all duration-300 hover:text-teal-400 rounded-full flex items-center group"
                  >
                    {link.label}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r 
                                    from-teal-500 to-teal-400 scale-x-0 group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {isMenuOpen && (
              <ul className="md:hidden absolute top-full right-0 mt-2 flex flex-col gap-1 rounded-2xl py-2 backdrop-blur-xl ring-2 ring-blue-200/10 z-40 px-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:text-teal-300 rounded-full hover:bg-white/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;