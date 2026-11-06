import React, { useState } from 'react';
import { 
  Heart, 
  BookOpen, 
  GraduationCap, 
  Droplets, 
  Backpack, 
  Utensils, 
  MapPin, 
  Phone, 
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  Calendar,
  Smile,
  ShieldCheck,
  Check,
  Award,
  Users,
  Compass,
  Landmark,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  // Sélecteur interactif de dons multi-activités
  const [activeTab, setActiveTab] = useState<'orphelinat' | 'crsc' | 'forages' | 'kits' | 'secours' | 'general'>('orphelinat');
  const [selectedPreset, setSelectedPreset] = useState<number>(20250);
  const [customVal, setCustomVal] = useState<string>('');
  const [isCustomInput, setIsCustomInput] = useState<boolean>(false);

  // Configuration détaillée de chaque activité pour le donateur
  const donationActivities = {
    orphelinat: {
      title: "Orphelinat « MES ENFANTS » à Yelivo",
      subtitle: "Parrainage mensuel & protection des 40 orphelins",
      badge: "Protection de l'Enfance",
      icon: <Heart size={18} fill="currentColor" />,
      presets: [5000, 10000, 20250, 40500, 60750],
      defaultVal: 20250,
      description: "Prise en charge intégrale des 40 orphelins résidents à Yelivo (près de Sokodé) : trois repas équilibrés par jour, scolarité complète, tenues, manuels et soins de santé sous la direction de Nazif AMOUSSOU.",
      highlight: "20 250 FCFA couvre l'intégralité des besoins vitaux et éducatifs d'un orphelin pendant 1 mois (675 F/jour)."
    },
    crsc: {
      title: "CRSC : Concours de Récitation du Saint Coran",
      subtitle: "Émulation nationale, bourses et valorisation des jeunes mémorisateurs",
      badge: "Excellence Coranique",
      icon: <GraduationCap size={18} />,
      presets: [5000, 10000, 15000, 25000, 50000],
      defaultVal: 15000,
      description: "Grande fête nationale d'émulation coranique rassemblant des centaines de jeunes filles et garçons de tout le Togo (Lomé, Sokodé, Kara, Dapaong...) autour de la mémorisation du Saint Coran, du Tajweed et de la transmission éthique.",
      highlight: "Finance les bourses d'excellence, les corans de luxe, les récompenses d'honneur et la prise en charge logistique des candidats."
    },
    forages: {
      title: "Hydraulique Villageoise & Forages d'Eau Potable",
      subtitle: "Puits modernes et adduction d'eau dans les villages isolés",
      badge: "Sadaqa Jariya",
      icon: <Droplets size={18} />,
      presets: [10000, 25000, 50000, 100000, 250000],
      defaultVal: 25000,
      description: "Construction et réhabilitation de forages équipés de pompes modernes dans les villages arides du Togo, offrant l'eau potable à des milliers d'habitants et préservant la santé des familles.",
      highlight: "Une aumône continue (Sadaqa Jariya) qui étanche la soif de localités entières pendant des décennies."
    },
    kits: {
      title: "Kits Scolaires & Rentrée des Démunis",
      subtitle: "Dotation complète de fournitures pour écoliers orphelins",
      badge: "Lutte Décrochage",
      icon: <Backpack size={18} />,
      presets: [3000, 5000, 10000, 20000, 50000],
      defaultVal: 10000,
      description: "Sacs à dos garnis, cahiers, manuels scolaires et tenues distribués aux enfants défavorisés et orphelins au Togo pour qu'aucun ne soit renvoyé de l'école.",
      highlight: "10 000 FCFA offre un cartable complet et garantit la dignité d'un écolier pour toute l'année scolaire."
    },
    secours: {
      title: "Secours Alimentaire & Solidarité (Tabaski / Ramadan)",
      subtitle: "Colis de denrées de base et viande de fête aux familles",
      badge: "Fraternité Directe",
      icon: <Utensils size={18} />,
      presets: [5000, 10000, 15000, 30000, 60000],
      defaultVal: 15000,
      description: "Paniers de vivres essentiels (riz, huile, sucre, lait) lors du mois de Ramadan et partage de viande sacrificielle d'Aïd al-Adha directement au domicile des familles les plus vulnérables.",
      highlight: "Apporte la joie et le réconfort aux veuves, personnes âgées et enfants démunis lors des grandes fêtes."
    },
    general: {
      title: "Fonds Général & Urgences Humanitaires",
      subtitle: "Soutien libre à l'ensemble des missions et fonctionnement de l'UJMAH",
      badge: "Missions Globales",
      icon: <Users size={18} />,
      presets: [2000, 5000, 10000, 25000, 50000],
      defaultVal: 10000,
      description: "Soutien souple et réactif aux urgences sociales inopinées, aux frais logistiques terrain et à la pérennité globale des œuvres de l'UJMAH au Togo.",
      highlight: "Permet une intervention immédiate dès qu'une détresse est signalée sur le territoire togolais."
    }
  };

  const handleTabChange = (tab: keyof typeof donationActivities) => {
    setActiveTab(tab);
    setIsCustomInput(false);
    setSelectedPreset(donationActivities[tab].defaultVal);
    setCustomVal('');
  };

  const currentFinalAmount = isCustomInput ? (Number(customVal) || 0) : selectedPreset;
  const currentEur = Math.round(currentFinalAmount / 655.957);
  const activeAct = donationActivities[activeTab];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-ujmah-navy selection:bg-ujmah-sun selection:text-ujmah-indigo">
      
      {/* =========================================================================
          1. HERO INSTITUTIONNEL & HUMAIN (Inspiré Biztop & Références d'Excellence)
          Met en valeur : Récépissé N° 0315, Devise "Servir l'humanité dans l'union", 23 ans d'histoire
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 overflow-hidden">
        
        {/* Douces auras dorées et ambrées */}
        <div className="absolute top-0 right-0 w-[42rem] h-[42rem] bg-gradient-to-bl from-amber-200/50 via-amber-100/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-[32rem] h-[32rem] bg-orange-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Colonne Gauche : Titre Majeur & Repères Institutionnels */}
            <div className="lg:col-span-7 flex flex-col items-start">

              {/* Devise Officielle inscrite au cœur du titre */}
              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl text-ujmah-navy tracking-tight leading-[1.08] mb-6">
                Servir l'humanité <br />
                <span className="text-ujmah-orange">dans l'union</span>
                <span className="text-ujmah-indigo">.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed max-w-xl mb-6">
                Depuis plus de <strong>23 ans au Togo</strong>, l'Union des Jeunes Musulmans pour l'Action Humanitaire (UJMAH) allie la formation éthique de la jeunesse, le secours d'urgence aux familles vulnérables, l'hydraulique villageoise et la prise en charge intégrale des <strong>40 orphelins de Yelivo</strong>.
              </p>

              {/* Repères Clés vérifiables */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-ujmah-dark-muted mb-8 pb-6 border-b border-ujmah-navy/10 w-full max-w-xl">
                <span className="flex items-center gap-1.5 text-ujmah-indigo">
                  <MapPin size={15} className="text-ujmah-orange" />
                  Agoè-Adjougba, Lomé (à 100m de BOXBERG)
                </span>
                <span>•</span>
                <span className="text-ujmah-navy">Devise : « Servir l'humanité dans l'union »</span>
                <span>•</span>
                <span className="text-ujmah-orange">Ligne : +228 92 67 34 00</span>
              </div>

              {/* Boutons d'Action Clairs et Responsifs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a 
                  href="/don" 
                  className="inline-flex items-center justify-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm shadow-xl shadow-ujmah-orange/25 hover:shadow-ujmah-orange/40 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  <Heart size={16} fill="currentColor" />
                  <span>Soutenir nos actions</span>
                  <ArrowRight size={15} />
                </a>

                <a 
                  href="tel:+22892673400" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-ujmah-indigo border border-ujmah-navy/15 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-xs whitespace-nowrap"
                >
                  <Phone size={15} className="text-ujmah-orange" />
                  <span>Siège : +228 92 67 34 00</span>
                </a>
              </div>

            </div>

            {/* Colonne Droite : L'Orphelinat de Yelivo en Image Authentique */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Cadre Photographique avec Légende Officielle */}
                <div className="bg-white p-3.5 sm:p-4 rounded-3xl shadow-xl border border-ujmah-navy/10 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-amber-50">
                    <img 
                      src="/assets/orphanage-yelivo.png" 
                      alt="Centre d'Accueil MES ENFANTS à Yelivo près de Sokodé" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Légende sur l'image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block bg-ujmah-orange text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                        Village de Yelivo • Région Centrale
                      </span>
                      <p className="font-sans font-black text-sm leading-snug">
                        Orphelinat « MES ENFANTS »
                      </p>
                      <p className="text-[11px] text-white/90 mt-0.5">
                        40 enfants hébergés, nourris et scolarisés sous la responsabilité de Nazif AMOUSSOU.
                      </p>
                    </div>
                  </div>

                  {/* Bandeau d'information sous la photo */}
                  <div className="pt-3.5 px-2 flex items-center justify-between text-xs text-ujmah-dark-muted">
                    <span className="flex items-center gap-1.5 font-bold text-ujmah-navy">
                      <Smile size={16} className="text-amber-500" />
                      40 pensionnaires permanents
                    </span>
                    <a href="/orphelinat" className="text-ujmah-orange font-bold hover:underline flex items-center gap-0.5">
                      Voir leur quotidien <ChevronRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Badge d'engagement flottant */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-ujmah-indigo text-white p-4 rounded-2xl shadow-xl hidden sm:block max-w-[240px] border border-white/10">
                  <p className="text-[10px] text-ujmah-sun font-bold uppercase tracking-wider">Parrainage Nominatif :</p>
                  <p className="text-xs font-semibold leading-relaxed mt-0.5 text-white/90">
                    <strong>20 250 FCFA / mois</strong> (675 F/jour) pour la nourriture, l'écolage et la santé d'un orphelin.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. LES 3 PILIERS D'ACTION MAJEURS (Inspiré Biztop : 3 Cartes Éléments Distincts)
          Orphelinat Yelivo (Ivoire/Ambre) • CRSC (Indigo Noble) • Puits & Urgence (Saphir/Marine)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
              CHAMPS D'INTERVENTION PRIORITAIRES
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight leading-tight">
              Nos Piliers Fondateurs sur le Terrain
            </h2>
          </div>
          <p className="text-sm text-ujmah-dark-muted max-w-md leading-relaxed">
            De la protection des orphelins à l'émulation coranique nationale et l'eau potable, l'UJMAH concrétise la fraternité par des œuvres durables.
          </p>
        </div>

        {/* Grille de 3 Cartes aux Identités Fortes (Inspiré de l'approche Biztop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARTE 1 : L'Orphelinat de Yelivo (Style Carte Blanche & Ambrée) */}
          <div className="bg-white rounded-3xl p-8 border border-ujmah-navy/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-ujmah-orange flex items-center justify-center mb-6">
                <Heart size={26} fill="currentColor" />
              </div>
              
              <span className="text-[11px] font-bold text-ujmah-orange uppercase tracking-wider block mb-1">
                Protection de l'Enfance
              </span>
              
              <h3 className="font-sans font-black text-2xl text-ujmah-navy mb-3">
                L'Orphelinat « MES ENFANTS » à Yelivo
              </h3>
              
              <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                Un foyer chaleureux au cœur de la Région Centrale pour <strong>40 orphelins</strong>. Trois repas équilibrés par jour, scolarité suivie, tenues cousues et soins médicaux sous la direction bienveillante de <strong>Nazif AMOUSSOU</strong>.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-ujmah-navy/5 text-xs text-ujmah-navy font-semibold mb-6">
                <span className="text-ujmah-orange font-bold block text-[11px] uppercase">Formule Mensuelle</span>
                20 250 FCFA / mois pour une prise en charge intégrale.
              </div>
            </div>

            <a 
              href="/orphelinat" 
              className="inline-flex items-center justify-between text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors pt-4 border-t border-ujmah-navy/10 group"
            >
              <span>Découvrir l'orphelinat</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* CARTE 2 : Le CRSC (Style Carte Indigo Lumineuse & Solaire) */}
          <div className="bg-gradient-to-br from-[#1E1552] to-[#2E1F80] text-white rounded-3xl p-8 shadow-lg flex flex-col justify-between hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ujmah-sun/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-ujmah-sun flex items-center justify-center mb-6">
                <GraduationCap size={26} />
              </div>

              <span className="text-[11px] font-bold text-ujmah-sun uppercase tracking-wider block mb-1">
                Émulation & Sciences Islamiques
              </span>

              <h3 className="font-sans font-black text-2xl text-white mb-3">
                CRSC : Concours de Récitation du Saint Coran
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                Le grand rendez-vous national rassemblant des centaines de jeunes filles et garçons de Lomé, Sokodé, Kara et Dapaong autour de la mémorisation du Saint Coran, du Tajweed et de bourses d'excellence.
              </p>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs text-white/90 font-semibold mb-6">
                <span className="text-ujmah-sun font-bold block text-[11px] uppercase">Impact Jeunesse</span>
                Valorisation des jeunes mémorisateurs et transmission éthique.
              </div>
            </div>

            <a 
              href="/don?category=crsc" 
              className="inline-flex items-center justify-between text-xs font-bold text-ujmah-sun hover:text-white transition-colors pt-4 border-t border-white/15 group relative z-10"
            >
              <span>Soutenir les bourses du CRSC</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* CARTE 3 : Hydraulique & Solidarité Directe (Style Carte Saphir / Marine) */}
          <div className="bg-white rounded-3xl p-8 border border-ujmah-navy/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                <Droplets size={26} />
              </div>

              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Sadaqa Jariya & Solidarité
              </span>

              <h3 className="font-sans font-black text-2xl text-ujmah-navy mb-3">
                Puits d'Eau Potable, Kits & Tabaski
              </h3>

              <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                Forages de puits dans les cantons reculés pour sauver des vies de l'eau insalubre, distribution de kits scolaires complets aux orphelins, et partage de colis de vivres lors du Ramadan et de la fête de Tabaski.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-ujmah-navy/5 text-xs text-ujmah-navy font-semibold mb-6">
                <span className="text-blue-600 font-bold block text-[11px] uppercase">Action Continue</span>
                Des milliers de familles togolaises soulagées durablement.
              </div>
            </div>

            <a 
              href="/actions" 
              className="inline-flex items-center justify-between text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors pt-4 border-t border-ujmah-navy/10 group"
            >
              <span>Voir toutes nos actions</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </section>

      {/* =========================================================================
          3. NOTRE HISTOIRE & IDENTITÉ : D'OÙ NOUS VENONS (Inspiré Biztop Mosaic)
          Mosaïque de photos authentiques + encart Récépissé N° 0315 + Devise
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16">
        <div className="bg-white rounded-3xl border border-ujmah-navy/10 p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Colonne Gauche : Mosaïque de Photos & Chiffres de Confiance */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-amber-50 shadow-sm border border-ujmah-navy/5">
                    <img 
                      src="/assets/crsc-interior.png" 
                      alt="CRSC - Concours de Récitation du Saint Coran" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                  <div className="bg-gradient-to-br from-ujmah-indigo to-ujmah-navy text-white p-6 rounded-2xl text-center">
                    <span className="font-sans font-black text-4xl sm:text-5xl text-ujmah-sun block leading-none mb-1">
                      23+
                    </span>
                    <span className="text-[11px] text-white/80 uppercase tracking-wider font-bold">
                      Ans d'action continue (Fondée en 2003)
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl text-center">
                    <span className="font-sans font-black text-4xl sm:text-5xl text-ujmah-orange block leading-none mb-1">
                      40
                    </span>
                    <span className="text-[11px] text-ujmah-indigo uppercase tracking-wider font-bold">
                      Orphelins résidents à Yelivo
                    </span>
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-amber-50 shadow-sm border border-ujmah-navy/5">
                    <img 
                      src="/assets/gallery-well.png" 
                      alt="Hydraulique villageoise - Forages d'eau potable" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Le Récit de Fondation et la Devise */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
                NOTRE IDENTITÉ & HISTOIRE VÉCUE
              </span>
              
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-ujmah-navy mb-4 leading-tight">
                Tout a commencé le 23 janvier 2003 sous un hangar d'Agoè-Houmbi.
              </h2>

              <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed mb-4">
                À cette époque, nous étions de jeunes étudiants, enseignants et artisans de Lomé. Émus par la détresse de veuves isolées et d'enfants privés d'école, nous avons refusé la passivité.
              </p>

              <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed mb-6">
                Nous avons réuni nos modestes économies pour organiser des cours de soutien, partager les vivres de fête et porter secours. Reconnue officiellement par le Ministère de l'Administration Territoriale sous le récépissé <strong>N° 0315/MATDCL-SG-DLPAP-DOCA</strong>, l'UJMAH a grandi en gardant intacte sa boussole : <strong>« Servir l'humanité dans l'union »</strong>.
              </p>

              {/* Fiche d'Identité Institutionnelle */}
              <div className="w-full bg-[#FAF8F5] p-5 rounded-2xl border border-ujmah-navy/10 space-y-2 text-xs mb-6">
                <div className="flex justify-between border-b border-ujmah-navy/5 pb-2">
                  <span className="text-ujmah-dark-muted font-bold">Récépissé Ministériel :</span>
                  <span className="font-sans font-bold text-ujmah-navy">N° 0315/MATDCL-SG-DLPAP-DOCA</span>
                </div>
                <div className="flex justify-between border-b border-ujmah-navy/5 pb-2">
                  <span className="text-ujmah-dark-muted font-bold">Devise Officielle :</span>
                  <span className="font-sans font-bold text-ujmah-orange">« Servir l'humanité dans l'union »</span>
                </div>
                <div className="flex justify-between border-b border-ujmah-navy/5 pb-2">
                  <span className="text-ujmah-dark-muted font-bold">Siège Social :</span>
                  <span className="font-sans font-bold text-ujmah-navy">Agoè-Adjougba, à 100m de BOXBERG, Lomé</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ujmah-dark-muted font-bold">Banque :</span>
                  <span className="font-sans font-bold text-ujmah-indigo">Coris Bank : TG182 01010 008811824401 13</span>
                </div>
              </div>

              <a 
                href="/qui-sommes-nous" 
                className="inline-flex items-center gap-2 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors"
              >
                Lire l'historique complet et nos statuts <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. POUR QUI NOUS AGISSONS : 01 / 02 / 03 (Inspiré Landing Gymnasia)
          Cartes structurées par publics bénéficiaires
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
            NOTRE RAYONNEMENT CITOYEN & SOLIDAIRE
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight mb-4">
            Pour qui nous agissons au quotidien
          </h2>
          <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed">
            Chaque action de l'UJMAH répond à un besoin réel et mesurable sur le terrain togolais.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* 01 : Pour les Orphelins */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ujmah-navy/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-ujmah-orange/40 transition-all">
            <div className="flex items-start gap-5">
              <span className="font-sans font-black text-3xl sm:text-4xl text-ujmah-orange">
                01
              </span>
              <div>
                <h3 className="font-sans font-black text-xl text-ujmah-indigo mb-1">
                  Pour les 40 Orphelins de Yelivo & l'Enfance Vulnérable
                </h3>
                <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed">
                  Offrir un foyer aimant et digne, trois repas par jour, une scolarisation intégrale et le suivi médical complet au centre « MES ENFANTS » sous la direction de Nazif AMOUSSOU.
                </p>
              </div>
            </div>
            <a 
              href="/orphelinat" 
              className="w-full sm:w-auto flex-shrink-0 text-center px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-ujmah-orange font-bold text-xs transition-colors whitespace-nowrap"
            >
              Voir le foyer
            </a>
          </div>

          {/* 02 : Pour la Jeunesse & les Apprenants */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ujmah-navy/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-ujmah-indigo/40 transition-all">
            <div className="flex items-start gap-5">
              <span className="font-sans font-black text-3xl sm:text-4xl text-ujmah-indigo">
                02
              </span>
              <div>
                <h3 className="font-sans font-black text-xl text-ujmah-indigo mb-1">
                  Pour la Jeunesse Musulmane & les Mémorisateurs du Coran
                </h3>
                <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed">
                  Le <strong>CRSC (Concours de Récitation du Saint Coran)</strong> pour honorer les récitateurs, et les séminaires <strong>SEFIMA</strong> pour forger des cadres éthiques, compétents et engagés dans la société civile togolaise.
                </p>
              </div>
            </div>
            <a 
              href="/don?category=crsc" 
              className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-ujmah-indigo font-bold text-xs transition-colors"
            >
              Le CRSC
            </a>
          </div>

          {/* 03 : Pour les Villages & Familles Démunies */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ujmah-navy/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-blue-500/40 transition-all">
            <div className="flex items-start gap-5">
              <span className="font-sans font-black text-3xl sm:text-4xl text-blue-600">
                03
              </span>
              <div>
                <h3 className="font-sans font-black text-xl text-ujmah-indigo mb-1">
                  Pour les Villages Isolés & les Familles Démunies
                </h3>
                <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed">
                  L'accès à l'eau potable par forages modernes de puits (Sadaqa Jariya), la dotation en kits scolaires pour la rentrée, et les secours alimentaires lors du Ramadan et de la Tabaski.
                </p>
              </div>
            </div>
            <a 
              href="/don?category=forages" 
              className="w-full sm:w-auto flex-shrink-0 text-center px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors whitespace-nowrap"
            >
              Forages & Vivres
            </a>
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. MODULE DE DONS MULTI-ACTIVITÉS INTERACTIF (Demande Spécifique Utilisateur)
          Diversification complète selon toutes les activités de l'UJMAH
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16">
        <div className="bg-white rounded-3xl border border-ujmah-navy/10 p-8 sm:p-14 shadow-xl">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
              GÉNÉROSITÉ & TRANSPARENCE TOTALE
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight mb-4">
              Choisissez l'action que vous souhaitez financer
            </h2>
            <p className="text-sm text-ujmah-dark-muted leading-relaxed">
              Vos dons sont intégralement affectés à la cause de votre choix via la passerelle sécurisée SasPay (Flooz, T-Money, Wave & Cartes) ou par virement bancaire Coris Bank.
            </p>
          </div>

          {/* Onglets des Activités */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {(Object.keys(donationActivities) as (keyof typeof donationActivities)[]).map((tabKey) => {
              const act = donationActivities[tabKey];
              const isSelected = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => handleTabChange(tabKey)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    isSelected
                      ? "border-ujmah-indigo bg-ujmah-indigo text-white shadow-md shadow-ujmah-indigo/20 scale-[1.02]"
                      : "border-ujmah-navy/10 hover:border-ujmah-indigo/30 bg-[#FAF8F5] text-ujmah-navy"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? "bg-white/20 text-ujmah-sun" : "bg-ujmah-indigo/10 text-ujmah-indigo"
                  }`}>
                    {act.icon}
                  </div>
                  <span className="font-sans font-bold text-xs truncate max-w-full">
                    {act.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Boîte d'action sélectionnée */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-ujmah-navy/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Colonne Gauche : Descriptif de la Cause */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-ujmah-orange/10 text-ujmah-orange text-[10px] font-bold uppercase tracking-wider mb-2">
                {activeAct.badge}
              </span>
              <h3 className="font-sans font-black text-2xl text-ujmah-indigo mb-2">
                {activeAct.title}
              </h3>
              <p className="text-xs text-ujmah-indigo/80 font-bold mb-3">
                {activeAct.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-4">
                {activeAct.description}
              </p>
              <div className="p-3.5 rounded-2xl bg-white border border-ujmah-navy/10 text-xs font-semibold text-ujmah-orange">
                {activeAct.highlight}
              </div>
            </div>

            {/* Colonne Droite : Montants et Bouton SasPay */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-ujmah-navy/10 shadow-sm flex flex-col justify-between">
              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider mb-3">
                  Montant en FCFA :
                </label>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  {activeAct.presets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setIsCustomInput(false);
                        setSelectedPreset(preset);
                      }}
                      className={`py-2.5 px-1 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                        !isCustomInput && selectedPreset === preset
                          ? "border-ujmah-orange bg-ujmah-orange text-white shadow-sm"
                          : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy bg-[#FAF8F5]"
                      }`}
                    >
                      {preset.toLocaleString('fr-FR')} F
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setIsCustomInput(true)}
                    className={`py-2.5 px-1 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                      isCustomInput
                        ? "border-ujmah-orange bg-ujmah-orange text-white shadow-sm"
                        : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy bg-[#FAF8F5]"
                    }`}
                  >
                    Autre
                  </button>
                </div>

                {isCustomInput && (
                  <input
                    type="number"
                    value={customVal}
                    onChange={(e) => setCustomVal(e.target.value)}
                    placeholder="Montant libre (FCFA)"
                    className="w-full mb-3 px-3.5 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs font-bold text-ujmah-indigo bg-[#FAF8F5] outline-none"
                    min="100"
                  />
                )}

                <div className="flex justify-between items-baseline mb-4 pt-2 border-t border-ujmah-navy/5">
                  <span className="text-xs text-ujmah-dark-muted font-bold">Total à régler :</span>
                  <div className="text-right">
                    <span className="font-sans font-black text-2xl text-ujmah-navy">
                      {currentFinalAmount.toLocaleString('fr-FR')} FCFA
                    </span>
                    <span className="block text-[11px] text-ujmah-dark-muted font-semibold">
                      (env. {currentEur} €)
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={`/don?category=${activeTab}&amount=${currentFinalAmount}`}
                className="w-full py-3.5 rounded-xl bg-ujmah-orange hover:bg-ujmah-orange-hover text-white font-sans font-bold text-xs shadow-lg shadow-ujmah-orange/25 transition-all text-center flex items-center justify-center gap-2"
              >
                <Heart size={16} fill="currentColor" />
                Valider ce don pour {activeAct.badge}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. DIRECTION & PRÉSIDENCE : CITATION & SIGNATURE (Inspiré Gymnasia Director Section)
          Fond sombre élégant, portrait authentique, Récépissé N° 0315 et Coris Bank
         ========================================================================= */}
      <section className="bg-gradient-to-br from-[#100830] via-[#1E1552] to-[#0B132B] text-white py-20 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 relative overflow-hidden">
        
        {/* Cercles de halo lumineux */}
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-ujmah-sun/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-ujmah-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            
            {/* Colonne Citation */}
            <div className="lg:col-span-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-ujmah-sun flex items-center justify-center mb-6">
                <Quote size={28} />
              </div>

              <blockquote className="font-sans text-xl sm:text-2xl text-white/95 leading-relaxed italic mb-6">
                « L'UJMAH n'est pas une simple association : c'est le serment d'une jeunesse togolaise qui a choisi la fraternité agissante. Votre don n'est pas une transaction, c'est une promesse faite à un orphelin de Yelivo et un secours apporté à un village sans eau. »
              </blockquote>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-sans font-black text-lg text-white">AMIDOU Bilal</p>
                  <p className="text-xs text-amber-200 mt-0.5">Président National de l'UJMAH Togo</p>
                </div>
                <div>
                  <p className="font-sans font-black text-lg text-white">AMOUSSOU Nazif</p>
                  <p className="text-xs text-amber-200 mt-0.5">Directeur Résident de l'Orphelinat de Yelivo</p>
                </div>
              </div>
            </div>

            {/* Colonne Récépissé & Coordonnées Bancaires Officielles */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/15 space-y-4 text-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-ujmah-sun block mb-1">
                ACCRÉDITATION OFFICIELLE TOGO
              </span>
              <div className="border-b border-white/10 pb-3">
                <span className="text-white/60 block text-[10px] uppercase font-semibold">Agrément Ministériel</span>
                <span className="font-sans font-bold text-white text-sm">Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA</span>
              </div>
              <div className="border-b border-white/10 pb-3">
                <span className="text-white/60 block text-[10px] uppercase font-semibold">Devise Officielle</span>
                <span className="font-sans font-bold text-ujmah-sun text-sm">« Servir l'humanité dans l'union »</span>
              </div>
              <div className="border-b border-white/10 pb-3">
                <span className="text-white/60 block text-[10px] uppercase font-semibold">Compte Coris Bank Togo</span>
                <span className="font-mono font-bold text-white text-xs break-all">TG182 01010 008811824401 13</span>
              </div>
              <div>
                <span className="text-white/60 block text-[10px] uppercase font-semibold">Ligne Directe Siège</span>
                <span className="font-sans font-bold text-amber-200 text-sm">+228 92 67 34 00</span>
              </div>
            </div>

          </div>

          {/* Boutons d'Action Final */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/15">
            <a 
              href="/don" 
              className="w-full sm:w-auto text-center bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm shadow-xl shadow-ujmah-orange/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Faire un don en ligne (SasPay / Mobile Money)
            </a>
            <a 
              href="/contact" 
              className="w-full sm:w-auto text-center glass-card-dark text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm border border-white/20 transition-all whitespace-nowrap"
            >
              Contacter le siège à Agoè-Adjougba (+228 92 67 34 00)
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
