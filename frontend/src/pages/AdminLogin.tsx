import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';
import { 
  Lock, 
  Mail, 
  AlertCircle, 
  Loader2, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Newspaper, 
  Image as ImageIcon, 
  HeartHandshake, 
  ArrowRight,
  Globe
} from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
        throw new Error(data.error || 'Identifiants invalides ou compte introuvable.');
      }

      login(data.token, data.user);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Identifiants invalides. Veuillez vérifier votre adresse email et votre mot de passe.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#FAF8F5] text-ujmah-navy selection:bg-ujmah-sun selection:text-ujmah-indigo">
      
      {/* =========================================================================
          COLONNE GAUCHE (50% Desktop) : Vitrine Institutionnelle Sombre
          Inspiré du layout Split-Screen professionnel
         ========================================================================= */}
      <div className="lg:w-1/2 hero-mesh-bg text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        
        {/* Cercles diffusants */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-ujmah-sun/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-ujmah-orange/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          {/* Logo & Badge */}
          <div className="flex items-center gap-4 mb-12">
            <a href="/" className="inline-block group">
              <img 
                src="/logo-ujmahvf.png" 
                alt="Logo UJMAH Togo" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
                }}
              />
            </a>
            <div className="border-l border-white/20 pl-4">
              <span className="font-sans font-black text-sm uppercase tracking-wider text-ujmah-sun block leading-tight">
                Portail Staff & Gestion
              </span>
              <span className="text-[11px] text-white/70">
                Association UJMAH Togo
              </span>
            </div>
          </div>

          {/* Titre & Accroche */}
          <h1 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            Pilotez l'action humanitaire <br />
            <span className="bg-gradient-to-r from-ujmah-sun via-ujmah-sun-light to-ujmah-orange bg-clip-text text-transparent">
              avec rigueur et transparence.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mb-12">
            Espace d'administration centralisé réservé aux membres du Bureau Exécutif, coordinateurs de programmes et chargés de communication de l'UJMAH Togo.
          </p>

          {/* 3 Modules Clés */}
          <div className="space-y-6 max-w-md">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-ujmah-sun flex items-center justify-center flex-shrink-0 border border-white/15">
                <Newspaper size={22} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-white">Gestion Éditoriale & CMS</h4>
                <p className="text-xs text-white/70 leading-relaxed mt-0.5">
                  Publiez les comptes rendus d'assemblées, les actualités et les rapports d'activités.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-ujmah-orange flex items-center justify-center flex-shrink-0 border border-white/15">
                <ImageIcon size={22} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-white">Médiathèque & Vidéos de Terrain</h4>
                <p className="text-xs text-white/70 leading-relaxed mt-0.5">
                  Téléversez les reportages photos et capsules vidéo des actions à travers tout le Togo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-white/15">
                <HeartHandshake size={22} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-white">Orphelinat & Traçabilité des Dons</h4>
                <p className="text-xs text-white/70 leading-relaxed mt-0.5">
                  Suivi des 40 orphelins de Yelivo, des parrainages mensuels et des collectes bancaires.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Gauche */}
        <div className="relative z-10 pt-10 mt-12 border-t border-white/10 text-xs text-white/60 flex flex-wrap items-center justify-between gap-4">
          <span>© 2003 - 2026 UJMAH Togo. Récépissé N° 0315/MATDCL.</span>
          <a href="/" className="inline-flex items-center gap-1.5 text-ujmah-sun hover:underline font-semibold">
            Retour au site public <ArrowRight size={14} />
          </a>
        </div>

      </div>

      {/* =========================================================================
          COLONNE DROITE (50% Desktop) : Formulaire de Connexion
         ========================================================================= */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-ujmah-navy/5 border border-ujmah-navy/10 relative">
          
          {/* Top Bar avec Langue / Indicateur */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-ujmah-navy/5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ujmah-ivory border border-ujmah-navy/10 text-[11px] font-bold text-ujmah-dark-muted">
              <ShieldCheck size={14} className="text-emerald-600" />
              Connexion Sécurisée SSL
            </span>

            <span className="inline-flex items-center gap-1 text-xs font-bold text-ujmah-dark-muted bg-ujmah-gray px-2.5 py-1 rounded-md">
              <Globe size={13} />
              FR • Togo
            </span>
          </div>

          {/* Titre Formulaire */}
          <div className="mb-8">
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-ujmah-indigo tracking-tight">
              Connexion à votre espace
            </h2>
            <p className="text-xs sm:text-sm text-ujmah-dark-muted mt-1 leading-relaxed">
              Accédez à la console de gestion, aux articles et à la médiathèque
            </p>
          </div>

          {/* Alerte Erreur */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs sm:text-sm flex items-start gap-3 mb-6 animate-in fade-in duration-200">
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-600" />
              <div>
                <strong className="block font-bold">Échec de connexion</strong>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Identifiant / Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-xs font-bold uppercase tracking-wider text-ujmah-navy mb-2"
              >
                Identifiant / Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ujmah-navy/40" size={18} />
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-ujmah-navy/15 bg-ujmah-ivory/50 focus:bg-white focus:border-ujmah-indigo focus:ring-2 focus:ring-ujmah-indigo/20 text-sm transition-all outline-none font-medium text-ujmah-navy placeholder-ujmah-navy/40"
                  placeholder="nom@ujmah-togo.org"
                  required
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label 
                  htmlFor="password" 
                  className="block text-xs font-bold uppercase tracking-wider text-ujmah-navy"
                >
                  Mot de passe
                </label>
                <a 
                  href="tel:+22892673400" 
                  className="text-[11px] font-semibold text-ujmah-orange hover:underline"
                  title="Contactez l'administrateur en cas de perte"
                >
                  Mot de passe oublié ?
                </a>
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-ujmah-navy/40" size={18} />
                <input 
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-3.5 rounded-2xl border border-ujmah-navy/15 bg-ujmah-ivory/50 focus:bg-white focus:border-ujmah-indigo focus:ring-2 focus:ring-ujmah-indigo/20 text-sm transition-all outline-none font-medium text-ujmah-navy placeholder-ujmah-navy/40"
                  placeholder="••••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ujmah-navy/40 hover:text-ujmah-indigo transition-colors"
                  title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Bouton de Soumission */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-ujmah-indigo hover:bg-ujmah-indigo-dark text-white py-4 rounded-2xl font-sans font-bold text-sm shadow-xl shadow-ujmah-indigo/25 hover:shadow-ujmah-indigo/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-2"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? 'Vérification en cours...' : 'Se connecter à l\'espace staff'}
            </button>

          </form>

          {/* Mentions légales */}
          <div className="mt-8 pt-6 border-t border-ujmah-navy/5 text-center">
            <p className="text-[11px] text-ujmah-dark-muted leading-relaxed">
              En vous connectant, vous attestez être un membre mandaté par le Bureau Exécutif de l'Association UJMAH Togo conformément au règlement intérieur.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
