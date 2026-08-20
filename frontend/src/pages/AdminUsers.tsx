import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { API_URL } from '../config';
import { Plus, Trash2, Loader2, Users, AlertCircle, ShieldAlert, CheckCircle } from 'lucide-react';

interface UserItem {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
}

export default function AdminUsers() {
  const { token, user, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('EDITOR');
  const [submitLoading, setSubmitLoading] = useState(false);

  const isSuperAdmin = user?.role === 'SUPER_ADMIN';

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchUsers();
    }
  }, [token, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/users`, {
        headers: getAuthHeaders()
      });
      const data = await response.json();
      setUsers(data.users || []);
    } catch (err) {
      setError('Erreur lors du chargement des membres');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ email, password, firstName, lastName, role })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de la création');
      }

      setShowForm(false);
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setRole('EDITOR');
      fetchUsers();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) return;

    try {
      const response = await fetch(`${API_URL}/auth/users/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de la suppression');
      }

      fetchUsers();
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
            <h1 className="font-display font-extrabold text-3xl">Gestion des Membres</h1>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mt-1">
              Gérez les comptes d'accès de l'équipe et attribuez les rôles et permissions.
            </p>
          </div>
          
          {isSuperAdmin && (
            <button 
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 bg-ujmah-gold text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs hover:bg-ujmah-navy transition-colors hover:shadow-lg"
            >
              <Plus size={16} />
              {showForm ? 'Fermer le formulaire' : 'Ajouter un membre'}
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-3 mb-6">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Create Member Form */}
        {showForm && (
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-md mb-8 animate-fadeIn">
            <h3 className="font-display font-bold text-xl mb-6">Nouveau Membre de l'Équipe</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Prénom</label>
                <input 
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="ex: Jean"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Nom</label>
                <input 
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="ex: Dupont"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Adresse email</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="jean.dupont@ujmah.org"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Mot de passe temporaire</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="Saisir un mot de passe sécurisé..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Rôle attribué</label>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  required
                >
                  <option value="SUPER_ADMIN">Super Administrateur</option>
                  <option value="ADMIN">Administrateur</option>
                  <option value="COMMUNICATION">Communication</option>
                  <option value="PROJECT_MANAGER">Chef de Projet</option>
                  <option value="EVENTS_MANAGER">Gestionnaire Événements</option>
                  <option value="FINANCE">Responsable Finance</option>
                  <option value="EDITOR">Rédacteur</option>
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
                  Créer le compte
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Users list */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-ujmah-gold" size={32} />
          </div>
        ) : users.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center">
            <Users className="mx-auto text-ujmah-navy/20 mb-4" size={48} />
            <h3 className="font-display font-bold text-xl mb-1">Aucun membre</h3>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ujmah-navy/5 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ujmah-navy/5 bg-ujmah-gray/30 text-xs uppercase text-ujmah-navy/40 font-bold tracking-wider">
                  <th className="p-5 font-semibold">Nom complet</th>
                  <th className="p-5 font-semibold">Adresse email</th>
                  <th className="p-5 font-semibold">Rôle</th>
                  <th className="p-5 font-semibold">Inscrit le</th>
                  {isSuperAdmin && <th className="p-5 font-semibold text-right">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-ujmah-navy/5 text-sm hover:bg-ujmah-gray/10 transition-colors">
                    <td className="p-5 font-display font-bold text-ujmah-navy">
                      {u.firstName} {u.lastName}
                    </td>
                    <td className="p-5 font-sans text-xs text-ujmah-navy/60 font-semibold">{u.email}</td>
                    <td className="p-5">
                      <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wide px-3 py-1 rounded-full ${
                        u.role === 'SUPER_ADMIN' 
                          ? "bg-red-50 text-red-700 border border-red-200" 
                          : u.role === 'ADMIN'
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-ujmah-gray text-ujmah-navy/60 border border-ujmah-navy/10"
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="p-5 text-ujmah-navy/60 font-medium">
                      {new Date(u.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    {isSuperAdmin && (
                      <td className="p-5 text-right flex justify-end gap-2">
                        {u.id !== user?.id ? (
                          <button 
                            onClick={() => handleDelete(u.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer le membre"
                          >
                            <Trash2 size={16} />
                          </button>
                        ) : (
                          <span className="font-sans text-[10px] uppercase font-bold text-ujmah-navy/30 tracking-wide select-none mr-2">Vous-même</span>
                        )}
                      </td>
                    )}
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
