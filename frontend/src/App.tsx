import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Actions from './pages/Actions';
import Orphelinat from './pages/Orphelinat';
import Galerie from './pages/Galerie';
import Valeurs from './pages/Valeurs';
import Contact from './pages/Contact';
import Donation from './pages/Donation';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-ujmah-gray text-ujmah-navy font-sans">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/orphelinat" element={<Orphelinat />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/valeurs" element={<Valeurs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/don" element={<Donation />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
