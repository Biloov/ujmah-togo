
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ujmah-gray border-t border-ujmah-navy/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/logo-ujmahvf.png" 
            alt="UJMAH" 
            className="h-16 w-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
            }}
          />
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://facebook.com/ujmahofficiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy hover:bg-ujmah-navy hover:text-white flex items-center justify-center transition-all duration-300"
            title="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a 
            href="https://instagram.com/ujmahofficiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy hover:bg-ujmah-navy hover:text-white flex items-center justify-center transition-all duration-300"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="https://youtube.com/@ujmah.officiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy hover:bg-ujmah-navy hover:text-white flex items-center justify-center transition-all duration-300"
            title="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
          <a 
            href="https://tiktok.com/@ujmahofficiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy hover:bg-ujmah-navy hover:text-white flex items-center justify-content-center justify-center transition-all duration-300"
            title="TikTok"
          >
            <span className="font-sans font-bold text-sm">🎵</span>
          </a>
        </div>

        {/* Footer Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
          <a href="/" className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/60 hover:text-ujmah-navy font-semibold transition-colors">Accueil</a>
          <a href="/actions" className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/60 hover:text-ujmah-navy font-semibold transition-colors">Nos Actions</a>
          <a href="/orphelinat" className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/60 hover:text-ujmah-navy font-semibold transition-colors">Orphelinat</a>
          <a href="/galerie" className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/60 hover:text-ujmah-navy font-semibold transition-colors">Galerie</a>
          <a href="/valeurs" className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/60 hover:text-ujmah-navy font-semibold transition-colors">Valeurs</a>
          <a href="/contact" className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/60 hover:text-ujmah-navy font-semibold transition-colors">Contact</a>
        </div>

        {/* Copy Text */}
        <p className="font-sans text-xs text-ujmah-navy/40 uppercase tracking-widest font-light">
          © {currentYear} UJMAH — Servir l'humanité dans l'union
        </p>
      </div>
    </footer>
  );
}
