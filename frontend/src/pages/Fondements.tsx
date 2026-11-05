import React from 'react';
import { BookOpen, Sparkles, HeartHandshake, ShieldCheck, Check, Feather } from 'lucide-react';

export default function Fondements() {
  const foundations = [
    {
      title: "1. Le Noble Coran",
      desc: "Parole incréée d'Allah, guidée suprême pour l'humanité, source immuable de justice, de compassion et de droiture morale.",
      verse: "« Et faites le bien. Car Allah aime assurément les bienfaisants. »",
      ref: "Sourate Al-Baqarah (2:195)"
    },
    {
      title: "2. La Sunnah Authentique",
      desc: "La tradition vivante, les paroles et les actes authentiquement rapportés du Prophète Muhammad ﷺ, modèle parfait d'humanité et de miséricorde.",
      verse: "« Les hommes les plus aimés d'Allah sont ceux qui sont les plus utiles aux autres. »",
      ref: "Hadith authentique rapporté par At-Tabarani"
    },
    {
      title: "3. La Compréhension des Salaf As-Salih",
      desc: "L'attachement à l'interprétation saine des Pieux Prédécesseurs (les Compagnons et leurs illustres disciples), garantissant la pureté du dogme contre tout extrémisme ou dérive.",
      verse: "« Attachez-vous à ma Sunnah et à la voie des califes bien guidés après moi. »",
      ref: "Hadith rapporté par Abou Daoud et At-Tirmidhi"
    }
  ];

  const pillarsEthic = [
    {
      title: "La Sincérité Pure (Al-Ikhlas)",
      desc: "Toute action caritative est accomplie pour la seule satisfaction d'Allah, loin de toute ostentation, vanité politique ou intérêt partisan."
    },
    {
      title: "L'Excellence & la Rigueur (Al-Ihsan)",
      desc: "Donner le meilleur de soi-même dans l'exécution des projets : soin apporté aux orphelins, transparence financière et gestion exemplaire."
    },
    {
      title: "La Fraternité & l'Union (Al-Ukhuwwah)",
      desc: "Fédérer les cœurs et les énergies de la jeunesse pour former un édifice solidaire où chaque frère et chaque sœur est un soutien pour autrui."
    },
    {
      title: "La Paix & la Cohabitation Citoyenne",
      desc: "L'islam enseigne la dignité absolue de l'être humain. L'UJMAH agit pour la cohésion sociale, le patriotisme togolais et la concorde entre toutes les communautés."
    }
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-ujmah-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Doctrine & Charte Éthique
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-indigo mb-6 tracking-tight">
            Nos Fondements Religieux
          </h1>
          <p className="font-sans text-base sm:text-lg text-ujmah-navy/75 leading-relaxed">
            L'engagement humanitaire de l'UJMAH s'enracine dans une foi vivante et une doctrine saine, guidée par la recherche constante de l'agrément divin et du bien-être de la créature.
          </p>
        </div>

        {/* Hadith Phare : Prise en charge de l'Orphelin */}
        <div className="bg-gradient-to-br from-ujmah-indigo to-ujmah-indigo-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-ujmah-sun/40 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ujmah-sun/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-ujmah-sun text-xs uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/10">
              Parole Prophétique Authentique
            </span>
            <blockquote className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-relaxed mb-6">
              « Moi et celui qui prend en charge l'orphelin serons au Paradis comme ces deux-ci. »
            </blockquote>
            <p className="font-sans text-sm text-white/80 italic mb-4">
              — Et le Messager d'Allah ﷺ joignit son index et son majeur pour en illustrer la proximité.
            </p>
            <span className="font-mono text-xs text-ujmah-sun font-bold uppercase tracking-wider">
              Sahih Al-Bukhari (Hadith n° 5304)
            </span>
          </div>
        </div>

        {/* Les 3 Piliers Doctrিনaux */}
        <div className="mb-16">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Références Théologiques</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-indigo mt-1">
              Les Trois Sources Directrices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundations.map((f, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-8 border border-ujmah-navy/5 shadow-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center font-display font-bold text-lg mb-6">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ujmah-indigo mb-3">{f.title}</h3>
                  <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed mb-6">{f.desc}</p>
                </div>
                
                <div className="p-4 rounded-2xl bg-ujmah-ivory border-l-4 border-ujmah-sun">
                  <p className="font-display font-medium text-xs text-ujmah-navy italic leading-snug mb-1">
                    {f.verse}
                  </p>
                  <span className="font-sans text-[11px] font-bold text-ujmah-orange block">
                    {f.ref}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charte Éthique de l'Action Humanitaire */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ujmah-navy/5 shadow-md">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Pratique du Terrain</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-indigo mt-1">
              Notre Éthique de l'Action
            </h2>
            <p className="font-sans text-sm text-ujmah-navy/60 mt-2">
              Comment nos fondements spirituels se traduisent concrètement au quotidien dans l'aide aux démunis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillarsEthic.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-ujmah-ivory border border-ujmah-navy/5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-ujmah-sun/20 text-ujmah-indigo flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={20} className="text-ujmah-orange" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ujmah-navy mb-2">{p.title}</h3>
                  <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
