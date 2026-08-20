import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Newspaper, HeartHandshake, Calendar, Landmark, LogOut, User } from 'lucide-react';

export default function AdminSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Tableau de Bord", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Actualités CMS", path: "/admin/articles", icon: <Newspaper size={18} /> },
    { label: "Projets Humanitaires", path: "/admin/projects", icon: <HeartHandshake size={18} /> },
    { label: "Événements & Inscriptions", path: "/admin/events", icon: <Calendar size={18} /> },
    { label: "Historique des Dons", path: "/admin/donations", icon: <Landmark size={18} /> }
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="w-[280px] bg-ujmah-navy text-white min-h-screen p-6 flex flex-col flex-shrink-0 border-r border-white/5 relative z-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <img 
          src="/logo-ujmahvf.png" 
          alt="UJMAH" 
          className="h-12 mx-auto mb-3"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/150x50/0b1f3a/ffffff?text=UJMAH";
          }}
        />
        <span className="inline-block bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full font-sans tracking-wide">
          Espace Staff
        </span>
      </div>

      {/* User Info Card */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-ujmah-gold flex items-center justify-center text-white font-sans font-bold">
          {user?.firstName[0] || <User size={18} />}
        </div>
        <div className="overflow-hidden">
          <h4 className="font-display font-semibold text-sm truncate">{user?.firstName} {user?.lastName}</h4>
          <span className="font-sans text-[10px] uppercase font-bold text-ujmah-gold tracking-wide">{user?.role}</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-1.5 flex-grow">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-sans text-sm font-medium transition-all ${
                isActive 
                  ? "bg-ujmah-gold text-white font-semibold shadow-md" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-sans text-sm font-medium text-red-400 hover:bg-red-500/5 hover:text-red-300 transition-all mt-auto"
      >
        <LogOut size={18} />
        Se déconnecter
      </button>
    </div>
  );
}
