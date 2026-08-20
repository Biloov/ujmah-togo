import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { API_URL } from '../config';
import { Plus, Edit2, Trash2, Loader2, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  status: string;
  createdAt: string;
}

export default function AdminArticles() {
  const { token, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [status, setStatus] = useState('Brouillon');
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchArticles();
    }
  }, [token, navigate]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_URL}/articles`, {
        headers: getAuthHeaders()
      });
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (err) {
      setError('Erreur lors du chargement des articles');
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    // Generate clean URL slug automatically
    setSlug(
      val.toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({
          title,
          slug,
          summary,
          content,
          mainImage,
          categoryId: 'seed-category-id-placehold', // Linked to default seeded category
          status
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de la création');
      }

      setShowForm(false);
      setTitle('');
      setSlug('');
      setSummary('');
      setContent('');
      setMainImage('');
      fetchArticles();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cet article ?')) return;

    try {
      const response = await fetch(`${API_URL}/articles/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (!response.ok) {
        throw new Error('Erreur de suppression');
      }

      fetchArticles();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex bg-ujmah-gray min-h-screen text-ujmah-navy">
      <AdminSidebar />
      
      <div className="flex-grow p-10 overflow-y-auto">
        {/* Header */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="font-display font-extrabold text-3xl">Actualités CMS</h1>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mt-1">
              Rédigez, publiez et modérez les articles d'actualités de l'association.
            </p>
          </div>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-ujmah-gold text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs hover:bg-ujmah-navy transition-colors hover:shadow-lg"
          >
            <Plus size={16} />
            {showForm ? 'Fermer le formulaire' : 'Rédiger un article'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-3 mb-6">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Modal/Form Overlay */}
        {showForm && (
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-md mb-8 animate-fadeIn">
            <h3 className="font-display font-bold text-xl mb-6">Nouvel Article</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Titre de l'article</label>
                <input 
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="Saisir le titre..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Lien URL (Slug)</label>
                <input 
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors font-mono"
                  placeholder="lien-url-generer"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Résumé rapide</label>
                <input 
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="Court résumé de l'article affiché en page d'accueil..."
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Contenu détaillé</label>
                <textarea 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors min-h-[160px] resize-y"
                  placeholder="Rédiger le contenu de l'article ici..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Image Principale (URL)</label>
                <input 
                  type="text"
                  value={mainImage}
                  onChange={(e) => setMainImage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="/assets/image.png"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Statut de publication</label>
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  required
                >
                  <option value="Brouillon">Brouillon (Invisible)</option>
                  <option value="Publié">Publié (En ligne)</option>
                </select>
              </div>

              <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2.5 rounded-full font-sans font-semibold text-xs border border-ujmah-navy/10 text-ujmah-navy hover:bg-ujmah-gray transition-colors"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  disabled={submitLoading}
                  className="inline-flex items-center gap-1.5 bg-ujmah-navy text-white px-6 py-2.5 rounded-full font-sans font-semibold text-xs hover:bg-ujmah-gold transition-colors disabled:opacity-50"
                >
                  {submitLoading ? <Loader2 className="animate-spin" size={14} /> : null}
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Articles List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-ujmah-gold" size={32} />
          </div>
        ) : articles.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center">
            <FileText className="mx-auto text-ujmah-navy/20 mb-4" size={48} />
            <h3 className="font-display font-bold text-xl mb-1">Aucun article</h3>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">Rédigez votre premier article d'actualité pour peupler le blog !</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ujmah-navy/5 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ujmah-navy/5 bg-ujmah-gray/30 text-xs uppercase text-ujmah-navy/40 font-bold tracking-wider">
                  <th className="p-5 font-semibold">Titre</th>
                  <th className="p-5 font-semibold">Lien URL (Slug)</th>
                  <th className="p-5 font-semibold">Création</th>
                  <th className="p-5 font-semibold">Statut</th>
                  <th className="p-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((art) => (
                  <tr key={art.id} className="border-b border-ujmah-navy/5 text-sm hover:bg-ujmah-gray/10 transition-colors">
                    <td className="p-5 font-display font-bold text-ujmah-navy leading-snug">{art.title}</td>
                    <td className="p-5 font-mono text-xs text-ujmah-navy/55">{art.slug}</td>
                    <td className="p-5 text-ujmah-navy/60 font-medium">
                      {new Date(art.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="p-5">
                      <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wide px-3 py-1 rounded-full ${
                        art.status === 'Publié' 
                          ? "bg-green-50 text-green-700 border border-green-200" 
                          : "bg-ujmah-gray text-ujmah-navy/50 border border-ujmah-navy/10"
                      }`}>
                        {art.status === 'Publié' ? <CheckCircle size={10} /> : null}
                        {art.status}
                      </span>
                    </td>
                    <td className="p-5 text-right flex justify-end gap-2">
                      <button 
                        onClick={() => handleDelete(art.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
