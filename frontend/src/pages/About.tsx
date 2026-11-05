import React from 'react';
import { Shield, Users, Award, Calendar, MapPin, Phone, CheckCircle2, HeartHandshake, Compass } from 'lucide-react';

export default function About() {
  const objectives = [
    "Promouvoir l’union, la paix, la fraternité et la solidarité entre ses membres et au sein de la société togolaise ;",
    "Mener des actions humanitaires et caritatives d'envergure en faveur des personnes nécessiteuses et des cas sociaux ;",
    "Promouvoir l'intégration civique et la cohabitation pacifique et harmonieuse entre toutes les confessions religieuses ;",
    "Participer activement à la lutte contre les fléaux sociaux, l'analphabétisme et la précarité ;",
    "Promouvoir l'intégration culturelle et l'éducation aux valeurs éthiques islamiques authentiques ;",
    "Contribuer à la formation citoyenne, civique et patriotique des jeunes générations ;",
    "Favoriser la scolarisation des enfants démunis et encourager particulièrement l'instruction de la jeune fille ;",
    "Promouvoir l’éducation et la formation professionnelle et technique des jeunes pour leur autonomisation."
  ];

  const executiveBoard = [
    { role: "Président", name: "AMIDOU Bilal", title: "Commerçant & Motion Designer" },
    { role: "Vice-président", name: "MOUSSA RAFIOU", title: "Enseignant au CEG Centre" },
    { role: "Directeur des affaires administratives", name: "KALILOU Moussa", title: "Enseignant au CEG Privé" },
    { role: "Directrice des finances et du patrimoine", name: "ALEDJI Nazifa", title: "Gestionnaire Finance" },
    { role: "Directeur des formations", name: "OURO GOUNI Abdul Malik", title: "Étudiant en Sciences Islamiques & Enseignant" },
    { role: "Directeur de la communication et des relations extérieures", name: "HLOMEGBE Ishaac", title: "Entrepreneur agro-pastoral" },
    { role: "Directeur de l'organisation et de la planification", name: "BOLBIGOU CHAFIOU", title: "Enseignant, Étudiant en Master" },
    { role: "Adjoint au Directeur de l'organisation et de la planification", name: "ALEDJOU RAMADAN", title: "Étudiant en FASEG" },
    { role: "Directeur des ressources humaines et de la culture", name: "AMOUSSOU BAKI", title: "Enseignant au cours primaire" },
    { role: "Directrice des affaires féminines", name: "TCHADENOU Cherifa", title: "Technicienne Télécommunication & Réseaux" }
  ];

  return (
    <div className="pt-28 pb-20 px-6 bg-ujmah-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête Institutionnel */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Organisation & Histoire
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-indigo mb-6 tracking-tight">
            Qui sommes-nous ?
          </h1>
          <p className="font-sans text-base sm:text-lg text-ujmah-navy/75 leading-relaxed">
            L'<strong>Union des Jeunes Musulmans pour l'Action Humanitaire (UJMAH)</strong> est une association togolaise engagée depuis 2003 pour la dignité humaine, l'éducation civique et le soutien aux populations vulnérables.
          </p>
        </div>

        {/* Section Genèse & Histoire */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ujmah-navy/5 shadow-md mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ujmah-orange mb-3">
                <Calendar size={16} />
                23 Janvier 2003 — Plus de 23 ans d'histoire
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-indigo mb-6">
                Une vocation née au cœur de la jeunesse togolaise
              </h2>
              <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed mb-4">
                L'UJMAH a vu le jour le <strong>23 janvier 2003</strong> à Agoè-Houmbi (Lomé). Fondée par des jeunes conscients des défis sociaux, éducatifs et spirituels de leur temps, l'association a choisi de placer la fraternité et l'action concrète au service de la nation togolaise.
              </p>
              <p className="font-sans text-sm sm:text-base text-ujmah-navy/70 leading-relaxed mb-6">
                Reconnue officiellement par les autorités togolaises sous le récépissé <strong>N° 0315/MATDCL-SG-DLPAP-DOCA</strong>, l'association a étendu son rayon d'action de Lomé jusqu'à la Région Centrale avec la création de l'orphelinat <em>« MES ENFANTS »</em> à Yelivo.
              </p>
              <div className="p-4 rounded-2xl bg-ujmah-ivory border-l-4 border-ujmah-sun text-ujmah-indigo font-display font-semibold text-sm italic">
                « Servir l'humanité dans l'union » — Devise officielle immuable depuis la fondation.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 flex flex-col justify-center text-center">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-indigo">2003</span>
                <span className="font-sans text-xs uppercase tracking-wider text-ujmah-navy/60 font-semibold mt-2">Année de Fondation</span>
              </div>
              <div className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 flex flex-col justify-center text-center">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-orange">40</span>
                <span className="font-sans text-xs uppercase tracking-wider text-ujmah-navy/60 font-semibold mt-2">Orphelins à Yelivo</span>
              </div>
              <div className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 flex flex-col justify-center text-center">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-sun">10</span>
                <span className="font-sans text-xs uppercase tracking-wider text-ujmah-navy/60 font-semibold mt-2">Membres au Bureau</span>
              </div>
              <div className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 flex flex-col justify-center text-center">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-ujmah-indigo">100%</span>
                <span className="font-sans text-xs uppercase tracking-wider text-ujmah-navy/60 font-semibold mt-2">Bénévolat & Foi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Objectifs Statutaires */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ujmah-navy/5 shadow-md mb-16">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Cadre d'intervention</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-indigo mt-1">Nos Objectifs Statutaires</h2>
            <p className="font-sans text-sm text-ujmah-navy/60 mt-2">Les 8 axes officiels régissant nos actions sur le terrain</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-ujmah-ivory/60 border border-ujmah-navy/5 hover:border-ujmah-indigo/20 transition-all">
                <div className="w-7 h-7 rounded-full bg-ujmah-indigo text-white flex items-center justify-center font-display font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="font-sans text-sm text-ujmah-navy/80 leading-relaxed font-medium">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gouvernance : Le Bureau Exécutif */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-ujmah-navy/5 shadow-md mb-16">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange">Gouvernance Officielle</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ujmah-indigo mt-1">Le Bureau Exécutif</h2>
            <p className="font-sans text-sm text-ujmah-navy/60 mt-2">
              L'équipe dirigeante engagée pour coordonner, administrer et superviser les activités de l'association
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveBoard.map((member, index) => (
              <div 
                key={index} 
                className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 hover:border-ujmah-sun/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-ujmah-indigo/10 text-ujmah-indigo text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    {member.role}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ujmah-navy">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs text-ujmah-navy/60 mt-1 font-medium leading-relaxed">
                    {member.title}
                  </p>
                </div>
                <div className="w-8 h-1 bg-ujmah-sun rounded-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Siège & Coordonnées Officielles */}
        <div className="bg-ujmah-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-ujmah-sun/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-ujmah-sun">Transparence & Proximité</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl mt-2 mb-4">Siège Social & Contact Officiel</h2>
              <p className="font-sans text-sm text-white/75 leading-relaxed mb-6">
                L'UJMAH dispose de son siège social à Lomé et assure la coordination directe de ses missions caritatives avec ses relais dans les différentes préfectures du Togo.
              </p>
              
              <div className="flex flex-col gap-4 text-sm font-sans">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-ujmah-sun flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span><strong>Siège :</strong> Agoè-Adjougba, à 100m de BOXBERG, Lomé – Togo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-ujmah-sun flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <span><strong>Téléphone officiel :</strong> +228 92 67 34 00</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-center text-center">
              <h3 className="font-display font-bold text-xl text-ujmah-sun mb-2">Reconnaissance Légale</h3>
              <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
                Déclarée et enregistrée auprès du Ministère de l'Administration Territoriale, de la Décentralisation et des Collectivités Locales sous le récépissé officiel.
              </p>
              <div className="inline-block bg-white/10 py-2 px-4 rounded-xl font-mono text-xs text-white tracking-widest font-bold">
                0315/MATDCL-SG-DLPAP-DOCA
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
