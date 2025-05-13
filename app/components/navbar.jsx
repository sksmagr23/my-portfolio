"use client";
import Link from 'next/link';

function Navbar() {

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#education", label: "Education" },
    { href: "/#projects", label: "Projects" },
    { href: "/#achievement", label: "Achievements"}
  ];

  return (
    <nav className={`z-50 transition-all duration-300 bg-transparent py-4 hidden md:flex`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className=" items-center">
            <ul className="flex space-x-1 rounded-full bg-[#040521]/40 px-3 py-1.5 backdrop-blur-md ring-2 ring-blue-200/10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative block px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:text-[#ffd60a] rounded-full hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;