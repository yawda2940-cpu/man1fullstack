import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async' // <--- 1. INI WAJIB DITAMBAHKAN BOSKU!

import App from './App.jsx'

// Import CSS Global Anda
import './assets/css/index.css'

// Import CSS Halaman
import './assets/css/profil.css'
import './assets/css/kontak.css'
import './assets/css/layanan.css'
import './assets/css/ppdb.css'
import './assets/css/program.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. BUNGKUS APLIKASI DENGAN HELMET PROVIDER DI SINI */}
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)