import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';
import ScrollReveal from '../components/ScrollReveal';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

// --- KOMPONEN KECIL UNTUK ANGKA BERGERAK ---
const StatItem = ({ target, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000; // 2 detik
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <div ref={ref} style={{ textAlign: 'center', flex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1b5e20', margin: 0 }}>{count}{suffix}</h2>
            <p style={{ color: '#666', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>{label}</p>
        </div>
    );
};

export default function Home() {
    const scrollRef = useRef(null);
    const isMobile = useIsMobile();
    const [kabarMadrasah, setKabarMadrasah] = useState([]);

    const geser = (arah) => {
        if (scrollRef.current) {
            const jarakGeser = 380;
            scrollRef.current.scrollBy({
                left: arah === 'kiri' ? -jarakGeser : jarakGeser,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const q = query(collection(db, "pengumuman"), orderBy("tanggal", "desc"), limit(9));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setKabarMadrasah(data);
        });
        return () => unsubscribe();
    }, []);

    const formatTanggal = (timestamp) => {
        if (!timestamp) return 'Hari ini';
        const date = timestamp.toDate();
        return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    return (
        <main>
            {/* =========================================================
                HOOK PERTAMA: BENTO GRID + HERO BACKGROUND
            ========================================================= */}
            {/* 1. Tambahkan display: 'block' dan width: '100%' untuk melumpuhkan Flexbox bawaan .hero */}
            <section className="hero" style={{ padding: '160px 5% 80px 5%', position: 'relative', display: 'block', width: '100%' }}>
    
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 0 }}></div>
    
                    {/* 2. Tambahkan width: '100%' agar wadah ini membentang penuh dari ujung ke ujung */}
                    <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h1 style={{ color: '#ffffff', fontWeight: '900', fontSize: isMobile ? '2rem' : '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                            MADRASAHNYA PARA JUARA
                        </h1>
                        <p style={{ color: '#e0e0e0', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Mencetak generasi Islami yang unggul dalam teknologi, kompetitif dalam prestasi, dan kokoh dalam iman.
                        </p>
                    </div>

                    {/* STRUKTUR BENTO GRID */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
                        gridAutoRows: '200px', 
                        gap: '20px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* ITEM 1: PROGRAM SKS 2 TAHUN (DENGAN FIX BACKGROUND) */}
                        <div style={{ 
                            gridColumn: isMobile ? 'span 1' : 'span 2', 
                            gridRow: isMobile ? 'span 1' : 'span 2', 
                            // Tambahkan backgroundPosition & backgroundRepeat agar menyatu sempurna
                            background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("/gedung.png")', 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '20px', 
                            padding: '30px', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-end', 
                            color: '#fff',
                            border: '1px solid rgba(255,255,255,0.1)' // Tambahkan border tipis agar terlihat premium
                        }}>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Program SKS 2 Tahun</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Lulus lebih cepat dengan kurikulum akselerasi yang teruji.</p>
                        </div>

                        <div style={{ background: '#e8f5e9', borderRadius: '20px', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h4 style={{ color: '#2e7d32', margin: '0 0 10px 0' }}>Tahfidz Al-Qur'an</h4>
                            <p style={{ fontSize: '0.8rem', color: '#555' }}>Program menghafal dengan metode murajaah intensif.</p>
                        </div>

                        <div style={{ background: '#1b5e20', borderRadius: '20px', padding: '25px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h4 style={{ margin: '0 0 10px 0' }}>Sukses PTN</h4>
                            <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>85% lulusan diterima di Perguruan Tinggi Negeri favorit.</p>
                        </div>

                        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', background: '#388e3c', borderRadius: '20px', padding: '25px', color: '#fff', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ fontSize: '2rem' }}>💻</div>
                            <div>
                                <h4 style={{ margin: 0 }}>Pusat TIK & Multimedia</h4>
                                <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Fasilitas lab komputer tercanggih di Kota Madiun.</p>
                            </div>
                        </div>
                    </div>
                </div> {/* <--- INI PENUTUP DIV YANG TADI HILANG */}
            </section> {/* <--- INI PENUTUP SECTION YANG TADI HILANG */}

            {/* =========================================================
                HOOK KEDUA: STATISTIK ANIMASI
            ========================================================= */}
            <section style={{ padding: '40px 5%', background: '#f9f9f9', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '30px' }}>
                    <StatItem target={1000} label="Siswa Aktif" suffix="+" />
                    <StatItem target={85} label="Lulus PTN/PTKIN" suffix="%" />
                    <StatItem target={50} label="Prestasi Nasional" suffix="+" />
                    <StatItem target={100} label="Guru Profesional" suffix="%" />
                </div>
            </section>

            {/* BAGIAN KEUNGGULAN MADRASAH */}
            <section className="khusus-keunggulan">
                <div className="judul-keunggulan">
                    <h2>KEUNGGULAN MADRASAH</h2>
                    <p>Mengapa memilih MAN 1 Kota Madiun</p>
                </div>
                
                <div className="wadah-card-3" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px' }}>
                    <ScrollReveal>
                        <div className="card-hijau-muda">
                            <img src="/icon-gear.svg" alt="Icon" width="50" height="50" />
                            <h3>KELAS KETERAMPILAN</h3>
                            <p>Pembelajaran praktis yang siap kerja dan berwirausaha.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="card-hijau-muda">
                            <img src="/icon-person.svg" alt="Icon" width="50" height="50" />
                            <h3>KELAS KEDINASAN</h3>
                            <p>Persiapan intensif masuk IPDN, STAN, dan akademi militer.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="card-hijau-muda">
                            <img src="/icon-building.svg" alt="Icon" width="50" height="50" />
                            <h3>BIMBINGAN PTN</h3>
                            <p>Pendampingan khusus UTBK dan seleksi mandiri PTN.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* BAGIAN KABAR MADRASAH */}
            <section className="khusus-kabar" style={{ position: 'relative' }}>
                <div className="judul-kabar">
                    <h2>KABAR MADRASAH</h2>
                    <p>Berita terbaru MAN 1 Kota Madiun</p>
                </div>
                <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 50px' }}>
                    <button onClick={() => geser('kiri')} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: '#1b5e20', color: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        &#10094;
                    </button>
                    <div ref={scrollRef} className="wadah-berita-3" style={{ display: 'flex', overflowX: 'auto', gap: '30px', paddingBottom: '20px', scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <style>{`.wadah-berita-3::-webkit-scrollbar { display: none; }`}</style>
                        {kabarMadrasah.map((kabar) => (
                            <div key={kabar.id} style={{ flex: '0 0 350px' }}> 
                                <ScrollReveal>
                                    <div className="card-polaroid">
                                        <img src="/berita1.jpg" alt={kabar.judul} width="350" height="200" style={{ objectFit: 'cover' }} />
                                        <div className="konten-berita">
                                            <small>KABAR MADRASAH</small>
                                            <h4>{kabar.judul}</h4>
                                            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{kabar.isi}</p>
                                            <div className="meta-berita">
                                                <span className="tanggal auto-tanggal">{formatTanggal(kabar.tanggal)}</span>
                                                <a href="https://www.instagram.com/man1kotamadiun" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                    {!isMobile && (
                        <button onClick={() => geser('kanan')} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: '#1b5e20', color: 'white', border: 'none', borderRadius: '50%', width: '45px', height: '45px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            &#10095;
                        </button>
                    )}
                </div>
            </section>
        </main>
    );
}