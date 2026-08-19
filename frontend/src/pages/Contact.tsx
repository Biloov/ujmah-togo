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
      _subject: `Nouveau message de ${name} (Portail UJMAH V2)`
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
    <div className="pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block bg-ujmah-navy/5 text-ujmah-navy font-sans text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full mb-4">
            Prendre Contact
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ujmah-navy mb-6 tracking-tight">
            Nous Contacter
          </h1>
          <p className="font-sans text-base text-ujmah-navy/60 leading-relaxed">
            Une question, une proposition de partenariat ou une demande d'information ? Écrivez-nous directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Info Column */}
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm flex flex-col gap-8">
            <h3 className="font-display font-bold text-2xl text-ujmah-navy mb-2">Nos Coordonnées</h3>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-ujmah-gold/10 text-ujmah-gold flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-ujmah-navy mb-1">Adresse physique</h4>
                <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">
                  Quartier Kpangalam, Lomé-Togo
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-ujmah-gold/10 text-ujmah-gold flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-ujmah-navy mb-1">Téléphone</h4>
                <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">
                  +228 93 26 71 54 / +228 97 79 50 37
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-ujmah-gold/10 text-ujmah-gold flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-ujmah-navy mb-1">Email</h4>
                <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed">
                  ujmahofficiel@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm">
            <h3 className="font-display font-bold text-2xl text-ujmah-navy mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2" htmlFor="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2" htmlFor="email">Adresse email</label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2" htmlFor="subject">Sujet</label>
                <select 
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="don">Faire un don</option>
                  <option value="partenariat">Devenir partenaire</option>
                  <option value="benevolat">Devenir bénévole</option>
                  <option value="information">Demande d'information</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-ujmah-navy/60 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-ujmah-navy/10 bg-ujmah-gray/50 focus:border-ujmah-navy focus:outline-none text-sm transition-colors min-h-[140px] resize-y"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 p-4 rounded-lg text-sm">
                  <CheckCircle2 size={18} />
                  <span>Votre message a été envoyé avec succès !</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg text-sm">
                  <AlertCircle size={18} />
                  <span>Une erreur s'est produite lors de l'envoi, veuillez réessayer.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-ujmah-navy text-white px-6 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:bg-ujmah-gold hover:shadow-lg disabled:opacity-50 mt-2"
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
