import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ujmah-navy text-white border-t-2 border-ujmah-sun/30 py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo dans son encart lumineux blanc */}
        <div className="mb-6 p-3 bg-white rounded-2xl shadow-md inline-block">
          <img 
            src="/logo-ujmahvf.png" 
            alt="UJMAH Togo" 
            className="h-14 w-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
            }}
          />
        </div>

        <p className="font-display font-medium text-sm text-ujmah-sun tracking-wide mb-6">
          « Servir l'humanité dans l'union »
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href="https://facebook.com/ujmahofficiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-ujmah-orange hover:scale-105 flex items-center justify-center transition-all duration-300"
            title="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a 
            href="https://instagram.com/ujmahofficiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-ujmah-orange hover:scale-105 flex items-center justify-center transition-all duration-300"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="https://youtube.com/@ujmah.officiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-ujmah-orange hover:scale-105 flex items-center justify-center transition-all duration-300"
            title="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
          <a 
            href="https://tiktok.com/@ujmahofficiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-ujmah-orange hover:scale-105 flex items-center justify-center transition-all duration-300"
            title="TikTok"
          >
            <span className="font-sans font-bold text-sm">🎵</span>
          </a>
        </div>

        {/* Footer Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          <a href="/" className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-ujmah-sun font-semibold transition-colors">Accueil</a>
          <a href="/actions" className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-ujmah-sun font-semibold transition-colors">Nos Actions</a>
          <a href="/orphelinat" className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-ujmah-sun font-semibold transition-colors">Orphelinat</a>
          <a href="/galerie" className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-ujmah-sun font-semibold transition-colors">Galerie</a>
          <a href="/valeurs" className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-ujmah-sun font-semibold transition-colors">Valeurs</a>
          <a href="/contact" className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-ujmah-sun font-semibold transition-colors">Contact</a>
          <a href="/don" className="font-sans text-xs uppercase tracking-widest text-ujmah-orange hover:text-white font-bold transition-colors">Faire un don</a>
        </div>

        {/* Copy Text */}
        <p className="font-sans text-xs text-white/40 uppercase tracking-widest font-light">
          © {currentYear} UJMAH Togo — Union des Jeunes Musulmans pour l'Action Humanitaire
        </p>
      </div>
    </footer>
  );
}
