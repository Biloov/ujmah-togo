import React, { useState, useEffect } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  Play, 
  Search, 
  X, 
  Maximize2, 
  Download, 
  MapPin, 
  Calendar, 
  Sparkles,
  Lock
} from 'lucide-react';
import { API_URL } from '../config';

interface MediaItem {
  id: string;
  url: string;
  title: string;
  type: 'IMAGE' | 'VIDEO';
  category: string;
  location: string;
  date: string;
  description?: string;
  youtubeId?: string;
  duration?: string;
}

const CATEGORIES = [
  "Tous",
  "Orphelinat Yelivo",
  "Concours de Coran (CRSC)",
  "Séminaires SEFIMA",
  "Distribution Kits Scolaires",
  "Solidarité & Hydraulique",
  "Assises de Sciences"
];

const INITIAL_MEDIA: MediaItem[] = [
  {
    id: "med-1",
    url: "/assets/orphanage-yelivo.png",
    title: "Vie quotidienne & encadrement des 40 enfants de l'Orphelinat",
    type: "IMAGE",
    category: "Orphelinat Yelivo",
    location: "Yelivo, près de Sokodé",
    date: "2024",
    description: "Les pensionnaires du centre « MES ENFANTS » lors des activités périscolaires sous la direction de Nazif AMOUSSOU."
  },
  {
    id: "med-2",
    url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200",
    title: "Grande finale du Concours National de Récitation du Coran (CNRSC)",
    type: "IMAGE",
    category: "Concours de Coran (CRSC)",
    location: "Palais des Congrès de Lomé",
    date: "2024",
    description: "Émulation des meilleurs jeunes mémorisateurs du Coran venus de toutes les régions du Togo."
  },
  {
    id: "med-3",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Documentaire : 23 ans d'histoire et d'action humanitaire au Togo",
    type: "VIDEO",
    category: "Assises de Sciences",
    location: "Lomé",
    date: "2024",
    duration: "14:20",
    youtubeId: "dQw4w9WgXcQ",
    description: "Rétrospective officielle retraçant la fondation de l'UJMAH le 23 janvier 2003 à Agoè-Houmbi jusqu'aux grands chantiers actuels."
  },
  {
    id: "med-4",
    url: "/assets/sefima-weaving.png",
    title: "Atelier pratique du Séminaire SEFIMA : Entrepreneuriat & Autonomie",
    type: "IMAGE",
    category: "Séminaires SEFIMA",
    location: "Région Centrale",
    date: "2023",
    description: "Formation managériale et initiation aux métiers d'artisanat pour les jeunes cadres musulmans."
  },
  {
    id: "med-5",
    url: "/assets/gallery-well.png",
    title: "Inauguration d'un nouveau forage d'eau potable villageois",
    type: "IMAGE",
    category: "Solidarité & Hydraulique",
    location: "Région des Savanes",
    date: "2023",
    description: "Projet d'hydraulique villageoise offrant l'eau potable à plus de 1 200 habitants (Sadaqa Jariya)."
  },
  {
    id: "med-6",
    url: "/assets/actions-sociales.png",
    title: "Distribution de vivres et viande de Tabaski aux familles répertoriées",
    type: "IMAGE",
    category: "Solidarité & Hydraulique",
    location: "Agoè-Adjougba, Lomé",
    date: "2024",
    description: "Opération annuelle de solidarité alimentaire pour apporter la joie et le réconfort aux familles nécessiteuses."
  },
  {
    id: "med-7",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    title: "Campagne de rentrée scolaire : Dotation de kits scolaires complets",
    type: "IMAGE",
    category: "Distribution Kits Scolaires",
    location: "Préfecture de Tchaoudjo",
    date: "2024",
    description: "Fournitures, sacs à dos et manuels offerts aux orphelins et enfants démunis pour lutter contre le décrochage scolaire."
  },
  {
    id: "med-8",
    url: "https://images.unsplash.com/photo-1511949863663-92c5c57d48a7?auto=format&fit=crop&q=80&w=1200",
    title: "Assise de Sciences : Conférence publique sur l'éthique musulmane",
    type: "IMAGE",
    category: "Assises de Sciences",
    location: "Agoè-Nyivé, Lomé",
    date: "2023",
    description: "Enseignement authentique conforme au Coran et à la Sunnah selon la compréhension des pieux prédécesseurs."
  }
];

