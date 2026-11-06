import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    <header className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300">
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-ujmah-navy/10 py-3" 
          : "bg-white/90 backdrop-blur-md border-b border-ujmah-navy/5 py-3.5"
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between gap-4">
          
          {/* 1. Logo & Nom Épuré "UJMAH" à gauche (sans devise pour maximiser l'espace et l'élégance) */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <img 
              src="/logo-ujmahvf.png" 
              alt="UJMAH" 
              className="h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105" 
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
              }}
            />
            <span className="hidden sm:inline-block border-l border-ujmah-navy/15 pl-3 font-sans font-black text-xl tracking-tight text-ujmah-indigo">
              UJMAH
            </span>
          </a>

          {/* 2. Liens de navigation parfaitement CENTRÉS et à taille affinée */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-7 px-2">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="font-sans font-semibold text-[13px] text-ujmah-navy/75 hover:text-ujmah-indigo relative py-1 transition-colors duration-200 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ujmah-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* 3. Bouton d'Action à droite */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a 
              href="/don" 
              className="inline-flex items-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-5 py-2.5 rounded-full font-sans font-extrabold text-xs transition-all duration-300 shadow-md shadow-ujmah-orange/25 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Heart size={14} fill="currentColor" />
              Faire un don
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-ujmah-navy p-2 rounded-xl hover:bg-ujmah-gray focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[310px] bg-white shadow-2xl pt-20 px-8 z-[999] transition-transform duration-300 ease-in-out flex flex-col justify-between pb-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col gap-4">
            <div className="pb-4 border-b border-ujmah-navy/10 flex items-center gap-3">
              <img src="/logo-ujmahvf.png" alt="UJMAH" className="h-9 w-auto" />
              <span className="font-sans font-black text-2xl text-ujmah-indigo leading-none">UJMAH</span>
            </div>

            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-sans font-bold text-base text-ujmah-navy/80 hover:text-ujmah-indigo py-2 border-b border-ujmah-gray"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a 
            href="/don" 
            className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-orange text-white py-3.5 rounded-full font-sans font-bold text-sm shadow-md"
            onClick={() => setIsOpen(false)}
          >
            <Heart size={16} fill="currentColor" />
            Faire un don
          </a>
        </div>
      </nav>
    </header>
  );
}
