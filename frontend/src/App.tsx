import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fondements from './pages/Fondements';
import Actions from './pages/Actions';
import Orphelinat from './pages/Orphelinat';
import Galerie from './pages/Galerie';
import Valeurs from './pages/Valeurs';
import Contact from './pages/Contact';
import Donation from './pages/Donation';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminArticles from './pages/AdminArticles';
import AdminGallery from './pages/AdminGallery';
import AdminProjects from './pages/AdminProjects';
import AdminEvents from './pages/AdminEvents';
import AdminDonations from './pages/AdminDonations';
import AdminUsers from './pages/AdminUsers';

function AppContent() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className={isAdminPath ? "" : "flex flex-col min-h-screen bg-ujmah-ivory text-ujmah-navy font-sans"}>
      {!isAdminPath && <Navbar />}

      <main className={isAdminPath ? "" : "flex-grow"}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/fondements" element={<Fondements />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/orphelinat" element={<Orphelinat />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/valeurs" element={<Valeurs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/don" element={<Donation />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/articles" element={<AdminArticles />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/donations" element={<AdminDonations />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </main>

      {!isAdminPath && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
