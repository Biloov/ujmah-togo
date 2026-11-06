import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CreditCard, Landmark, Shield, Check, Heart, Loader2, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { API_URL } from '../config';

export default function Donation() {
  const [searchParams] = useSearchParams();
  const queryCategory = searchParams.get('category');
  const queryAmount = searchParams.get('amount');
  const statusParam = searchParams.get('status');
  const refParam = searchParams.get('ref');

  const [category, setCategory] = useState<'general' | 'orphelinat' | 'kits' | 'forages'>(
    queryCategory === 'orphelinat' ? 'orphelinat' : 'general'
  );
  
  const [amount, setAmount] = useState(queryAmount || '20250');
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [copied, setCopied] = useState(false);

  // Informations du donateur
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const amountPresets = ["2000", "5000", "10000", "20250", "50000"];

  useEffect(() => {
    if (queryAmount && !amountPresets.includes(queryAmount)) {
      setIsCustom(true);
      setCustomAmount(queryAmount);
      setAmount(queryAmount);
    }
  }, [queryAmount]);

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
          description: `Don UJMAH Togo - ${
            category === 'orphelinat' ? 'Parrainage Orphelinat Yelivo' : 
            category === 'kits' ? 'Kits Scolaires' : 
            category === 'forages' ? 'Puits et Forages' : 'Don Général'
          }`
        })
      });

      const data = await res.json();

      if (res.ok && data.checkoutUrl) {
        // Redirection vers la passerelle sécurisée SasPay
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error(data.error || 'Erreur lors de l\'initialisation SasPay');
      }
    } catch (err: any) {
      console.warn("Redirection directe vers la page SasPay UJMAH");
      // Fallback direct vers le lien marchand SasPay
      window.location.href = `https://link.saspay.me/ujmah-togo?amount=${currentAmountNumber.toFixed(2)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRib = () => {
    navigator.clipboard.writeText("TG1820101000881182440113").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-[#FAF8F5] min-h-screen text-ujmah-navy">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-ujmah-orange font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Soutien & Solidarité
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-5xl text-ujmah-navy mb-5 tracking-tight">
            Faire un don en ligne
          </h1>
          <p className="font-sans text-base sm:text-lg text-ujmah-dark-muted leading-relaxed">
            Votre générosité finance directement nos actions sur le terrain togolais : les 40 orphelins de Yelivo, les kits scolaires et les forages d'eau potable.
          </p>
        </div>

        {/* Message de confirmation de don */}
        {statusParam === 'success' && (
          <div className="max-w-3xl mx-auto mb-10 bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-3xl shadow-sm flex items-start gap-4">
            <CheckCircle2 size={24} className="text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-sans font-bold text-lg mb-1">
                Merci infiniment pour votre don !
              </h3>
              <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                Votre transaction SasPay a bien été enregistrée. {refParam && `Référence : ${refParam}.`} Un reçu vous sera transmis par email.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Formulaire de paiement SasPay (7 colonnes) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-ujmah-navy/10 shadow-xl">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-ujmah-navy/5">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="font-sans font-black text-xl text-ujmah-indigo">Paiement sécurisé en ligne</h3>
                <span className="text-xs text-ujmah-dark-muted font-sans">
                  Propulsé par la passerelle <strong>SasPay</strong> (Flooz, T-Money, Wave & Cartes)
                </span>
              </div>
            </div>

            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs sm:text-sm flex items-center gap-2 mb-6">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Destination du Don */}
              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider mb-2.5">
                  1. Destination de votre don
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'orphelinat', label: 'Orphelinat Yelivo' },
                    { id: 'general', label: 'Don Général' },
                    { id: 'kits', label: 'Kits Scolaires' },
                    { id: 'forages', label: 'Forages d\'Eau' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCategory(item.id as any)}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer text-center ${
                        category === item.id 
                          ? "border-ujmah-indigo bg-ujmah-indigo text-white shadow-md shadow-ujmah-indigo/20 scale-[1.02]" 
                          : "border-ujmah-navy/10 hover:border-ujmah-indigo/30 text-ujmah-navy bg-[#FAF8F5]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Montant souhaité */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider">
                    2. Montant du don (FCFA)
                  </label>
                  {category === 'orphelinat' && (
                    <span className="text-[11px] font-bold text-ujmah-orange bg-ujmah-orange/10 px-2.5 py-0.5 rounded-full">
                      Parrainage mensuel : 20 250 F
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
                  {amountPresets.map((preset) => (
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
                      className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/15 focus:border-ujmah-indigo focus:outline-none text-base text-center font-bold text-ujmah-indigo bg-[#FAF8F5]"
                      placeholder="Saisir votre montant libre (ex: 15000)"
                      min="100"
                    />
                  </div>
                )}
              </div>

              {/* Coordonnées du Donateur */}
              <div className="pt-2 border-t border-ujmah-navy/5 space-y-3">
                <label className="block text-xs font-bold uppercase text-ujmah-navy tracking-wider">
                  3. Vos Coordonnées
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Votre nom complet *"
                    className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/15 text-xs bg-[#FAF8F5] focus:bg-white focus:border-ujmah-indigo outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="Votre adresse email *"
                    className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/15 text-xs bg-[#FAF8F5] focus:bg-white focus:border-ujmah-indigo outline-none"
                  />
                </div>

                <input
                  type="tel"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="Numéro de téléphone Mobile Money (ex: +228 90 00 00 00)"
                  className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/15 text-xs bg-[#FAF8F5] focus:bg-white focus:border-ujmah-indigo outline-none"
                />
              </div>

              {/* Bouton de validation SasPay */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-ujmah-orange to-[#f57c00] hover:to-ujmah-orange text-white font-sans font-bold text-sm shadow-xl shadow-ujmah-orange/25 hover:shadow-ujmah-orange/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Connexion à SasPay...</span>
                  </>
                ) : (
                  <>
                    <Heart size={18} fill="currentColor" />
                    <span>Payer {currentAmountNumber.toLocaleString('fr-FR')} FCFA via SasPay</span>
                  </>
                )}
              </button>

            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-ujmah-dark-muted">
              <Shield size={14} className="text-emerald-600" />
              <span>Paiement crypté SSL 256 bits conforme aux normes UEMOA</span>
            </div>
          </div>

          {/* Virement Bancaire & Infos Légales (5 colonnes) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Virement Bancaire Coris Bank */}
            <div className="bg-white p-8 rounded-3xl border border-ujmah-navy/10 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="font-sans font-black text-xl text-ujmah-navy">Virement Bancaire</h3>
                  <span className="text-xs text-ujmah-dark-muted font-sans">Compte Officiel de l'Association</span>
                </div>
              </div>

              <p className="text-xs text-ujmah-dark-muted leading-relaxed mb-6">
                Pour les dons institutionnels, bourses ou versements périodiques par virement :
              </p>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-ujmah-navy/5 space-y-2.5 text-xs mb-6">
                <div>
                  <span className="text-ujmah-dark-muted block text-[10px] uppercase font-bold">Banque</span>
                  <span className="font-bold text-ujmah-navy">Coris Bank International Togo</span>
                </div>
                <div>
                  <span className="text-ujmah-dark-muted block text-[10px] uppercase font-bold">Titulaire</span>
                  <span className="font-bold text-ujmah-navy">Association UJMAH Togo</span>
                </div>
                <div>
                  <span className="text-ujmah-dark-muted block text-[10px] uppercase font-bold">IBAN / RIB Togo</span>
                  <span className="font-mono font-bold text-xs text-ujmah-indigo break-all">
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

            {/* Transparence & Déduction */}
            <div className="bg-gradient-to-br from-ujmah-indigo to-ujmah-indigo-dark text-white p-6 rounded-3xl shadow-md">
              <span className="text-[10px] uppercase font-bold tracking-wider text-ujmah-sun block mb-1">
                Transparence & Rigueur
              </span>
              <h4 className="font-sans font-bold text-base mb-2">
                100% au service du terrain
              </h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Chaque don fait l'objet d'un reçu officiel émis au nom de l'association UJMAH (Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA).
              </p>
              <div className="text-[11px] text-white/60">
                Contact trésorerie : <strong>+228 92 67 34 00</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
