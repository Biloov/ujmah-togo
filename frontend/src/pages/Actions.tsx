import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Heart, Droplets, Backpack, Utensils, Sparkles } from 'lucide-react';

export default function Actions() {
  const actions = [
    {
      title: "L'Orphelinat « MES ENFANTS » à Yelivo",
      desc: "Centre d'hébergement et d'encadrement familial accueillant 40 orphelins et enfants vulnérables près de Sokodé. Prise en charge globale (scolarité, nutrition, santé) sous la direction d'AMOUSSOU Nazif.",
      badge: "Protection de l'Enfance",
      image: "/assets/orphanage-yelivo.png",
      fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
      icon: <Heart size={20} />,
      color: "border-ujmah-orange text-ujmah-orange bg-ujmah-orange/10",
      link: "/orphelinat",
      btnText: "Découvrir l'Orphelinat"
    },
    {
      title: "Concours de Récitation du Coran (CRSC)",
      desc: "Grand rendez-vous national créant une saine émulation autour de la mémorisation et de la méditation du Livre saint, tout en inculquant les valeurs morales islamiques aux jeunes générations du Togo.",
      badge: "Spiritualité & Excellence",
      image: "/assets/crsc-interior.png",
      fallback: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600",
      icon: <GraduationCap size={20} />,
      color: "border-ujmah-indigo text-ujmah-indigo bg-ujmah-indigo/10",
      link: "/don",
      btnText: "Soutenir le CRSC"
    },
    {
      title: "Séminaire de Formation (SEFIMA)",
      desc: "Séminaire annuel intensif combinant perfectionnement en sciences islamiques, gestion de projet, leadership et compétences managériales pour former les leaders intègres de demain.",
      badge: "Formation des Cadres",
      image: "/assets/sefima-weaving.png",
      fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
      icon: <BookOpen size={20} />,
      color: "border-ujmah-sun text-ujmah-indigo bg-ujmah-sun/20",
      link: "/don",
      btnText: "Parrainer un séminariste"
    },
    {
      title: "Assises de Sciences Islamiques",
      desc: "Cercles d'études et conférences publiques régulières dispensés par des enseignants et lettrés qualifiés pour enseigner la doctrine authentique, l'éthique musulmane et préserver la jeunesse des dérives.",
      badge: "Éducation & Savoir",
      image: "/assets/formations-workspace.png",
      fallback: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=600",
      icon: <Sparkles size={20} />,
      color: "border-ujmah-indigo text-ujmah-indigo bg-ujmah-indigo/10",
      link: "/contact",
      btnText: "En savoir plus"
    },
    {
      title: "Distribution de Kits Scolaires",
      desc: "Campagnes annuelles de rentrée scolaire pour équiper les enfants orphelins et issus de foyers démunis en cahiers, livres, cartables et uniformes afin de freiner la déscolarisation précoce.",
      badge: "Éducation Pour Tous",
      image: "/assets/actions-sociales.png",
      fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
      icon: <Backpack size={20} />,
      color: "border-ujmah-orange text-ujmah-orange bg-ujmah-orange/10",
      link: "/don",
      btnText: "Offrir un kit scolaire"
    },
    {
      title: "Solidarité Alimentaire (Tabaski & Ramadan)",
      desc: "Campagnes caritatives de distribution de viande sacrificielle à domicile pour la fête de l'Aïd al-Adha et distribution de paniers de vivres pour soulager les familles nécessiteuses lors du mois béni de Ramadan.",
      badge: "Aide Sociale Directe",
      image: "/assets/hero-mosque.png",
      fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
      icon: <Utensils size={20} />,
      color: "border-ujmah-sun text-ujmah-indigo bg-ujmah-sun/20",
      link: "/don",
      btnText: "Participer aux colis"
    },
    {
      title: "Hydraulique Villageoise & Forages d'Eau",
      desc: "Réalisation de forages et de puits d'eau potable dans les villages isolés du Togo pour apporter une eau saine, réduire les maladies hydriques et constituer une aumône continue (Sadaqa Jariya).",
      badge: "Eau Potable & Santé",
      image: "/assets/gallery-well.png",
      fallback: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600",
      icon: <Droplets size={20} />,
      color: "border-ujmah-indigo text-ujmah-indigo bg-ujmah-indigo/10",
      link: "/don",
      btnText: "Financer un puits"
    }
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-ujmah-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Nos Programmes Permanents
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-indigo mb-6 tracking-tight">
            Nos Actions sur le Terrain
          </h1>
          <p className="font-sans text-base sm:text-lg text-ujmah-navy/70 leading-relaxed">
            Grâce à la mobilisation de nos équipes et à la générosité de nos donateurs, l'UJMAH déploie des actions pérennes qui répondent aux besoins essentiels des populations togolaises.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((act) => (
            <div 
              key={act.title} 
              className="bg-white rounded-3xl border border-ujmah-navy/5 shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
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
                  <span className={`inline-flex items-center gap-1.5 border rounded-full px-3.5 py-1 text-xs font-bold ${act.color} backdrop-blur-sm shadow-sm`}>
                    {act.icon}
                    {act.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-ujmah-navy mb-3 leading-snug">
                  {act.title}
                </h3>
                <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed mb-6 flex-grow">
                  {act.desc}
                </p>
                <a 
                  href={act.link} 
                  className="inline-flex items-center gap-2 font-sans font-bold text-sm text-ujmah-orange hover:text-ujmah-orange-hover transition-colors mt-auto group"
                >
                  {act.btnText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
