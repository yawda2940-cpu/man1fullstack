import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Kontak from './pages/Kontak';
import ProfilSambutan from './pages/ProfilSambutan';
import ProfilMadrasah from './pages/ProfilMadrasah';
import ProfilGuru from './pages/ProfilGuru';
import ProfilTU from './pages/ProfilTU';
import Program from './pages/Program';
import Layanan from './pages/Layanan';
import PPDB from './pages/PPDB';
import PageTransition from './components/PageTransition';
import Kurikulum from './pages/Kurikulum';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import EkstrakurikulerDetail from './pages/EkstrakurikulerDetail';

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <AnimatePresence mode="wait"> 
        <Routes location={location} key={location.pathname}>

          <Route path="/admin" element={<Admin />} />

          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/kontak" element={<PageTransition><Kontak /></PageTransition>} />
          <Route path="/profil-sambutan" element={<PageTransition><ProfilSambutan /></PageTransition>} />
          <Route path="/profil-madrasah" element={<PageTransition><ProfilMadrasah /></PageTransition>} />
          <Route path="/profil-guru" element={<PageTransition><ProfilGuru /></PageTransition>} />
          <Route path="/profil-tu" element={<PageTransition><ProfilTU /></PageTransition>} />
          <Route path="/kurikulum" element={<PageTransition><Kurikulum /></PageTransition>} />
          <Route path="/layanan" element={<PageTransition><Layanan /></PageTransition>} />
          <Route path="/ppdb" element={<PageTransition><PPDB /></PageTransition>} />
          <Route path="/program" element={<PageTransition><Program /></PageTransition>} />

          {/* Rute Induk & Dinamis Ekstrakurikuler */}
          <Route path="/ekstrakurikuler" element={<PageTransition><Ekstrakurikuler /></PageTransition>} />
          <Route path="/ekstrakurikuler/:id" element={<PageTransition><EkstrakurikulerDetail /></PageTransition>} />

        </Routes>
      </AnimatePresence>

      <Analytics />
      <Footer />
    </>
  )
}