export default function Galerie() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'IMAGE' | 'VIDEO'>('ALL');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Lightbox & Video Player Modal
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  // Load items from localStorage + API
  useEffect(() => {
    const loadItems = async () => {
      let mergedItems = [...INITIAL_MEDIA];
      
      // Check localStorage first
      const cached = localStorage.getItem('ujmah_gallery_items');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const normalized = parsed.map((it: any) => ({
              id: it.id || 'med-' + Math.random(),
              url: it.url,
              title: it.altText || it.title || 'Média UJMAH',
              type: it.type || 'IMAGE',
              category: it.category || it.album?.name || 'Vie de l\'Association',
              location: it.location || 'Togo',
              date: it.date || '2024',
              description: it.description || ''
            }));
            mergedItems = [...normalized, ...INITIAL_MEDIA.filter(init => !normalized.some(n => n.url === init.url))];
          }
        } catch (e) {
          console.error(e);
        }
      }

      // Check API
      try {
        const res = await fetch(`${API_URL}/gallery`);
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length > 0) {
            const apiItems = data.items.map((it: any) => ({
              id: it.id,
              url: it.url,
              title: it.altText || 'Média UJMAH',
              type: it.type,
              category: it.album?.name || 'Vie de l\'Association',
              location: it.location || 'Togo',
              date: new Date(it.createdAt).getFullYear().toString() || '2024',
              description: it.description || ''
            }));
            mergedItems = [...apiItems, ...mergedItems.filter(m => !apiItems.some((a: any) => a.id === m.id))];
          }
        }
      } catch (err) {
        // Fallback silently
      }

      setItems(mergedItems);
    };

    loadItems();
  }, []);

  // Filter Items
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === "Tous" || item.category === selectedCategory;
    const matchesType = typeFilter === 'ALL' || item.type === typeFilter;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-ujmah-navy">
      
      {/* =========================================================================
          1. HERO HEADER MÉDIATHÈQUE (Inspiré Behance & Dribbble)
         ========================================================================= */}
      <section className="relative hero-mesh-bg text-white pt-36 pb-20 px-6 overflow-hidden">
        
        {/* Cercles de lumière d'ambiance */}
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-ujmah-sun/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-ujmah-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card-dark text-xs font-semibold text-ujmah-sun border border-white/10 mb-4">
                <Sparkles size={14} />
                Médiathèque Officielle • Archives & Reportages
              </div>
              <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Photos & Vidéos <br />
                <span className="bg-gradient-to-r from-ujmah-sun via-ujmah-sun-light to-ujmah-orange bg-clip-text text-transparent">
                  de nos actions sur le terrain.
                </span>
              </h1>
            </div>

            {/* Lien discret Staff Admin (Protégé) */}
            <div className="flex-shrink-0">
              <a
                href="/admin/gallery"
                className="inline-flex items-center gap-2 glass-card-dark hover:bg-white/15 text-white/90 hover:text-white px-5 py-3 rounded-xl font-bold text-xs border border-white/20 transition-all"
                title="Espace réservé à l'équipe UJMAH habilitée"
              >
                <Lock size={14} className="text-ujmah-sun" />
                Administration Médiathèque
              </a>
            </div>
          </div>

          {/* Barre de Recherche & Filtres Rapides */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Champ de Recherche */}
            <div className="relative flex-grow max-w-lg">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher : Yelivo, Coran, Lomé, Puits, SEFIMA..."
                className="w-full bg-white/10 text-white placeholder-white/50 rounded-xl pl-11 pr-4 py-2.5 text-xs sm:text-sm border border-transparent focus:border-ujmah-sun focus:outline-none transition-all"
              />
            </div>

            {/* Toggle Type : Tous / Photos / Vidéos */}
            <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-xl self-start md:self-auto">
              <button
                onClick={() => setTypeFilter('ALL')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  typeFilter === 'ALL' ? "bg-white text-ujmah-indigo shadow-sm" : "text-white/70 hover:text-white"
                }`}
              >
                Tous ({items.length})
              </button>
              <button
                onClick={() => setTypeFilter('IMAGE')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  typeFilter === 'IMAGE' ? "bg-white text-ujmah-indigo shadow-sm" : "text-white/70 hover:text-white"
                }`}
              >
                <ImageIcon size={14} />
                Photos
              </button>
              <button
                onClick={() => setTypeFilter('VIDEO')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  typeFilter === 'VIDEO' ? "bg-white text-ujmah-indigo shadow-sm" : "text-white/70 hover:text-white"
                }`}
              >
                <Video size={14} />
                Vidéos
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. PILULES DE CATÉGORIES (Filtres Thématiques)
         ========================================================================= */}
      <section className="border-b border-ujmah-navy/10 bg-white sticky top-16 md:top-24 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-3.5 overflow-x-auto scrollbar-none flex items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected 
                    ? "bg-ujmah-indigo text-white shadow-md shadow-ujmah-indigo/20 scale-[1.02]" 
                    : "bg-ujmah-ivory hover:bg-ujmah-navy/5 text-ujmah-navy/80 border border-ujmah-navy/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. GRILLE DE MÉDIAS BENTO & MASONRY (Dribbble/Behance Style)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-14">
        
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-ujmah-navy/10 shadow-sm max-w-lg mx-auto">
            <ImageIcon size={48} className="mx-auto text-ujmah-navy/30 mb-4" />
            <h3 className="font-sans font-bold text-lg text-ujmah-navy mb-2">
              Aucun média ne correspond à votre filtre
            </h3>
            <p className="text-xs text-ujmah-dark-muted mb-6">
              Essayez de modifier votre recherche ou de sélectionner une autre catégorie.
            </p>
            <button
              onClick={() => { setSelectedCategory("Tous"); setTypeFilter('ALL'); setSearchQuery(""); }}
              className="bg-ujmah-indigo text-white px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isVideo = item.type === 'VIDEO';

              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveMedia(item)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-ujmah-navy/10 shadow-sm hover:shadow-2xl hover:border-ujmah-orange/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Visuel Média */}
                  <div className="relative aspect-[4/3] bg-ujmah-navy/5 overflow-hidden">
                    {isVideo ? (
                      <div className="w-full h-full relative bg-ujmah-navy">
                        {item.youtubeId ? (
                          <img 
                            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ujmah-indigo to-ujmah-navy text-white">
                            <Video size={48} className="text-white/40" />
                          </div>
                        )}

                        {/* Bouton Play Flottant */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-ujmah-orange text-white flex items-center justify-center shadow-xl shadow-ujmah-orange/50 group-hover:scale-110 transition-transform duration-300">
                            <Play size={24} fill="currentColor" className="ml-1" />
                          </div>
                        </div>

                        {item.duration && (
                          <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-[10px] font-bold rounded-md">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    ) : (
                      <img 
                        src={item.url} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold">
                        <Maximize2 size={14} />
                        Agrandir le média
                      </span>
                    </div>

                    {/* Badge Catégorie en haut */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                        {item.category}
                      </span>
                      <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs">
                        {isVideo ? <Video size={14} /> : <ImageIcon size={14} />}
                      </span>
                    </div>

                  </div>

                  {/* Légende & Métadonnées */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-ujmah-dark-muted font-medium mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-ujmah-orange" />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                      </div>

                      <h3 className="font-sans font-bold text-base text-ujmah-navy leading-snug group-hover:text-ujmah-indigo transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>

                    {item.description && (
                      <p className="text-xs text-ujmah-dark-muted line-clamp-2 mt-2 pt-2 border-t border-ujmah-navy/5">
                        {item.description}
                      </p>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* =========================================================================
          4. MODAL VISIONNEUSE & LECTEUR VIDÉO (Lightbox Behance / Dribbble)
         ========================================================================= */}
      {activeMedia && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-[#100830] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
            
            {/* Header Modal */}
            <div className="p-4 sm:p-6 bg-white/5 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-ujmah-orange text-white text-xs font-bold uppercase">
                  {activeMedia.category}
                </span>
                <span className="text-xs text-white/60 hidden sm:inline">
                  {activeMedia.location} • {activeMedia.date}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {activeMedia.type === 'IMAGE' && (
                  <a
                    href={activeMedia.url}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Télécharger l'image"
                  >
                    <Download size={16} />
                  </a>
                )}
                <button
                  onClick={() => setActiveMedia(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Contenu Média */}
            <div className="flex-grow flex items-center justify-center p-4 bg-black/40 overflow-hidden relative min-h-[300px] sm:min-h-[460px]">
              {activeMedia.type === 'VIDEO' ? (
                activeMedia.youtubeId ? (
                  <iframe
                    className="w-full h-full min-h-[400px] sm:min-h-[500px] rounded-2xl"
                    src={`https://www.youtube-nocookie.com/embed/${activeMedia.youtubeId}?autoplay=1`}
                    title={activeMedia.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={activeMedia.url} 
                    controls 
                    autoPlay 
                    className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl"
                  />
                )
              ) : (
                <img 
                  src={activeMedia.url} 
                  alt={activeMedia.title} 
                  className="max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              )}
            </div>

            {/* Légende Bas */}
            <div className="p-6 bg-[#0B0520] border-t border-white/10 text-white">
              <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-2">
                {activeMedia.title}
              </h3>
              {activeMedia.description && (
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">
                  {activeMedia.description}
                </p>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
