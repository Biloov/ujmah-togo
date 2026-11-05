import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Droplets, 
  Backpack, 
  Utensils, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ChevronRight,
  ExternalLink,
  Users,
  Award,
  Clock,
  Building,
  Quote
} from 'lucide-react';

export default function Home() {
  // Calculateur interactif pour le parrainage de l'orphelinat
  const [sponsorshipMonths, setSponsorshipMonths] = useState<number>(1);
  const baseMonthlyAmount = 20250; // FCFA par mois confirmé par la direction

  const sponsorshipOptions = [
    { months: 1, label: "1 Mois", tag: "Essentiel", amount: baseMonthlyAmount },
    { months: 3, label: "1 Trimestre", tag: "Recommandé", amount: baseMonthlyAmount * 3 },
    { months: 6, label: "1 Semestre", tag: "Impact Fort", amount: baseMonthlyAmount * 6 },
    { months: 12, label: "1 An Complet", tag: "Parrain Majeur", amount: baseMonthlyAmount * 12 },
  ];

  const currentTotal = baseMonthlyAmount * sponsorshipMonths;
  const currentEur = Math.round(currentTotal / 655.957);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-ujmah-navy selection:bg-ujmah-sun selection:text-ujmah-indigo">
      
      {/* =========================================================================
          1. HERO IMMERSIF NOUVELLE GÉNÉRATION (Style Dribbble / Nexora)
          Fond indigo/navy nuit, nébuleuse solaire jaune/orange, typographie sans-serif audacieuse
         ========================================================================= */}
      <section className="relative hero-mesh-bg text-white pt-36 md:pt-44 pb-28 md:pb-36 overflow-hidden">
        
        {/* Cercles de diffusion lumineuse d'ambiance */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-ujmah-sun/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-ujmah-orange/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Colonne Gauche : Accroche & Vision */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Badge flottant institutionnel */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card-dark text-xs font-semibold tracking-wide text-white/90 mb-8 border border-white/15 shadow-lg shadow-black/20">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ujmah-sun opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ujmah-sun"></span>
                </span>
                <span>RÉCÉPISSÉ N° 0315/MATDCL • 23 ANS D'ENGAGEMENT HUMANITAIRE</span>
              </div>

              {/* Titre Principal percutant */}
              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.05] mb-6 text-white">
                Servir l'humanité <br />
                <span className="bg-gradient-to-r from-ujmah-sun via-ujmah-sun-light to-ujmah-orange bg-clip-text text-transparent">
                  dans l'union.
                </span>
              </h1>

              {/* Paragraphe d'impact */}
              <p className="font-sans text-base sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 font-normal">
                Fondée le <strong>23 janvier 2003</strong> au Togo, l'Union des Jeunes Musulmans pour l'Action Humanitaire allie formation éthique, excellence de la jeunesse, secours d'urgence et protection durable des <strong>40 orphelins de Yelivo</strong>.
              </p>

              {/* CTAs d'action directe */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <a 
                  href="/don" 
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-ujmah-orange to-[#f07b1d] hover:to-ujmah-orange text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-ujmah-orange/30 hover:shadow-ujmah-orange/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart size={20} fill="currentColor" />
                  Soutenir nos actions
                </a>
                
                <a 
                  href="/qui-sommes-nous" 
                  className="inline-flex items-center justify-center gap-2.5 glass-card-dark hover:bg-white/10 text-white px-7 py-4 rounded-2xl font-semibold text-base border border-white/20 transition-all duration-300"
                >
                  Découvrir notre histoire
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Reassurance strip */}
              <div className="flex items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-ujmah-sun" />
                  Gouvernance certifiée
                </span>
                <span>•</span>
                <span>100% de transparence financière</span>
                <span>•</span>
                <span>Siège : Agoè-Adjougba</span>
              </div>

            </div>

            {/* Colonne Droite : Carte Immersive Orphelinat Yelivo */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Cadre Visuel Principal */}
                <div className="relative rounded-3xl overflow-hidden glass-card-dark border border-white/20 shadow-2xl p-3 bg-white/5">
                  <div className="relative rounded-2xl overflow-hidden h-[420px]">
                    <img 
                      src="/assets/orphanage-yelivo.png" 
                      alt="Orphelinat Yelivo UJMAH" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=900";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/30"></div>

                    {/* Badge Haut Image */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ujmah-orange/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-white shadow-md">
                        <MapPin size={12} />
                        Yelivo • Région Centrale
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white/90">
                        40 Enfants
                      </span>
                    </div>

                    {/* Bas Image : Information Centre */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] uppercase tracking-wider text-ujmah-sun font-extrabold block mb-1">
                        Chantier Prioritaire
                      </span>
                      <h3 className="font-sans font-black text-2xl leading-snug mb-2">
                        Orphelinat « MES ENFANTS »
                      </h3>
                      <p className="text-xs text-white/80 leading-relaxed line-clamp-2">
                        Prise en charge complète sous la direction de Nazif AMOUSSOU : hébergement, alimentation, scolarisation et santé.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Badge Flottant en bas à gauche : Formule parrainage */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-card-light text-ujmah-navy p-4 rounded-2xl shadow-2xl border border-white/60 hidden sm:flex items-center gap-4 max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-ujmah-orange/15 text-ujmah-orange flex items-center justify-center flex-shrink-0">
                    <Heart size={24} fill="currentColor" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-ujmah-dark-muted block">
                      Parrainage mensuel
                    </span>
                    <span className="text-xl font-black text-ujmah-indigo block leading-none mt-0.5">
                      20 250 FCFA
                    </span>
                    <span className="text-[10px] text-ujmah-orange font-semibold">
                      Nourriture • Scolarité • Soins
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. BANDEAU DE STATISTIQUES FLOTTANT (Overlapping Glass Bar)
          Fait le pont élégant entre le Hero sombre et le reste du site
         ========================================================================= */}
      <section className="relative z-20 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-ujmah-navy/5 border border-ujmah-navy/10 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-ujmah-navy/10">
            
            <div className="pt-2 sm:pt-0 sm:px-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <span className="font-sans font-black text-2xl sm:text-3xl text-ujmah-indigo block leading-none">
                  23 Ans
                </span>
                <span className="text-xs text-ujmah-dark-muted font-medium mt-1 block">
                  D'action continue (depuis 2003)
                </span>
              </div>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <span className="font-sans font-black text-2xl sm:text-3xl text-ujmah-orange block leading-none">
                  40 Enfants
                </span>
                <span className="text-xs text-ujmah-dark-muted font-medium mt-1 block">
                  Pris en charge à Yelivo
                </span>
              </div>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-sun/20 text-ujmah-navy flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-ujmah-orange" />
              </div>
              <div>
                <span className="font-sans font-black text-2xl sm:text-3xl text-ujmah-navy block leading-none">
                  N° 0315
                </span>
                <span className="text-xs text-ujmah-dark-muted font-medium mt-1 block">
                  Récépissé Officiel MATDCL
                </span>
              </div>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="font-sans font-black text-2xl sm:text-3xl text-emerald-600 block leading-none">
                  100%
                </span>
                <span className="text-xs text-ujmah-dark-muted font-medium mt-1 block">
                  Dons alloués aux bénéficiaires
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MODULE INTERACTIF : PARRAINAGE DE L'ORPHELINAT « MES ENFANTS »
          Calculateur dynamique, ventilation des frais, engagement immédiat
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ujmah-orange/10 text-ujmah-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Heart size={14} fill="currentColor" />
            Parrainage Solidaire & Transparent
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-indigo tracking-tight mb-4">
            Un Avenir Digne pour les 40 Orphelins de Yelivo
          </h2>
          <p className="text-base text-ujmah-dark-muted leading-relaxed">
            Situé près de Sokodé en Région Centrale, notre orphelinat assure à chaque enfant un cadre chaleureux, une éducation suivie et une alimentation saine.
          </p>
        </div>

        {/* Bloc Calculateur & Présentation */}
        <div className="bg-white rounded-3xl border border-ujmah-navy/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Colonne Gauche : Calculateur de Parrainage */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-ujmah-navy/10">
                <div>
                  <h3 className="font-sans font-bold text-xl text-ujmah-indigo">
                    Choisissez votre durée d'engagement
                  </h3>
                  <p className="text-xs text-ujmah-dark-muted mt-0.5">
                    Coût officiel validé : <strong>20 250 FCFA / mois / enfant</strong>
                  </p>
                </div>
                <span className="text-xs font-bold text-ujmah-orange bg-ujmah-orange/10 px-3 py-1 rounded-full">
                  Direct Yelivo
                </span>
              </div>

              {/* Sélecteurs de durée */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {sponsorshipOptions.map((opt) => {
                  const isSelected = sponsorshipMonths === opt.months;
                  return (
                    <button
                      key={opt.months}
                      onClick={() => setSponsorshipMonths(opt.months)}
                      className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                        isSelected 
                          ? "bg-ujmah-indigo text-white border-ujmah-indigo shadow-md scale-[1.02]" 
                          : "bg-ujmah-ivory hover:bg-white text-ujmah-navy border-ujmah-navy/10"
                      }`}
                    >
                      <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                        isSelected ? "text-ujmah-sun" : "text-ujmah-orange"
                      }`}>
                        {opt.tag}
                      </span>
                      <span className="font-black text-sm">{opt.label}</span>
                      <span className={`text-[11px] mt-1 ${isSelected ? "text-white/80" : "text-ujmah-dark-muted"}`}>
                        {(opt.amount).toLocaleString('fr-FR')} F
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Ce que finance votre don */}
              <div className="bg-ujmah-ivory rounded-2xl p-5 mb-8 border border-ujmah-navy/5">
                <span className="text-xs font-bold text-ujmah-indigo uppercase tracking-wider block mb-3">
                  Ce que votre don de {currentTotal.toLocaleString('fr-FR')} FCFA finance :
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ujmah-dark-muted">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-ujmah-orange flex-shrink-0 mt-0.5" />
                    <span><strong>Nourriture</strong> : 3 repas quotidiens équilibrés</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-ujmah-orange flex-shrink-0 mt-0.5" />
                    <span><strong>Scolarité</strong> : Frais d'école, uniformes et fournitures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-ujmah-orange flex-shrink-0 mt-0.5" />
                    <span><strong>Santé</strong> : Visites médicales, pharmacie & soins d'urgence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total & Action de don */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-ujmah-navy/10">
              <div>
                <span className="text-xs text-ujmah-dark-muted font-medium block">
                  Montant total de votre parrainage
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-ujmah-indigo">
                    {currentTotal.toLocaleString('fr-FR')} FCFA
                  </span>
                  <span className="text-xs text-ujmah-dark-muted font-semibold">
                    (env. {currentEur} €)
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <a 
                  href={`https://pay.genius.ci/d/ujmah-orphelinat?amount=${currentTotal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-7 py-4 rounded-xl font-bold text-sm shadow-lg shadow-ujmah-orange/25 transition-all"
                >
                  <Heart size={16} fill="currentColor" />
                  Valider mon don
                </a>
                <a 
                  href="/orphelinat"
                  className="inline-flex items-center justify-center p-4 rounded-xl border border-ujmah-navy/15 text-ujmah-indigo hover:bg-ujmah-ivory transition-all"
                  title="Voir la page de l'orphelinat"
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Colonne Droite : Direction & Transparence */}
          <div className="lg:col-span-5 bg-gradient-to-br from-ujmah-indigo to-ujmah-indigo-dark text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-ujmah-sun text-xs font-bold uppercase tracking-wider mb-6">
                <Building size={14} />
                Gestion & Encadrement Local
              </div>

              <h4 className="font-sans font-black text-2xl text-white mb-4">
                Un suivi humain au plus près des enfants
              </h4>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                L'orphelinat est administré sous la direction de M. <strong>Nazif AMOUSSOU</strong>. Chaque enfant bénéficie d'une attention bienveillante pour grandir dans la sérénité et réussir son parcours scolaire.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/70">Effectif actuel</span>
                  <span className="font-bold text-ujmah-sun text-sm">40 Filles & Garçons</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/70">Taux de scolarisation</span>
                  <span className="font-bold text-white text-sm">100% des enfants</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/70">Futur portail dédié</span>
                  <span className="font-mono text-xs text-ujmah-sun font-semibold">orphelinat.ujmah-togo.vercel.app</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 text-xs text-white/60">
              Besoin de renseignements sur les enfants ou d'une visite sur place ? Contactez le bureau national au <strong>+228 92 67 34 00</strong>.
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          4. GRILLE BENTO ASYMÉTRIQUE : NOS DOMAINES D'INTERVENTION
          Remplace les boîtes rectangulaires répétitives par une hiérarchie visuelle rythmée
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Piliers Stratégiques
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-indigo tracking-tight">
              Nos Actions de Terrain au Togo
            </h2>
          </div>
          <p className="text-sm text-ujmah-dark-muted max-w-md mt-4 md:mt-0 leading-relaxed">
            De la mémorisation du Saint Coran au forage de puits d'eau potable, découvrez nos programmes structurants.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento 1 (Large - 8 colonnes) : Concours de Coran (CRSC & CNRSC) */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-[#1E1552] to-ujmah-navy text-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-ujmah-sun/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-ujmah-sun text-ujmah-indigo text-xs font-black uppercase tracking-wider">
                  Programme Phare #01
                </span>
                <GraduationCap size={28} className="text-ujmah-sun" />
              </div>
              <h3 className="font-sans font-black text-2xl sm:text-4xl text-white mb-4">
                Concours Régional & National de Récitation du Saint Coran (CRSC / CNRSC)
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Le plus grand rassemblement annuel d'émulation spirituelle pour la jeunesse musulmane au Togo. Un accompagnement rigoureux pour la maîtrise des règles de tajweed et la transmission des valeurs morales de l'Islam.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-xs text-white/70">
                <span>✦ Des centaines de candidats formés</span>
                <span>✦ Prix & bourses d'études attribués</span>
              </div>
              <a 
                href="/actions" 
                className="inline-flex items-center gap-2 text-xs font-bold text-ujmah-sun hover:text-white transition-colors"
              >
                Explorer l'historique du concours
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Bento 2 (Tall - 4 colonnes) : Séminaire SEFIMA */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-ujmah-navy/10 p-8 flex flex-col justify-between hover:shadow-xl hover:border-ujmah-orange/30 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <span className="text-[11px] font-bold text-ujmah-orange uppercase tracking-wider block mb-1">
                Programme #02
              </span>
              <h3 className="font-sans font-black text-2xl text-ujmah-indigo mb-3">
                Séminaires SEFIMA
              </h3>
              <p className="text-sm text-ujmah-dark-muted leading-relaxed">
                Formation islamique et managériale des cadres et étudiants. Leadership citoyen, gestion associative et éthique dans le monde professionnel contemporain.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-ujmah-navy/5">
              <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors">
                Programme des sessions <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Bento 3 (4 colonnes) : Assises de Sciences */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-ujmah-navy/10 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <span className="text-[11px] font-bold text-ujmah-indigo uppercase tracking-wider block mb-1">
                Programme #03
              </span>
              <h3 className="font-sans font-black text-2xl text-ujmah-indigo mb-3">
                Assises de Sciences
              </h3>
              <p className="text-sm text-ujmah-dark-muted leading-relaxed">
                Cercles d'études authentiques dispensés par des enseignants qualifiés selon la compréhension saine des pieux prédécesseurs (<em>Salaf As-Salih</em>).
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-ujmah-navy/5">
              <a href="/fondements" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors">
                Consulter nos fondements <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Bento 4 (4 colonnes) : Kits Scolaires */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-ujmah-navy/10 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <Backpack size={24} />
              </div>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                Programme #04
              </span>
              <h3 className="font-sans font-black text-2xl text-ujmah-indigo mb-3">
                Kits Scolaires
              </h3>
              <p className="text-sm text-ujmah-dark-muted leading-relaxed">
                Distribution annuelle de sacs, cahiers et fournitures à la rentrée pour briser le cercle de la déscolarisation chez les enfants défavorisés.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-ujmah-navy/5">
              <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors">
                Campagne de rentrée <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Bento 5 (4 colonnes) : Solidarité & Forages d'Eau */}
          <div className="lg:col-span-4 rounded-3xl bg-ujmah-ivory border border-ujmah-navy/10 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                <Droplets size={24} />
              </div>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Programme #05 & #06
              </span>
              <h3 className="font-sans font-black text-2xl text-ujmah-indigo mb-3">
                Eau & Solidarité
              </h3>
              <p className="text-sm text-ujmah-dark-muted leading-relaxed">
                Forages de puits d'eau potable dans les villages (<em>Sadaqa Jariya</em>) et distribution de viande de Tabaski et vivres de Ramadan aux foyers vulnérables.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-ujmah-navy/5">
              <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors">
                Voir les réalisations <ChevronRight size={16} />
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. PAROLE DU PRÉSIDENT & INSTITUTION
          Citation percutante du président AMIDOU Bilal et transparence institutionnelle
         ========================================================================= */}
      <section className="bg-white border-y border-ujmah-navy/10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-3 flex justify-center">
              <div className="w-28 h-28 rounded-3xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center shadow-inner relative">
                <Quote size={48} className="text-ujmah-orange opacity-80" />
              </div>
            </div>

            <div className="md:col-span-9 text-center md:text-left">
              <p className="font-sans font-medium text-xl sm:text-2xl text-ujmah-indigo leading-relaxed mb-6">
                « L'UJMAH n'est pas une simple association caritative. C'est l'incarnation d'une jeunesse togolaise qui a choisi la foi par les actes concrets, la rigueur dans la gestion et le dévouement indéfectible auprès des orphelins et des démunis. »
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <span className="font-black text-sm uppercase tracking-wider text-ujmah-navy">
                  AMIDOU Bilal
                </span>
                <span className="hidden sm:inline text-ujmah-navy/30">•</span>
                <span className="text-xs text-ujmah-dark-muted font-semibold">
                  Président du Bureau Exécutif de l'UJMAH Togo
                </span>
                <span className="hidden sm:inline text-ujmah-navy/30">•</span>
                <a 
                  href="/qui-sommes-nous" 
                  className="text-xs font-bold text-ujmah-orange hover:underline inline-flex items-center gap-1"
                >
                  Voir l'équipe complète des 10 membres
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BANDEAU DE CONTACT RAPIDE & COORDONNÉES OFFICIELLES
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-ujmah-indigo-dark to-ujmah-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-ujmah-sun uppercase tracking-wider block mb-2">
              Siège Social & Contact Direct
            </span>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mb-2">
              Une question, un partenariat, une visite ?
            </h3>
            <p className="text-sm text-white/80 max-w-xl">
              Siège : <strong>Agoè-Adjougba, à 100m de BOXBERG</strong>, Lomé, Togo. Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
            <a 
              href="tel:+22892673400" 
              className="inline-flex items-center justify-center gap-2 bg-ujmah-sun text-ujmah-indigo px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-ujmah-sun-light transition-all shadow-lg"
            >
              <Phone size={16} />
              +228 92 67 34 00
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 glass-card-dark text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/20 transition-all"
            >
              Écrire au Bureau
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
