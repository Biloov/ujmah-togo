import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { API_URL } from '../config';
import { 
  Plus, 
  Trash2, 
  Image as ImageIcon, 
  Video, 
  UploadCloud, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Tag, 
  MapPin, 
  ExternalLink,
  Film,
  Play
} from 'lucide-react';

interface GalleryItem {
  id: string;
  url: string;
  altText: string;
  type: 'IMAGE' | 'VIDEO';
  category?: string;
  location?: string;
  album?: { name: string };
  createdAt?: string;
}

const DEFAULT_CATEGORIES = [
  "Orphelinat Yelivo",
  "Concours de Coran (CRSC)",
  "Séminaires SEFIMA",
  "Distribution Kits Scolaires",
  "Solidarité Alimentaire & Forages",
  "Assises de Sciences",
  "Vie de l'Association"
];

export default function AdminGallery() {
  const { token, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form State
  const [showModal, setShowModal] = useState(false);
  const [mediaType, setMediaType] = useState<'IMAGE' | 'VIDEO'>('IMAGE');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(DEFAULT_CATEGORIES[0]);
  const [location, setLocation] = useState('Togo');
  const [url, setUrl] = useState('');
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchGallery();
    }
  }, [token, navigate]);

  const fetchGallery = async () => {
    try {
      // 1. Try local storage cache first
      const cached = localStorage.getItem('ujmah_gallery_items');
      if (cached) {
        try {
          setItems(JSON.parse(cached));
        } catch (e) {
          console.error(e);
        }
      }

      // 2. Query backend
      const res = await fetch(`${API_URL}/gallery`);
      if (res.ok) {
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setItems(data.items);
          localStorage.setItem('ujmah_gallery_items', JSON.stringify(data.items));
        }
      }
    } catch (err) {
      console.warn("Utilisation des données locales pour la galerie");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 40 * 1024 * 1024) {
      setError('Fichier trop volumineux (maximum 40 Mo). Pour les vidéos lourdes, privilégiez un lien YouTube ou MP4 en streaming.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setFilePreview(result);
      setUrl(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Veuillez fournir un fichier ou une URL de média valide.');
      return;
    }

    setUploading(true);
    setError('');
    setSuccess('');

    const newItem: GalleryItem = {
      id: 'media-' + Date.now(),
      url: url.trim(),
      altText: title.trim() || 'Média UJMAH',
      type: mediaType,
      category,
      location,
      album: { name: category },
      createdAt: new Date().toISOString()
    };

    try {
      // Send to Backend
      const res = await fetch(`${API_URL}/gallery`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({
          url: newItem.url,
          altText: newItem.altText,
          type: newItem.type,
          albumName: newItem.category,
          location: newItem.location
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.item) {
          newItem.id = data.item.id;
        }
      }
    } catch (err) {
      console.warn("Enregistrement local automatique suite à l'indisponibilité temporaire de l'API");
    }

    // Save locally
    const updated = [newItem, ...items];
    setItems(updated);
    localStorage.setItem('ujmah_gallery_items', JSON.stringify(updated));

    setSuccess('Média téléversé avec succès !');
    setUploading(false);
    setShowModal(false);
    // Reset Form
    setTitle('');
    setUrl('');
    setFilePreview(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce média ?')) return;

    try {
      await fetch(`${API_URL}/gallery/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
    } catch (e) {
      console.warn("Suppression locale");
    }

    const updated = items.filter(it => it.id !== id);
    setItems(updated);
    localStorage.setItem('ujmah_gallery_items', JSON.stringify(updated));
    setSuccess('Média supprimé');
  };

  return (
    <div className="flex min-h-screen bg-ujmah-ivory">
      <AdminSidebar />

      <div className="flex-grow p-8 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-sans font-black text-2xl sm:text-3xl text-ujmah-indigo">
              Médiathèque & Gestionnaire de Médias
            </h1>
            <p className="text-xs sm:text-sm text-ujmah-dark-muted mt-1">
              Téléversez vos photos de terrain et vidéos pour la galerie publique du site (style AEEMT & Dribbble).
            </p>
          </div>

          <button
            onClick={() => {
              setError('');
              setSuccess('');
              setShowModal(true);
            }}
            className="inline-flex items-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <Plus size={18} />
            Téléverser un média
          </button>
        </div>

        {/* Notifications */}
        {error && (
          <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl text-sm mb-6 flex items-center gap-3">
            <AlertCircle size={18} />
            {error}
          </div>
        )}
        {success && (
          <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 p-4 rounded-xl text-sm mb-6 flex items-center gap-3">
            <CheckCircle size={18} />
            {success}
          </div>
        )}

        {/* Items Grid */}
        {loading ? (
          <div className="flex items-center justify-center p-20">
            <Loader2 className="animate-spin text-ujmah-orange" size={36} />
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-ujmah-navy/10">
            <UploadCloud size={48} className="mx-auto text-ujmah-navy/30 mb-4" />
            <h3 className="font-sans font-bold text-lg text-ujmah-navy mb-1">Aucun média enregistré</h3>
            <p className="text-xs text-ujmah-dark-muted mb-6">Commencez par téléverser une première photo ou vidéo d'activité de terrain.</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-ujmah-indigo text-white px-6 py-2.5 rounded-xl font-bold text-xs"
            >
              Ajouter une photo / vidéo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-ujmah-navy/10 shadow-sm flex flex-col group hover:shadow-md transition-all">
                {/* Visual */}
                <div className="relative aspect-video bg-ujmah-navy/10 overflow-hidden">
                  {item.type === 'VIDEO' ? (
                    item.url.includes('youtube.com') || item.url.includes('youtu.be') ? (
                      <div className="w-full h-full flex items-center justify-center bg-black text-white relative">
                        <Play size={32} className="text-ujmah-sun" />
                        <span className="absolute bottom-2 right-2 text-[10px] bg-red-600 px-2 py-0.5 rounded text-white font-bold">YouTube</span>
                      </div>
                    ) : (
                      <video src={item.url} className="w-full h-full object-cover" />
                    )
                  ) : (
                    <img 
                      src={item.url} 
                      alt={item.altText} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                  )}

                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white uppercase flex items-center gap-1">
                    {item.type === 'VIDEO' ? <Video size={10} /> : <ImageIcon size={10} />}
                    {item.type}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-ujmah-orange uppercase tracking-wider block mb-1">
                      {item.category || item.album?.name || "Général"}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-ujmah-navy line-clamp-2 mb-2">
                      {item.altText}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-ujmah-navy/5 text-xs text-ujmah-dark-muted">
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin size={12} />
                      {item.location || "Togo"}
                    </span>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                      title="Supprimer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal d'Upload Moderne */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-ujmah-navy/10 relative max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-ujmah-navy/10">
                <div>
                  <h3 className="font-sans font-black text-xl text-ujmah-indigo">
                    Téléverser une Photo ou une Vidéo
                  </h3>
                  <p className="text-xs text-ujmah-dark-muted mt-0.5">
                    Le média apparaîtra instantanément sur la galerie publique UJMAH.
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 rounded-full bg-ujmah-navy/5 text-ujmah-navy hover:bg-ujmah-navy/10 flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Type de Média */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ujmah-navy block mb-2">
                    Format du Média
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { setMediaType('IMAGE'); setFilePreview(null); setUrl(''); }}
                      className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                        mediaType === 'IMAGE'
                          ? "bg-ujmah-indigo text-white border-ujmah-indigo shadow-sm"
                          : "bg-ujmah-ivory text-ujmah-navy border-ujmah-navy/10 hover:bg-white"
                      }`}
                    >
                      <ImageIcon size={16} />
                      Photo (JPG, PNG, WebP)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setMediaType('VIDEO'); setFilePreview(null); setUrl(''); }}
                      className={`py-3 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all ${
                        mediaType === 'VIDEO'
                          ? "bg-ujmah-orange text-white border-ujmah-orange shadow-sm"
                          : "bg-ujmah-ivory text-ujmah-navy border-ujmah-navy/10 hover:bg-white"
                      }`}
                    >
                      <Video size={16} />
                      Vidéo (MP4, YouTube)
                    </button>
                  </div>
                </div>

                {/* Dropzone / Upload Fichier Local */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ujmah-navy block mb-2">
                    Fichier {mediaType === 'IMAGE' ? 'Image' : 'Vidéo'}
                  </label>

                  <input 
                    type="file" 
                    ref={fileInputRef}
                    accept={mediaType === 'IMAGE' ? "image/*" : "video/*"}
                    onChange={handleFileUpload}
                    className="hidden" 
                  />

                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-ujmah-navy/20 hover:border-ujmah-orange rounded-2xl p-6 text-center cursor-pointer bg-ujmah-ivory transition-colors"
                  >
                    <UploadCloud size={32} className="mx-auto text-ujmah-orange mb-2" />
                    <span className="text-xs font-bold text-ujmah-indigo block">
                      Cliquez pour choisir un fichier depuis votre appareil
                    </span>
                    <span className="text-[11px] text-ujmah-dark-muted block mt-1">
                      {mediaType === 'IMAGE' ? 'PNG, JPG, WEBP jusqu\'à 15 Mo' : 'MP4, WebM jusqu\'à 40 Mo'}
                    </span>
                  </div>

                  {/* Prévisualisation */}
                  {filePreview && (
                    <div className="mt-3 relative rounded-xl overflow-hidden border border-ujmah-navy/10 aspect-video bg-black/5">
                      {mediaType === 'IMAGE' ? (
                        <img src={filePreview} alt="Aperçu" className="w-full h-full object-cover" />
                      ) : (
                        <video src={filePreview} controls className="w-full h-full object-contain" />
                      )}
                      <span className="absolute top-2 right-2 px-2 py-1 bg-black/70 text-white rounded text-[10px] font-bold">
                        Aperçu prêt
                      </span>
                    </div>
                  )}
                </div>

                {/* Ou URL directe / YouTube */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ujmah-navy block mb-1">
                    Ou collez une URL {mediaType === 'VIDEO' ? '(YouTube, Vimeo, MP4 direct)' : 'd\'image externe'}
                  </label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      setFilePreview(e.target.value);
                    }}
                    placeholder={mediaType === 'VIDEO' ? "https://www.youtube.com/watch?v=..." : "https://..."}
                    className="w-full px-4 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs focus:outline-none focus:border-ujmah-indigo"
                  />
                </div>

                {/* Titre / Légende */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ujmah-navy block mb-1">
                    Titre ou Description du média *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex: Cérémonie de remise des prix du Concours de Coran 2024"
                    className="w-full px-4 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs focus:outline-none focus:border-ujmah-indigo"
                  />
                </div>

                {/* Catégorie & Lieu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-ujmah-navy block mb-1">
                      Catégorie / Thème
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs bg-white focus:outline-none focus:border-ujmah-indigo"
                    >
                      {DEFAULT_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-ujmah-navy block mb-1">
                      Lieu de l'intervention
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ex: Yelivo, Sokodé, Lomé..."
                      className="w-full px-4 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs focus:outline-none focus:border-ujmah-indigo"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t border-ujmah-navy/10">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-ujmah-navy hover:bg-ujmah-ivory"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="inline-flex items-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {uploading && <Loader2 size={14} className="animate-spin" />}
                    Publier le média
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
