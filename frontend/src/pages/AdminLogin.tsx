import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';
import { Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/admin/dashboard');
    }
  }, [token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur de connexion');
      }

      login(data.token, data.user);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Identifiants invalides');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ujmah-navy flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-2xl border border-white/10 max-w-md w-full p-8 relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-ujmah-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-ujmah-blue/15 rounded-full blur-3xl"></div>

        {/* Logo */}
        <div className="text-center mb-8 relative">
          <img 
            src="/logo-ujmahvf.png" 
            alt="UJMAH Logo" 
            className="h-16 mx-auto mb-4"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
            }}
          />
          <h2 className="font-display font-extrabold text-2xl text-ujmah-navy">Espace Administration</h2>
          <p className="font-sans text-xs uppercase tracking-widest text-ujmah-navy/40 mt-1 font-semibold">UJMAH Togo Portal</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-3 mb-6 animate-pulse">
            <AlertCircle className="flex-shrink-0" size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">
          <div>
            <label className="block text-xs font-bold uppercase text-ujmah-navy/60 mb-2" htmlFor="email">Adresse email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ujmah-navy/40" size={16} />
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-ujmah-navy/60 mb-2" htmlFor="password">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ujmah-navy/40" size={16} />
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                placeholder="••••••••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-gold hover:bg-ujmah-navy text-white py-3.5 rounded-xl font-sans font-bold text-sm transition-all duration-300 hover:shadow-lg disabled:opacity-50 mt-2"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : null}
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}
