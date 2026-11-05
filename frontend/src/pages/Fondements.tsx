import React from 'react';
import { BookOpen, Sparkles, HeartHandshake, ShieldCheck, Check, Feather, Quote } from 'lucide-react';

export default function Fondements() {
  const foundations = [
    {
      num: "01",
      title: "Le Noble Coran",
      desc: "Parole incréée d'Allah révélée au Prophète Muhammad ﷺ, guidée suprême pour l'humanité, source inaltérable de justice, de compassion et de droiture morale.",
      verse: "« Et faites le bien. Car Allah aime assurément les bienfaisants. »",
      ref: "Sourate Al-Baqarah (2:195)"
    },
    {
      num: "02",
      title: "La Sunnah Authentique",
      desc: "La tradition vivante, les enseignements et les actes authentiquement rapportés du Messager d'Allah ﷺ, modèle sublime d'humanité et de miséricorde universelle.",
      verse: "« Les hommes les plus aimés d'Allah sont ceux qui sont les plus utiles aux autres. »",
      ref: "Hadith authentique rapporté par At-Tabarani"
    },
    {
      num: "03",
      title: "La Compréhension des Salaf As-Salih",
      desc: "L'attachement à l'interprétation pure des Pieux Prédécesseurs (les nobles Compagnons et leurs illustres disciples), garantissant la sérénité du dogme contre toute altération ou excès.",
      verse: "« Attachez-vous à ma Sunnah et à la voie des califes bien guidés après moi. »",
      ref: "Hadith rapporté par Abou Daoud et At-Tirmidhi"
    }
  ];

  const ethicRules = [
    {
      title: "La Sincérité Pure (Al-Ikhlas)",
      desc: "Chaque geste d'aide, chaque don et chaque projet est accompli avec l'intention pure de plaire au Créateur, à l'abri de toute ostentation, visée partisane ou intérêt personnel."
    },
    {
      title: "L'Excellence & la Rigueur (Al-Ihsan)",
      desc: "Rechercher la perfection dans la réalisation concrète : respect méticuleux des orphelins, transparence financière intégrale et reddition de comptes."
    },
    {
      title: "La Fraternité & l'Union (Al-Ukhuwwah)",
      desc: "Fédérer les cœurs et les compétences pour former un édifice solidaire où chacun apporte sa pierre à l'émancipation collective de la communauté."
    },
    {
      title: "La Cohésion & le Civisme Patriotique",
      desc: "L'islam sanctifie la paix civile et le vivre-ensemble. L'UJMAH promeut activement le respect mutuel, la cohabitation pacifique et le dévouement patriotique au Togo."
    }
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-white min-h-screen text-ujmah-navy">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête Éditorial */}
        <div className="max-w-4xl mb-16 pb-8 border-b border-ujmah-navy/10">
          <span className="font-mono text-xs uppercase tracking-widest text-ujmah-orange font-bold block mb-3">
            Doctrine & Boussole Morale
          </span>
          <h1 className="font-editorial font-extrabold text-4xl sm:text-6xl text-ujmah-indigo tracking-tight leading-tight mb-6">
            Nos Fondements Religieux
          </h1>
          <p className="font-sans text-lg sm:text-xl text-ujmah-dark-muted leading-relaxed">
            L'action humanitaire de l'UJMAH ne procède ni d'une mode passagère ni d'un calcul mondain. Elle prend racine dans les sources les plus pures de la révélation islamique et de l'éthique prophétique.
          </p>
        </div>

        {/* Le Hadith Phare de l'Orphelin (Mise en scène Typographique Majestueuse) */}
        <div className="bg-ujmah-navy text-white rounded-3xl p-8 sm:p-14 mb-20 shadow-2xl border-2 border-ujmah-sun/40 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Quote size={40} className="text-ujmah-sun mx-auto mb-6 opacity-80" />
            
            <blockquote className="font-editorial font-extrabold text-2xl sm:text-4xl leading-relaxed mb-6">
              « Moi et celui qui prend en charge l'orphelin serons au Paradis comme ces deux-ci. »
            </blockquote>
            
            <p className="font-sans text-sm sm:text-base text-white/80 italic mb-6">
              — Et le Messager d'Allah ﷺ joignit son index et son majeur pour en marquer l'étroite proximité.
            </p>

            <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full font-mono text-xs text-ujmah-sun font-bold uppercase tracking-widest border border-white/15">
              Sahih Al-Bukhari • Hadith N° 5304
            </span>
          </div>
        </div>

        {/* Les Trois Piliers Doctrinaux (Numérotés avec citations scripturaires) */}
        <div className="mb-20 pb-16 border-b border-ujmah-navy/10">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Sources Scripturaires
            </span>
            <h2 className="font-editorial font-bold text-3xl sm:text-4xl text-ujmah-indigo">
              Les Trois Sources Authentiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundations.map((f) => (
              <div 
                key={f.num}
                className="bg-ujmah-ivory p-8 rounded-3xl border border-ujmah-navy/5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-extrabold text-ujmah-orange block mb-3">
                    Pilier {f.num}
                  </span>
                  <h3 className="font-editorial font-bold text-2xl text-ujmah-indigo mb-3">
                    {f.title}
                  </h3>
                  <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border-l-4 border-ujmah-sun shadow-sm">
                  <p className="font-editorial italic text-xs text-ujmah-navy leading-snug mb-2">
                    {f.verse}
                  </p>
                  <span className="font-sans text-[11px] font-bold text-ujmah-orange uppercase tracking-wider block">
                    {f.ref}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charte Éthique dans l'Action Humanitaire */}
        <div className="mb-16">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-ujmah-orange block mb-2">
              Traduction dans l'Action
            </span>
            <h2 className="font-editorial font-bold text-3xl sm:text-4xl text-ujmah-indigo mb-3">
              Notre Éthique de l'Engagement
            </h2>
            <p className="font-sans text-sm text-ujmah-navy/60">
              Comment notre foi se concrétise au quotidien dans les orphelinats, les écoles et les villages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ethicRules.map((rule, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-ujmah-ivory border border-ujmah-navy/5">
                <span className="font-mono text-xs font-bold text-ujmah-orange uppercase tracking-widest block mb-2">
                  Principe 0{idx + 1}
                </span>
                <h3 className="font-editorial font-bold text-xl text-ujmah-indigo mb-3">
                  {rule.title}
                </h3>
                <p className="font-sans text-sm text-ujmah-dark-muted leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
