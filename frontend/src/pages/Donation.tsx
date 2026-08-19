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
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-navy/5 text-ujmah-navy font-sans text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
            Nous Soutenir
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-navy mb-6 tracking-tight">
            Faire un don
          </h1>
          <p className="font-sans text-base text-ujmah-navy/60 leading-relaxed">
            Votre générosité finance nos actions sur le terrain au Togo. Chaque contribution compte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Genius Pay Portal Card */}
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-ujmah-gold" size={28} />
              <h3 className="font-display font-bold text-2xl text-ujmah-navy">Don sécurisé en ligne</h3>
            </div>
            
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mb-8">
              Payez instantanément par Mobile Money (Tmoney, Flooz, Wave) ou par Carte Bancaire via Genius Pay.
            </p>

            {/* Category Selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-3">Destination du don</label>
              <div className="grid grid-cols-3 gap-2">
                {(['general', 'orphelinat', 'cotisation'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-3.5 rounded-xl border text-xs font-semibold transition-all ${
                      category === cat 
                        ? "border-ujmah-gold bg-ujmah-gold/5 text-ujmah-gold shadow-sm" 
                        : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy/70"
                    }`}
                  >
                    {cat === 'general' ? 'Don Général' : cat === 'orphelinat' ? 'Orphelinat' : 'Cotisation'}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-3">Montant (FCFA)</label>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {amountPresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handlePresetSelect(preset)}
                    className={`px-2 py-3 rounded-lg border text-xs font-bold transition-all ${
                      !isCustom && amount === preset 
                        ? "border-ujmah-navy bg-ujmah-navy text-white" 
                        : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy"
                    }`}
                  >
                    {Number(preset).toLocaleString('fr-FR')}
                  </button>
                ))}
                <button
                  onClick={() => setIsCustom(true)}
                  className={`px-2 py-3 rounded-lg border text-xs font-bold transition-all ${
                    isCustom 
                      ? "border-ujmah-navy bg-ujmah-navy text-white" 
                      : "border-ujmah-navy/10 hover:border-ujmah-navy/30 text-ujmah-navy"
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
                    className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 focus:border-ujmah-navy focus:outline-none text-sm text-center font-bold"
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
              className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-gold hover:bg-ujmah-navy text-white py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:shadow-lg mt-6"
            >
              Faire un don de {(isCustom ? Number(customAmount || 0) : Number(amount)).toLocaleString('fr-FR')} FCFA
            </a>
            
            <p className="flex items-center justify-center gap-1.5 text-xs text-ujmah-navy/40 mt-4">
              <Shield size={12} />
              Paiement sécurisé crypté Genius Pay
            </p>
          </div>

          {/* Bank Transfer Card */}
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="text-ujmah-navy" size={28} />
              <h3 className="font-display font-bold text-2xl text-ujmah-navy">Virement bancaire</h3>
            </div>

            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mb-8">
              Pour des transferts ou virements de fonds directs depuis votre compte bancaire.
            </p>

            <div className="bg-ujmah-gray p-6 rounded-xl border border-ujmah-navy/5 mb-8">
              <h4 className="font-display font-semibold text-xs text-ujmah-navy/60 uppercase tracking-wider mb-2">Banque</h4>
              <p className="font-sans text-sm text-ujmah-navy font-bold mb-4">CORIS BANK TOGO</p>
              
              <h4 className="font-display font-semibold text-xs text-ujmah-navy/60 uppercase tracking-wider mb-2">Titulaire du compte</h4>
              <p className="font-sans text-sm text-ujmah-navy font-bold mb-4">ASSOCIATION UJMAH</p>
              
              <h4 className="font-display font-semibold text-xs text-ujmah-navy/60 uppercase tracking-wider mb-2">RIB (Identifiant de compte)</h4>
              <p className="font-mono text-sm text-ujmah-navy font-bold tracking-wider">
                TG182 01010 008811824401 13
              </p>
            </div>

            <button 
              onClick={copyRib}
              className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-navy hover:bg-ujmah-gold text-white py-3.5 rounded-full font-sans font-bold text-sm transition-all duration-300"
            >
              {copied ? <Check size={16} /> : null}
              {copied ? 'Copié !' : 'Copier le RIB bancaire'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
