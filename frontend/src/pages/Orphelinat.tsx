import React from 'react';
import { Heart, School, ShieldAlert, Award } from 'lucide-react';

export default function Orphelinat() {
  const pillars = [
    { title: "Amour & Foyer", desc: "Offrir un cadre de vie affectif stable, chaleureux et structuré où chaque enfant grandit dans la confiance.", icon: <Heart size={24} /> },
    { title: "Éducation & Avenir", desc: "Garantir un parcours scolaire de qualité, des fournitures, un suivi scolaire et un soutien professionnel futur.", icon: <School size={24} /> },
    { title: "Santé & Nutrition", desc: "Assurer trois repas équilibrés par jour et un suivi pédiatrique régulier avec boîte à pharmacie sur place.", icon: <Award size={24} /> }
  ];

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-ujmah-navy/5 text-ujmah-navy font-sans text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
            Notre Orphelinat
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-navy mb-6 tracking-tight">
            Orphelinat « MES ENFANTS »
          </h1>
          <p className="font-sans text-base text-ujmah-navy/60 leading-relaxed">
            Situé à Yelivo, dans la région centrale du Togo non loin de Sokodé, notre orphelinat accueille les enfants privés de famille pour leur offrir protection, éducation et une enfance heureuse.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/50 mb-20 max-w-5xl mx-auto">
          <img 
            src="/assets/orphanage-yelivo.png" 
            alt="Orphelinat Yelivo" 
            className="w-full h-auto object-cover aspect-[21/9]" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200";
            }}
          />
        </div>

        {/* Story and Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-navy mb-6">
              Plus qu'un simple toit, une véritable famille
            </h2>
            <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed mb-6">
              Fondé par l'association <strong>UJMAH</strong>, l'orphelinat <strong>« MES ENFANTS »</strong> est né d'un constat poignant sur la situation des orphelins et enfants vulnérables dans la Région Centrale du Togo. 
              Le centre accueille les enfants dans un environnement serein, propice à leur reconstruction physique et psychologique.
            </p>
            <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed">
              Nous croyons fermement que chaque enfant a le droit de grandir entouré d'amour, d'être scolarisé et d'avoir accès à des soins de santé de qualité. 
              Notre équipe d'éducateurs dévoués travaille au quotidien pour offrir à ces enfants un cadre de vie familial et chaleureux.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white p-6 rounded-xl border border-ujmah-navy/5 shadow-sm flex gap-4">
                <div className="w-12 h-12 rounded-full bg-ujmah-gold/10 text-ujmah-gold flex items-center justify-center flex-shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ujmah-navy mb-2">{pillar.title}</h3>
                  <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Grid */}
        <div className="bg-ujmah-gray/50 rounded-3xl p-8 sm:p-12 border border-ujmah-navy/5 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-navy mb-4">Soutenir l'Orphelinat</h2>
          <p className="font-sans text-sm sm:text-base text-ujmah-navy/60 max-w-2xl mx-auto mb-10">
            Vous pouvez parrainer la scolarité d'un enfant, contribuer à l'alimentation ou financer la boîte à pharmacie pour les soins quotidiens.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/don" className="bg-ujmah-gold text-white px-8 py-3 rounded-full font-sans font-semibold transition-all hover:bg-ujmah-navy hover:shadow-lg">
              Faire un don en ligne
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
