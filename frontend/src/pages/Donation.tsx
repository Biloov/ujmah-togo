import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  CreditCard, 
  Landmark, 
  Shield, 
  Check, 
  Heart, 
  Loader2, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2,
  GraduationCap,
  Droplets,
  Backpack,
  Utensils,
  BookOpen,
  Users
} from 'lucide-react';
import { API_URL } from '../config';

export type DonationCategoryKey = 
  | 'orphelinat' 
  | 'crsc' 
  | 'forages' 
  | 'kits' 
  | 'secours' 
  | 'sefima' 
  | 'general';

interface CategoryConfig {
  id: DonationCategoryKey;
  label: string;
  shortLabel: string;
  badge: string;
  icon: React.ReactNode;
  desc: string;
  impactNote: string;
  presets: string[];
  defaultAmount: string;
}

const CATEGORIES_CONFIG: Record<DonationCategoryKey, CategoryConfig> = {
  orphelinat: {
    id: 'orphelinat',
    label: "Orphelinat « MES ENFANTS » à Yelivo",
    shortLabel: "Orphelinat Yelivo",
    badge: "Protection de l'Enfance",
    icon: <Heart size={18} fill="currentColor" />,
    desc: "Prise en charge intégrale des 40 orphelins résidents à Yelivo (près de Sokodé) : trois repas équilibrés par jour, scolarité, tenues, manuels et soins médicaux sous la direction de Nazif AMOUSSOU.",
    impactNote: "20 250 FCFA couvre l'intégralité des besoins vitaux et éducatifs d'un orphelin pendant 1 mois complet (soit 675 F/jour).",
    presets: ["5000", "10000", "20250", "40500", "60750", "243000"],
    defaultAmount: "20250"
  },
  crsc: {
    id: 'crsc',
    label: "CRSC : Concours de Récitation du Saint Coran",
    shortLabel: "CRSC (Coran)",
    badge: "Excellence Coranique",
    icon: <GraduationCap size={18} />,
    desc: "Grand concours national mobilisant des centaines de jeunes filles et garçons venus de toutes les régions du Togo autour de la mémorisation du Saint Coran et du Tajweed.",
    impactNote: "Votre don finance les bourses d'études, les corans de luxe, les récompenses d'excellence et la prise en charge logistique des candidats.",
    presets: ["5000", "10000", "15000", "25000", "50000", "100000"],
    defaultAmount: "15000"
  },
  forages: {
    id: 'forages',
    label: "Hydraulique Villageoise & Forages d'Eau Potable",
    shortLabel: "Forages & Puits",
    badge: "Sadaqa Jariya",
    icon: <Droplets size={18} />,
    desc: "Réalisation de forages modernes et de puits d'eau potable dans les villages isolés pour sauver des vies, préserver la santé des femmes et des enfants et offrir une aumône continue.",
    impactNote: "Une part de forage ou de réhabilitation de pompe offre l'eau potable à tout un village pendant plusieurs décennies.",
    presets: ["10000", "25000", "50000", "100000", "250000", "500000"],
    defaultAmount: "25000"
  },
  kits: {
    id: 'kits',
    label: "Kits Scolaires & Éducation des Démunis",
    shortLabel: "Kits Scolaires",
    badge: "Lutte Décrochage",
    icon: <Backpack size={18} />,
    desc: "Dotation de rentrée scolaire en cahiers, livres, cartables et fournitures complètes pour les orphelins et écoliers vulnérables des écoles togolaises.",
    impactNote: "10 000 FCFA offre un sac à dos garni complet (cahiers, stylos, trousse, livres) permettant à un enfant de ne pas être exclu de classe.",
    presets: ["3000", "5000", "10000", "20000", "50000", "100000"],
    defaultAmount: "10000"
  },
  secours: {
    id: 'secours',
    label: "Secours Alimentaire & Solidarité (Tabaski / Ramadan)",
    shortLabel: "Secours Alimentaire",
    badge: "Fraternité Directe",
    icon: <Utensils size={18} />,
    desc: "Distribution de colis alimentaires de base (riz, huile, sucre, conserves) et partage de viande sacrificielle d'Aïd al-Adha directement au foyer des veuves et familles dans le dénuement.",
    impactNote: "15 000 FCFA permet de composer un colis de vivres d'urgence garantissant une alimentation digne à une famille togolaise.",
    presets: ["5000", "10000", "15000", "30000", "60000", "100000"],
    defaultAmount: "15000"
  },
  sefima: {
    id: 'sefima',
    label: "Formations & Séminaires de Leadership (SEFIMA)",
    shortLabel: "SEFIMA & Formations",
    badge: "Jeunesse & Cadres",
    icon: <BookOpen size={18} />,
    desc: "Séminaires intensifs de formation pour la jeunesse et les cadres musulmans : perfectionnement en sciences islamiques, gestion de projet, éthique professionnelle et civisme citoyen.",
    impactNote: "Finance l'hébergement, la documentation et l'encadrement pédagogique des jeunes participants aux séminaires régionaux.",
    presets: ["5000", "10000", "20000", "50000", "100000"],
    defaultAmount: "10000"
  },
  general: {
    id: 'general',
    label: "Fonds Général & Fonctionnement de l'Association",
    shortLabel: "Fonds Général UJMAH",
    badge: "Missions Globales",
    icon: <Users size={18} />,
    desc: "Soutien libre à l'ensemble des missions d'urgence, logistique terrain, fonctionnement administratif et pérennité des œuvres de l'UJMAH au Togo.",
    impactNote: "Permet à l'association d'intervenir promptement lors des urgences sociales inopinées.",
    presets: ["2000", "5000", "10000", "25000", "50000", "100000"],
    defaultAmount: "10000"
  }
};

