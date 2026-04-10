import React from 'react';

export default function Kontak() {
  return (
    <main>
        {/* Latar Belakang Hero */}
        <section className="kontak-hero">
            <div className="judul-section text-center">
                {/* Judul dan Subjudul yang lebih elegan */}
                <h2 style={{ color: 'white' }}>LAYANAN INFORMASI & KONTAK</h2>
                <p style={{ color: 'white', maxWidth: '700px', margin: '0 auto' }}>
                    Kami siap melayani kebutuhan informasi Anda. Silakan hubungi saluran komunikasi resmi kami atau kunjungi langsung MAN 1 Kota Madiun pada jam layanan operasional.
                </p>
            </div>

            <div className="layanan-container">
                
                {/* BAGIAN KIRI: GOOGLE MAPS */}
                <div className="layanan-kiri">
                    <div className="form-box" style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ marginBottom: '15px', color: '#17521b' }}>Peta Lokasi Madrasah</h3>
                        
                        <iframe 
                            src="https://maps.google.com/maps?q=MAN+1+Kota+Madiun&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="280" 
                            style={{ border: 0, borderRadius: '8px', flexGrow: 1 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Lokasi MAN 1 Kota Madiun"
                        ></iframe>

                        <div style={{ textAlign: 'center', marginTop: '15px' }}>
                            <a 
                                href="https://maps.app.goo.gl/ko8QczGUdS9NqW9S9" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '10px 20px',
                                    backgroundColor: '#f1c40f',
                                    color: '#1b5e20',
                                    textDecoration: 'none',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                📍 Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* BAGIAN KANAN: INFORMASI KONTAK */}
                <div className="layanan-kanan">
                    <div className="form-box" style={{ padding: '30px', height: '100%' }}>
                        <h3 style={{ marginBottom: '20px', color: '#1b5e20' }}>Saluran Komunikasi Resmi</h3>
                        
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📍</span> Alamat Madrasah:
                                </strong>
                                <p style={{ marginLeft: '30px', marginTop: '5px', color: '#444' }}>
                                    Jl. Raya Ponorogo - Madiun No.68 B, Demangan,<br />
                                    Kec. Taman, Kota Madiun, Jawa Timur 63136
                                </p>
                            </li>
                            
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>📞</span> Layanan Telepon:
                                </strong>
                                <p style={{ marginLeft: '30px', marginTop: '5px', color: '#444' }}>(0351) 455477</p>
                            </li>
                            
                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>✉️</span> Surat Elektronik (Email):
                                </strong>
                                <p style={{ marginLeft: '30px', marginTop: '5px', color: '#444' }}>humas@man1kotamadiun.sch.id</p>
                            </li>

                            <li style={{ marginBottom: '15px' }}>
                                <strong style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2rem' }}>🕒</span> Jam Pelayanan Operasional:
                                </strong>
                                <p style={{ marginLeft: '30px', marginTop: '5px', color: '#444' }}>Senin - Jumat: 06.30 - 15.30 WIB</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </main>
  );
}