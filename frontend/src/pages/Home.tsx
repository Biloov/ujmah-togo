import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Heart, Sparkles, Sprout } from 'lucide-react';

export default function Home() {
  const domains = [
    { 
      title: "Éducation & Savoir", 
      desc: "Soutien aux écoles, fournitures scolaires, concours de Coran (CRSC) et accompagnement académique d'excellence.", 
      icon: <GraduationCap size={32} />, 
      color: "bg-ujmah-indigo/10 text-ujmah-indigo border border-ujmah-indigo/15" 
    },
    { 
      title: "Action Humanitaire", 
      desc: "Aide d'urgence, distributions alimentaires, projets d'adduction d'eau et soutien direct aux familles vulnérables.", 
      icon: <Heart size={32} />, 
      color: "bg-ujmah-orange/10 text-ujmah-orange border border-ujmah-orange/15" 
    },
    { 
      title: "Formation & Autonomie", 
      desc: "Ateliers professionnels, renforcement des compétences et programme d'autonomisation des jeunes (SEFIMA).", 
      icon: <BookOpen size={32} />, 
      color: "bg-ujmah-sun/20 text-ujmah-indigo border border-ujmah-sun/30" 
    },
    { 
      title: "Spiritualité & Éthique", 
      desc: "Transmission des valeurs éthiques authentiques, intégrité, fraternité et engagement civique solidaire.", 
      icon: <Sparkles size={32} />, 
      color: "bg-ujmah-indigo/10 text-ujmah-indigo border border-ujmah-indigo/15" 
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-ujmah-ivory min-h-screen">
      {/* Hero Section avec rayonnement solaire subtil */}
      <section className="relative overflow-hidden bg-solar-glow max-w-7xl mx-auto px-6 pt-12 pb-16 text-center">
        {/* Badge Institutionnel */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-ujmah-sun/40 shadow-sm text-xs font-sans font-semibold text-ujmah-indigo mb-6">
          <span className="w-2 h-2 rounded-full bg-ujmah-sun animate-pulse"></span>
          Portail Officiel — UJMAH Togo
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-ujmah-indigo mb-6 tracking-tight leading-tight">
          Servir l'humanité <br className="hidden sm:inline" />
          <span className="text-ujmah-orange">dans l'union</span>
        </h1>
        
        <p className="max-w-2xl mx-auto font-sans text-lg text-ujmah-navy/75 mb-10 leading-relaxed">
          L'Union des Jeunes Musulmans pour l'Action Humanitaire œuvre au Togo pour l'épanouissement des communautés, l'accès à l'éducation, l'autonomie de la jeunesse et la prise en charge des orphelins.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a 
            href="/don" 
            className="w-full sm:w-auto bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-8 py-3.5 rounded-full font-sans font-semibold transition-all duration-300 shadow-lg shadow-ujmah-orange/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Heart size={18} fill="currentColor" />
            Faire un don
          </a>
          <a 
            href="/actions" 
            className="w-full sm:w-auto bg-white border border-ujmah-indigo/20 text-ujmah-indigo hover:border-ujmah-indigo hover:bg-ujmah-indigo/5 px-8 py-3.5 rounded-full font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            Découvrir nos actions
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Hero image cadrée avec halo */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white max-w-5xl mx-auto">
          <img 
            src="/assets/hero-mosque.png" 
            alt="UJMAH Togo" 
            className="w-full h-auto object-cover aspect-[21/9]" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ujmah-indigo-dark/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-left text-white hidden sm:block">
            <span className="text-xs uppercase tracking-widest font-bold text-ujmah-sun">Engagement & Solidarité</span>
            <p className="font-display font-bold text-xl drop-shadow">Construire ensemble un avenir digne et porteur d'espérance</p>
          </div>
        </div>
      </section>

      {/* Domaines d'Action */}
      <section className="bg-white border-y border-ujmah-navy/5 py-20 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Piliers d'intervention</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-indigo mt-2">Nos Domaines d'Action</h2>
            <div className="w-16 h-1.5 bg-ujmah-sun mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain) => (
              <div 
                key={domain.title} 
                className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl ${domain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {domain.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-ujmah-indigo mb-3">{domain.title}</h3>
                <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
