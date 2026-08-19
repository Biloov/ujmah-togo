import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Heart } from 'lucide-react';

export default function Actions() {
  const actions = [
    {
      title: "Concours de Récitation du Saint Coran (CRSC)",
      desc: "Créer une saine émulation autour de la mémorisation et de la méditation du Coran, tout en inculquant les valeurs morales islamiques aux jeunes générations du Togo.",
      badge: "Spiritualité & Éducation",
      image: "/assets/crsc-interior.png",
      fallback: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600",
      icon: <GraduationCap size={20} />,
      color: "border-ujmah-navy text-ujmah-navy bg-ujmah-navy/5"
    },
    {
      title: "Séminaire de Formation (SEFIMA)",
      desc: "Programmes de formation académique, entrepreneuriale et managériale. Nous dotons les jeunes cadres d'outils concrets pour exceller dans leur vie spirituelle et professionnelle.",
      badge: "Formation & Autonomie",
      image: "/assets/sefima-weaving.png",
      fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
      icon: <BookOpen size={20} />,
      color: "border-ujmah-gold text-ujmah-gold bg-ujmah-gold/5"
    },
    {
      title: "L'Orphelinat « MES ENFANTS » à Yelivo",
      desc: "Un centre de vie chaleureux offrant amour, protection, éducation et suivi médical complet à des enfants orphelins et vulnérables dans la région Centrale du Togo.",
      badge: "Soutien & Orphelinat",
      image: "/assets/orphanage-yelivo.png",
      fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
      icon: <Heart size={20} />,
      color: "border-ujmah-blue text-ujmah-blue bg-ujmah-blue/5"
    }
  ];

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-navy/5 text-ujmah-navy font-sans text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
            Nos Activités
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-navy mb-6 tracking-tight">
            Ce que nous faisons
          </h1>
          <p className="font-sans text-base text-ujmah-navy/60 leading-relaxed">
            Grâce au soutien de nos généreux donateurs et à l'engagement de nos bénévoles, nous menons des actions concrètes ayant un impact social durable au Togo.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((act) => (
            <div key={act.title} className="bg-white rounded-2xl border border-ujmah-navy/5 shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = act.fallback;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 border rounded-full px-3.5 py-1 text-xs font-semibold ${act.color}`}>
                    {act.icon}
                    {act.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-ujmah-navy mb-4 leading-snug">{act.title}</h3>
                <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mb-6 flex-grow">{act.desc}</p>
                <a href={act.title.includes("Orphelinat") ? "/orphelinat" : "/don"} className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-ujmah-navy hover:text-ujmah-gold transition-colors mt-auto">
                  En savoir plus
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
