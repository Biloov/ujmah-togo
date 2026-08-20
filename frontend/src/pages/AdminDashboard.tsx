import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import { Landmark, Newspaper, Calendar, ShieldAlert } from 'lucide-react';

export default function AdminDashboard() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
    }
  }, [token, navigate]);

  const stats = [
    { label: "Dons cumulés (XOF)", value: "2 450 000 FCFA", desc: "Transactions réelles validées", icon: <Landmark size={24} />, color: "bg-ujmah-navy text-white" },
    { label: "Articles publiés", value: "3 articles", desc: "Rubrique actualités en ligne", icon: <Newspaper size={24} />, color: "bg-ujmah-gold text-white" },
    { label: "Événements planifiés", value: "2 événements", desc: "SEFIMA & CRSC", icon: <Calendar size={24} />, color: "bg-ujmah-blue text-white" }
  ];

  return (
    <div className="flex bg-ujmah-gray min-h-screen text-ujmah-navy">
      <AdminSidebar />
      
      {/* Main Panel Content */}
      <div className="flex-grow p-10 overflow-y-auto">
        {/* Welcome Header */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="font-display font-extrabold text-3xl">Tableau de Bord</h1>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mt-1">
              Bienvenue, {user?.firstName} {user?.lastName}. Accédez aux outils de pilotage de l'association.
            </p>
          </div>
          <span className="font-sans text-xs bg-ujmah-navy/5 px-4 py-2 rounded-full font-semibold border border-ujmah-navy/5">
            Dernière connexion : Aujourd'hui
          </span>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-2xl border border-ujmah-navy/5 shadow-sm flex items-center justify-between">
              <div>
                <span className="font-sans text-xs uppercase tracking-wide text-ujmah-navy/50 font-bold">{stat.label}</span>
                <h3 className="font-display font-extrabold text-2xl mt-1.5">{stat.value}</h3>
                <p className="font-sans text-xs text-ujmah-navy/40 mt-1">{stat.desc}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Informative Security Panel */}
        <div className="bg-white p-8 rounded-2xl border border-ujmah-navy/5 shadow-sm flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-ujmah-gold/15 text-ujmah-gold flex items-center justify-center flex-shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl mb-2">Sécurité & Contrôle</h3>
            <p className="font-sans text-sm text-ujmah-navy/60 leading-relaxed mb-4">
              Chaque action d'édition (création d'article, de projet, modification d'impact) est enregistrée de manière cryptée dans le journal d'activité de l'association.
              Veuillez ne jamais partager vos identifiants d'accès.
            </p>
            <div className="flex gap-4">
              <a href="/admin/articles" className="inline-flex items-center gap-1 bg-ujmah-navy text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-ujmah-gold transition-colors">
                Gérer les Actualités
              </a>
              <a href="/admin/projects" className="inline-flex items-center gap-1 border border-ujmah-navy/10 text-ujmah-navy text-xs font-semibold px-4 py-2 rounded-full hover:bg-ujmah-gray transition-colors">
                Gérer les Projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
