import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer-professional">
            
            {/* KUNCI ABSOLUT: Menggunakan CSS Grid untuk memaksa 5 kolom sejajar tidak turun */}
            <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', gap: '30px', alignItems: 'start' }}>
                
                {/* 1. KOLOM BRAND */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/logo.svg" alt="Logo MAN 1 Madiun" />
                        <h3>MAN 1 KOTA MADIUN</h3>
                    </div>
                    <p style={{ lineHeight: '1.8', marginBottom: '25px', color: '#e8f5e9', fontSize: '0.95rem' }}>
                        Madrasah Aliyah Negeri Berkarakter, Unggul Akademik, Aktif Berorganisasi, dan Peduli sesama dengan motto Gali Potensi Raih Prestasi.
                    </p>
                    
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <a href="https://www.instagram.com/man1kotamadiun/" target="_blank" rel="noopener noreferrer" 
                           style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', width: '42px', height: '42px' }} 
                           onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.querySelector('img').style.filter = 'invert(1)'; }} 
                           onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.querySelector('img').style.filter = 'none'; }}>
                            <img src="/instagram.svg" alt="Instagram" style={{ width: '22px', height: '22px', transition: '0.3s' }} />
                        </a>

                        <a href="https://www.youtube.com/@man1kotamadiunofficial" target="_blank" rel="noopener noreferrer" 
                           style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', width: '42px', height: '42px' }} 
                           onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.querySelector('img').style.filter = 'invert(1)'; }} 
                           onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.querySelector('img').style.filter = 'none'; }}>
                            <img src="/youtube.svg" alt="YouTube" style={{ width: '22px', height: '22px', transition: '0.3s' }} />
                        </a>

                        <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" 
                           style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', width: '42px', height: '42px' }} 
                           onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.querySelector('img').style.filter = 'invert(1)'; }} 
                           onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.querySelector('img').style.filter = 'none'; }}>
                            <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: '22px', height: '22px', transition: '0.3s' }} />
                        </a>

                        <a href="mailto:man1kotamadiun@kemenag.go.id" 
                           style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', width: '42px', height: '42px' }} 
                           onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.querySelector('img').style.filter = 'invert(1)'; }} 
                           onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.querySelector('img').style.filter = 'none'; }}>
                            <img src="/gmail.svg" alt="Email" style={{ width: '22px', height: '22px', transition: '0.3s' }} />
                        </a>
                    </div>
                </div>

                {/* 2. KOLOM PROFIL */}
                <div className="footer-links">
                    <h4>Profil</h4>
                    <ul>
                        <li><Link to="/profil-sambutan">Sambutan</Link></li>
                        <li><Link to="/profil-madrasah">Profil Madrasah</Link></li>
                        <li><Link to="/profil-guru">Data Guru</Link></li>
                        <li><Link to="/profil-tu">Data Tata Usaha</Link></li>
                    </ul>
                </div>

                {/* 3. KOLOM PROGRAM */}
                <div className="footer-links">
                    <h4>Program</h4>
                    <ul>
                        <li><Link to="/kurikulum">Kurikulum</Link></li>
                        <li><Link to="/ekstrakurikuler">Ekstrakurikuler</Link></li>
                    </ul>
                </div>

                {/* 4. KOLOM LAYANAN (INI TAMBAHAN BARU, DI TENGAH-TENGAH) */}
                <div className="footer-links">
                    <h4>Layanan</h4>
                    <ul>
                        <li><Link to="/layanan">Pengaduan</Link></li>
                        <li><Link to="/layanan">Penelitian</Link></li>
                        <li><Link to="/layanan">Legalisir</Link></li>
                    </ul>
                </div>

                {/* 5. KOLOM KONTAK */}
                <div>
                    <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '25px', fontWeight: 'bold' }}>Kontak Kami</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#e8f5e9', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📍</span>
                            <p style={{ margin: 0, lineHeight: '1.6' }}>Jl. Raya Ponorogo - Madiun No.68 B, Demangan, Kec. Taman, Kota Madiun, Jawa Timur 63136</p>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>📞</span>
                            <p style={{ margin: 0 }}>(0351) 455477</p>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.2rem' }}>✉️</span>
                            <p style={{ margin: 0 }}>humas@man1kotamadiun.sch.id</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div style={{ background: '#063e0b', padding: '20px 5%', textAlign: 'center', width: '100%', marginTop: '40px' }}>
                <p style={{ margin: 0, color: '#a5d6a7', fontSize: '0.9rem' }}>
                    &copy; 2026 MAN 1 Kota Madiun. Seluruh hak cipta dilindungi undang-undang.
                </p>
            </div>
        </footer>
    );
}