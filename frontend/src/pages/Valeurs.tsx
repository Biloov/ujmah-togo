import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Users, Award, Handshake } from 'lucide-react';

function Counter({ endValue, duration, suffix = "" }: { endValue: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStarted) return;
    let start = 0;
    const increment = endValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isStarted, endValue, duration]);

  return (
    <div ref={elementRef} className="font-display font-extrabold text-4xl text-ujmah-navy">
      {count.toLocaleString('fr-FR')}{suffix}
    </div>
  );
}

export default function Valeurs() {
  const values = [
    { title: "Foi (Iman)", desc: "L'intention pure (Ikhlas) comme fondement de chaque action. Nous œuvrons pour le Créateur à travers le service des créatures.", icon: <Sparkles size={24} /> },
    { title: "Solidarité (Tadhamun)", desc: "Agir ensemble pour soutenir les plus démunis. Partager les fardeaux et bâtir des projets d'adduction d'eau et de nourriture.", icon: <Users size={24} /> },
    { title: "Engagement (Jihad)", desc: "Se donner pleinement avec rigueur professionnelle, transparence et présence active sur le terrain humanitaire.", icon: <Award size={24} /> },
    { title: "Fraternité (Ukhuwwa)", desc: "L'union des cœurs. Notre équipe de bénévoles et de donateurs avance main dans la main comme un édifice soudé.", icon: <Handshake size={24} /> }
  ];

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-navy/5 text-ujmah-navy font-sans text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
            Charte Éthique
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-navy mb-6 tracking-tight">
            Nos Valeurs Fondatrices
          </h1>
          <p className="font-sans text-base text-ujmah-navy/60 leading-relaxed">
            Les valeurs qui inspirent l'action quotidienne d'UJMAH Togo au service de la dignité humaine.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((v) => (
            <div key={v.title} className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm hover:shadow-lg transition-all duration-300 flex gap-6">
              <div className="w-14 h-14 rounded-full bg-ujmah-navy/5 text-ujmah-navy flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-ujmah-navy group-hover:text-white">
                {v.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ujmah-navy mb-3 leading-snug">{v.title}</h3>
                <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Stats Block */}
        <div className="bg-ujmah-gray/50 rounded-3xl p-10 border border-ujmah-navy/5">
          <h2 className="font-display font-bold text-2xl text-center text-ujmah-navy mb-12">UJMAH en chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center flex flex-col items-center">
              <span className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy flex items-center justify-center mb-4">🏆</span>
              <Counter endValue={12} duration={1500} suffix="+" />
              <p className="font-sans text-sm text-ujmah-navy/60 mt-2 font-medium">Projets réalisés</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center flex flex-col items-center">
              <span className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy flex items-center justify-center mb-4">👥</span>
              <Counter endValue={2500} duration={2000} suffix="+" />
              <p className="font-sans text-sm text-ujmah-navy/60 mt-2 font-medium">Bénéficiaires directs</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center flex flex-col items-center">
              <span className="w-10 h-10 rounded-full bg-ujmah-navy/5 text-ujmah-navy flex items-center justify-center mb-4">🤝</span>
              <Counter endValue={150} duration={1500} />
              <p className="font-sans text-sm text-ujmah-navy/60 mt-2 font-medium">Bénévoles actifs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
