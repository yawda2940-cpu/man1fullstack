import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

// --- KOMPONEN KECIL: ACCORDION INTERAKTIF (Buka-Tutup) ---
const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
            <button 
                onClick={onClick}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: isOpen ? '#f1f8f5' : 'white', padding: '15px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: '0.3s', color: '#1b5e20', fontWeight: 'bold', fontSize: '1.1rem' }}
            >
                {title}
                <span style={{ fontSize: '1.5rem', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: '0.3s' }}>+</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '15px 20px', color: '#555', lineHeight: '1.7' }}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function PPDB() {
    // State untuk mengontrol Accordion mana yang terbuka
    const [openSyarat, setOpenSyarat] = useState(0);

    return (
        <main style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '100px' }}>
            
            {/* ==============================================
                1. HERO SECTION & CALL TO ACTION
            ============================================== */}
            <section style={{ 
                background: 'linear-gradient(rgba(27, 94, 32, 0.85), rgba(52, 143, 80, 0.85)), url("/gedung.png")', 
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
                padding: '180px 5% 100px 5%', textAlign: 'center', color: 'white' 
            }}>
                <ScrollReveal>
                    <span style={{ background: '#ffc107', color: '#1b5e20', padding: '8px 16px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>TAHUN AJARAN 2026/2027</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '20px 0', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>PENERIMAAN PESERTA DIDIK BARU</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px auto', opacity: 0.9 }}>
                        Bergabunglah bersama MAN 1 Kota Madiun. Kami memberikan kesempatan emas bagi generasi muda untuk meraih prestasi gemilang dengan akhlakul karimah. 
                        <strong> *TIDAK MEMBERLAKUKAN SISTEM ZONASI.</strong>
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#syarat" style={{ background: 'white', color: '#1b5e20', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>Cek Informasi Pendaftaran</a>
                        <a href="https://man1kotamadiun.sch.id/spmb/" target="_blank" rel="noopener noreferrer" style={{ border: '2px solid white', color: 'white', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>Daftar Online Sekarang &rarr;</a>
                    </div>
                </ScrollReveal>
            </section>

            {/* ==============================================
                2. JALUR PENDAFTARAN (KARTU INTERAKTIF)
            ============================================== */}
            <section id="informasi" style={{ padding: '80px 5%', maxWidth: '1200px', margin: '-50px auto 0 auto', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    
                    <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '5px solid #ffc107' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏆</div>
                        <h3 style={{ color: '#1b5e20', fontSize: '1.5rem', marginBottom: '15px' }}>Jalur Prestasi</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Khusus bagi siswa lulusan MTs/SMP yang memiliki prestasi akademik (Peringkat Kelas/Olimpiade) atau Non-Akademik (Olahraga/Seni) tingkat Kota/Provinsi/Nasional.</p>
                    </div>

                    <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '5px solid #348f50' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📚</div>
                        <h3 style={{ color: '#1b5e20', fontSize: '1.5rem', marginBottom: '15px' }}>Jalur Reguler</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Terbuka untuk seluruh siswa MTs/SMP di seluruh Indonesia melalui tes potensi akademik dan baca tulis Al-Qur'an. <b>(Bebas Zonasi)</b>.</p>
                    </div>

                    <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '5px solid #2196f3' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🕋</div>
                        <h3 style={{ color: '#1b5e20', fontSize: '1.5rem', marginBottom: '15px' }}>Jalur Boarding / Tahfidz</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Program asrama (Ma'had) khusus bagi siswa yang berminat pada pendalaman kitab kuning dan memiliki komitmen menghafal Al-Qur'an.</p>
                    </div>

                </div>
            </section>

            {/* ==============================================
                3. TIMELINE / ALUR WAKTU PENDAFTARAN
            ============================================== */}
            <section style={{ padding: '80px 5%', maxWidth: '1000px', margin: '0 auto' }}>
                <ScrollReveal>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{ color: '#1b5e20', fontWeight: '900', fontSize: '2.5rem' }}>TIMELINE PENDAFTARAN</h2>
                        <p style={{ color: '#666' }}>Catat tanggal penting agar tidak terlewat.</p>
                    </div>

                    <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px dashed #ccc', paddingBottom: '20px' }}>
                            <div style={{ background: '#1b5e20', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0, marginRight: '20px' }}>1</div>
                            <div>
                                <h4 style={{ color: '#333', fontSize: '1.2rem', margin: '0 0 5px 0' }}>Pendaftaran Online (Pembuatan Akun)</h4>
                                <p style={{ color: '#666', margin: 0 }}>Mei - Juni 2026 (Melalui Website SPMB)</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px dashed #ccc', paddingBottom: '20px' }}>
                            <div style={{ background: '#348f50', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0, marginRight: '20px' }}>2</div>
                            <div>
                                <h4 style={{ color: '#333', fontSize: '1.2rem', margin: '0 0 5px 0' }}>Penyerahan Berkas Fisik & Verifikasi</h4>
                                <p style={{ color: '#666', margin: 0 }}>Juni 2026 (Di Sekretariat PPDB MAN 1 Kota Madiun)</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', borderBottom: '1px dashed #ccc', paddingBottom: '20px' }}>
                            <div style={{ background: '#ffc107', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0, marginRight: '20px' }}>3</div>
                            <div>
                                <h4 style={{ color: '#333', fontSize: '1.2rem', margin: '0 0 5px 0' }}>Tes Seleksi (CBT & Wawancara)</h4>
                                <p style={{ color: '#666', margin: 0 }}>Juni 2026</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ background: '#2196f3', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0, marginRight: '20px' }}>4</div>
                            <div>
                                <h4 style={{ color: '#333', fontSize: '1.2rem', margin: '0 0 5px 0' }}>Pengumuman & Daftar Ulang</h4>
                                <p style={{ color: '#666', margin: 0 }}>Juli 2026</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* ==============================================
                4. PERSYARATAN (SISTEM ACCORDION INTERAKTIF)
            ============================================== */}
            <section id="syarat" style={{ padding: '40px 5%', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ color: '#1b5e20', fontWeight: '900', fontSize: '2.5rem' }}>SYARAT & KETENTUAN</h2>
                    <p style={{ color: '#666' }}>Klik pada menu di bawah ini untuk melihat detail persyaratan.</p>
                </div>

                <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <AccordionItem 
                        title="Syarat Umum Pendaftaran" 
                        isOpen={openSyarat === 0} 
                        onClick={() => setOpenSyarat(openSyarat === 0 ? -1 : 0)}
                    >
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Beragama Islam dan mampu membaca Al-Qur'an.</li>
                            <li>Tercatat sebagai peserta didik MTs/SMP kelas IX pada Tahun Ajaran 2025/2026.</li>
                            <li>Berusia maksimal 21 tahun pada bulan Juli 2026.</li>
                            <li>Mengisi formulir pendaftaran online secara lengkap dan benar.</li>
                        </ul>
                    </AccordionItem>

                    <AccordionItem 
                        title="Berkas yang Harus Disiapkan (Jalur Reguler)" 
                        isOpen={openSyarat === 1} 
                        onClick={() => setOpenSyarat(openSyarat === 1 ? -1 : 1)}
                    >
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Cetak Bukti Pendaftaran Online (2 Lembar).</li>
                            <li>Fotokopi Ijazah / Surat Keterangan Lulus (SKL) dilegalisir (2 Lembar).</li>
                            <li>Fotokopi Akte Kelahiran & Kartu Keluarga (KK) (2 Lembar).</li>
                            <li>Pas foto berwarna seragam MTs/SMP ukuran 3x4 (4 Lembar).</li>
                            <li>Semua berkas dimasukkan ke dalam Map (Warna disesuaikan saat pendaftaran).</li>
                        </ul>
                    </AccordionItem>

                    <AccordionItem 
                        title="Tambahan Berkas (Jalur Prestasi)" 
                        isOpen={openSyarat === 2} 
                        onClick={() => setOpenSyarat(openSyarat === 2 ? -1 : 2)}
                    >
                        <ul style={{ paddingLeft: '20px' }}>
                            <li>Seluruh berkas persyaratan umum dan reguler.</li>
                            <li>Fotokopi Raport Semester 1-5 yang dilegalisir (Bagi prestasi akademik).</li>
                            <li>Fotokopi Sertifikat/Piagam Kejuaraan minimal tingkat Kota/Kabupaten dilegalisir oleh pihak penyelenggara/sekolah asal (Bagi prestasi non-akademik).</li>
                        </ul>
                    </AccordionItem>
                </div>
            </section>

        </main>
    );
}