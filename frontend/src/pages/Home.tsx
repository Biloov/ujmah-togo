import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Heart, Sparkles, Droplets, Backpack, Utensils, Shield, CheckCircle2, MapPin, Quote, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-28 md:pt-36 pb-20 bg-white min-h-screen text-ujmah-navy">
      
      {/* 1. HERO COUVERTURE MAGAZINE (Asymétrique & Immersif) */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Gauche : Typographie & Accroche Éditoriale */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-ujmah-ivory border border-ujmah-sun/40 text-xs font-sans font-bold text-ujmah-indigo mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-ujmah-orange"></span>
              PORTAIL OFFICIEL DE L'ASSOCIATION UJMAH • TOGO
            </div>

            <h1 className="font-editorial font-extrabold text-4xl sm:text-6xl xl:text-7xl text-ujmah-indigo tracking-tight leading-[1.08] mb-6">
              Servir l'humanité <br />
              <span className="italic font-normal text-ujmah-dark">dans l'union</span>{' '}
              <span className="text-ujmah-orange font-sans font-extrabold not-italic text-3xl sm:text-5xl align-middle">.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed max-w-xl mb-8">
              Depuis le <strong>23 janvier 2003</strong>, l'Union des Jeunes Musulmans pour l'Action Humanitaire œuvre avec rigueur pour l'éducation, la formation éthique, le secours aux démunis et la protection des orphelins à travers le Togo.
            </p>

            {/* CTAs d'Impact */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a 
                href="/don" 
                className="inline-flex items-center justify-center gap-2.5 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-full font-sans font-bold text-sm shadow-xl shadow-ujmah-orange/25 transition-all hover:-translate-y-0.5"
              >
                <Heart size={18} fill="currentColor" />
                Faire un don en ligne
              </a>
              <a 
                href="/qui-sommes-nous" 
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-ujmah-indigo/20 text-ujmah-indigo hover:border-ujmah-indigo hover:bg-ujmah-indigo/5 px-8 py-4 rounded-full font-sans font-bold text-sm transition-all"
              >
                Découvrir l'histoire (2003)
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Micro-Stats Strip */}
            <div className="pt-6 border-t border-ujmah-navy/10 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <span className="font-editorial font-extrabold text-2xl sm:text-3xl text-ujmah-indigo block">23 ans</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-ujmah-navy/60 font-semibold">D'action continue</span>
              </div>
              <div className="border-l border-ujmah-navy/10 pl-6">
                <span className="font-editorial font-extrabold text-2xl sm:text-3xl text-ujmah-orange block">40</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-ujmah-navy/60 font-semibold">Orphelins à Yelivo</span>
              </div>
              <div className="border-l border-ujmah-navy/10 pl-6">
                <span className="font-editorial font-extrabold text-2xl sm:text-3xl text-ujmah-sun block">7</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-ujmah-navy/60 font-semibold">Piliers de terrain</span>
              </div>
            </div>

          </div>

          {/* Colonne Droite : Composition Visuelle Éditoriale */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Cadre Principal avec ombre élégante */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-ujmah-ivory relative group">
                <img 
                  src="/assets/orphanage-yelivo.png" 
                  alt="Enfants de l'Orphelinat UJMAH de Yelivo" 
                  className="w-full h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ujmah-indigo-dark/80 via-transparent to-transparent"></div>
                
                {/* Légende Éditoriale en bas */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-ujmah-sun text-ujmah-indigo text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full mb-2">
                    Reportage • Région Centrale
                  </span>
                  <h3 className="font-editorial font-bold text-xl leading-snug drop-shadow">
                    Orphelinat « MES ENFANTS » à Yelivo
                  </h3>
                  <p className="font-sans text-xs text-white/80 mt-1">
                    Un havre de paix et d'éducation pour 40 orphelins sous la direction d'AMOUSSOU Nazif.
                  </p>
                </div>
              </div>

              {/* Badge flottant en coin */}
              <div className="absolute -top-4 -right-4 bg-ujmah-orange text-white p-4 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center text-center">
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-white/90">Parrainage</span>
                <span className="font-editorial font-extrabold text-lg leading-tight mt-0.5">20 250 F</span>
                <span className="font-sans text-[9px] text-white/80">/ mois / enfant</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. LE MOT DU PRÉSIDENT & MANIFESTE ÉDITORIAL */}
      <section className="bg-ujmah-ivory border-y border-ujmah-navy/5 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            <div className="w-20 h-20 rounded-full bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center flex-shrink-0 shadow-inner">
              <Quote size={36} className="text-ujmah-orange" />
            </div>

            <div className="flex-grow text-center md:text-left">
              <p className="font-editorial italic text-xl sm:text-2xl text-ujmah-indigo leading-relaxed mb-4">
                « L'UJMAH n'est pas une simple association caritative. C'est le témoignage vivant d'une jeunesse togolaise qui a choisi la foi par les actes, la fraternité sans frontière et le dévouement indéfectible auprès des plus démunis. »
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2 text-xs font-sans">
                <span className="font-bold text-ujmah-dark uppercase tracking-wider">AMIDOU Bilal</span>
                <span className="text-ujmah-navy/40 hidden md:inline">•</span>
                <span className="text-ujmah-navy/60 font-medium">Président du Bureau Exécutif de l'UJMAH Togo</span>
              </div>
            </div>

            <a 
              href="/qui-sommes-nous" 
              className="inline-flex items-center gap-2 text-xs font-sans font-bold text-ujmah-orange hover:text-ujmah-orange-hover hover:underline flex-shrink-0"
            >
              Voir la gouvernance
              <ChevronRight size={16} />
            </a>

          </div>
        </div>
      </section>

      {/* 3. GRAND FOCUS ÉDITORIAL : L'ORPHELINAT (Pleine Page Magazine) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-ujmah-indigo via-ujmah-indigo to-ujmah-indigo-dark text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-ujmah-sun/30">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-ujmah-orange text-white text-[10px] font-sans font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
                Grand Chantier du Cœur
              </div>
              <h2 className="font-editorial font-extrabold text-3xl sm:text-5xl text-white mb-6 leading-tight">
                L'Orphelinat « MES ENFANTS » à Yelivo
              </h2>
              
              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Situé dans le village de Yelivo, aux portes de Sokodé (Région Centrale), notre centre prend en charge <strong>40 enfants orphelins et vulnérables</strong>. Sous la direction d'<strong>AMOUSSOU Nazif</strong>, nous garantissons à chaque enfant un foyer stable, trois repas équilibrés par jour, une scolarité complète et un suivi médical rigoureux.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 mb-8 max-w-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-sans text-xs text-ujmah-sun uppercase tracking-wider font-extrabold">Formule Parrainage</span>
                  <span className="font-sans text-xs text-white/70 italic">Nourriture • Scolarité • Soins</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-editorial font-extrabold text-3xl text-white">20 250 FCFA</span>
                  <span className="font-sans text-xs text-white/60">/ mois par orphelin (≈ 31 €)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://pay.genius.ci/d/ujmah-orphelinat?amount=20250" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-3.5 rounded-full font-sans font-bold text-xs shadow-lg shadow-ujmah-orange/25 transition-all"
                >
                  Parrainer un enfant maintenant
                </a>
                <a 
                  href="/orphelinat" 
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-full font-sans font-bold text-xs border border-white/20 transition-all flex items-center gap-2"
                >
                  Lire le dossier complet
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-editorial font-bold text-2xl text-ujmah-sun block mb-1">40 Orphelins</span>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  Accueillis, logés, nourris et vêtus avec amour et bienveillance.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-editorial font-bold text-2xl text-ujmah-sun block mb-1">100% Scolarisés</span>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  Fournitures scolaires, encadrement pédagogique et suivi des résultats.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-editorial font-bold text-2xl text-ujmah-sun block mb-1">Vitrine Autonome</span>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  Projet de plateforme dédiée : <strong className="text-white">orphelinat.ujmah-togo.vercel.app</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NOS DOMAINES D'INTERVENTION (Grille Asymétrique & Rythmée) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-ujmah-navy/10">
          <div>
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Chantiers & Réalisations
            </span>
            <h2 className="font-editorial font-extrabold text-3xl sm:text-5xl text-ujmah-indigo">
              Nos Actions sur le Terrain
            </h2>
          </div>
          <p className="font-sans text-sm text-ujmah-navy/60 max-w-md mt-4 md:mt-0 leading-relaxed">
            Un engagement multidimensionnel au Togo, alliant transmission du savoir, excellence spirituelle et assistance aux plus vulnérables.
          </p>
        </div>

        {/* Mosaïque Éditoriale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Action 1 : CRSC */}
          <div className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between hover:border-ujmah-indigo/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <span className="font-mono text-xs text-ujmah-orange font-bold uppercase tracking-wider">Programme 01</span>
              <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mt-1 mb-3">
                Concours de Coran (CRSC)
              </h3>
              <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                Rassemblement national annuel d'émulation spirituelle et de mémorisation du Saint Coran pour la jeunesse togolaise.
              </p>
            </div>
            <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors mt-6 pt-4 border-t border-ujmah-navy/5">
              En savoir plus <ArrowRight size={14} />
            </a>
          </div>

          {/* Action 2 : SEFIMA */}
          <div className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between hover:border-ujmah-sun/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-sun/20 text-ujmah-indigo flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <span className="font-mono text-xs text-ujmah-orange font-bold uppercase tracking-wider">Programme 02</span>
              <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mt-1 mb-3">
                Séminaire SEFIMA
              </h3>
              <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                Formation intensive des cadres musulmans : management, éthique professionnelle, leadership citoyen et gestion de projet.
              </p>
            </div>
            <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors mt-6 pt-4 border-t border-ujmah-navy/5">
              En savoir plus <ArrowRight size={14} />
            </a>
          </div>

          {/* Action 3 : Assises de Sciences */}
          <div className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between hover:border-ujmah-indigo/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <span className="font-mono text-xs text-ujmah-orange font-bold uppercase tracking-wider">Programme 03</span>
              <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mt-1 mb-3">
                Assises de Sciences
              </h3>
              <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                Cercles d'études et conférences publiques dispensés par des enseignants qualifiés selon la compréhension saine des Salaf As-Salih.
              </p>
            </div>
            <a href="/fondements" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors mt-6 pt-4 border-t border-ujmah-navy/5">
              Voir nos fondements <ArrowRight size={14} />
            </a>
          </div>

          {/* Action 4 : Kits Scolaires */}
          <div className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between hover:border-ujmah-orange/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center mb-6">
                <Backpack size={24} />
              </div>
              <span className="font-mono text-xs text-ujmah-orange font-bold uppercase tracking-wider">Programme 04</span>
              <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mt-1 mb-3">
                Kits Scolaires
              </h3>
              <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                Distribution de fournitures et manuels scolaires à la rentrée pour encourager la scolarisation des démunis et des jeunes filles.
              </p>
            </div>
            <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors mt-6 pt-4 border-t border-ujmah-navy/5">
              En savoir plus <ArrowRight size={14} />
            </a>
          </div>

          {/* Action 5 : Solidarité Alimentaire */}
          <div className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between hover:border-ujmah-sun/40 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-sun/20 text-ujmah-indigo flex items-center justify-center mb-6">
                <Utensils size={24} />
              </div>
              <span className="font-mono text-xs text-ujmah-orange font-bold uppercase tracking-wider">Programme 05</span>
              <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mt-1 mb-3">
                Solidarité Alimentaire
              </h3>
              <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                Partage de viande de Tabaski à domicile et colis de vivres pendant le mois béni de Ramadan pour les familles répertoriées.
              </p>
            </div>
            <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors mt-6 pt-4 border-t border-ujmah-navy/5">
              En savoir plus <ArrowRight size={14} />
            </a>
          </div>

          {/* Action 6 : Hydraulique */}
          <div className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between hover:border-ujmah-indigo/20 transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center mb-6">
                <Droplets size={24} />
              </div>
              <span className="font-mono text-xs text-ujmah-orange font-bold uppercase tracking-wider">Programme 06</span>
              <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mt-1 mb-3">
                Hydraulique Villageoise
              </h3>
              <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                Forages et puits d'eau potable dans les villages isolés du Togo pour lutter contre les maladies hydriques (Sadaqa Jariya).
              </p>
            </div>
            <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors mt-6 pt-4 border-t border-ujmah-navy/5">
              En savoir plus <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* 5. BANDEAU THÉOLOGIQUE NOBLE (Hadith de l'Orphelin) */}
      <section className="bg-ujmah-navy text-white py-20 px-6 border-y-2 border-ujmah-sun/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-white/10 text-ujmah-sun font-sans text-xs uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/10">
            Parole Prophétique Authentique
          </span>
          <blockquote className="font-editorial italic font-extrabold text-2xl sm:text-4xl text-white leading-relaxed mb-6">
            « Moi et celui qui prend en charge l'orphelin serons au Paradis comme ces deux-ci. »
          </blockquote>
          <p className="font-sans text-sm text-white/80 mb-6">
            — Et le Messager d'Allah ﷺ joignit son index et son majeur. (Sahih Al-Bukhari)
          </p>
          <a 
            href="/fondements" 
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-ujmah-sun hover:text-white underline underline-offset-4 transition-colors"
          >
            Découvrir l'ensemble de nos fondements doctrinaux
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* 6. TRANSPARENCE FINANCIÈRE & APPEL AU DON */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-ujmah-navy/10 shadow-xl text-center">
          <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
            Rigueur & Transparence
          </span>
          <h2 className="font-editorial font-extrabold text-3xl sm:text-4xl text-ujmah-indigo mb-4">
            Votre soutien est le moteur de nos actions
          </h2>
          <p className="font-sans text-base text-ujmah-dark-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Chaque don versé à l'UJMAH Togo fait l'objet d'un suivi comptable rigoureux et bénéficie directement aux bénéficiaires répertoriés sur le terrain.
          </p>

          <div className="p-6 rounded-2xl bg-ujmah-ivory border border-ujmah-navy/10 max-w-xl mx-auto text-left mb-8">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-ujmah-navy/60 block mb-1">
              Compte Bancaire Officiel (UEMOA / International)
            </span>
            <p className="font-sans text-sm font-extrabold text-ujmah-indigo">
              CORIS BANK INTERNATIONAL TOGO — ASSOCIATION UJMAH
            </p>
            <p className="font-mono text-sm text-ujmah-orange font-extrabold mt-1">
              RIB : TG182 01010 008811824401 13
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="/don" 
              className="w-full sm:w-auto bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-full font-sans font-bold text-sm shadow-xl shadow-ujmah-orange/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Heart size={18} fill="currentColor" />
              Faire un don en ligne (Tmoney, Flooz, Wave, CB)
            </a>
            <a 
              href="/contact" 
              className="w-full sm:w-auto bg-white border border-ujmah-navy/20 text-ujmah-navy hover:bg-ujmah-gray px-8 py-4 rounded-full font-sans font-bold text-sm transition-all"
            >
              Contacter l'équipe
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
