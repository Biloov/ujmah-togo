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
  Play,
  Award,
  Clock,
  Building,
  Quote,
  Users
} from 'lucide-react';

export default function Home() {
  // Calculateur de parrainage mensuel orphelinat (20 250 FCFA)
  const [sponsorshipMonths, setSponsorshipMonths] = useState<number>(1);
  const baseMonthlyAmount = 20250;

  const currentTotal = baseMonthlyAmount * sponsorshipMonths;
  const currentEur = Math.round(currentTotal / 655.957);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-ujmah-navy selection:bg-ujmah-sun selection:text-ujmah-indigo">
      
      {/* =========================================================================
          1. HERO SECTION (Inspiré fidèlement de la maquette "Markeezo")
          Fond ivoire chaleureux, halo solaire circulaire, cartes métriques flottantes
          Devise officielle : SERVIR L'HUMANITÉ DANS L'UNION
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 px-6 overflow-hidden">
        
        {/* Vagues et auras douces en arrière-plan */}
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-bl from-amber-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] bg-orange-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Colonne Gauche : Titre, Paragraphe & Boutons d'Action */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Badge supérieur harmonisé */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-ujmah-orange text-xs font-bold uppercase tracking-wider mb-6 border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-ujmah-orange animate-pulse"></span>
                ASSOCIATION HUMANITAIRE OFFICIELLE • RÉCÉPISSÉ N° 0315/MATDCL
              </div>

              {/* Titre Principal avec la devise officielle exacte */}
              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl text-ujmah-navy tracking-tight leading-[1.08] mb-6">
                Servir l'humanité <br />
                <span className="text-ujmah-orange">
                  dans l'union
                </span>
                <span className="text-ujmah-indigo">.</span>
              </h1>

              {/* Texte explicatif harmonisé */}
              <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed max-w-xl mb-10">
                Depuis le <strong>23 janvier 2003 au Togo</strong>, l'Union des Jeunes Musulmans pour l'Action Humanitaire œuvre pour l'éducation, la formation éthique de la jeunesse, le secours aux nécessiteux, l'hydraulique villageoise et la prise en charge intégrale des <strong>40 orphelins de Yelivo</strong>.
              </p>

              {/* Boutons d'action harmonisés (Bouton orange + Bouton cercle play) */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a 
                  href="/don" 
                  className="inline-flex items-center justify-center gap-2.5 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-ujmah-orange/25 hover:shadow-ujmah-orange/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart size={18} fill="currentColor" />
                  Faire un don en ligne
                </a>

                <a 
                  href="/qui-sommes-nous" 
                  className="inline-flex items-center gap-3 text-ujmah-indigo hover:text-ujmah-orange font-bold text-sm px-4 py-3 rounded-xl transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-white shadow-md border border-ujmah-navy/10 flex items-center justify-center group-hover:scale-105 group-hover:border-ujmah-orange transition-all">
                    <Play size={16} fill="currentColor" className="text-ujmah-orange ml-0.5" />
                  </div>
                  <span>Découvrir notre histoire (2003)</span>
                </a>
              </div>

            </div>

            {/* Colonne Droite : Composition Visuelle avec Grand Disque Solaire & Cartes Flottantes */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Grand Disque Solaire d'Arrière-Plan */}
                <div className="absolute inset-0 m-auto w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-gradient-to-tr from-ujmah-orange via-ujmah-sun to-amber-200 shadow-2xl opacity-90"></div>

                {/* Photo Centrale Découpée en cercle élégant */}
                <div className="relative z-10 w-[290px] sm:w-[340px] h-[290px] sm:h-[340px] rounded-full overflow-hidden border-4 border-white shadow-2xl bg-ujmah-ivory">
                  <img 
                    src="/assets/orphanage-yelivo.png" 
                    alt="Orphelinat Yelivo UJMAH" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Badge Flottant 1 (Haut Droite) */}
                <div className="absolute -top-2 right-0 sm:-right-4 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-ujmah-navy/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-ujmah-orange flex items-center justify-center">
                    <Users size={18} />
                  </div>
                  <div>
                    <span className="font-black text-sm text-ujmah-navy block leading-none">40 Enfants</span>
                    <span className="text-[10px] text-ujmah-dark-muted font-medium">Orphelinat Yelivo</span>
                  </div>
                </div>

                {/* Badge Flottant 2 (Milieu Gauche) */}
                <div className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-ujmah-navy/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="font-black text-sm text-ujmah-indigo block leading-none">23+ Ans</span>
                    <span className="text-[10px] text-ujmah-dark-muted font-medium">D'actions continues</span>
                  </div>
                </div>

                {/* Badge Flottant 3 (Bas Droite) */}
                <div className="absolute -bottom-4 right-2 sm:right-0 z-20 bg-white rounded-2xl p-3.5 shadow-xl border border-ujmah-navy/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="font-black text-sm text-emerald-600 block leading-none">100% Direct</span>
                    <span className="text-[10px] text-ujmah-dark-muted font-medium">Transparence totale</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. BANDEAU BLANC FLOTTANT D'AUTORITÉ & PARTENAIRES (Island Card)
         ========================================================================= */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-6 mb-24">
        <div className="bg-white rounded-3xl shadow-xl shadow-ujmah-navy/5 border border-ujmah-navy/10 p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-ujmah-dark-muted">
              Cadre Légal & Ancrage Institutionnel au Togo
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-ujmah-navy/10 text-center">
            
            <div className="pt-2 md:pt-0 px-4">
              <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Ministère MATDCL</span>
              <span className="font-mono text-xs font-extrabold text-ujmah-orange mt-0.5 block">Récépissé N° 0315</span>
            </div>

            <div className="pt-4 md:pt-0 px-4">
              <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Siège National</span>
              <span className="text-xs font-extrabold text-ujmah-indigo mt-0.5 block">Agoè-Adjougba (100m BOXBERG)</span>
            </div>

            <div className="pt-4 md:pt-0 px-4">
              <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Banque Partenaire</span>
              <span className="text-xs font-extrabold text-ujmah-navy mt-0.5 block">Coris Bank International Togo</span>
            </div>

            <div className="pt-4 md:pt-0 px-4">
              <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Centre Orphelinat</span>
              <span className="text-xs font-extrabold text-emerald-600 mt-0.5 block">Village de Yelivo (Sokodé)</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SECTION "QUI SOMMES-NOUS" (Arche Visuelle Asymétrique)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Gauche : Arche Visuelle Découpée + Badge 23+ Ans */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Arche Découpée */}
              <div className="rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-50 relative aspect-[4/5]">
                <img 
                  src="/assets/sefima-weaving.png" 
                  alt="Membres et Jeunes de l'UJMAH" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ujmah-navy/60 via-transparent to-transparent"></div>
              </div>

              {/* Badge Circulaire Flottant "23+ Ans" */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white rounded-3xl p-5 shadow-2xl border border-ujmah-navy/10 flex flex-col items-center justify-center text-center w-28 h-28 sm:w-32 sm:h-32">
                <span className="font-sans font-black text-3xl sm:text-4xl text-ujmah-orange leading-none">23+</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-ujmah-navy uppercase tracking-wider mt-1 leading-tight">
                  Ans d'actions continues
                </span>
              </div>

            </div>
          </div>

          {/* Colonne Droite : Textes & Lignes de Preuves */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-8">
            
            <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-3 block">
              QUI SOMMES-NOUS ?
            </span>

            <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight leading-tight mb-6">
              Une jeunesse engagée, <br />
              <span className="text-ujmah-indigo">des actions concrètes sur le terrain.</span>
            </h2>

            <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed mb-8">
              Fondée le <strong>23 janvier 2003 à Agoè-Houmbi (Lomé)</strong>, l'UJMAH rassemble des élèves, des étudiants et des cadres musulmans mobilisés pour traduire les valeurs d'entraide, de fraternité et d'éthique en résultats tangibles et pérennes pour le Togo.
            </p>

            {/* 2 Lignes de caractéristiques avec icônes */}
            <div className="space-y-6 w-full mb-10">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-ujmah-orange flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-ujmah-navy">
                    Éducation, Éthique & Leadership Jeunesse
                  </h4>
                  <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mt-0.5">
                    Concours national de récitation du Saint Coran (CRSC), séminaires managériaux SEFIMA et cercles d'études authentiques selon les pieux prédécesseurs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center flex-shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-ujmah-navy">
                    Secours aux Orphelins & Hydraulique Villageoise
                  </h4>
                  <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mt-0.5">
                    Prise en charge intégrale des 40 pensionnaires du centre « MES ENFANTS » à Yelivo, forages de puits d'eau potable et colis alimentaires de solidarité.
                  </p>
                </div>
              </div>

            </div>

            <a 
              href="/qui-sommes-nous" 
              className="inline-flex items-center gap-2 bg-ujmah-indigo hover:bg-ujmah-indigo-dark text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              Découvrir la gouvernance complète (10 membres)
              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICES / PILIERS (Les 4 Cartes dont la 1ère Mise en Valeur en Orange)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-20">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
            NOS DOMAINES D'INTERVENTION
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight">
            Une action globale au service de l'homme
          </h2>
        </div>

        {/* Grille des 4 Cartes (1ère carte en dégradé orange/soleil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* CARTE 1 MISE EN VALEUR : Orphelinat de Yelivo (Fond Orange Chaud) */}
          <div className="rounded-3xl bg-gradient-to-br from-ujmah-orange to-[#f57c00] text-white p-6 sm:p-7 shadow-2xl flex flex-col justify-between transform lg:-translate-y-2">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200 block mb-1">
                Chantier Prioritaire
              </span>
              <h3 className="font-sans font-black text-xl text-white mb-2">
                Orphelinat Yelivo
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-6">
                40 enfants orphelins pris en charge à 100% : hébergement, alimentation équilibrée, scolarité et soins médicaux sous la direction de Nazif AMOUSSOU.
              </p>

              {/* Mini Calculateur de Parrainage */}
              <div className="bg-black/15 backdrop-blur-sm rounded-xl p-3.5 mb-4 border border-white/20">
                <span className="text-[10px] text-white/80 block uppercase font-bold mb-1">Formule Parrainage</span>
                <span className="font-black text-2xl text-white block">20 250 FCFA</span>
                <span className="text-[10px] text-amber-100">/ mois par enfant (≈ 31 €)</span>
              </div>
            </div>

            <a 
              href="https://pay.genius.ci/d/ujmah-orphelinat?amount=20250"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-white text-ujmah-orange hover:bg-amber-50 font-bold text-xs py-3 rounded-xl transition-all shadow-md block mt-4"
            >
              Parrainer un enfant
            </a>
          </div>

          {/* CARTE 2 (Blanche) : Concours de Coran */}
          <div className="rounded-3xl bg-white border border-ujmah-navy/10 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-ujmah-orange flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-ujmah-dark-muted block mb-1">
                Programme #01
              </span>
              <h3 className="font-sans font-black text-xl text-ujmah-navy mb-2">
                Concours de Coran (CRSC)
              </h3>
              <p className="text-xs text-ujmah-dark-muted leading-relaxed mb-6">
                Compétition annuelle nationale et régionale d'émulation spirituelle pour la récitation et la mémorisation du Saint Coran.
              </p>
            </div>
            <a 
              href="/actions" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors"
            >
              En savoir plus <ChevronRight size={14} />
            </a>
          </div>

          {/* CARTE 3 (Blanche) : Séminaires SEFIMA */}
          <div className="rounded-3xl bg-white border border-ujmah-navy/10 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-ujmah-orange flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-ujmah-dark-muted block mb-1">
                Programme #02
              </span>
              <h3 className="font-sans font-black text-xl text-ujmah-navy mb-2">
                Séminaires SEFIMA
              </h3>
              <p className="text-xs text-ujmah-dark-muted leading-relaxed mb-6">
                Formation islamique et managériale intensive des cadres : leadership citoyen, gestion associative et éthique professionnelle.
              </p>
            </div>
            <a 
              href="/actions" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors"
            >
              En savoir plus <ChevronRight size={14} />
            </a>
          </div>

          {/* CARTE 4 (Blanche) : Solidarité & Forages */}
          <div className="rounded-3xl bg-white border border-ujmah-navy/10 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-ujmah-orange flex items-center justify-center mb-6">
                <Droplets size={24} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-ujmah-dark-muted block mb-1">
                Programme #03
              </span>
              <h3 className="font-sans font-black text-xl text-ujmah-navy mb-2">
                Hydraulique & Vivres
              </h3>
              <p className="text-xs text-ujmah-dark-muted leading-relaxed mb-6">
                Forages de puits d'eau potable dans les villages (Sadaqa Jariya), partage de viande de Tabaski et colis alimentaires de Ramadan.
              </p>
            </div>
            <a 
              href="/actions" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors"
            >
              En savoir plus <ChevronRight size={14} />
            </a>
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. BANDEAU DE FOND SOMBRE AVEC CHIFFRES CLÉS
         ========================================================================= */}
      <section className="bg-gradient-to-br from-[#100830] via-[#1E1552] to-[#0B132B] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <span className="text-xs font-bold uppercase tracking-widest text-ujmah-sun mb-4 block">
            ENGAGEMENT CITOYEN & SOLIDAIRE
          </span>

          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Servir l'humanité dans l'union, <br />
            auprès des orphelins et des démunis du Togo.
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-14 leading-relaxed">
            « L'UJMAH est le témoignage vivant d'une jeunesse qui a choisi la foi par les actes, l'excellence citoyenne et la fraternité sans frontière. » — <strong>AMIDOU Bilal</strong>, Président de l'UJMAH Togo.
          </p>

          {/* 3 Chiffres Clés en Bas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-3xl mx-auto mb-10">
            <div>
              <span className="font-sans font-black text-4xl sm:text-5xl text-ujmah-sun block leading-none mb-2">
                23+
              </span>
              <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                Années d'action continue
              </span>
            </div>

            <div>
              <span className="font-sans font-black text-4xl sm:text-5xl text-ujmah-orange block leading-none mb-2">
                40
              </span>
              <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                Orphelins à Yelivo
              </span>
            </div>

            <div>
              <span className="font-sans font-black text-4xl sm:text-5xl text-white block leading-none mb-2">
                100%
              </span>
              <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                Transparence financière
              </span>
            </div>
          </div>

          {/* Actions finales */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="/don" 
              className="bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-ujmah-orange/25 transition-all"
            >
              Faire un don
            </a>
            <a 
              href="/contact" 
              className="glass-card-dark text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-sm border border-white/20 transition-all"
            >
              Contacter le siège (+228 92 67 34 00)
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
