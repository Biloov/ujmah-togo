import React from 'react';
import { Heart, School, ShieldAlert, Award, ExternalLink, MapPin, Users, Check, Sparkles } from 'lucide-react';

export default function Orphelinat() {
  const pillars = [
    { 
      title: "Nutrition & Foyer Chaleureux", 
      desc: "Assurer trois repas équilibrés par jour dans un cadre de vie affectif structuré, où chaque enfant grandit entouré d'amour et de bienveillance.", 
      icon: <Heart size={24} />,
      color: "bg-ujmah-orange/10 text-ujmah-orange"
    },
    { 
      title: "Scolarité & Avenir Professionnel", 
      desc: "Prise en charge totale des frais scolaires, uniformes, livres et accompagnement pédagogique pour assurer un parcours éducatif d'excellence.", 
      icon: <School size={24} />,
      color: "bg-ujmah-indigo/10 text-ujmah-indigo"
    },
    { 
      title: "Santé Pédiatrique & Soins", 
      desc: "Suivi médical régulier, vaccinations, pharmacie sur place et prise en charge hospitalière d'urgence en cas de maladie.", 
      icon: <Award size={24} />,
      color: "bg-ujmah-sun/20 text-ujmah-indigo"
    }
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-ujmah-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Œuvre Humanitaire Majeure
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-indigo mb-6 tracking-tight">
            Orphelinat « MES ENFANTS » à Yelivo
          </h1>
          <p className="font-sans text-base sm:text-lg text-ujmah-navy/75 leading-relaxed">
            Fondé et administré par l'UJMAH Togo, notre centre d'accueil situé à <strong>Yelivo (près de Sokodé)</strong> prend en charge quotidiennement <strong>40 enfants orphelins et vulnérables</strong> pour leur offrir protection, éducation et espoir.
          </p>
        </div>

        {/* Annonce Vitrine Dédiée */}
        <div className="bg-gradient-to-r from-ujmah-indigo to-ujmah-indigo-dark text-white rounded-3xl p-6 sm:p-8 mb-16 shadow-lg border border-ujmah-sun/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-ujmah-sun text-ujmah-indigo flex items-center justify-center flex-shrink-0 font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">Espace Vitrine Dédié à l'Orphelinat</h3>
              <p className="font-sans text-xs sm:text-sm text-white/75 mt-0.5">
                Plateforme autonome de suivi des enfants, des bulletins scolaires et du parrainage direct.
              </p>
            </div>
          </div>
          <a 
            href="https://orphelinat.ujmah-togo.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ujmah-sun text-ujmah-indigo font-sans font-extrabold text-xs px-6 py-3 rounded-full hover:bg-white transition-all shadow-md flex-shrink-0"
          >
            orphelinat.ujmah-togo.vercel.app
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white mb-16 max-w-5xl mx-auto">
          <img 
            src="/assets/orphanage-yelivo.png" 
            alt="Orphelinat Yelivo MES ENFANTS" 
            className="w-full h-auto object-cover aspect-[21/9]" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ujmah-indigo-dark/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap justify-between items-end gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-ujmah-sun tracking-widest">Yelivo — Région Centrale (Togo)</span>
              <h2 className="font-display font-bold text-2xl drop-shadow">Centre d'accueil et de vie « MES ENFANTS »</h2>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-sans font-bold text-white border border-white/20">
              Directeur : AMOUSSOU Nazif
            </div>
          </div>
        </div>

        {/* Fiche Chiffrée & Piliers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Notre Engagement</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-indigo mt-1 mb-6">
              Plus qu'un toit, une véritable famille d'espérance
            </h2>
            <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed mb-4">
              Créé pour répondre à la situation de grande détresse des enfants privés de soutien parental dans la Région Centrale du Togo, l'orphelinat <strong>« MES ENFANTS »</strong> accueille actuellement <strong>40 pensionnaires</strong>.
            </p>
            <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed mb-6">
              Placé sous la direction dévouée de <strong>M. AMOUSSOU Nazif</strong>, le centre assure l'hébergement, la restauration, la scolarisation dans les écoles environnantes et les soins de santé, tout en inculquant des valeurs morales et spirituelles solides.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-ujmah-navy/5 shadow-sm text-center">
                <span className="font-display font-extrabold text-3xl text-ujmah-orange">40</span>
                <span className="font-sans text-xs text-ujmah-navy/60 font-semibold block mt-1">Enfants pris en charge</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-ujmah-navy/5 shadow-sm text-center">
                <span className="font-display font-extrabold text-3xl text-ujmah-indigo">100%</span>
                <span className="font-sans text-xs text-ujmah-navy/60 font-semibold block mt-1">Scolarisés avec succès</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-white p-6 rounded-2xl border border-ujmah-navy/5 shadow-sm flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ujmah-navy mb-1.5">{pillar.title}</h3>
                  <p className="font-sans text-sm text-ujmah-navy/65 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formule de Parrainage & Appel au Don */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-ujmah-orange/30 shadow-xl text-center max-w-3xl mx-auto">
          <span className="inline-block bg-ujmah-orange/10 text-ujmah-orange font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Parrainez un Orphelin
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-ujmah-indigo mb-2">
            20 250 FCFA / mois
          </h2>
          <p className="font-sans text-sm text-ujmah-navy/60 mb-6 font-semibold">
            (Soit environ 31 € par mois pour assurer la nourriture, la scolarité et les soins complets d'un enfant)
          </p>

          <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Le Prophète ﷺ a dit : <em>« Moi et celui qui prend en charge l'orphelin serons au Paradis comme ces deux-ci »</em> (Sahih Al-Bukhari). Vous pouvez parrainer un enfant individuellement ou contribuer librement aux charges du centre.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://pay.genius.ci/d/ujmah-orphelinat?amount=20250" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-full font-sans font-bold text-sm shadow-lg shadow-ujmah-orange/25 transition-all hover:-translate-y-0.5"
            >
              <Heart size={18} fill="currentColor" />
              Parrainer avec 20 250 FCFA
            </a>
            <a 
              href="/don" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ujmah-ivory border border-ujmah-indigo/20 text-ujmah-indigo hover:bg-ujmah-indigo/5 px-8 py-4 rounded-full font-sans font-bold text-sm transition-all"
            >
              Autre montant ou Virement Coris Bank
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
