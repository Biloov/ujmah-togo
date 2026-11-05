import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Heart, Sparkles, Droplets, Backpack, Utensils, Shield, CheckCircle2, MapPin } from 'lucide-react';

export default function Home() {
  const domains = [
    { 
      title: "Orphelinat « MES ENFANTS »", 
      desc: "40 orphelins et enfants vulnérables hébergés, nourris et scolarisés au quotidien à Yelivo (Sokodé).", 
      icon: <Heart size={28} />, 
      color: "bg-ujmah-orange/10 text-ujmah-orange border border-ujmah-orange/20",
      link: "/orphelinat"
    },
    { 
      title: "Éducation & Mémorisation (CRSC)", 
      desc: "Concours national de récitation et de méditation du Saint Coran pour éveiller l'excellence chez les jeunes.", 
      icon: <GraduationCap size={28} />, 
      color: "bg-ujmah-indigo/10 text-ujmah-indigo border border-ujmah-indigo/20",
      link: "/actions"
    },
    { 
      title: "Formation Managériale (SEFIMA)", 
      desc: "Séminaires intensifs pour outiller la jeunesse en gestion de projets, leadership et éthique islamique.", 
      icon: <BookOpen size={28} />, 
      color: "bg-ujmah-sun/20 text-ujmah-indigo border border-ujmah-sun/30",
      link: "/actions"
    },
    { 
      title: "Assises de Sciences", 
      desc: "Transmission rigoureuse du savoir religieux selon le Coran et la Sunnah authentique.", 
      icon: <Sparkles size={28} />, 
      color: "bg-ujmah-indigo/10 text-ujmah-indigo border border-ujmah-indigo/20",
      link: "/fondements"
    },
    { 
      title: "Distribution de Kits Scolaires", 
      desc: "Fournitures et manuels scolaires pour soutenir les élèves démunis et favoriser l'instruction des jeunes filles.", 
      icon: <Backpack size={28} />, 
      color: "bg-ujmah-orange/10 text-ujmah-orange border border-ujmah-orange/20",
      link: "/actions"
    },
    { 
      title: "Solidarité Alimentaire", 
      desc: "Partage de viande de Tabaski à domicile et colis de Ramadan pour les familles nécessiteuses répertoriées.", 
      icon: <Utensils size={28} />, 
      color: "bg-ujmah-sun/20 text-ujmah-indigo border border-ujmah-sun/30",
      link: "/actions"
    },
    { 
      title: "Hydraulique & Forages d'Eau", 
      desc: "Puits et châteaux d'eau potable dans les localités rurales défavorisées (Sadaqa Jariya).", 
      icon: <Droplets size={28} />, 
      color: "bg-ujmah-indigo/10 text-ujmah-indigo border border-ujmah-indigo/20",
      link: "/actions"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-ujmah-ivory min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-solar-glow max-w-7xl mx-auto px-6 pt-12 pb-16 text-center">
        
        {/* Badge Institutionnel */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-ujmah-sun/40 shadow-sm text-xs font-sans font-semibold text-ujmah-indigo mb-6">
          <span className="w-2 h-2 rounded-full bg-ujmah-sun animate-pulse"></span>
          Fondée le 23 Janvier 2003 — Plus de 23 ans au service du Togo
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-ujmah-indigo mb-6 tracking-tight leading-tight">
          Servir l'humanité <br className="hidden sm:inline" />
          <span className="text-ujmah-orange">dans l'union</span>
        </h1>
        
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg text-ujmah-navy/75 mb-10 leading-relaxed">
          L'<strong>Union des Jeunes Musulmans pour l'Action Humanitaire (UJMAH)</strong> est une association reconnue qui œuvre au Togo pour l'épanouissement communautaire, l'éducation civique, la transmission éthique et la prise en charge des orphelins.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a 
            href="/don" 
            className="w-full sm:w-auto bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 shadow-lg shadow-ujmah-orange/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Heart size={18} fill="currentColor" />
            Faire un don en ligne
          </a>
          <a 
            href="/qui-sommes-nous" 
            className="w-full sm:w-auto bg-white border border-ujmah-indigo/20 text-ujmah-indigo hover:border-ujmah-indigo hover:bg-ujmah-indigo/5 px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            Découvrir l'association
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Hero Banner Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white max-w-5xl mx-auto">
          <img 
            src="/assets/hero-mosque.png" 
            alt="UJMAH Togo" 
            className="w-full h-auto object-cover aspect-[21/9]" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ujmah-indigo-dark/75 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-left text-white hidden sm:flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-ujmah-sun">Siège Social Officiel</span>
              <p className="font-display font-bold text-xl drop-shadow">Agoè-Adjougba, à 100m de BOXBERG, Lomé – Togo</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-mono font-bold text-white border border-white/20">
              Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA
            </div>
          </div>
        </div>
      </section>

      {/* Focus Orphelinat Yelivo */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-ujmah-indigo to-ujmah-indigo-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-ujmah-sun/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-ujmah-orange text-white text-[11px] font-sans font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full mb-4">
                Priorité du Cœur
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl leading-tight mb-4">
                Orphelinat « MES ENFANTS » à Yelivo
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Situé dans le village de Yelivo près de Sokodé (Région Centrale), notre centre accueille et prend en charge <strong>40 orphelins et enfants vulnérables</strong> sous la direction d'<strong>AMOUSSOU Nazif</strong>.
              </p>
              
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="font-sans text-xs text-ujmah-sun uppercase tracking-wider font-bold">Parrainage mensuel</span>
                  <p className="font-display font-extrabold text-2xl text-white">20 250 FCFA <span className="text-xs text-white/60 font-sans font-normal">/ mois par enfant</span></p>
                </div>
                <span className="text-xs text-white/70 italic">Nourriture • Scolarité • Soins</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://pay.genius.ci/d/ujmah-orphelinat?amount=20250" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-6 py-3 rounded-full font-sans font-bold text-xs shadow-md transition-all"
                >
                  Parrainer directement
                </a>
                <a 
                  href="/orphelinat" 
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-sans font-bold text-xs border border-white/20 transition-all"
                >
                  En savoir plus
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img 
                src="/assets/orphanage-yelivo.png" 
                alt="Enfants de l'orphelinat de Yelivo" 
                className="w-full h-72 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'Action */}
      <section className="bg-white border-y border-ujmah-navy/5 py-20 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Piliers d'Intervention</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-indigo mt-2">Ce que nous réalisons sur le terrain</h2>
            <div className="w-16 h-1.5 bg-ujmah-sun mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domains.map((domain) => (
              <a 
                key={domain.title} 
                href={domain.link}
                className="bg-ujmah-ivory p-6 rounded-3xl border border-ujmah-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${domain.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {domain.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-ujmah-indigo mb-2 group-hover:text-ujmah-orange transition-colors">
                    {domain.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ujmah-navy/70 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-ujmah-orange mt-4 group-hover:translate-x-1 transition-transform">
                  Découvrir <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Appel Solennel aux Dons & Transparence */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
          Transparence & Fraternité
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-indigo mb-4">
          Soutenir les actions d'UJMAH Togo
        </h2>
        <p className="font-sans text-base text-ujmah-navy/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Chaque franc CFA versé est investi directement dans la nourriture des orphelins, les bourses scolaires, les forages d'eau et le secours d'urgence aux familles démunies.
        </p>

        <div className="p-6 rounded-3xl bg-white border border-ujmah-navy/10 shadow-md inline-block max-w-xl mx-auto mb-8 text-left">
          <span className="font-sans text-xs font-bold uppercase text-ujmah-navy/50 block mb-1">Virement Bancaire Officiel (UEMOA / International)</span>
          <p className="font-sans text-sm font-bold text-ujmah-indigo">CORIS BANK INTERNATIONAL TOGO — ASSOCIATION UJMAH</p>
          <p className="font-mono text-sm text-ujmah-orange font-extrabold mt-1">RIB : TG182 01010 008811824401 13</p>
        </div>

        <div>
          <a 
            href="/don" 
            className="inline-flex items-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-4 rounded-full font-sans font-bold text-sm shadow-lg shadow-ujmah-orange/25 transition-all hover:-translate-y-0.5"
          >
            <Heart size={18} fill="currentColor" />
            Accéder au portail de don en ligne
          </a>
        </div>
      </section>

    </div>
  );
}
