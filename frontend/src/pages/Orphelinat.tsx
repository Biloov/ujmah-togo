import React from 'react';
import { Heart, School, ShieldAlert, Award, ExternalLink, MapPin, Users, Check, Sparkles, Quote, ArrowRight } from 'lucide-react';

export default function Orphelinat() {
  const pillars = [
    { 
      num: "01",
      title: "Nutrition & Cadre de Vie", 
      desc: "Assurer trois repas équilibrés par jour dans un foyer aimant, sécurisé et structuré, favorisant l'épanouissement moral et affectif.", 
      icon: <Heart size={24} />
    },
    { 
      num: "02",
      title: "Scolarité d'Excellence", 
      desc: "Prise en charge intégrale des frais de scolarité, tenues, livres, manuels et accompagnement scolaire pour forger leur autonomie future.", 
      icon: <School size={24} />
    },
    { 
      num: "03",
      title: "Santé & Suivi Pédiatrique", 
      desc: "Visites médicales préventives, vaccinations, pharmacie sur place et prise en charge d'urgence pour préserver la santé de chaque enfant.", 
      icon: <Award size={24} />
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-white min-h-screen text-ujmah-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        
        {/* En-tête Éditorial */}
        <div className="max-w-4xl mb-14 pb-8 border-b border-ujmah-navy/10">
          <span className="font-sans text-xs uppercase tracking-widest text-ujmah-orange font-bold block mb-3">
            Grand Reportage Terrain • Région Centrale
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-ujmah-indigo tracking-tight leading-tight mb-6">
            L'Orphelinat « MES ENFANTS » à Yelivo
          </h1>
          <p className="font-sans text-lg sm:text-xl text-ujmah-dark-muted leading-relaxed">
            Né au cœur du Togo, non loin de Sokodé, ce centre accueille et élève <strong>40 orphelins et enfants en grande détresse</strong> sous la responsabilité bienveillante de son directeur, <strong>M. AMOUSSOU Nazif</strong>.
          </p>
        </div>

        {/* Annonce Vitrine Dédiée (Sous-domaine futur) */}
        <div className="bg-ujmah-ivory rounded-3xl p-6 sm:p-8 mb-16 border border-ujmah-navy/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-ujmah-orange text-white flex items-center justify-center flex-shrink-0 font-bold shadow-md">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg text-ujmah-indigo">Vitrine Autonome de l'Orphelinat</h3>
              <p className="font-sans text-xs text-ujmah-navy/65 mt-0.5">
                Plateforme numérique dédiée au parrainage nominatif, aux actualités de l'orphelinat et au suivi scolaire :
              </p>
            </div>
          </div>
          <span className="font-sans text-xs font-bold text-ujmah-indigo bg-white px-4 py-2 rounded-xl border border-ujmah-navy/10 flex-shrink-0">
            orphelinat.ujmah-togo.vercel.app
          </span>
        </div>

        {/* Grande Photo & Immersion Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ujmah-ivory relative group">
              <img 
                src="/assets/orphanage-yelivo.png" 
                alt="Enfants de l'Orphelinat de Yelivo" 
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ujmah-indigo-dark/75 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="font-sans text-[10px] uppercase font-bold text-ujmah-sun tracking-widest block">Village de Yelivo</span>
                  <h3 className="font-sans font-bold text-xl drop-shadow">Centre d'Accueil « MES ENFANTS »</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-sans font-bold text-white border border-white/20">
                  Directeur : AMOUSSOU Nazif
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Récit de Vie
            </span>
            <h2 className="font-sans font-bold text-3xl text-ujmah-indigo mb-6 leading-snug">
              Un sanctuaire d'amour et de reconstruction
            </h2>

            <div className="space-y-4 font-sans text-sm text-ujmah-dark-muted leading-relaxed">
              <p>
                L'orphelinat <strong>« MES ENFANTS »</strong> à Yelivo n'est pas un dortoir anonyme. C'est une communauté de vie chaleureuse où quarante enfants, souvent orphelins de père et de mère ou issus de situations familiales dramatiques, retrouvent la sécurité affective d'un foyer.
              </p>
              <p>
                Ici, chaque enfant est connu par son nom, suivi scolairement et entouré de soins attentifs par des éducateurs et bénévoles dévoués.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-ujmah-navy/10">
              <div>
                <span className="font-sans font-extrabold text-3xl text-ujmah-orange">40</span>
                <span className="font-sans text-xs text-ujmah-navy/60 font-semibold block mt-1">Pensionnaires permanents</span>
              </div>
              <div>
                <span className="font-sans font-extrabold text-3xl text-ujmah-indigo">100%</span>
                <span className="font-sans text-xs text-ujmah-navy/60 font-semibold block mt-1">Enfants scolarisés</span>
              </div>
            </div>
          </div>

        </div>

        {/* Les Piliers du Foyer */}
        <div className="mb-20 pb-16 border-b border-ujmah-navy/10">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Prise en Charge Quotidienne
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-ujmah-indigo">
              Les Trois Piliers d'Accompagnement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.num} className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5">
                <span className="font-sans text-sm font-extrabold text-ujmah-orange block mb-3">
                  Pilier {p.num}
                </span>
                <h3 className="font-sans font-bold text-xl text-ujmah-indigo mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* L'Appel au Parrainage : 20 250 FCFA / mois */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-ujmah-indigo to-ujmah-indigo-dark text-white rounded-3xl p-8 sm:p-14 shadow-2xl text-center border-2 border-ujmah-sun/40">
          <span className="inline-block bg-ujmah-orange text-white font-sans text-xs uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full mb-6">
            Bénédiction Suprême
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white mb-4">
            Parrainez un Orphelin
          </h2>
          
          <div className="p-4 rounded-2xl bg-white/10 max-w-md mx-auto mb-6">
            <span className="font-sans font-extrabold text-3xl text-ujmah-sun">20 250 FCFA</span>
            <span className="font-sans text-xs text-white/80 block mt-1">Par mois pour la nourriture, la scolarité et les soins complets</span>
          </div>

          <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
            Le Prophète ﷺ a promis : <em>« Moi et celui qui prend en charge l'orphelin serons au Paradis comme ces deux-ci »</em> (Sahih Al-Bukhari). Vous pouvez parrainer un orphelin mensuellement ou effectuer un don libre pour les dépenses prioritaires de l'orphelinat.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://pay.genius.ci/d/ujmah-orphelinat?amount=20250" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-full font-sans font-bold text-sm shadow-xl shadow-ujmah-orange/25 transition-all hover:-translate-y-0.5"
            >
              Parrainer à 20 250 FCFA (Genius Pay)
            </a>
            <a 
              href="/don" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-sans font-bold text-sm border border-white/20 transition-all"
            >
              Autre don ou virement Coris Bank
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
