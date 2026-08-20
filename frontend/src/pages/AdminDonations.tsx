import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { API_URL } from '../config';
import { Loader2, Landmark, AlertCircle, CheckCircle, FileDown, Search } from 'lucide-react';

interface Donation {
  id: string;
  amount: number;
  currency: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string | null;
  category: string;
  reference: string;
  status: string;
  createdAt: string;
  project: { name: string } | null;
  receipt: { receiptNumber: string; pdfUrl: string } | null;
}

export default function AdminDonations() {
  const { token, getAuthHeaders } = useAuth();
  const navigate = useNavigate();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    } else {
      fetchDonations();
    }
  }, [token, navigate]);

  const fetchDonations = async () => {
    try {
      const response = await fetch(`${API_URL}/donations`, {
        headers: getAuthHeaders()
      });
      const data = await response.json();
      setDonations(data.donations || []);
    } catch (err) {
      setError("Erreur lors de l'accès à l'historique financier");
    } finally {
      setLoading(false);
    }
  };

  const getFilteredDonations = () => {
    return donations.filter(don => 
      don.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      don.donorEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      don.reference.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="flex bg-ujmah-gray min-h-screen text-ujmah-navy">
      <AdminSidebar />
      
      <div className="flex-grow p-10 overflow-y-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-display font-extrabold text-3xl">Historique des Dons</h1>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mt-1">
              Consultez l'historique complet des dons Genius Pay et générez les reçus fiscaux PDF.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ujmah-navy/40" size={16} />
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full border border-ujmah-navy/10 bg-white focus:border-ujmah-navy focus:outline-none text-xs transition-colors"
              placeholder="Rechercher un donateur, référence..."
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-3 mb-6">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Donations Table */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-ujmah-gold" size={32} />
          </div>
        ) : getFilteredDonations().length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-ujmah-navy/5 shadow-sm text-center">
            <Landmark className="mx-auto text-ujmah-navy/20 mb-4" size={48} />
            <h3 className="font-display font-bold text-xl mb-1">Aucune transaction</h3>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">Aucun don n'a été enregistré pour le moment.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ujmah-navy/5 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ujmah-navy/5 bg-ujmah-gray/30 text-xs uppercase text-ujmah-navy/40 font-bold tracking-wider">
                  <th className="p-5 font-semibold">Référence</th>
                  <th className="p-5 font-semibold">Donateur</th>
                  <th className="p-5 font-semibold">Montant</th>
                  <th className="p-5 font-semibold">Date</th>
                  <th className="p-5 font-semibold">Statut</th>
                  <th className="p-5 font-semibold text-right">Reçu PDF</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredDonations().map((don) => (
                  <tr key={don.id} className="border-b border-ujmah-navy/5 text-sm hover:bg-ujmah-gray/10 transition-colors">
                    <td className="p-5 font-mono text-xs font-bold text-ujmah-navy/70">{don.reference}</td>
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-ujmah-navy">{don.donorName}</span>
                        <span className="font-sans text-xs text-ujmah-navy/50">{don.donorEmail}</span>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="flex flex-col">
                        <span className="font-sans font-extrabold text-ujmah-navy">{don.amount.toLocaleString('fr-FR')} {don.currency}</span>
                        <span className="font-sans text-[10px] text-ujmah-gold uppercase font-bold tracking-wider mt-0.5">
                          {don.category === 'general' ? 'Général' : don.category === 'orphelinat' ? 'Orphelinat' : 'Cotisation'}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-ujmah-navy/60 font-medium">
                      {new Date(don.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="p-5">
                      <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wide px-3 py-1 rounded-full ${
                        don.status === 'Reussi' 
                          ? "bg-green-50 text-green-700 border border-green-200" 
                          : don.status === 'En attente'
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}>
                        {don.status === 'Reussi' ? <CheckCircle size={10} /> : null}
                        {don.status === 'Reussi' ? 'Validé' : don.status}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      {don.receipt ? (
                        <a 
                          href={don.receipt.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-ujmah-navy hover:bg-ujmah-gold text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <FileDown size={14} />
                          Reçu
                        </a>
                      ) : (
                        <span className="font-sans text-xs text-ujmah-navy/30">-</span>
                      )}
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
