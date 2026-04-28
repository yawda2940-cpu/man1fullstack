import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Kurikulum() {
  return (
    <main style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '100px' }}>
        
        {/* =========================================
            SECTION 1: HERO & PROGRAM UNGGULAN
        ========================================= */}
        {/* Background Gedung dengan Overlay Hijau Gelap */}
        <section style={{ 
            background: 'linear-gradient(rgba(27, 94, 32, 0.85), rgba(52, 143, 80, 0.85)), url("/gedung.png")', 
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
            padding: '160px 5% 200px 5%', textAlign: 'center', color: 'white', position: 'relative'
        }}>
            <ScrollReveal>
                <span style={{ background: '#ffc107', color: '#1b5e20', padding: '8px 16px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px', display: 'inline-block', marginBottom: '20px' }}>
                    PROGRAM PENDIDIKAN
                </span>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                    KURIKULUM MADRASAH
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: '1.8' }}>
                    MAN 1 Kota Madiun menyelenggarakan pendidikan dengan kurikulum yang sama dengan Kementerian Pendidikan Nasional, tetapi diperkaya dengan nilai-nilai keagamaan sebagai ciri khasnya serta pengembangan lifeskill di bidang TIK melalui kerjasama dengan ITS Surabaya.
                </p>
            </ScrollReveal>
        </section>

        {/* 3 Kartu Unggulan (Melayang menabrak batas atas) */}
        <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '-100px auto 80px auto', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                
                {/* KARTU 1: KETERAMPILAN */}
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '40px 30px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', height: '100%', textAlign: 'center', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ background: '#e8f5e9', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </div>
                        <h3 style={{ color: '#1b5e20', fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' }}>KELAS KETERAMPILAN</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>Kelas Keterampilan adalah kelas yang menawarkan pembelajaran praktis untuk membekali siswa dengan keahlian siap terap di dunia kerja.</p>
                    </div>
                </ScrollReveal>

                {/* KARTU 2: KEDINASAN */}
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '40px 30px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', height: '100%', textAlign: 'center', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ background: '#e8f5e9', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h3 style={{ color: '#1b5e20', fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' }}>KELAS KEDINASAN</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>Kelas Persiapan Kedinasan merupakan program pembelajaran khusus untuk mempersiapkan fisik, mental, dan akademik seleksi sekolah ikatan dinas.</p>
                    </div>
                </ScrollReveal>

                {/* KARTU 3: PTN */}
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '40px 30px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', height: '100%', textAlign: 'center', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ background: '#e8f5e9', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                        </div>
                        <h3 style={{ color: '#1b5e20', fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' }}>BIMBINGAN PTN</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>Bimbingan Belajar Persiapan Masuk PTN diadakan untuk membantu siswa meraih kampus negeri impian melalui latihan soal intensif (SNBT/SNBP).</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        {/* =========================================
            SECTION 2: KURIKULUM TERPADU (PEMINATAN)
        ========================================= */}
        <section style={{ padding: '80px 5%', background: '#1b5e20', color: 'white' }}>
            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px', marginBottom: '10px' }}>KURIKULUM TERPADU</h2>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Pilihan terpadu yang sesuai dengan minat dan bakat siswa untuk persiapan menuju jenjang perguruan tinggi.</p>
                </div>
            </ScrollReveal>

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                
                {/* PEMINATAN MIPA */}
                <ScrollReveal>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px 30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', height: '100%', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                        <div style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 5px 0' }}>PEMINATAN MIPA</h3>
                        <span style={{ color: '#a5d6a7', fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '20px' }}>Matematika & Ilmu Pengetahuan Alam</span>
                        <p style={{ lineHeight: '1.8', fontSize: '1rem', opacity: 0.9, textAlign: 'justify' }}>Jurusan IPA dirancang khusus bagi siswa yang memiliki ketertarikan kuat terhadap sains, observasi alam, perhitungan matematis, dan logika eksakta.</p>
                    </div>
                </ScrollReveal>

                {/* PEMINATAN IPS */}
                <ScrollReveal>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px 30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', height: '100%', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                        <div style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 5px 0' }}>PEMINATAN IPS</h3>
                        <span style={{ color: '#a5d6a7', fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '20px' }}>Ilmu Pengetahuan Sosial</span>
                        <p style={{ lineHeight: '1.8', fontSize: '1rem', opacity: 0.9, textAlign: 'justify' }}>Jurusan IPS sangat ideal bagi siswa yang peka terhadap dinamika masyarakat, sejarah, sistem perekonomian, tata negara, dan interaksi sosial.</p>
                    </div>
                </ScrollReveal>

                {/* PEMINATAN AGAMA */}
                <ScrollReveal>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '40px 30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', height: '100%', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                        <div style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-8.1c-.5 4.1-2 6.5-4 8.1-2 1.6-3 3.5-3 5.5a7 7 0 0 0 7 7z"></path></svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 5px 0' }}>PEMINATAN AGAMA</h3>
                        <span style={{ color: '#a5d6a7', fontSize: '0.9rem', fontWeight: 'bold', display: 'block', marginBottom: '20px' }}>Ilmu Agama Islam (MAK)</span>
                        <p style={{ lineHeight: '1.8', fontSize: '1rem', opacity: 0.9, textAlign: 'justify' }}>Sebagai nilai tambah dan identitas utama sebuah madrasah, jurusan Keagamaan berfokus pada pendalaman Fiqih, Tafsir, Ilmu Hadis, dan Bahasa Arab.</p>
                    </div>
                </ScrollReveal>

            </div>
        </section>

        {/* =========================================
            SECTION 3: KURIKULUM PRAKTIKUM (KETERAMPILAN)
        ========================================= */}
        <section style={{ padding: '100px 5%' }}>
            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ color: '#1b5e20', fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px', marginBottom: '10px' }}>KURIKULUM PRAKTIKUM</h2>
                    <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Pilihan terpadu yang disesuaikan dengan prospek kerja industri dan minat bakat siswa di bidang teknologi terapan.</p>
                </div>
            </ScrollReveal>

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                
                {/* PRAKTIKUM MULTIMEDIA */}
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '40px 30px', borderRadius: '20px', border: '2px solid #e0e0e0', height: '100%', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#1b5e20'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(27, 94, 32, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.boxShadow = 'none'; }}>
                        <div style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                        </div>
                        <h3 style={{ color: '#333', fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' }}>MULTIMEDIA</h3>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem', textAlign: 'justify' }}>Kelas ini adalah wadah yang ideal bagi eksplorasi di ranah audio-visual dan produksi konten. Siswa akan belajar videografi, editing, animasi dasar, hingga broadcasting.</p>
                    </div>
                </ScrollReveal>

                {/* PRAKTIKUM DESAIN GRAFIS */}
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '40px 30px', borderRadius: '20px', border: '2px solid #e0e0e0', height: '100%', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#1b5e20'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(27, 94, 32, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.boxShadow = 'none'; }}>
                        <div style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                        </div>
                        <h3 style={{ color: '#333', fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' }}>DESAIN GRAFIS</h3>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem', textAlign: 'justify' }}>Desain grafis di MAN 1 Kota Madiun merupakan bidang studi yang berfokus pada penggabungan elemen seni rupa murni dengan teknologi digital untuk komunikasi visual yang efektif.</p>
                    </div>
                </ScrollReveal>

                {/* PRAKTIKUM TKJ */}
                <ScrollReveal>
                    <div style={{ background: 'white', padding: '40px 30px', borderRadius: '20px', border: '2px solid #e0e0e0', height: '100%', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = '#1b5e20'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(27, 94, 32, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.boxShadow = 'none'; }}>
                        <div style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h3 style={{ color: '#333', fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' }}>TEKNIK KOMPUTER JARINGAN (TKJ)</h3>
                        <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1rem', textAlign: 'justify' }}>Jika Multimedia dan Desain Grafis berfokus pada sisi "wajah" dari teknologi, TKJ berfokus pada "tulang punggung". Siswa diajarkan perakitan PC, instalasi OS, hingga topologi jaringan LAN/WAN.</p>
                    </div>
                </ScrollReveal>

            </div>
        </section>

    </main>
  );
}