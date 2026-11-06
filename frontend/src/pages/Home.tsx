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
  Check
} from 'lucide-react';

export default function Home() {
  const [sponsorshipMonths, setSponsorshipMonths] = useState<number>(1);
  const baseMonthlyAmount = 20250;
  const currentTotal = baseMonthlyAmount * sponsorshipMonths;
  const currentEur = Math.round(currentTotal / 655.957);

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-ujmah-navy selection:bg-ujmah-sun selection:text-ujmah-indigo">
      
      {/* =========================================================================
          1. HERO HUMAIN & CHALEUREUX
          Pas de jargon marketing abstrait : un message sincère, touchant, fraternel
         ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 overflow-hidden">
        
        {/* Douce lumière d'ambiance en arrière-plan */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-amber-100/70 via-amber-50/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-[30rem] h-[30rem] bg-orange-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Colonne Gauche : Paroles du Cœur */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-200/80 shadow-xs text-xs font-bold text-ujmah-indigo mb-6">
                <span className="w-2 h-2 rounded-full bg-ujmah-orange animate-pulse"></span>
                <span>Auprès des orphelins et des familles du Togo depuis 2003</span>
              </div>

              <h1 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl text-ujmah-navy tracking-tight leading-[1.08] mb-6">
                Servir l'humanité <br />
                <span className="text-ujmah-orange">dans l'union</span>
                <span className="text-ujmah-indigo">.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed max-w-xl mb-6">
                Aucun enfant ne devrait grandir sans amour, ni quitter l'école faute de cahiers. À Lomé, dans le village de Yelivo et dans les hameaux isolés, nous sommes une famille de bénévoles et de donateurs unie pour tendre la main à ceux que la vie a éprouvés.
              </p>

              {/* Rassurance locale sincère */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-ujmah-dark-muted mb-8 pb-6 border-b border-ujmah-navy/10 w-full max-w-xl">
                <span className="flex items-center gap-1.5 text-ujmah-indigo">
                  <MapPin size={15} className="text-ujmah-orange" />
                  Siège à Agoè-Adjougba (Lomé)
                </span>
                <span>•</span>
                <span>40 orphelins hébergés à Yelivo</span>
                <span>•</span>
                <span>23 ans de dévouement bénévole</span>
              </div>

              {/* Appels à l'action chaleureux */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a 
                  href="/don?category=orphelinat&amount=20250" 
                  className="inline-flex items-center justify-center gap-2.5 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-ujmah-orange/25 hover:shadow-ujmah-orange/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart size={18} fill="currentColor" />
                  Parrainer un enfant de Yelivo
                </a>

                <a 
                  href="/qui-sommes-nous" 
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-ujmah-indigo border border-ujmah-navy/15 px-6 py-4 rounded-2xl font-bold text-sm transition-all shadow-xs"
                >
                  Notre histoire vécue
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>

            {/* Colonne Droite : Le Foyer de Yelivo en Image Authentique */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Cadre Photographique Chaleureux */}
                <div className="bg-white p-3.5 sm:p-4 rounded-3xl shadow-xl border border-ujmah-navy/10 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-amber-50">
                    <img 
                      src="/assets/orphanage-yelivo.png" 
                      alt="Le centre orphelinat de Yelivo près de Sokodé" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Légende photo sur l'image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block bg-ujmah-orange text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                        Village de Yelivo • Sokodé
                      </span>
                      <p className="font-sans font-bold text-sm leading-snug">
                        Orphelinat « MES ENFANTS »
                      </p>
                      <p className="text-[11px] text-white/80 mt-0.5">
                        Un foyer protecteur pour 40 filles et garçons sous le regard bienveillant de Nazif AMOUSSOU.
                      </p>
                    </div>
                  </div>

                  {/* Note chaleureuse sous la photo */}
                  <div className="pt-3.5 px-2 flex items-center justify-between text-xs text-ujmah-dark-muted">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Smile size={16} className="text-amber-500" />
                      40 pensionnaires scolarisés
                    </span>
                    <a href="/orphelinat" className="text-ujmah-orange font-bold hover:underline flex items-center gap-0.5">
                      Voir leur quotidien <ChevronRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Petite étiquette manuscrite flottante */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-ujmah-indigo text-white p-4 rounded-2xl shadow-xl hidden sm:block max-w-[220px]">
                  <p className="text-[11px] text-amber-200 font-bold uppercase tracking-wider">Un geste simple :</p>
                  <p className="text-xs font-semibold leading-relaxed mt-0.5 text-white/90">
                    675 F par jour suffisent pour nourrir et scolariser un orphelin.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          2. UNE RELATION DE CONFIANCE : D'OÙ NOUS VENONS
          Pas de tableau de logos froids : l'histoire humaine de la création
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16">
        <div className="bg-white rounded-3xl border border-ujmah-navy/10 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
                NOTRE HISTOIRE VÉCUE
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-ujmah-navy mb-4 leading-tight">
                Tout a commencé un 23 janvier 2003 sous un hangar d'Agoè-Houmbi.
              </h2>
              <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed mb-4">
                À cette époque, nous étions de simples étudiants, de jeunes enseignants et des artisans togolais. Face à la précarité qui frappait les veuves de notre quartier et aux enfants qui erraient sans pouvoir aller à l'école, nous ne pouvions pas rester spectateurs.
              </p>
              <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed">
                Sans subvention ni grands moyens, nous avons cotisé nos maigres économies pour partager de la viande de fête, organiser des cours du soir et réparer les toitures de familles démunies. Vingt-trois ans plus tard, l'esprit est resté le même : <strong>une entraide fraternelle, sincère et directe</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F5] p-6 rounded-2xl border border-ujmah-navy/5 space-y-4">
              <div className="border-b border-ujmah-navy/10 pb-3">
                <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Fondation</span>
                <span className="font-sans font-black text-xl text-ujmah-indigo">23 Janvier 2003</span>
                <span className="text-xs text-ujmah-dark-muted block mt-0.5">Agoè-Houmbi, Lomé</span>
              </div>
              <div className="border-b border-ujmah-navy/10 pb-3">
                <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Agrément Légal</span>
                <span className="font-sans font-black text-base text-ujmah-navy">Récépissé N° 0315</span>
                <span className="text-xs text-ujmah-dark-muted block mt-0.5">Ministère de l'Administration Territoriale</span>
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-ujmah-dark-muted block">Siège Actuel</span>
                <span className="font-sans font-bold text-sm text-ujmah-navy">Agoè-Adjougba</span>
                <span className="text-xs text-ujmah-dark-muted block mt-0.5">À 100m de BOXBERG (+228 92 67 34 00)</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AU CŒUR DU FOYER DE YELIVO : 40 ENFANTS, 40 VIES
          Présentation humaine, sensible et concrète du parrainage
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-12 mb-16">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
            LE REFUGE DE YELIVO
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight mb-4">
            À Yelivo, ce ne sont pas des dossiers.<br /> Ce sont nos enfants.
          </h2>
          <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed">
            Situé à quelques kilomètres de Sokodé dans la Région Centrale, l'orphelinat « MES ENFANTS » offre un toit protecteur, de l'affection et un avenir à 40 jeunes filles et garçons orphelins de père, de mère ou en situation de grande détresse.
          </p>
        </div>

        {/* Bloc Parrainage Interactif & Concret */}
        <div className="bg-white rounded-3xl border border-ujmah-navy/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Colonne Gauche : Ce que vit l'enfant au quotidien */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-black text-2xl text-ujmah-indigo mb-4">
                Ce que votre parrainage change chaque matin :
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <div className="w-8 h-8 rounded-xl bg-ujmah-orange text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Utensils size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-ujmah-navy">3 repas chauds et équilibrés par jour</h4>
                    <p className="text-xs text-ujmah-dark-muted leading-relaxed mt-0.5">
                      Petit-déjeuner avant l'école, déjeuner nutritif et dîner partagé en famille. Aucun enfant ne se couche la faim au ventre.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                  <div className="w-8 h-8 rounded-xl bg-ujmah-indigo text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Backpack size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-ujmah-navy">Scolarité complète & devoirs du soir</h4>
                    <p className="text-xs text-ujmah-dark-muted leading-relaxed mt-0.5">
                      Frais d'écolage payés, uniformes cousus, sacs, livres et répétitions le soir pour que chaque enfant puisse réussir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-ujmah-navy">Santé, vaccins & soins immédiats</h4>
                    <p className="text-xs text-ujmah-dark-muted leading-relaxed mt-0.5">
                      Visite médicale périodique, traitement rapide du paludisme et boîte à pharmacie surveillée au centre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sélecteur de Parrainage */}
            <div className="pt-6 border-t border-ujmah-navy/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-ujmah-dark-muted uppercase tracking-wider block">
                    Formule de parrainage mensuel :
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-sans font-black text-3xl sm:text-4xl text-ujmah-orange">
                      {currentTotal.toLocaleString('fr-FR')} FCFA
                    </span>
                    <span className="text-xs text-ujmah-dark-muted font-semibold">
                      (env. {currentEur} € pour {sponsorshipMonths} {sponsorshipMonths === 1 ? 'mois' : 'mois'})
                    </span>
                  </div>
                </div>

                {/* Choix de durée */}
                <div className="flex gap-2">
                  {[1, 3, 6, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setSponsorshipMonths(m)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        sponsorshipMonths === m
                          ? "bg-ujmah-indigo text-white shadow-sm"
                          : "bg-[#FAF8F5] text-ujmah-navy/70 hover:bg-amber-100"
                      }`}
                    >
                      {m} {m === 1 ? 'mois' : 'mois'}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={`/don?category=orphelinat&amount=${currentTotal}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-ujmah-orange/25 transition-all text-center"
              >
                <Heart size={18} fill="currentColor" />
                Parrainer pour {currentTotal.toLocaleString('fr-FR')} FCFA via SasPay
              </a>
            </div>

          </div>

          {/* Colonne Droite : Parole de Nazif AMOUSSOU, Directeur du centre */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1E1552] to-ujmah-navy text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-ujmah-sun flex items-center justify-center mb-6">
                <Quote size={28} />
              </div>

              <blockquote className="font-sans text-base sm:text-lg text-white/90 leading-relaxed italic mb-6">
                « Les enfants ne nous demandent pas l'impossible. Ils demandent juste à savoir qu'ils ne sont pas abandonnés, qu'il y aura un repas ce soir et quelqu'un pour leur dire bravo quand ils ramènent une bonne note. Votre soutien, c'est ce qui fait battre le cœur de cette maison. »
              </blockquote>

              <div className="pt-4 border-t border-white/15">
                <p className="font-sans font-black text-sm text-white">Nazif AMOUSSOU</p>
                <p className="text-xs text-amber-200 mt-0.5">Directeur résident de l'Orphelinat de Yelivo</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/70">
              Vous voyagez à Sokodé ? Le centre est ouvert aux visiteurs et aux donateurs. Prévenez le bureau au <strong>+228 92 67 34 00</strong>.
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          4. NOS AUTRES ACTIONS SUR LE TERRAIN : DES GESTES, PAS DES STATISTIQUES
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16 mb-16">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
            NOS ENGAGEMENTS AU QUOTIDIEN
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy tracking-tight leading-tight mb-4">
            Ce que nous faisons concrètement à travers le Togo.
          </h2>
          <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed">
            L'UJMAH ne se limite pas à un bureau. Nos bénévoles parcourent les villages, les collèges et les quartiers pour agir là où le besoin se fait le plus sentir.
          </p>
        </div>

        {/* 3 Cartes Récits Vivants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Action 1 : Le Coran & l'Éducation */}
          <div className="bg-white rounded-3xl p-8 border border-ujmah-navy/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-ujmah-indigo flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <span className="text-[11px] font-bold text-ujmah-indigo uppercase tracking-wider block mb-1">
                Le Savoir & la Foi
              </span>
              <h3 className="font-sans font-black text-xl text-ujmah-navy mb-3">
                Concours de Coran & Assises de Sciences
              </h3>
              <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                Régulièrement, des centaines de jeunes filles et garçons de Lomé à Dapaong se réunissent pour réciter le Coran, apprendre les règles du Tajweed et s'imprégner d'une éthique de paix, de tolérance et de respect civique.
              </p>
            </div>
            <a href="/actions" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors pt-4 border-t border-ujmah-navy/5">
              Voir les concours et assises <ChevronRight size={14} />
            </a>
          </div>

          {/* Action 2 : L'Eau Potable */}
          <div className="bg-white rounded-3xl p-8 border border-ujmah-navy/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Droplets size={24} />
              </div>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Sadaqa Jariya
              </span>
              <h3 className="font-sans font-black text-xl text-ujmah-navy mb-3">
                Forages de Puits d'Eau Potable
              </h3>
              <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                Dans les villages arides du Nord et de la région Centrale, les mères et les enfants marchaient des kilomètres pour puiser une eau insalubre. Nos forages apportent l'eau claire au cœur des hameaux, préservant la santé de milliers d'âmes.
              </p>
            </div>
            <a href="/don?category=forages" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors pt-4 border-t border-ujmah-navy/5">
              Participer à un forage <ChevronRight size={14} />
            </a>
          </div>

          {/* Action 3 : Kits Scolaires & Tabaski */}
          <div className="bg-white rounded-3xl p-8 border border-ujmah-navy/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-ujmah-orange flex items-center justify-center mb-6">
                <Backpack size={24} />
              </div>
              <span className="text-[11px] font-bold text-ujmah-orange uppercase tracking-wider block mb-1">
                Solidarité Directe
              </span>
              <h3 className="font-sans font-black text-xl text-ujmah-navy mb-3">
                Kits Scolaires & Partage de Tabaski
              </h3>
              <p className="text-xs sm:text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                Chaque rentrée de septembre, des sacs à dos et des cahiers sont distribués aux enfants démunis pour qu'aucun ne soit renvoyé de classe. À la fête de Tabaski et au Ramadan, nous livrons vivres et viande aux familles répertoriées.
              </p>
            </div>
            <a href="/don?category=kits" className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors pt-4 border-t border-ujmah-navy/5">
              Offrir un kit scolaire <ChevronRight size={14} />
            </a>
          </div>

        </div>

      </section>

      {/* =========================================================================
          5. QUI SONT LES MEMBRES ? DES CITOYENS TOGOLAIS QUI S'ENGAGENT
         ========================================================================= */}
      <section className="bg-white border-y border-ujmah-navy/10 py-16 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-ujmah-orange mb-2 block">
              DES VISAGES, DES BÉNÉVOLES, UNE ÉQUIPE
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-4xl text-ujmah-navy tracking-tight mb-4">
              L'UJMAH, ce sont des citoyens ordinaires animés par la foi du bien.
            </h2>
            <p className="text-sm sm:text-base text-ujmah-dark-muted leading-relaxed">
              Les membres de notre Bureau Exécutif sont des enseignants, des commerçants, des techniciens, des mères et des pères de famille. Aucun ne tire de profit personnel : tout notre temps est offert pour servir.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "AMIDOU Bilal", role: "Président", job: "Commerçant & Designer" },
              { name: "MOUSSA Rafiou", role: "Vice-président", job: "Enseignant au CEG Centre" },
              { name: "AMOUSSOU Nazif", role: "Directeur de l'Orphelinat", job: "Responsable à Yelivo" },
              { name: "KALILOU Moussa", role: "Affaires Administratives", job: "Enseignant au CEG Privé" },
              { name: "ALEDJI Nazifa", role: "Finances & Patrimoine", job: "Gestionnaire Finance" },
              { name: "OURO GOUNI Abdul Malik", role: "Formations", job: "Étudiant Sciences Islamiques" },
              { name: "HLOMEGBE Ishaac", role: "Communication", job: "Entrepreneur agro-pastoral" },
              { name: "BOLBIGOU Chafiou", role: "Organisation", job: "Enseignant & Master" },
              { name: "AMOUSSOU Baki", role: "Ressources Humaines", job: "Enseignant cours primaire" },
              { name: "TCHADENOU Cherifa", role: "Affaires Féminines", job: "Technicienne Télécoms" }
            ].map((m, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-4 rounded-2xl border border-ujmah-navy/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-ujmah-orange uppercase tracking-wider block">
                    {m.role}
                  </span>
                  <p className="font-sans font-black text-sm text-ujmah-navy mt-1 leading-snug">
                    {m.name}
                  </p>
                </div>
                <p className="text-[11px] text-ujmah-dark-muted mt-2 pt-2 border-t border-ujmah-navy/5">
                  {m.job}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:text-left">
            <a 
              href="/qui-sommes-nous" 
              className="inline-flex items-center gap-2 text-xs font-bold text-ujmah-indigo hover:text-ujmah-orange transition-colors"
            >
              En savoir plus sur notre gouvernance et nos statuts <ArrowRight size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. BANDEAU DE FIN : UN MESSAGE DU PRÉSIDENT ET APPEL À LA FAMILLE UJMAH
         ========================================================================= */}
      <section className="bg-gradient-to-br from-[#100830] via-[#1E1552] to-[#0B132B] text-white py-20 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="w-16 h-16 rounded-full bg-white/10 text-ujmah-sun flex items-center justify-center mx-auto mb-6">
            <Heart size={28} fill="currentColor" />
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            « Votre don n'est pas une simple transaction. C'est une promesse faite à un orphelin. »
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Rejoignez cette chaîne de solidarité togolaise. Que ce soit par un parrainage régulier, une aumône ponctuelle ou un engagement bénévole, votre présence change tout.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="/don" 
              className="bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-ujmah-orange/30 hover:-translate-y-0.5 transition-all"
            >
              Faire un don en ligne (SasPay / Mobile Money)
            </a>
            <a 
              href="/contact" 
              className="glass-card-dark text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-sm border border-white/20 transition-all"
            >
              Nous contacter à Lomé (+228 92 67 34 00)
            </a>
          </div>

          <div className="pt-12 mt-12 border-t border-white/10 text-xs text-white/60">
            Association UJMAH Togo • Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA • Compte Coris Bank : <strong>TG182 01010 008811824401 13</strong>
          </div>

        </div>
      </section>

    </div>
  );
}
