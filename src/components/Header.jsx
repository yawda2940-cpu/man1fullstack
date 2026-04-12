import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// Mengimpor CSS lama Anda langsung ke komponen ini
import '../assets/css/index.css'; 

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo-container" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* Di React, path gambar dipanggil sesuai strukturnya dari file ini */}
                <img src="/logo.svg" alt="Logo MAN 1 Madiun" />
                <div>
                    <h3>MAN 1 KOTA MADIUN</h3>
                    <small>Gali Potensi Raih Prestasi</small>
                </div>
            </Link>
            <nav>
                <ul>
                    {/* Sementara href kita kosongkan pakai '#' sebelum belajar React Router */}
                    <li><NavLink to="/">HOME</NavLink></li>
                    
                    <li className="dropdown">
                        <NavLink to="/profil" className="dropbtn">PROFIL <span className="panah">▾</span></NavLink>
                        <ul className="dropdown-content">
                            <li><NavLink to="/profil-sambutan">Sambutan Kepala Madrasah</NavLink></li>
                            <li><NavLink to="/profil-madrasah">Profil Madrasah</NavLink></li>
                            <li><NavLink to="/profil-guru">Data Guru</NavLink></li>
                            <li><NavLink to="/profil-tu">Tata Usaha (TU)</NavLink></li>
                        </ul>
                    </li>


                    <li className="dropdown">
                    <a href="#" className="dropbtn">PROGRAM <span className="panah">▾</span></a>
                    <ul className="dropdown-content">
                        <li><NavLink to="/kurikulum">Kurikulum</NavLink></li>
                        <li><NavLink to="/ekstrakurikuler">Ekstrakurikuler</NavLink></li>
                    </ul>
                </li>


                    <li><NavLink to="/Layanan">LAYANAN</NavLink></li>
                    <li><NavLink to="/Kontak">KONTAK</NavLink></li>
                    <li><NavLink to="/PPDB">PPDB</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}