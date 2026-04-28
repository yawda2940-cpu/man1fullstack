import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { DATA_FASILITAS } from '../dataFasilitas'; // Pastikan file dataFasilitas.js sudah ada

export default function FasilitasDetail() {
    const { id } = useParams(); // Menangkap ID dari URL (contoh: 'multimedia')
    const [fasilitas, setFasilitas] = useState(null);

    useEffect(() => {
        // Mencari data fasilitas yang cocok dengan ID
        const data = DATA_FASILITAS.find(item => item.id === id);
        setFasilitas(data);
        
        // Scroll ke atas setiap kali halaman dimuat
        window.scrollTo(0, 0);
    }, [id]);

    if (!fasilitas) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 5%', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ color: '#1b5e20', fontSize: '2.5rem' }}>Data Fasilitas Tidak Ditemukan</h2>
                <Link to="/profil-madrasah" style={{ color: '#ffc107', marginTop: '20px', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Kembali ke Profil</Link>
            </div>
        );
    }

    return (
        <main style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '100px' }}>
            
            {/* HERO SECTION DETAIL */}
            <section style={{ 
                background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(52, 143, 80, 0.85)), url("${fasilitas.gambarDetail}")`, 
                backgroundSize: 'cover', backgroundPosition: 'center',
                padding: '160px 5% 100px 5%', textAlign: 'center', color: 'white' 
            }}>
                <ScrollReveal>
                    <Link to="/profil-madrasah" style={{ color: '#ffc107', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '20px', display: 'inline-block' }}>
                        &larr; Kembali ke Daftar Fasilitas
                    </Link>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                        {fasilitas.judul}
                    </h1>
                </ScrollReveal>
            </section>

            {/* KONTEN DETAIL */}
            <section style={{ padding: '60px 5%', maxWidth: '900px', margin: '-50px auto 0 auto', position: 'relative', zIndex: 10 }}>
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                        <h2 style={{ color: '#1b5e20', fontSize: '2rem', fontWeight: '800', marginBottom: '20px', borderBottom: '3px solid #ffc107', display: 'inline-block', paddingBottom: '10px' }}>
                            Deskripsi Fasilitas
                        </h2>
                        <p style={{ color: '#444', lineHeight: '2', fontSize: '1.1rem', textAlign: 'justify' }}>
                            {fasilitas.deskripsi}
                        </p>
                        
                        {/* WADAH UNTUK GALERI FOTO TAMBAHAN (Opsional) */}
                        <div style={{ marginTop: '40px' }}>
                            <h3 style={{ color: '#1b5e20', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Galeri Ruangan</h3>
                            <div style={{ width: '100%', height: '300px', background: '#e0e0e0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                                <img src={fasilitas.gambarDetail} alt={fasilitas.judul} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </main>
    );
}