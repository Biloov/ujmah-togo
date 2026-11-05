import React from 'react';
import { Shield, Users, Award, Calendar, MapPin, Phone, CheckCircle2, HeartHandshake, Compass, Building, Briefcase } from 'lucide-react';

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
    { role: "Président", name: "AMIDOU Bilal", title: "Commerçant & Motion Designer", num: "01" },
    { role: "Vice-président", name: "MOUSSA RAFIOU", title: "Enseignant au CEG Centre", num: "02" },
    { role: "Directeur des affaires administratives", name: "KALILOU Moussa", title: "Enseignant au CEG Privé", num: "03" },
    { role: "Directrice des finances et du patrimoine", name: "ALEDJI Nazifa", title: "Gestionnaire Finance", num: "04" },
    { role: "Directeur des formations", name: "OURO GOUNI Abdul Malik", title: "Étudiant en Sciences Islamiques & Enseignant", num: "05" },
    { role: "Directeur de la communication & relations extérieures", name: "HLOMEGBE Ishaac", title: "Entrepreneur agro-pastoral", num: "06" },
    { role: "Directeur de l'organisation et de la planification", name: "BOLBIGOU CHAFIOU", title: "Enseignant, Étudiant en Master", num: "07" },
    { role: "Adjoint au Dir. organisation & planification", name: "ALEDJOU RAMADAN", title: "Étudiant en FASEG", num: "08" },
    { role: "Directeur des ressources humaines et de la culture", name: "AMOUSSOU BAKI", title: "Enseignant au cours primaire", num: "09" },
    { role: "Directrice des affaires féminines", name: "TCHADENOU Cherifa", title: "Technicienne Télécommunication & Réseaux", num: "10" }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-white min-h-screen text-ujmah-navy">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        
        {/* En-tête Éditorial */}
        <div className="max-w-4xl mb-16 pb-8 border-b border-ujmah-navy/10">
          <span className="font-sans text-xs uppercase tracking-widest text-ujmah-orange font-bold block mb-3">
            Dossier Institutionnel • Fondation & Gouvernance
          </span>
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl text-ujmah-indigo tracking-tight leading-tight mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="font-sans text-lg sm:text-xl text-ujmah-dark-muted leading-relaxed">
            L'<strong>Union des Jeunes Musulmans pour l'Action Humanitaire (UJMAH)</strong> est une organisation caritative et d'intérêt public fondée au Togo en 2003, vouée au soulagement de la détresse humaine, à l'émulation éducative et à la dignité fraternelle.
          </p>
        </div>

        {/* Genèse & 23 Ans d'Histoire (Style Récit de Grand Reportage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-7">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Aux Origines de l'Engagement
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-ujmah-indigo mb-6 leading-snug">
              23 Janvier 2003 : La naissance d'un idéal de fraternité active
            </h2>
            
            <div className="space-y-4 font-sans text-base text-ujmah-dark-muted leading-relaxed">
              <p>
                C'est dans le quartier d'<strong>Agoè-Houmbi à Lomé</strong> qu'a germé le 23 janvier 2003 l'initiative de jeunes togolais désireux d'unir leurs forces pour apporter des réponses concrètes aux urgences sociales de leur environnement.
              </p>
              <p>
                Loin de se cantonner aux discours, l'association a immédiatement fondé son action sur le terrain : soutien scolaire, secours alimentaires aux plus vulnérables, concours coraniques et séminaires de formation citoyenne et managériale.
              </p>
              <p>
                Enregistrée et reconnue par les autorités togolaises sous le récépissé officiel <strong>N° 0315/MATDCL-SG-DLPAP-DOCA</strong>, l'UJMAH a étendu son rayonnement au fil de plus de deux décennies, jusqu'à implanter dans la Région Centrale son joyau caritatif : l'orphelinat <em>« MES ENFANTS »</em> à Yelivo.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-ujmah-ivory border-l-4 border-ujmah-orange">
              <p className="font-sans italic text-lg text-ujmah-indigo">
                « Servir l'humanité dans l'union »
              </p>
              <span className="font-sans text-xs text-ujmah-navy/60 font-semibold mt-1 block">
                La devise originelle qui guide chacune de nos interventions depuis 23 ans.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5">
            <h3 className="font-sans font-bold text-2xl text-ujmah-indigo mb-6 pb-3 border-b border-ujmah-navy/10">
              Repères Clés
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-sans font-extrabold text-2xl text-ujmah-orange">2003</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ujmah-navy">Création à Agoè-Houmbi</h4>
                  <p className="font-sans text-xs text-ujmah-navy/60 mt-0.5">Fondation le 23 janvier par la jeunesse musulmane togolaise.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-sans font-extrabold text-2xl text-ujmah-indigo">0315</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ujmah-navy">Reconnaissance Légale</h4>
                  <p className="font-sans text-xs text-ujmah-navy/60 mt-0.5">Récépissé ministériel officiel MATDCL-SG-DLPAP-DOCA.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-sans font-extrabold text-2xl text-ujmah-sun">Yelivo</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ujmah-navy">Orphelinat « MES ENFANTS »</h4>
                  <p className="font-sans text-xs text-ujmah-navy/60 mt-0.5">40 enfants accueillis et éduqués dans la Région Centrale.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-sans font-extrabold text-2xl text-ujmah-dark">Siège</span>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ujmah-navy">Agoè-Adjougba, Lomé</h4>
                  <p className="font-sans text-xs text-ujmah-navy/60 mt-0.5">À 100m de BOXBERG • Ligne : +228 92 67 34 00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Les 8 Objectifs Statutaires (Mise en page Numérotée de Prestige) */}
        <div className="mb-20 pb-16 border-b border-ujmah-navy/10">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Charte Statutaire
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-ujmah-indigo">
              Nos Huit Objectifs Fondateurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {objectives.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-6 border-b border-ujmah-navy/5">
                <span className="font-sans text-sm font-extrabold text-ujmah-orange pt-0.5">
                  0{idx + 1}
                </span>
                <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed font-medium">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Le Bureau Exécutif (Trombinoscope Institutionnel Haut de Gamme) */}
        <div className="mb-16">
          <div className="max-w-3xl mb-12">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Gouvernance Officielle
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-ujmah-indigo mb-3">
              Membres du Bureau Exécutif
            </h2>
            <p className="font-sans text-sm text-ujmah-navy/60">
              Les dix membres élus pour diriger, coordonner et administrer les œuvres et programmes de l'UJMAH Togo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveBoard.map((member) => (
              <div 
                key={member.num}
                className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 hover:border-ujmah-indigo/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-sans text-xs font-bold text-ujmah-orange">
                      N° {member.num}
                    </span>
                    <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-ujmah-indigo/60">
                      Mandat Actif
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-ujmah-indigo mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs font-bold text-ujmah-orange uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-ujmah-navy/65 font-medium leading-relaxed">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
