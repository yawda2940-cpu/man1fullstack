import React from 'react';

export default function Kontak() {
  return (
    <main>
        {/* Latar Belakang Hero */}
        <section className="kontak-hero">
            <div className="judul-section text-center">
                {/* Judul dan Subjudul yang lebih elegan */}
                <h2 style={{ color: 'white', marginBottom: '15px' }}>LAYANAN INFORMASI & KONTAK</h2>
                <p style={{ color: 'white', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                    Kami siap melayani kebutuhan informasi Anda. Silakan hubungi saluran komunikasi resmi kami atau kunjungi langsung MAN 1 Kota Madiun pada jam layanan operasional.
                </p>
            </div>

            <div className="layanan-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', maxWidth: '1100px', margin: '40px auto 0' }}>
                
                {/* BAGIAN KIRI: GOOGLE MAPS */}
                <div className="layanan-kiri" style={{ flex: '1 1 400px' }}>
                    <div className="card-kontak" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ marginBottom: '20px', color: '#17521b', borderBottom: '2px solid #e9f5ed', paddingBottom: '10px' }}>Peta Lokasi Madrasah</h3>
                        
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3995.458249393927!2d111.52135567505073!3d-7.654310692361998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be60bd524f03%3A0x8ab85146a323abbd!2sMadrasah%20Aliyah%20Negeri%201%20Kota%20Madiun!5e1!3m2!1sen!2sid!4v1776061652573!5m2!1sen!2sid" 
                            width="100%" 
                            height="300" 
                            style={{ border: 0, borderRadius: '10px', flexGrow: 1 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Lokasi MAN 1 Kota Madiun"
                        ></iframe>

                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <a 
                                href="https://maps.app.goo.gl/dummy-link-man1madiun" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '12px 25px',
                                    backgroundColor: '#1b5e20', // Warna diubah jadi hijau utama
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 15px rgba(27, 94, 32, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </div>

              {/* BAGIAN KANAN: INFORMASI KONTAK */}
                <div className="layanan-kanan" style={{ flex: '1 1 400px' }}>
                    <div className="card-kontak" style={{ padding: '30px', borderRadius: '15px', height: '100%' }}>
                        <h3 style={{ marginBottom: '25px', color: '#17521b', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '10px', textAlign: 'center' }}>
                            Saluran Komunikasi Resmi
                        </h3>
                        
                        {/* KUNCI MUTLAK: Kita paksa list ini rata kiri! */}
                        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                            
                            {/* ITEM 1: ALAMAT */}
                            <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px', marginBottom: '25px', textAlign: 'left' }}>
                                <div style={{ backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '1.2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                    📍
                                </div>
                                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#17521b', fontSize: '1.05rem', textAlign: 'left' }}>Alamat Madrasah</h4>
                                    <p style={{ margin: 0, color: '#333', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                                        Jl. Raya Ponorogo - Madiun No.68 B, Demangan,<br />
                                        Kec. Taman, Kota Madiun, Jawa Timur 63136
                                    </p>
                                </div>
                            </li>
                            
                            {/* ITEM 2: TELEPON */}
                            <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px', marginBottom: '25px', textAlign: 'left' }}>
                                <div style={{ backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '1.2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                    📞
                                </div>
                                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#17521b', fontSize: '1.05rem', textAlign: 'left' }}>Layanan Telepon</h4>
                                    <p style={{ margin: 0, color: '#333', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                                        (0351) 455477
                                    </p>
                                </div>
                            </li>
                            
                            {/* ITEM 3: EMAIL */}
                            <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px', marginBottom: '25px', textAlign: 'left' }}>
                                <div style={{ backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '1.2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                    ✉️
                                </div>
                                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#17521b', fontSize: '1.05rem', textAlign: 'left' }}>Surat Elektronik (Email)</h4>
                                    <p style={{ margin: 0, color: '#333', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                                        humas@man1kotamadiun.sch.id
                                    </p>
                                </div>
                            </li>

                            {/* ITEM 4: JAM OPERASIONAL */}
                            <li style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px', textAlign: 'left' }}>
                                <div style={{ backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, fontSize: '1.2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                    🕒
                                </div>
                                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h4 style={{ margin: '0 0 5px 0', color: '#17521b', fontSize: '1.05rem', textAlign: 'left' }}>Jam Pelayanan Operasional</h4>
                                    <p style={{ margin: 0, color: '#333', lineHeight: '1.6', fontSize: '0.95rem', textAlign: 'left' }}>
                                        Senin - Jumat: 06.30 - 15.30 WIB
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </main>
  );
}