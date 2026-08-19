import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Heart, HelpCircle, Users, Sprout } from 'lucide-react';

export default function Home() {
  const domains = [
    { title: "Éducation", desc: "Soutien aux écoles, fournitures scolaires, concours de Coran (CRSC) et accompagnement académique.", icon: <GraduationCap size={32} />, color: "bg-ujmah-navy/10 text-ujmah-navy" },
    { title: "Humanitaire", desc: "Aide d'urgence, distributions alimentaires, projets d'adduction d'eau et soutien direct.", icon: <Heart size={32} />, color: "bg-ujmah-gold/10 text-ujmah-gold" },
    { title: "Formation", desc: "Ateliers et formations managériales et techniques (programme SEFIMA) pour les jeunes.", icon: <BookOpen size={32} />, color: "bg-ujmah-blue/10 text-ujmah-blue" },
    { title: "Spiritualité", desc: "Transmission des valeurs éthiques de l'Islam pour un engagement citoyen intègre.", icon: <Sprout size={32} />, color: "bg-green-500/10 text-green-600" }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-ujmah-navy mb-8 tracking-tight leading-tight">
          Servir l'humanité <br className="hidden sm:inline" />
          <span className="text-ujmah-gold">dans l'union</span>
        </h1>
        <p className="max-w-2xl mx-auto font-sans text-lg text-ujmah-navy/70 mb-10 leading-relaxed">
          UJMAH Togo est une organisation humanitaire engagée dans le développement communautaire, l'éducation, la formation des jeunes et le soutien aux orphelins.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href="/don" className="w-full sm:w-auto bg-ujmah-gold text-white px-8 py-3.5 rounded-full font-sans font-semibold transition-all duration-300 hover:bg-ujmah-navy hover:shadow-lg hover:shadow-ujmah-navy/20 hover:-translate-y-0.5">
            Faire un don
          </a>
          <a href="/actions" className="w-full sm:w-auto bg-white border border-ujmah-navy/10 text-ujmah-navy px-8 py-3.5 rounded-full font-sans font-semibold transition-all duration-300 hover:bg-ujmah-gray hover:border-ujmah-navy/30 flex items-center justify-center gap-2">
            Découvrir nos actions
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Hero image with glow */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 max-w-5xl mx-auto">
          <img 
            src="/assets/hero-mosque.png" 
            alt="UJMAH Togo Hero" 
            className="w-full h-auto object-cover aspect-[21/9]" 
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ujmah-navy/40 to-transparent"></div>
        </div>
      </section>

      {/* Action Domains */}
      <section className="bg-ujmah-gray/50 border-y border-ujmah-navy/5 py-20 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl text-ujmah-navy">Nos Domaines d'Action</h2>
            <div className="w-16 h-1 bg-ujmah-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain) => (
              <div key={domain.title} className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${domain.color} flex items-center justify-center mb-6`}>
                  {domain.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-ujmah-navy mb-4">{domain.title}</h3>
                <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">{domain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
