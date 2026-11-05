import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setStatus('loading');

    const formData = {
      name,
      email,
      subject,
      message,
      _subject: `Nouveau message de ${name} (Portail UJMAH Togo)`
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ujmahofficiel@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success === 'true' || data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-28 pb-20 px-6 bg-ujmah-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-sun/20 border border-ujmah-sun/40 text-ujmah-indigo font-sans text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full mb-4">
            Prendre Contact
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-indigo mb-6 tracking-tight">
            Nous Contacter
          </h1>
          <p className="font-sans text-base text-ujmah-navy/70 leading-relaxed">
            Une question, une proposition de partenariat, une demande d'information ou un projet solidaire ? Écrivez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Info Column */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ujmah-navy/5 shadow-md flex flex-col gap-8">
            <h3 className="font-display font-bold text-2xl text-ujmah-indigo mb-2">Coordonnées Officielles</h3>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-orange/10 text-ujmah-orange flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-ujmah-navy mb-1">Siège social</h4>
                <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed">
                  Agoè-Adjougba, à 100m de BOXBERG, Lomé – Togo
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-indigo/10 text-ujmah-indigo flex items-center justify-center flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-ujmah-navy mb-1">Téléphone & WhatsApp</h4>
                <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed font-bold">
                  +228 92 67 34 00
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-ujmah-sun/20 text-ujmah-indigo flex items-center justify-center flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-ujmah-navy mb-1">Courrier électronique</h4>
                <p className="font-sans text-sm text-ujmah-navy/70 leading-relaxed">
                  ujmahofficiel@gmail.com
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-ujmah-ivory border border-ujmah-navy/10 mt-2">
              <span className="text-xs uppercase font-extrabold text-ujmah-orange tracking-wider block mb-1">Enregistrement Officiel</span>
              <p className="font-mono text-xs text-ujmah-navy font-bold">
                Récépissé N° 0315/MATDCL-SG-DLPAP-DOCA
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ujmah-navy/5 shadow-md">
            <h3 className="font-display font-bold text-2xl text-ujmah-indigo mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy/60 mb-2">Votre nom complet</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/10 bg-ujmah-ivory focus:border-ujmah-indigo focus:outline-none text-sm font-medium"
                  placeholder="ex: Ouro-Djobo Abdoulaye"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy/60 mb-2">Adresse email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/10 bg-ujmah-ivory focus:border-ujmah-indigo focus:outline-none text-sm font-medium"
                  placeholder="votre.email@domaine.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy/60 mb-2">Objet du message</label>
                <input 
                  type="text" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/10 bg-ujmah-ivory focus:border-ujmah-indigo focus:outline-none text-sm font-medium"
                  placeholder="ex: Proposition de partenariat / Parrainage"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-ujmah-navy/60 mb-2">Message</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-ujmah-navy/10 bg-ujmah-ivory focus:border-ujmah-indigo focus:outline-none text-sm font-medium min-h-[140px] resize-y"
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Votre message a été transmis avec succès à l'équipe UJMAH !
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                  <AlertCircle size={16} />
                  Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous joindre par téléphone.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 bg-ujmah-orange hover:bg-ujmah-orange-hover text-white py-4 rounded-full font-sans font-bold text-sm shadow-md transition-all duration-300 disabled:opacity-50 mt-2"
              >
                <Send size={16} />
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
