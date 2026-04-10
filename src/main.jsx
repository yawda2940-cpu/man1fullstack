import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. IMPORT BROWSER ROUTER DI SINI
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
    {/* 2. BUNGKUS <App /> DENGAN <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)