"use client";

// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-background shadow-md">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="#about" scroll={false} className="text-foreground hover:text-primary transition-colors duration-300">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link href="#projects" scroll={false} className="text-foreground hover:text-primary transition-colors duration-300">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false} className="text-foreground hover:text-primary transition-colors duration-300">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {!isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col items-center space-y-4 py-2">
            <li>
              <Link href="#about" scroll={false} className="text-white hover:text-yellow-200 transition-colors duration-300">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link href="#projects" scroll={false} className="text-white hover:text-yellow-200 transition-colors duration-300">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false} className="text-white hover:text-yellow-200 transition-colors duration-300">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
