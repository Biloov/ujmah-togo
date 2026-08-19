import React from 'react';

export default function Galerie() {
  const images = [
    { url: "/assets/hero-mosque.png", tag: "Association", title: "Siège UJMAH Togo", fallback: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400" },
    { url: "/assets/crsc-interior.png", tag: "Solidarité", title: "Concours de Coran (CRSC)", fallback: "https://images.unsplash.com/photo-1511949863663-92c5c57d48a7?auto=format&fit=crop&q=80&w=400" },
    { url: "/assets/sefima-weaving.png", tag: "Formation", title: "Ateliers de Tissage", fallback: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" },
    { url: "/assets/orphanage-yelivo.png", tag: "Orphelinat", title: "MES ENFANTS à Yelivo", fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" },
    { url: "/assets/gallery-well.png", tag: "Eau & Hygiène", title: "Projet Puits Potable", fallback: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400" },
    { url: "/assets/actions-sociales.png", tag: "Solidarité", title: "Distributions Alimentaires", fallback: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-navy/5 text-ujmah-navy font-sans text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
            Médiathèque
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-navy mb-6 tracking-tight">
            Galerie Photos
          </h1>
          <p className="font-sans text-base text-ujmah-navy/60 leading-relaxed">
            Découvrez en images les sourires, le travail et l'espoir générés par nos équipes de bénévoles lors de nos interventions sur le terrain.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-sm border border-ujmah-navy/5 aspect-video sm:aspect-square bg-ujmah-gray">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = img.fallback;
                }}
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ujmah-navy/80 via-ujmah-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 p-6 flex flex-col justify-end">
                <span className="inline-block self-start bg-ujmah-gold text-white font-sans text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full mb-2">
                  {img.tag}
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-snug">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
