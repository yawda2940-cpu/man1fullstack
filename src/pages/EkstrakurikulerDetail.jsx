import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DATA_EKSKUL } from '../dataEkskul';

export default function EkstrakurikulerDetail() {
    const { id } = useParams(); 
    const ekskul = DATA_EKSKUL.find(item => item.id === id);

    // =============================================================
    // MESIN SLIDER OTOMATIS (DIBUAT MENGGUNAKAN REACT HOOKS)
    // =============================================================
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Jika data tidak ada, atau fotonya cuma 1, matikan mesin slider
        if (!ekskul || !ekskul.dokumentasi || ekskul.dokumentasi.length <= 1) return;

        // Mesin akan memindahkan gambar ke selanjutnya setiap 3000 ms (3 detik)
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                // Jika sudah sampai gambar terakhir, kembali ke 0 (gambar pertama)
                prevIndex === ekskul.dokumentasi.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        // Matikan mesin jika pengunjung keluar dari halaman ini (Cegah Memory Leak)
        return () => clearInterval(interval);
    }, [ekskul]);
    // =============================================================


    // PROTEKSI DATA TIDAK DITEMUKAN
    if (!ekskul) {
        return (
            <main style={{ padding: '150px 5%', textAlign: 'center', minHeight: '80vh' }}>
                <h2 style={{ color: '#d32f2f', fontSize: '2rem' }}>❌ Data Ekstrakurikuler Tidak Ditemukan</h2>
                <Link to="/ekstrakurikuler" style={{ background: '#17501b', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Kembali ke Daftar</Link>
            </main>
        );
    }

    // TAMPILAN UTAMA
    return (
        <main style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '100px' }}>
            
            {/* HERO SECTION */}
            <section style={{ background: 'linear-gradient(135deg, #1a5532 0%, #348f50 100%)', padding: '160px 5% 100px 5%', textAlign: 'center', color: 'white' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px' }}>{ekskul.judul}</h1>
                <p style={{ opacity: 0.9, maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>Halaman Informasi Resmi & Dokumentasi Kegiatan</p>
            </section>

            <section style={{ maxWidth: '1000px', margin: '-50px auto 0 auto', background: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', position: 'relative', zIndex: 10 }}>
                
                {/* PENJELASAN PROFIL */}
                <div style={{ marginBottom: '50px' }}>
                    <h2 style={{ color: '#1b5e20', borderBottom: '4px solid #348f50', display: 'inline-block', paddingBottom: '10px', marginBottom: '25px', fontWeight: '800' }}>Profil & Kegiatan</h2>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>{ekskul.penjelasanLengkap}</p>
                </div>

                {/* GALERI SLIDER OTOMATIS */}
                <div>
                    <h2 style={{ color: '#1b5e20', borderBottom: '4px solid #348f50', display: 'inline-block', paddingBottom: '10px', marginBottom: '30px', fontWeight: '800' }}>Galeri Dokumentasi</h2>
                    
                    <div style={{ 
                        position: 'relative', 
                        width: '100%', 
                        maxWidth: '800px', 
                        margin: '0 auto', 
                        overflow: 'hidden', 
                        borderRadius: '16px', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)' 
                    }}>
                        
                        {/* WADAH GAMBAR YANG BERGESER */}
                        <div style={{ 
                            display: 'flex', 
                            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)', // Animasi geser yang sangat halus
                            transform: `translateX(-${currentIndex * 100}%)` // Logika pergeseran ke kiri
                        }}>
                            {ekskul.dokumentasi.map((foto, index) => (
                                <img 
                                    key={index} 
                                    src={foto} 
                                    alt={`Dokumentasi ${ekskul.judul} ${index + 1}`} 
                                    style={{ 
                                        width: '100%', 
                                        height: '450px', // Tinggi standar slider
                                        objectFit: 'cover', // Agar gambar tidak peyang
                                        flexShrink: 0 
                                    }} 
                                />
                            ))}
                        </div>

                        {/* NAVIGASI TITIK (DOTS) DI BAWAH GAMBAR */}
                        <div style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            {ekskul.dokumentasi.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    style={{
                                        width: currentIndex === index ? '30px' : '12px',
                                        height: '12px',
                                        borderRadius: '10px',
                                        background: currentIndex === index ? '#348f50' : '#ffffff',
                                        border: '2px solid rgba(0,0,0,0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        padding: 0
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
                
                {/* TOMBOL KEMBALI */}
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Link to="/ekstrakurikuler" style={{ display: 'inline-block', border: '2px solid #1a5532', color: '#1a5532', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', transition: '0.2s' }}>
                        &larr; Kembali ke Semua Ekstrakurikuler
                    </Link>
                </div>
            </section>
        </main>
    );
}