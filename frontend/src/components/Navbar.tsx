import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos Actions", href: "/actions" },
    { label: "Orphelinat", href: "/orphelinat" },
    { label: "Galerie", href: "/galerie" },
    { label: "Valeurs", href: "/valeurs" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ${
      isScrolled 
        ? "bg-white/95 shadow-md border-b border-ujmah-navy/5 py-3" 
        : "bg-white/80 backdrop-blur-md border-b border-white/40 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo-ujmahvf.png" 
            alt="UJMAH" 
            className="h-12 w-auto transition-transform duration-300 hover:scale-105" 
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
            }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="font-display font-medium text-sm text-ujmah-navy/70 hover:text-ujmah-navy border-b-2 border-transparent hover:border-ujmah-navy pb-1 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="/don" 
            className="inline-flex items-center gap-2 bg-ujmah-gold text-white px-6 py-2.5 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:bg-ujmah-navy hover:shadow-lg hover:shadow-ujmah-navy/20 hover:-translate-y-0.5"
          >
            <Heart size={16} fill="currentColor" />
            Faire un don
          </a>
        </div>

        {/* Hamburger Mobile Menu */}
        <button 
          className="md:hidden text-ujmah-navy p-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl pt-20 px-6 z-[999] transition-transform duration-400 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="font-display font-semibold text-lg text-ujmah-navy/80 hover:text-ujmah-navy border-b border-ujmah-gray/20 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/don"
            className="inline-flex items-center justify-center gap-2 bg-ujmah-gold text-white px-6 py-3 rounded-full font-sans font-semibold text-base transition-colors hover:bg-ujmah-navy mt-4"
            onClick={() => setIsOpen(false)}
          >
            <Heart size={18} fill="currentColor" />
            Faire un don
          </a>
        </div>
      </div>
    </nav>
  );
}
