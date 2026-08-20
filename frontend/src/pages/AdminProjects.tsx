import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { API_URL } from '../config';
import { Plus, Loader2, HeartHandshake, AlertCircle, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  slug: string;
  budget: number | null;
  collectedAmount: number;
  status: string;
}

export default function AdminProjects() {
  const { token, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchProjects();
    }
  }, [token, navigate]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/projects`, {
        headers: getAuthHeaders()
      });
      const data = await response.json();
      setProjects(data.projects || []);
    } catch (err) {
      setError('Erreur lors du chargement des projets');
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (val: string) => {
    setName(val);
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
      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({
          name,
          slug,
          description,
          budget: budget ? parseFloat(budget) : null,
          mainImage,
          categoryId: 'seed-projectcat-id-placehold' // Linked to default seeded project category
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de la création');
      }

      setShowForm(false);
      setName('');
      setSlug('');
      setDescription('');
      setBudget('');
      setMainImage('');
      fetchProjects();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="flex bg-ujmah-gray min-h-screen text-ujmah-navy">
      <AdminSidebar />
      
      <div className="flex-grow p-10 overflow-y-auto">
        {/* Header */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="font-display font-extrabold text-3xl">Projets Humanitaires</h1>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mt-1">
              Pilotez les campagnes de collectes de dons et d'investissements sur le terrain.
            </p>
          </div>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-ujmah-gold text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs hover:bg-ujmah-navy transition-colors hover:shadow-lg"
          >
            <Plus size={16} />
            {showForm ? 'Fermer le formulaire' : 'Lancer un projet'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-3 mb-6">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Create Form Overlay */}
        {showForm && (
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-md mb-8 animate-fadeIn">
            <h3 className="font-display font-bold text-xl mb-6">Nouveau Projet</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Nom du projet</label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="ex: Rénovation école Yelivo..."
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
                  placeholder="renovation-ecole-yelivo"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Description détaillée</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors min-h-[140px] resize-y"
                  placeholder="Présenter les objectifs du projet, l'impact social attendu..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Budget requis (FCFA)</label>
                <input 
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="ex: 1500000"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Image de couverture (URL)</label>
                <input 
                  type="text"
                  value={mainImage}
                  onChange={(e) => setMainImage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="/assets/image.png"
                  required
                />
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

        {/* Projects List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-ujmah-gold" size={32} />
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center">
            <HeartHandshake className="mx-auto text-ujmah-navy/20 mb-4" size={48} />
            <h3 className="font-display font-bold text-xl mb-1">Aucun projet</h3>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">Initiez votre premier projet humanitaire de récolte de dons !</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ujmah-navy/5 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ujmah-navy/5 bg-ujmah-gray/30 text-xs uppercase text-ujmah-navy/40 font-bold tracking-wider">
                  <th className="p-5 font-semibold">Projet</th>
                  <th className="p-5 font-semibold">Budget requis</th>
                  <th className="p-5 font-semibold">Dons récoltés</th>
                  <th className="p-5 font-semibold">Progression</th>
                  <th className="p-5 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj) => {
                  const percent = proj.budget 
                    ? Math.min(100, Math.floor((proj.collectedAmount / proj.budget) * 100))
                    : 0;
                  return (
                    <tr key={proj.id} className="border-b border-ujmah-navy/5 text-sm hover:bg-ujmah-gray/10 transition-colors">
                      <td className="p-5 font-display font-bold text-ujmah-navy">{proj.name}</td>
                      <td className="p-5 font-sans font-semibold text-ujmah-navy/65">
                        {proj.budget ? `${proj.budget.toLocaleString('fr-FR')} FCFA` : 'Non défini'}
                      </td>
                      <td className="p-5 font-sans font-bold text-ujmah-gold">
                        {proj.collectedAmount.toLocaleString('fr-FR')} FCFA
                      </td>
                      <td className="p-5">
                        <div className="w-full bg-ujmah-gray rounded-full h-2 max-w-[140px] overflow-hidden border border-ujmah-navy/5">
                          <div 
                            className="bg-ujmah-gold h-full rounded-full transition-all duration-500" 
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span className="font-sans text-[10px] text-ujmah-navy/40 font-bold mt-1 block">
                          {percent}% financé
                        </span>
                      </td>
                      <td className="p-5">
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wide px-3 py-1 rounded-full bg-ujmah-navy/5 text-ujmah-navy border border-ujmah-navy/10">
                          {proj.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
