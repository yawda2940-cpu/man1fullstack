import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

// 1. Mengimpor alat Firebase
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';


export default function Home() {

    // 1. Remote Control untuk geser
    const scrollRef = useRef(null);

    // 2. Wadah untuk menyimpan data pengumuman
    const [kabarMadrasah, setKabarMadrasah] = useState([]);

    // 3. Rumus Geser Kanan-Kiri
    const geser = (arah) => {
        if (scrollRef.current) {
            const jarakGeser = 380; // Jarak per 1 kartu
            scrollRef.current.scrollBy({
                left: arah === 'kiri' ? -jarakGeser : jarakGeser,
                behavior: 'smooth'
            });
        }
    };

    // 4. Menarik data secara Real-time maks 9
    useEffect(() => {
        const q = query(collection(db, "pengumuman"), orderBy("tanggal", "desc"), limit(9));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setKabarMadrasah(data);
        });
        return () => unsubscribe();
    }, []);

    // 6. Rumus untuk mengubah waktu Firebase menjadi format Tanggal yang rapi (DD/MM/YYYY)
    const formatTanggal = (timestamp) => {
        if (!timestamp) return 'Hari ini'; // Jika baru di-save dan waktu belum sinkron
        const date = timestamp.toDate();
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };
    return (
        <main>
            <section className="hero">
            <div className="hero-image-wrapper">
                <img src="/kepsek.svg" alt="Bpk. Trisnoto S.PD., M.M." className="kepsek-img" />
                <div className="name-badge">
                    <strong>Trisnoto S.PD., M.M.</strong>
                </div>
            </div>
            
            <div className="hero-text">
                <h2>SAMBUTAN KEPALA MADRASAH</h2>
                <p className="arabic text-right">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
                <p>Saya kepala MAN 1 Kota Madiun,<br />mengucapkan selamat datang di Website kami MAN 1 Kota Madiun.</p>
                
                <p>Untuk segenap pimpinan, guru, karyawan dan siswa masyarakat guna dapat<br />mengakses seluruh informasi tentang segala profil, aktifitas/kegiatan serta fasilitas sekolah kami.</p>
                
                <p>Kami berharap Website ini dapat<br />dijadikan sebagai sarana interaksi yang positif baik antar warga madrasah maupun warga madrasah dengan masyarakat pada umumnya, sehingga informasi dapat terkomunikasikan dengan sebaik baiknya.</p>
                
                <p>Semoga Allah SWT memberikan kekuatan bagi kami untuk mencerdaskan anak-anak bangsa.</p>
                <p className="arabic text-right">وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
            </div>
        </section>

        <section className="khusus-keunggulan">
            <div className="judul-keunggulan">
                <h2>KEUNGGULAN MADRASAH</h2>
                <p>Mengapa memilih MAN 1 Kota Madiun</p>
            </div>
            
                    <div className="wadah-card-3">
            {/* BUNGKUS KARTU PERTAMA */}
            <ScrollReveal>
                <div className="card-hijau-muda">
                    <img src="/icon-gear.svg" alt="Icon" />
                    <h3>KELAS KETERAMPILAN</h3>
                    <p>Kelas Keterampilan adalah kelas yang menawarkan pembelajaran praktis...</p>
                </div>
            </ScrollReveal>
            
            {/* BUNGKUS KARTU KEDUA */}
            <ScrollReveal>
                <div className="card-hijau-muda">
                    <img src="/icon-person.svg" alt="Icon" />
                    <h3>KELAS KEDINASAN</h3>
                    <p>Kelas Persiapan Kedinasan merupakan program pembelajaran...</p>
                </div>
            </ScrollReveal>
            
            {/* BUNGKUS KARTU KETIGA */}
            <ScrollReveal>
                <div className="card-hijau-muda">
                    <img src="/icon-building.svg" alt="Icon" />
                    <h3>BIMBINGAN PTN</h3>
                    <p>Bimbingan Belajar Persiapan Masuk PTN diadakan untuk...</p>
                </div>
            </ScrollReveal>
        </div>

        </section>

        <section className="khusus-kabar" style={{ position: 'relative' }}>
            <div className="judul-kabar">
                <h2>KABAR MADRASAH</h2>
                <p>Berita terbaru MAN 1 Kota Madiun</p>
            </div>
            
            {/* WADAH BARU UNTUK MENGAPIT TOMBOL DAN KARTU */}
            <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 50px' }}>
                
                {/* Tombol Panah Kiri */}
                <button 
                    onClick={() => geser('kiri')}
                    style={{
                        position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                        background: '#1b5e20', color: 'white', border: 'none', borderRadius: '50%',
                        width: '45px', height: '45px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    &#10094; {/* Simbol panah kiri */}
                </button>

                {/* Wadah Berita (Tambahkan ref={scrollRef} di sini) */}
                <div 
                    ref={scrollRef} 
                    className="wadah-berita-3" 
                    style={{ 
                        display: 'flex', 
                        overflowX: 'auto', 
                        gap: '30px', 
                        paddingBottom: '20px',
                        scrollBehavior: 'smooth',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none', // Menyembunyikan scrollbar di Firefox
                        msOverflowStyle: 'none' // Menyembunyikan scrollbar di IE/Edge
                    }}
                >
                    {/* Trik menyembunyikan scrollbar di Chrome/Safari via inline style hack */}
                    <style>{`.wadah-berita-3::-webkit-scrollbar { display: none; }`}</style>

                    {kabarMadrasah.length === 0 && (
                        <p style={{ width: '100%', textAlign: 'center', color: '#666' }}>Belum ada kabar terbaru.</p>
                    )}

                    {kabarMadrasah.map((kabar) => (
                        <div key={kabar.id} style={{ flex: '0 0 350px' }}> 
                            <ScrollReveal>
                                <div className="card-polaroid">
                                    <img src="/berita1.jpg" alt={kabar.judul}/>
                                    <div className="konten-berita">
                                        <small>KABAR MADRASAH</small>
                                        <h4>{kabar.judul}</h4>
                                        <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {kabar.isi}
                                        </p>
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

                {/* Tombol Panah Kanan */}
                <button 
                    onClick={() => geser('kanan')}
                    style={{
                        position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                        background: '#1b5e20', color: 'white', border: 'none', borderRadius: '50%',
                        width: '45px', height: '45px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    &#10095; {/* Simbol panah kanan */}
                </button>

            </div>
        </section>
        </main>
    );
}