export default function Donation() {
  const [searchParams] = useSearchParams();
  const queryCategory = searchParams.get('category') as DonationCategoryKey | null;
  const queryAmount = searchParams.get('amount');
  const statusParam = searchParams.get('status');
  const refParam = searchParams.get('ref');

  const initialCat: DonationCategoryKey = 
    queryCategory && CATEGORIES_CONFIG[queryCategory] ? queryCategory : 'orphelinat';

  const [category, setCategory] = useState<DonationCategoryKey>(initialCat);
  const [amount, setAmount] = useState<string>(
    queryAmount || CATEGORIES_CONFIG[initialCat].defaultAmount
  );
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Informations du donateur
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronisation si le paramètre d'URL change
  useEffect(() => {
    if (queryCategory && CATEGORIES_CONFIG[queryCategory]) {
      setCategory(queryCategory);
      if (!queryAmount) {
        setAmount(CATEGORIES_CONFIG[queryCategory].defaultAmount);
        setIsCustom(false);
      }
    }
  }, [queryCategory]);

  useEffect(() => {
    if (queryAmount) {
      const activePresets = CATEGORIES_CONFIG[category].presets;
      if (activePresets.includes(queryAmount)) {
        setIsCustom(false);
        setAmount(queryAmount);
      } else {
        setIsCustom(true);
        setCustomAmount(queryAmount);
        setAmount(queryAmount);
      }
    }
  }, [queryAmount, category]);

  const handleCategoryChange = (newCat: DonationCategoryKey) => {
    setCategory(newCat);
    setIsCustom(false);
    setAmount(CATEGORIES_CONFIG[newCat].defaultAmount);
    setCustomAmount('');
  };

  const handlePresetSelect = (preset: string) => {
    setIsCustom(false);
    setAmount(preset);
  };

  const handleCustomInput = (val: string) => {
    setIsCustom(true);
    setCustomAmount(val);
    setAmount(val || "0");
  };

  const currentAmountNumber = isCustom ? Number(customAmount) : Number(amount);
  const currentEur = Math.round(currentAmountNumber / 655.957);

  const activeConfig = CATEGORIES_CONFIG[category];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!donorName.trim() || !donorEmail.trim()) {
      setErrorMessage('Veuillez renseigner votre nom et votre adresse email.');
      return;
    }

    if (isNaN(currentAmountNumber) || currentAmountNumber < 100) {
      setErrorMessage('Le montant minimum de don est de 100 FCFA.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/donations/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: currentAmountNumber,
          donorName: donorName.trim(),
          donorEmail: donorEmail.trim(),
          donorPhone: donorPhone.trim() || undefined,
          category,
          description: `Don UJMAH Togo - ${activeConfig.label}`
        })
      });

      const data = await res.json();

      if (res.ok && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error(data.error || 'Erreur lors de l\'initialisation SasPay');
      }
    } catch (err: any) {
      console.warn("Redirection directe vers la page SasPay UJMAH");
      window.location.href = `https://link.saspay.me/ujmah-togo?amount=${currentAmountNumber.toFixed(2)}&category=${category}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRib = () => {
    navigator.clipboard.writeText("TG1820101000881182440113").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#FAF8F5] min-h-screen text-ujmah-navy">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête Institutionnel et Chaleureux */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-amber-300 shadow-xs px-4 py-1.5 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-ujmah-orange animate-pulse"></span>
            <span className="text-xs font-bold text-ujmah-indigo uppercase tracking-wider">
              RÉCÉPISSÉ N° 0315/MATDCL-SG-DLPAP-DOCA • « Servir l'humanité dans l'union »
            </span>
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy mb-4 tracking-tight">
            Faire un don à l'UJMAH
          </h1>

          <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed">
            Chaque contribution va directement à l'action de terrain choisie. Choisissez votre noble cause : orphelinat de Yelivo, CRSC (Concours de Récitation du Saint Coran), forages d'eau, kits scolaires ou secours alimentaire.
          </p>
        </div>

        {/* Message de confirmation de don */}
        {statusParam === 'success' && (
          <div className="max-w-4xl mx-auto mb-10 bg-emerald-50 border border-emerald-300 text-emerald-900 p-6 rounded-3xl shadow-sm flex items-start gap-4">
            <CheckCircle2 size={26} className="text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-sans font-black text-lg mb-1">
                Qu'Allah vous récompense avec bienveillance pour votre don !
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                Votre transaction SasPay a été validée avec succès. {refParam && `Référence de transaction : ${refParam}.`} Un reçu officiel émis par l'UJMAH Togo vous a été transmis.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Formulaire de don diversifié (7 colonnes) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-ujmah-navy/10 shadow-xl">
            
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-ujmah-navy/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center flex-shrink-0">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xl text-ujmah-indigo">Paiement Mobile & Carte</h3>
                  <p className="text-xs text-ujmah-dark-muted">
                    Flooz, T-Money, Wave & Cartes Bancaires via <strong>SasPay</strong>
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-amber-500/10 text-ujmah-orange rounded-full border border-amber-500/20">
                100% Sécurisé
              </span>
            </div>

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs sm:text-sm flex items-center gap-2 mb-6">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* ÉTAPE 1 : Diversification des Activités */}
              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider mb-2.5">
                  1. Choisissez l'action à soutenir
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.keys(CATEGORIES_CONFIG) as DonationCategoryKey[]).map((key) => {
                    const cfg = CATEGORIES_CONFIG[key];
                    const isSelected = category === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleCategoryChange(key)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                          isSelected
                            ? "border-ujmah-indigo bg-ujmah-indigo text-white shadow-md shadow-ujmah-indigo/20 scale-[1.01]"
                            : "border-ujmah-navy/10 hover:border-ujmah-indigo/30 bg-[#FAF8F5] text-ujmah-navy"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isSelected ? "bg-white/20 text-ujmah-sun" : "bg-ujmah-indigo/10 text-ujmah-indigo"
                        }`}>
                          {cfg.icon}
                        </div>
                        <div className="min-w-0">
                          <span className="block font-sans font-bold text-xs truncate">
                            {cfg.shortLabel}
                          </span>
                          <span className={`block text-[10px] uppercase tracking-wider font-semibold truncate ${
                            isSelected ? "text-amber-200" : "text-ujmah-orange"
                          }`}>
                            {cfg.badge}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Encadré d'impact dynamique pour l'activité choisie */}
                <div className="mt-3.5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <div className="flex items-start gap-2.5">
                    <Sparkles size={16} className="text-ujmah-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans font-bold text-xs text-ujmah-indigo">
                        {activeConfig.label}
                      </p>
                      <p className="text-xs text-ujmah-dark-muted leading-relaxed mt-1">
                        {activeConfig.desc}
                      </p>
                      <p className="text-[11px] font-semibold text-ujmah-orange mt-1.5 pt-1.5 border-t border-amber-200/60">
                        {activeConfig.impactNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ÉTAPE 2 : Montant du Don adapté à l'activité */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider">
                    2. Montant de votre contribution (FCFA)
                  </label>
                  <span className="text-xs font-bold text-ujmah-indigo">
                    ≈ {currentEur} €
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                  {activeConfig.presets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetSelect(preset)}
                      className={`py-3 px-2 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                        !isCustom && amount === preset 
                          ? "border-ujmah-orange bg-ujmah-orange text-white shadow-md shadow-ujmah-orange/20" 
                          : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy bg-[#FAF8F5]"
                      }`}
                    >
                      {Number(preset).toLocaleString('fr-FR')} F
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setIsCustom(true)}
                    className={`py-3 px-2 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                      isCustom 
                        ? "border-ujmah-orange bg-ujmah-orange text-white shadow-md shadow-ujmah-orange/20" 
                        : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy bg-[#FAF8F5]"
                    }`}
                  >
                    Autre
                  </button>
                </div>

                {isCustom && (
                  <div className="mt-2">
                    <input 
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/15 focus:border-ujmah-indigo focus:outline-none text-base text-center font-black text-ujmah-indigo bg-[#FAF8F5]"
                      placeholder="Saisissez un montant libre en FCFA (ex: 35000)"
                      min="100"
                    />
                  </div>
                )}
              </div>

              {/* ÉTAPE 3 : Vos Coordonnées */}
              <div className="pt-2 border-t border-ujmah-navy/10 space-y-3">
                <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider">
                  3. Vos Coordonnées (Reçu Officiel)
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-ujmah-dark-muted mb-1">Nom complet *</label>
                    <input
                      type="text"
                      required
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="ex: Ouro-Djobo Abdoulaye"
                      className="w-full px-4 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs bg-[#FAF8F5] focus:bg-white focus:border-ujmah-indigo outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-ujmah-dark-muted mb-1">Email pour le reçu *</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="votre.email@domaine.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs bg-[#FAF8F5] focus:bg-white focus:border-ujmah-indigo outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-ujmah-dark-muted mb-1">
                    Numéro de téléphone / Mobile Money (Optionnel)
                  </label>
                  <input
                    type="tel"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    placeholder="ex: +228 90 00 00 00"
                    className="w-full px-4 py-2.5 rounded-xl border border-ujmah-navy/15 text-xs bg-[#FAF8F5] focus:bg-white focus:border-ujmah-indigo outline-none"
                  />
                </div>
              </div>

              {/* Bouton de paiement SasPay */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-ujmah-orange to-[#f57c00] hover:to-ujmah-orange text-white font-sans font-bold text-sm shadow-xl shadow-ujmah-orange/25 hover:shadow-ujmah-orange/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Connexion à la passerelle SasPay...</span>
                  </>
                ) : (
                  <>
                    <Heart size={18} fill="currentColor" />
                    <span>Donner {currentAmountNumber.toLocaleString('fr-FR')} FCFA pour {activeConfig.shortLabel}</span>
                  </>
                )}
              </button>

            </form>

            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-ujmah-dark-muted">
              <Shield size={14} className="text-emerald-600" />
              <span>Paiement crypté SSL 256 bits conforme aux normes bancaires UEMOA</span>
            </div>

          </div>

          {/* Virement Bancaire & Références Officielles (5 colonnes) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Virement Bancaire Coris Bank */}
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-ujmah-navy/10 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center flex-shrink-0">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xl text-ujmah-navy">Virement Bancaire</h3>
                  <span className="text-xs text-ujmah-dark-muted font-sans">Compte Bancaire Officiel UJMAH</span>
                </div>
              </div>

              <p className="text-xs text-ujmah-dark-muted leading-relaxed mb-4">
                Pour les dons institutionnels, bourses d'études annuelles, financements complets de forages villageois ou ordres permanents :
              </p>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-ujmah-navy/10 space-y-2.5 text-xs mb-5">
                <div>
                  <span className="text-ujmah-dark-muted block text-[10px] uppercase font-bold">Banque domiciliataire</span>
                  <span className="font-bold text-ujmah-navy">Coris Bank International Togo</span>
                </div>
                <div>
                  <span className="text-ujmah-dark-muted block text-[10px] uppercase font-bold">Titulaire du compte</span>
                  <span className="font-bold text-ujmah-navy">Association UJMAH Togo</span>
                </div>
                <div>
                  <span className="text-ujmah-dark-muted block text-[10px] uppercase font-bold">Code IBAN / RIB Togo</span>
                  <span className="font-mono font-bold text-xs text-ujmah-indigo break-all select-all">
                    TG182 01010 008811824401 13
                  </span>
                </div>
              </div>

              <button
                onClick={copyRib}
                className="w-full py-3 rounded-xl border border-ujmah-indigo text-ujmah-indigo hover:bg-ujmah-indigo hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={16} /> : null}
                {copied ? "RIB copié dans le presse-papier !" : "Copier les coordonnées bancaires"}
              </button>
            </div>

            {/* Identité Légale et Récépissé */}
            <div className="bg-gradient-to-br from-[#100830] via-[#1E1552] to-[#0B132B] text-white p-7 rounded-3xl shadow-md">
              <span className="text-[10px] uppercase font-bold tracking-widest text-ujmah-sun block mb-2">
                ACCRÉDITATION OFFICIELLE
              </span>
              <h4 className="font-sans font-black text-lg mb-2 text-white">
                « Servir l'humanité dans l'union »
              </h4>
              <div className="space-y-2 text-xs text-white/80 leading-relaxed mb-4">
                <p>
                  <strong>Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA</strong> délivré par le Ministère de l'Administration Territoriale du Togo.
                </p>
                <p>
                  Organisation humanitaire fondée le <strong>23 janvier 2003</strong> à Lomé (Agoè-Houmbi).
                </p>
                <p>
                  Siège social : <strong>Agoè-Adjougba, à 100m de BOXBERG, Lomé</strong>.
                </p>
              </div>
              <div className="pt-3 border-t border-white/15 text-xs text-amber-200">
                Contact direct trésorerie : <strong>+228 92 67 34 00</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
