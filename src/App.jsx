import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 1. IMPORT OBAT SCROLL-NYA DI SINI


import './assets/index.css';
import './assets/kontak.css';
import './assets/layanan.css';
import './assets/ppdb.css';
import './assets/profil.css';
import './assets/program.css';

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

export default function App() {
  const location = useLocation();
  return (
    <>
      {/* 2. PASANG OBAT SCROLL-NYA DI SINI (Di luar Routes agar selalu aktif) */}
      <ScrollToTop />
      
      <Header />
      
      {/* 5. Bungkus Routes dengan AnimatePresence */}
      {/* mode="wait" artinya: tunggu halaman lama selesai menghilang, baru munculkan halaman baru */}
      <AnimatePresence mode="wait"> 
        <Routes location={location} key={location.pathname}>

          <Route path="/admin" element={<Admin />} />

        {/* 6. Bungkus elemen halamannya dengan <PageTransition> */}
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/kontak" element={<PageTransition><Kontak /></PageTransition>} />
          <Route path="/profil-sambutan" element={<PageTransition><ProfilSambutan /></PageTransition>} />
          <Route path="/profil-madrasah" element={<PageTransition><ProfilMadrasah /></PageTransition>} />
          <Route path="/profil-guru" element={<PageTransition><ProfilGuru /></PageTransition>} />
          <Route path="/profil-tu" element={<PageTransition><ProfilTU /></PageTransition>} />
          <Route path="/kurikulum" element={<PageTransition><Kurikulum /></PageTransition>} />
          <Route path="/ekstrakurikuler" element={<PageTransition><Ekstrakurikuler /></PageTransition>} />
          <Route path="/layanan" element={<PageTransition><Layanan /></PageTransition>} />
          <Route path="/ppdb" element={<PageTransition><PPDB /></PageTransition>} />

        </Routes>
      </AnimatePresence>

    

    

      <Footer />
    </>
  )
}