// File: src/pages/Ekstrakurikuler.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// IMPORT DATA DARI FILE LUAR
import { DATA_EKSKUL } from '../dataEkskul';

export default function Ekstrakurikuler() {
  return (
    <main>
        <section style={{ background: 'linear-gradient(135deg, #1a5532 0%, #348f50 100%)', padding: '120px 5% 100px 5%' }}>
            <div className="judul-section text-center">
                <h2 style={{ color: 'white', marginBottom: '15px' }}>EKSTRAKURIKULER MADRASAH</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto 50px auto', color: '#e0e0e0', lineHeight: '1.6' }}>
                    Kami memfasilitasi pengembangan minat, bakat, dan potensi kepemimpinan peserta didik melalui berbagai program ekstrakurikuler yang dibina oleh tenaga profesional.
                </p>
            </div>
            
            <div className="ekskul-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {DATA_EKSKUL.map((ekskul) => (
                    <Link to={`/ekstrakurikuler/${ekskul.id}`} key={ekskul.id} style={{ textDecoration: 'none' }}>
                        <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'transform 0.2s' }}>
                            <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>{ekskul.judul}</h3>
                            <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 300px' }}> 
                                    <img src={ekskul.gambarUtama} alt={ekskul.judul} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
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
  );
}