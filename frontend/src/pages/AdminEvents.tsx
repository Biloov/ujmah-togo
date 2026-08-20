import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { API_URL } from '../config';
import { Plus, Loader2, Calendar, AlertCircle, Users, CheckCircle, MapPin } from 'lucide-react';

interface EventItem {
  id: string;
  title: string;
  location: string;
  startDate: string;
  registrationEnabled: boolean;
  status: string;
}

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  createdAt: string;
}

export default function AdminEvents() {
  const { token, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [regsLoading, setRegsLoading] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [registrationEnabled, setRegistrationEnabled] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchEvents();
    }
  }, [token, navigate]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/events`, {
        headers: getAuthHeaders()
      });
      const data = await response.json();
      setEvents(data.events || []);
    } catch (err) {
      setError('Erreur lors du chargement des événements');
    } finally {
      setLoading(false);
    }
  };

  const handleViewRegistrations = async (eventId: string) => {
    setSelectedEventId(eventId);
    setRegsLoading(true);
    setRegistrations([]);
    try {
      const response = await fetch(`${API_URL}/events/${eventId}/registrations`, {
        headers: getAuthHeaders()
      });
      const data = await response.json();
      setRegistrations(data.registrations || []);
    } catch (err) {
      setError("Erreur lors de l'affichage des inscriptions");
    } finally {
      setRegsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({
          title,
          description,
          mainImage,
          location,
          startDate,
          registrationEnabled
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur de création');
      }

      setShowForm(false);
      setTitle('');
      setDescription('');
      setLocation('');
      setStartDate('');
      setMainImage('');
      setRegistrationEnabled(false);
      fetchEvents();
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
            <h1 className="font-display font-extrabold text-3xl">Événements & Inscriptions</h1>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mt-1">
              Organisez les conférences de l'association et gérez la liste des inscrits en temps réel.
            </p>
          </div>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-ujmah-gold text-white px-5 py-2.5 rounded-full font-sans font-bold text-xs hover:bg-ujmah-navy transition-colors hover:shadow-lg"
          >
            <Plus size={16} />
            {showForm ? 'Fermer le formulaire' : 'Planifier un événement'}
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
            <h3 className="font-display font-bold text-xl mb-6">Nouvel Événement</h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Titre de l'événement</label>
                <input 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="ex: Séminaire annuel SEFIMA..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Date et Heure</label>
                <input 
                  type="datetime-local"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Description</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors min-h-[100px] resize-y"
                  placeholder="Détails du programme..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Lieu physique</label>
                <input 
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="ex: Grande Mosquée de Kpalimé"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2">Image de couverture (URL)</label>
                <input 
                  type="text"
                  value={mainImage}
                  onChange={(e) => setMainImage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="/assets/event.png"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  id="regEnabled"
                  checked={registrationEnabled}
                  onChange={(e) => setRegistrationEnabled(e.target.checked)}
                  className="w-4 h-4 rounded text-ujmah-gold focus:ring-ujmah-gold"
                />
                <label htmlFor="regEnabled" className="text-sm font-semibold text-ujmah-navy/70">
                  Activer le formulaire d'inscription en ligne
                </label>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Events Table List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="animate-spin text-ujmah-gold" size={28} />
              </div>
            ) : events.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl border border-ujmah-navy/5 text-center">
                <Calendar className="mx-auto text-ujmah-navy/20 mb-4" size={44} />
                <h3 className="font-display font-semibold text-lg">Aucun événement</h3>
                <p className="font-sans text-xs text-ujmah-navy/60">Ajoutez les séminaires pour les ouvrir aux inscriptions.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-ujmah-navy/5 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-ujmah-navy/5 bg-ujmah-gray/30 text-xs uppercase text-ujmah-navy/40 font-bold tracking-wider">
                      <th className="p-4">Titre</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Lieu</th>
                      <th className="p-4 text-right">Inscriptions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((evt) => (
                      <tr 
                        key={evt.id} 
                        onClick={() => handleViewRegistrations(evt.id)}
                        className={`border-b border-ujmah-navy/5 text-sm hover:bg-ujmah-gray/10 transition-all cursor-pointer ${
                          selectedEventId === evt.id ? "bg-ujmah-gold/5" : ""
                        }`}
                      >
                        <td className="p-4 font-display font-bold text-ujmah-navy">{evt.title}</td>
                        <td className="p-4 font-sans text-xs text-ujmah-navy/60 font-semibold">
                          {new Date(evt.startDate).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="p-4 flex items-center gap-1 text-ujmah-navy/50 text-xs mt-1">
                          <MapPin size={12} />
                          {evt.location}
                        </td>
                        <td className="p-4 text-right">
                          {evt.registrationEnabled ? (
                            <button className="inline-flex items-center gap-1 text-ujmah-gold font-bold hover:underline text-xs">
                              <Users size={14} />
                              Voir
                            </button>
                          ) : (
                            <span className="text-[10px] text-ujmah-navy/40 font-semibold uppercase tracking-wide">Fermé</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Registrations List Drawer */}
          <div className="bg-white p-6 rounded-2xl border border-ujmah-navy/5 shadow-sm">
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="text-ujmah-gold" size={18} />
              Liste des Inscrits
            </h3>
            
            {!selectedEventId ? (
              <p className="font-sans text-xs text-ujmah-navy/40 text-center py-10">
                Sélectionnez un événement à gauche pour afficher la liste des inscrits.
              </p>
            ) : regsLoading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="animate-spin text-ujmah-navy" size={24} />
              </div>
            ) : registrations.length === 0 ? (
              <p className="font-sans text-xs text-ujmah-navy/40 text-center py-10">
                Aucune inscription enregistrée pour le moment.
              </p>
            ) : (
              <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-1">
                {registrations.map((reg) => (
                  <div key={reg.id} className="bg-ujmah-gray/40 border border-ujmah-navy/5 rounded-xl p-3.5 flex flex-col">
                    <span className="font-display font-bold text-sm text-ujmah-navy">{reg.firstName} {reg.lastName}</span>
                    <span className="font-sans text-xs text-ujmah-navy/60 mt-1">📞 {reg.phone}</span>
                    <span className="font-sans text-xs text-ujmah-navy/60 mt-0.5">✉️ {reg.email}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
