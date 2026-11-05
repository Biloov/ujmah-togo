import React from 'react';
import { MapPin, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ujmah-navy text-white border-t-2 border-ujmah-sun/30 pt-16 pb-12 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Colonne 1 : Présentation & Logo */}
          <div className="flex flex-col items-start">
            <div className="p-3 bg-white rounded-2xl shadow-md inline-block mb-4">
              <img 
                src="/logo-ujmahvf.png" 
                alt="UJMAH Togo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
                }}
              />
            </div>
            <p className="font-display font-bold text-sm text-ujmah-sun tracking-wide mb-3">
              « Servir l'humanité dans l'union »
            </p>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Association humanitaire et éducative togolaise fondée le 23 janvier 2003, œuvrant pour la dignité des personnes vulnérables et la formation des jeunes.
            </p>
          </div>

          {/* Colonne 2 : Navigation Institutionnelle */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-ujmah-sun mb-4">
              Institutionnel
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs">
              <a href="/qui-sommes-nous" className="text-white/70 hover:text-white transition-colors">Qui sommes-nous ?</a>
              <a href="/fondements" className="text-white/70 hover:text-white transition-colors">Nos Fondements Religieux</a>
              <a href="/actions" className="text-white/70 hover:text-white transition-colors">Nos Actions sur le Terrain</a>
              <a href="/orphelinat" className="text-white/70 hover:text-white transition-colors">Orphelinat « MES ENFANTS »</a>
              <a href="/galerie" className="text-white/70 hover:text-white transition-colors">Galerie & Médiathèque</a>
            </div>
          </div>

          {/* Colonne 3 : Programmes Phares */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-ujmah-sun mb-4">
              Programmes
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-xs">
              <span className="text-white/70">Orphelinat de Yelivo (40 enfants)</span>
              <span className="text-white/70">Concours de Coran (CRSC)</span>
              <span className="text-white/70">Séminaire SEFIMA</span>
              <span className="text-white/70">Distribution de Kits Scolaires</span>
              <span className="text-white/70">Solidarité Tabaski & Ramadan</span>
              <span className="text-white/70">Forages d'eau potable</span>
            </div>
          </div>

          {/* Colonne 4 : Coordonnées Certifiées */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-ujmah-sun mb-4">
              Siège & Contact
            </h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-ujmah-orange flex-shrink-0 mt-0.5" />
                <span>Agoè-Adjougba, à 100m de BOXBERG, Lomé – Togo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-ujmah-orange flex-shrink-0" />
                <span className="font-bold">+228 92 67 34 00</span>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="/don" 
                className="inline-flex items-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md transition-all"
              >
                <Heart size={14} fill="currentColor" />
                Faire un don en ligne
              </a>
            </div>
          </div>

        </div>

        {/* Ligne Séparatrice */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-[11px] text-white/50">
            © {currentYear} UJMAH Togo — Union des Jeunes Musulmans pour l'Action Humanitaire.
          </p>
          <div className="font-sans text-[10px] text-white/40 tracking-wider">
            Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA
          </div>
        </div>

      </div>
    </footer>
  );
}
