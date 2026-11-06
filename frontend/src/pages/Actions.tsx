import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Droplets, 
  Backpack, 
  Utensils, 
  Sparkles,
  MapPin,
  Users,
  CheckCircle2,
  ChevronRight,
  Filter
} from 'lucide-react';

interface ActionItem {
  id: string;
  num: string;
  title: string;
  category: string;
  desc: string;
  location: string;
  beneficiaries: string;
  impactKey: string;
  image: string;
  fallback: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeText: string;
  link: string;
  btnText: string;
}

const CATEGORIES = [
  "Tous",
  "Orphelinat & Enfance",
  "Éducation & Coran",
  "Leadership (SEFIMA)",
  "Solidarité & Hydraulique"
];

export default function Actions() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const actions: ActionItem[] = [
    {
      id: "act-1",
      num: "01",
      title: "L'Orphelinat « MES ENFANTS » à Yelivo",
      category: "Orphelinat & Enfance",
      desc: "Centre d'hébergement et d'encadrement familial assurant à chaque enfant un foyer stable, trois repas équilibrés par jour, une scolarité suivie et une couverture médicale intégrale.",
      location: "Village de Yelivo, près de Sokodé",
      beneficiaries: "40 orphelins résidents",
      impactKey: "Prise en charge complète sous la direction de Nazif AMOUSSOU",
      image: "/assets/orphanage-yelivo.png",
      fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=700",
      icon: <Heart size={16} fill="currentColor" />,
      badgeBg: "bg-ujmah-orange/10 border-ujmah-orange/20",
      badgeText: "text-ujmah-orange",
      link: "/orphelinat",
      btnText: "Découvrir l'Orphelinat"
    },
    {
      id: "act-2",
      num: "02",
      title: "Concours de Récitation du Coran (CRSC & CNRSC)",
      category: "Éducation & Coran",
      desc: "Grand rendez-vous national créant une saine émulation autour de la mémorisation et de la méditation du Livre saint, avec attribution de bourses et récompenses d'excellence.",
      location: "Lomé et chefs-lieux régionaux",
      beneficiaries: "Centaines de jeunes candidats",
      impactKey: "Maîtrise du Tajweed et transmission des valeurs éthiques",
      image: "/assets/crsc-interior.png",
      fallback: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=700",
      icon: <GraduationCap size={16} />,
      badgeBg: "bg-ujmah-indigo/10 border-ujmah-indigo/20",
      badgeText: "text-ujmah-indigo",
      link: "/don",
      btnText: "Soutenir le concours"
    },
    {
      id: "act-3",
      num: "03",
      title: "Séminaires de Formation (SEFIMA)",
      category: "Leadership (SEFIMA)",
      desc: "Sessions intensives de formation combinant perfectionnement en sciences islamiques, management, leadership citoyen, gestion associative et éthique professionnelle.",
      location: "Centres de formation régionaux",
      beneficiaries: "Cadres, diplômés & étudiants",
      impactKey: "Renforcement des compétences des futurs décideurs musulmans",
      image: "/assets/sefima-weaving.png",
      fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=700",
      icon: <BookOpen size={16} />,
      badgeBg: "bg-amber-500/10 border-amber-500/20",
      badgeText: "text-amber-700",
      link: "/contact",
      btnText: "Participer aux sessions"
    },
    {
      id: "act-4",
      num: "04",
      title: "Distribution de Kits Scolaires de Rentrée",
      category: "Orphelinat & Enfance",
      desc: "Dotation annuelle en cahiers, livres, cartables et fournitures complètes aux orphelins et enfants démunis pour éliminer l'obstacle financier à la scolarisation.",
      location: "Écoles primaires & collèges du Togo",
      beneficiaries: "Élèves défavorisés & orphelins",
      impactKey: "Lutte directe contre le décrochage scolaire précoce",
      image: "/assets/actions-sociales.png",
      fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=700",
      icon: <Backpack size={16} />,
      badgeBg: "bg-ujmah-orange/10 border-ujmah-orange/20",
      badgeText: "text-ujmah-orange",
      link: "/don",
      btnText: "Offrir un kit scolaire"
    },
    {
      id: "act-5",
      num: "05",
      title: "Hydraulique Villageoise & Forages d'Eau Potable",
      category: "Solidarité & Hydraulique",
      desc: "Réalisation de forages modernes et de puits villageois pour apporter de l'eau saine aux localités isolées, préserver la santé publique et constituer une aumône continue (Sadaqa Jariya).",
      location: "Villages et cantons ruraux (Savanes, Kara, Centrale)",
      beneficiaries: "Milliers d'habitants villageois",
      impactKey: "Accès pérenne à l'eau potable et réduction des maladies",
      image: "/assets/gallery-well.png",
      fallback: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=700",
      icon: <Droplets size={16} />,
      badgeBg: "bg-blue-500/10 border-blue-500/20",
      badgeText: "text-blue-700",
      link: "/don",
      btnText: "Financer un forage"
    },
    {
      id: "act-6",
      num: "06",
      title: "Solidarité Alimentaire (Tabaski & Ramadan)",
      category: "Solidarité & Hydraulique",
      desc: "Distribution de colis de vivres essentiels lors du mois de Ramadan et partage de viande sacrificielle d'Aïd al-Adha directement au domicile des familles les plus vulnérables.",
      location: "Agoè-Adjougba, Lomé et intérieur du pays",
      beneficiaries: "Familles répertoriées & démunis",
      impactKey: "Sécurité alimentaire et fraternité concrète",
      image: "/assets/hero-mosque.png",
      fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=700",
      icon: <Utensils size={16} />,
      badgeBg: "bg-amber-500/10 border-amber-500/20",
      badgeText: "text-amber-700",
      link: "/don",
      btnText: "Participer aux colis"
    },
    {
      id: "act-7",
      num: "07",
      title: "Assises de Sciences & Cercles d'Éthique",
      category: "Éducation & Coran",
      desc: "Enseignements publics dispensés par des éducateurs et prédicateurs qualifiés sur la doctrine saine selon le Coran, la Sunnah et la compréhension des pieux prédécesseurs.",
      location: "Lieux de culte et salles de conférence",
      beneficiaries: "Jeunesse et communauté togolaise",
      impactKey: "Préservation des valeurs morales et paix sociale",
      image: "/assets/formations-workspace.png",
      fallback: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=700",
      icon: <Sparkles size={16} />,
      badgeBg: "bg-ujmah-indigo/10 border-ujmah-indigo/20",
      badgeText: "text-ujmah-indigo",
      link: "/fondements",
      btnText: "Consulter nos fondements"
    }
  ];

  const filteredActions = activeCategory === "Tous" 
    ? actions 
    : actions.filter(a => a.category === activeCategory);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#FAF8F5] min-h-screen text-ujmah-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        
        {/* =========================================================================
            1. EN-TÊTE ÉDITORIAL HAUTE LISIBILITÉ
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-ujmah-orange text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
            <Sparkles size={14} />
            7 Programmes Structurants au Togo
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight leading-tight mb-5">
            Nos Actions sur le Terrain
          </h1>

          <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed">
            Depuis 2003, l'UJMAH déploie des actions coordonnées sur l'ensemble du territoire togolais pour apporter des solutions concrètes en matière d'éducation, de protection des orphelins et de solidarité d'urgence.
          </p>
        </div>

        {/* =========================================================================
            2. PILULES DE FILTRAGE INTERACTIF
           ========================================================================= */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-ujmah-indigo text-white shadow-md shadow-ujmah-indigo/20 scale-[1.02]"
                    : "bg-white text-ujmah-navy/80 hover:bg-amber-50 border border-ujmah-navy/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            3. NOUVELLE FORMULE DE CARTES : HAUTE LISIBILITÉ & STRUCTURE ÉLÉGANTE
            Les badges ne sont plus superposés de manière floue sur la photo !
            Ils sont logés clairement dans le corps blanc avec contrastes nets.
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActions.map((act) => (
            <div 
              key={act.id} 
              className="bg-white rounded-3xl border border-ujmah-navy/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Photo avec cadre net */}
              <div className="relative aspect-[16/10] overflow-hidden bg-ujmah-navy/5">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = act.fallback;
                  }}
                />
                
                {/* Badge Numéro Haute Lisibilité en coin photo */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-md border border-black/5 flex items-center gap-1.5">
                  <span className="font-sans font-black text-xs text-ujmah-indigo">
                    N° {act.num}
                  </span>
                </div>
              </div>
              
              {/* Corps de la Carte : Lisibilité Maximale */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                
                <div>
                  {/* Badge Thématique Net (Sur fond blanc, contraste garanti à 100%) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${act.badgeBg} ${act.badgeText}`}>
                      {act.icon}
                      {act.category}
                    </span>
                  </div>

                  {/* Titre de l'Action */}
                  <h3 className="font-sans font-black text-xl text-ujmah-navy mb-3 leading-snug">
                    {act.title}
                  </h3>

                  {/* Description aérée et lisible */}
                  <p className="font-sans text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                    {act.desc}
                  </p>

                  {/* Fiche Métadonnées Pratiques (Lieu & Bénéficiaires) */}
                  <div className="space-y-2 bg-[#FAF8F5] rounded-2xl p-3.5 mb-6 border border-ujmah-navy/5 text-xs">
                    <div className="flex items-start gap-2 text-ujmah-navy">
                      <MapPin size={14} className="text-ujmah-orange flex-shrink-0 mt-0.5" />
                      <span><strong>Lieu :</strong> {act.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-ujmah-navy">
                      <Users size={14} className="text-ujmah-indigo flex-shrink-0 mt-0.5" />
                      <span><strong>Public :</strong> {act.beneficiaries}</span>
                    </div>
                  </div>
                </div>

                {/* Bouton d'Action */}
                <div className="pt-4 border-t border-ujmah-navy/5">
                  <a 
                    href={act.link} 
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl font-sans font-bold text-xs bg-ujmah-ivory hover:bg-ujmah-orange hover:text-white text-ujmah-indigo transition-all duration-200 group"
                  >
                    <span>{act.btnText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            4. BANDEAU DE MOBILISATION EN BAS DE PAGE
           ========================================================================= */}
        <div className="mt-20 bg-gradient-to-r from-ujmah-indigo-dark to-ujmah-navy rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <span className="text-xs font-bold text-ujmah-sun uppercase tracking-wider block mb-2">
              Engagement Terrain
            </span>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mb-2">
              Vous souhaitez soutenir l'un de ces programmes ?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              Vos contributions financent directement les repas des orphelins, les bourses de Coran, les forages d'eau et les kits scolaires sur le sol togolais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
            <a 
              href="/don" 
              className="inline-flex items-center justify-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all"
            >
              <Heart size={16} fill="currentColor" />
              Faire un don dédié
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 glass-card-dark text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Nous contacter
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
