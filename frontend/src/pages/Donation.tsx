import React, { useState } from 'react';
import { CreditCard, Landmark, Shield, Check } from 'lucide-react';

export default function Donation() {
  const [category, setCategory] = useState<'general' | 'orphelinat' | 'cotisation'>('general');
  const [amount, setAmount] = useState('2000');
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [copied, setCopied] = useState(false);

  const baseUrls = {
    general: "https://pay.genius.ci/d/ujmah-general",
    orphelinat: "https://pay.genius.ci/d/ujmah-orphelinat",
    cotisation: "https://pay.genius.ci/d/ujmah-cotisation"
  };

  const amountPresets = ["2000", "5000", "10000", "25000"];

  const handlePresetSelect = (preset: string) => {
    setIsCustom(false);
    setAmount(preset);
  };

  const handleCustomInput = (val: string) => {
    setIsCustom(true);
    setCustomAmount(val);
    setAmount(val || "0");
  };

  const getDonationUrl = () => {
    const finalAmount = isCustom ? customAmount : amount;
    const baseUrl = baseUrls[category];
    if (finalAmount && !isNaN(Number(finalAmount)) && Number(finalAmount) > 0) {
      return `${baseUrl}?amount=${finalAmount}`;
    }
    return baseUrl;
  };

  const copyRib = () => {
    navigator.clipboard.writeText("TG1820101000881182440113").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="pt-28 pb-20 px-6 bg-ujmah-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Nous Soutenir
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-ujmah-indigo mb-6 tracking-tight">
            Faire un don
          </h1>
          <p className="font-sans text-base text-ujmah-navy/70 leading-relaxed">
            Votre générosité finance directement nos actions humanitaires et éducatives sur le terrain au Togo. Chaque don est une graine d'espérance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Genius Pay Portal Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ujmah-navy/5 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-2xl text-ujmah-indigo">Don sécurisé en ligne</h3>
                <span className="text-xs text-ujmah-navy/50 font-sans">Mobile Money & Cartes Bancaires</span>
              </div>
            </div>
            
            <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed mb-8">
              Paiement instantané et sécurisé par Tmoney, Flooz, Wave ou Carte Bancaire via la passerelle certifiée Genius Pay.
            </p>

            {/* Category Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase text-ujmah-indigo/70 tracking-wider mb-3">Destination de votre don</label>
              <div className="grid grid-cols-3 gap-2">
                {(['general', 'orphelinat', 'cotisation'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-3.5 rounded-2xl border text-xs font-bold transition-all ${
                      category === cat 
                        ? "border-ujmah-indigo bg-ujmah-indigo text-white shadow-md shadow-ujmah-indigo/20" 
                        : "border-ujmah-navy/10 hover:border-ujmah-indigo/30 text-ujmah-navy/80 bg-ujmah-ivory"
                    }`}
                  >
                    {cat === 'general' ? 'Don Général' : cat === 'orphelinat' ? 'Orphelinat' : 'Cotisation'}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase text-ujmah-indigo/70 tracking-wider mb-3">Montant souhaité (FCFA)</label>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {amountPresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handlePresetSelect(preset)}
                    className={`px-2 py-3 rounded-xl border text-xs font-extrabold transition-all ${
                      !isCustom && amount === preset 
                        ? "border-ujmah-orange bg-ujmah-orange text-white shadow-md shadow-ujmah-orange/20" 
                        : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy/80 bg-ujmah-ivory"
                    }`}
                  >
                    {Number(preset).toLocaleString('fr-FR')}
                  </button>
                ))}
                <button
                  onClick={() => setIsCustom(true)}
                  className={`px-2 py-3 rounded-xl border text-xs font-extrabold transition-all ${
                    isCustom 
                      ? "border-ujmah-orange bg-ujmah-orange text-white shadow-md shadow-ujmah-orange/20" 
                      : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy/80 bg-ujmah-ivory"
                  }`}
                >
                  Autre
                </button>
              </div>

              {isCustom && (
                <div className="mt-4">
                  <input 
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/15 focus:border-ujmah-indigo focus:outline-none text-base text-center font-bold text-ujmah-indigo bg-ujmah-ivory"
                    placeholder="Saisir le montant libre (ex: 15000)"
                    min="100"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <a 
              href={getDonationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 shadow-lg shadow-ujmah-orange/25 hover:-translate-y-0.5 mt-6"
            >
              Faire un don de {(isCustom ? Number(customAmount || 0) : Number(amount)).toLocaleString('fr-FR')} FCFA
            </a>
            
            <p className="flex items-center justify-center gap-1.5 text-xs text-ujmah-navy/50 mt-4">
              <Shield size={14} className="text-ujmah-indigo" />
              Paiement 100% sécurisé et crypté via Genius Pay
            </p>
          </div>

          {/* Bank Transfer Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ujmah-navy/5 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center">
                <Landmark size={24} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-2xl text-ujmah-indigo">Virement bancaire</h3>
                <span className="text-xs text-ujmah-navy/50 font-sans">Compte officiel UJMAH Togo</span>
              </div>
            </div>

            <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed mb-8">
              Pour des transferts ou versements directs depuis une agence bancaire ou par virement SEPA / UEMOA.
            </p>

            <div className="bg-ujmah-ivory p-6 rounded-2xl border border-ujmah-navy/5 mb-8">
              <h4 className="font-sans font-semibold text-xs text-ujmah-navy/50 uppercase tracking-wider mb-1">Établissement Bancaire</h4>
              <p className="font-sans text-sm text-ujmah-indigo font-extrabold mb-4">CORIS BANK INTERNATIONAL TOGO</p>
              
              <h4 className="font-sans font-semibold text-xs text-ujmah-navy/50 uppercase tracking-wider mb-1">Titulaire du compte</h4>
              <p className="font-sans text-sm text-ujmah-indigo font-extrabold mb-4">ASSOCIATION UJMAH</p>
              
              <h4 className="font-sans font-semibold text-xs text-ujmah-navy/50 uppercase tracking-wider mb-1">Relevé d'Identité Bancaire (RIB)</h4>
              <p className="font-sans text-sm text-ujmah-orange font-bold tracking-wider">
                TG182 01010 008811824401 13
              </p>
            </div>

            <button 
              onClick={copyRib}
              className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-indigo hover:bg-ujmah-indigo-dark text-white py-3.5 rounded-full font-sans font-bold text-sm transition-all duration-300 shadow-md shadow-ujmah-indigo/20 hover:-translate-y-0.5"
            >
              {copied ? <Check size={16} className="text-ujmah-sun" /> : null}
              {copied ? 'RIB copié avec succès !' : 'Copier le RIB bancaire'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
