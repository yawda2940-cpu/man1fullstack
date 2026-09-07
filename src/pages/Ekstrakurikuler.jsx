import React from 'react';
import { Link } from 'react-router-dom';
// IMPORT DATA DARI FILE LUAR
import { DATA_EKSKUL } from '../dataEkskul';
import { Helmet } from 'react-helmet-async'; // <--- IMPORT MESIN SEO

export default function Ekstrakurikuler() {
  return (
    <>
        {/* ==============================================
            SUNTIKAN SEO KHUSUS HALAMAN EKSTRAKURIKULER
        ============================================== */}
        <Helmet>
            <title>Ekstrakurikuler & Pengembangan Diri | MAN 1 Kota Madiun</title>
            <meta name="description" content="Kembangkan minat, bakat, dan potensi kepemimpinan melalui berbagai program ekstrakurikuler unggulan di MAN 1 Kota Madiun." />
            <link rel="canonical" href="https://man1kotamadiun.vercel.app/ekstrakurikuler" />
            
            {/* Meta Tags untuk Social Media (Open Graph) */}
            <meta property="og:title" content="Ekstrakurikuler MAN 1 Kota Madiun" />
            <meta property="og:description" content="Kami memfasilitasi pengembangan minat dan bakat peserta didik melalui berbagai program ekstrakurikuler yang dibina oleh tenaga profesional." />
            <meta property="og:type" content="website" />
        </Helmet>

        <main>
            <section style={{ background: 'linear-gradient(135deg, #1a5532 0%, #348f50 100%)', padding: '120px 5% 100px 5%' }}>
                <div className="judul-section text-center">
                    {/* PERUBAHAN SEO: Ini diubah menjadi <h1> agar struktur hierarki HTML sempurna */}
                    <h1 style={{ color: 'white', marginBottom: '15px', fontSize: '2.5rem', fontWeight: 'bold' }}>
                        EKSTRAKURIKULER MADRASAH
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto 50px auto', color: '#e0e0e0', lineHeight: '1.6', fontSize: '1.1rem' }}>
                        Kami memfasilitasi pengembangan minat, bakat, dan potensi kepemimpinan peserta didik melalui berbagai program ekstrakurikuler yang dibina oleh tenaga profesional.
                    </p>
                </div>
                
                <div className="ekskul-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {DATA_EKSKUL.map((ekskul) => (
                        <Link to={`/ekstrakurikuler/${ekskul.id}`} key={ekskul.id} style={{ textDecoration: 'none' }}>
                            <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'transform 0.2s' }}>
                                
                                {/* PERUBAHAN SEO: Nama masing-masing ekskul menjadi <h2> karena ini sub-topik */}
                                <h2 className="text-center" style={{ margin: '0 0 25px 0', color: '#1b5e20', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    {ekskul.judul}
                                </h2>
                                
                                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <div style={{ flex: '1 1 300px' }}> 
                                        {/* PERUBAHAN SEO: Alt text dinamis menggunakan Template Literal JavaScript (Backtick `) */}
                                        <img src={ekskul.gambarUtama} alt={`Kegiatan Ekstrakurikuler ${ekskul.judul} di MAN 1 Kota Madiun`} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                                    </div>
                                    <div style={{ flex: '2 1 400px' }}> 
                                        <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>{ekskul.deskripsiSingkat}</p>
                                    </div>
                                </div>
                                <div className="text-center" style={{ marginTop: '20px' }}>
                                    <span style={{ color: '#1a5532', fontWeight: 'bold', fontSize: '0.9rem' }}>Klik untuk melihat detail & galeri &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    </>
  );
}