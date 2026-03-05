"use client";

import { PERSONAL_INFO } from "../lib/constants/index";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-bold text-white">
          {PERSONAL_INFO.name.split(' ').map(name => name[0]).join('')}
        </h1>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              item.active 
                ? "bg-purple-500 text-white font-medium" 
                : "text-white hover:text-purple-400"
            }`}
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
