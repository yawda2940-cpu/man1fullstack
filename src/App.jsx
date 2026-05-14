import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; // <--- 1. TAMBAHKAN IMPORT HELMET INI

import Header from './components/Header';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatbotWidget from './components/ChatbotWidget';

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
      {/* =========================================
          2. DEFAULT SEO & OPEN GRAPH (JARING PENGAMAN)
      ========================================= */}
      <Helmet>
        <html lang="id" />
        <title>MAN 1 Kota Madiun | Madrasah Berprestasi & Berakhlak Mulia</title>
        <meta name="description" content="Website Resmi MAN 1 Kota Madiun. Mewujudkan generasi madrasah yang berprestasi, berakhlak mulia, dan siap menghadapi tantangan global di era digital. Bebas zonasi." />
        <meta name="keywords" content="MAN 1 Madiun, Madrasah Aliyah Madiun, Sekolah Islam Madiun, PPDB MAN 1 Kota Madiun, SMA Islam Terbaik" />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://man1kotamadiun.vercel.app/" />
        <meta property="og:title" content="Pendaftaran PPDB MAN 1 Kota Madiun" />
        <meta property="og:description" content="Bergabunglah dengan MAN 1 Kota Madiun. Bebas sistem zonasi, tersedia program Boarding/Tahfidz dan Kelas Keterampilan." />
        <meta property="og:image" content="https://man1kotamadiun.vercel.app/gedung.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://man1kotamadiun.vercel.app/" />
        <meta name="twitter:title" content="MAN 1 Kota Madiun | Madrasah Hebat Bermartabat" />
        <meta name="twitter:description" content="Pendaftaran siswa baru MAN 1 Kota Madiun telah dibuka. Dapatkan informasi lengkap syarat dan jadwal di sini." />
        <meta name="twitter:image" content="https://man1kotamadiun.vercel.app/gedung.png" />
        
        <link rel="canonical" href="https://man1kotamadiun.vercel.app/" />
      </Helmet>

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

        <ChatbotWidget />

      <Footer />
    </>
  )
}