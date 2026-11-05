import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, MapPin } from 'lucide-react';

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
    <header className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300">
      {/* Top Banner Éditorial & Institutionnel */}
      <div className="bg-ujmah-navy text-white text-[11px] font-sans border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-ujmah-sun animate-pulse"></span>
              <strong>TOGO</strong> — Association Humanitaire Reconnue d'Utilité Publique
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">Fondée le 23 Janvier 2003 (23 ans d'actions)</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+22892673400" className="flex items-center gap-1.5 text-ujmah-sun hover:underline font-bold">
              <Phone size={12} />
              +228 92 67 34 00
            </a>
            <span className="text-white/40">•</span>
            <span className="font-mono text-[10px] text-white/60 tracking-wider">RÉCÉPISSÉ N° 0315/MATDCL</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-ujmah-navy/10 py-3" 
          : "bg-white/90 backdrop-blur-md border-b border-ujmah-navy/5 py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo & Signature */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo-ujmahvf.png" 
              alt="UJMAH Togo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
              }}
            />
            <div className="hidden xl:flex flex-col border-l border-ujmah-navy/15 pl-3">
              <span className="font-editorial font-bold text-sm tracking-tight text-ujmah-indigo leading-tight">UJMAH TOGO</span>
              <span className="font-sans text-[10px] text-ujmah-orange font-bold uppercase tracking-wider">Servir dans l'union</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="font-sans font-semibold text-xs xl:text-sm text-ujmah-navy/80 hover:text-ujmah-indigo relative py-1 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ujmah-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="/don" 
              className="inline-flex items-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-5 py-2.5 rounded-full font-sans font-extrabold text-xs xl:text-sm transition-all duration-300 shadow-md shadow-ujmah-orange/25 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Heart size={15} fill="currentColor" />
              Faire un don
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-ujmah-navy p-2 rounded-xl hover:bg-ujmah-gray focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[310px] bg-white shadow-2xl pt-20 px-6 z-[999] transition-transform duration-300 ease-in-out flex flex-col justify-between pb-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col gap-4">
            <div className="pb-4 border-b border-ujmah-navy/10">
              <span className="font-editorial font-bold text-lg text-ujmah-indigo block">UJMAH Togo</span>
              <span className="font-sans text-xs text-ujmah-navy/60">Servir l'humanité dans l'union</span>
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

          <div className="flex flex-col gap-3">
            <a 
              href="/don"
              className="inline-flex items-center justify-center gap-2 bg-ujmah-orange text-white px-6 py-3.5 rounded-full font-sans font-bold text-sm shadow-lg shadow-ujmah-orange/25"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={18} fill="currentColor" />
              Faire un don
            </a>
            <div className="text-center font-sans text-[11px] text-ujmah-navy/50">
              Siège : Agoè-Adjougba, Lomé
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
