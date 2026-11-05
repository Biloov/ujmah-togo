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
    { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
    { label: "Nos Fondements", href: "/fondements" },
    { label: "Nos Actions", href: "/actions" },
    { label: "Orphelinat", href: "/orphelinat" },
    { label: "Galerie", href: "/galerie" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 shadow-md border-b border-ujmah-navy/5 py-3" 
        : "bg-white/90 backdrop-blur-md border-b border-white/60 py-4"
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
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="font-display font-medium text-xs xl:text-sm text-ujmah-navy/75 hover:text-ujmah-indigo border-b-2 border-transparent hover:border-ujmah-indigo pb-1 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="/don" 
            className="inline-flex items-center gap-2 bg-ujmah-orange text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs xl:text-sm transition-all duration-300 hover:bg-ujmah-orange-hover hover:shadow-lg hover:shadow-ujmah-orange/25 hover:-translate-y-0.5"
          >
            <Heart size={15} fill="currentColor" />
            Faire un don
          </a>
        </div>

        {/* Hamburger Mobile Menu */}
        <button 
          className="lg:hidden text-ujmah-navy p-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl pt-20 px-6 z-[999] transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="font-display font-semibold text-base text-ujmah-navy/80 hover:text-ujmah-indigo border-b border-ujmah-gray/40 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/don"
            className="inline-flex items-center justify-center gap-2 bg-ujmah-orange text-white px-6 py-3 rounded-full font-sans font-bold text-sm transition-colors hover:bg-ujmah-orange-hover mt-4 shadow-md shadow-ujmah-orange/25"
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
