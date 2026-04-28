import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import ScrollReveal from '../components/ScrollReveal';

export default function Layanan() {
    // ==========================================
    // 1. STATE PENGADUAN
    // ==========================================
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [telepon, setTelepon] = useState('');
    const [subjek, setSubjek] = useState('');
    const [pesan, setPesan] = useState('');
    const [status, setStatus] = useState('');

    // ==========================================
    // 2. STATE PENELITIAN
    // ==========================================
    const [penNama, setPenNama] = useState('');
    const [penEmail, setPenEmail] = useState('');
    const [penTelepon, setPenTelepon] = useState('');
    const [penInstansi, setPenInstansi] = useState('');
    const [penDeskripsi, setPenDeskripsi] = useState('');
    const [penLink, setPenLink] = useState('');
    const [penStatus, setPenStatus] = useState('');

    // ==========================================
    // 3. FUNGSI KIRIM PENGADUAN
    // ==========================================
    const handleKirim = async (e) => {
        e.preventDefault();
        setStatus('Sedang mengirim...');

        try {
            await addDoc(collection(db, "kritik_saran"), {
                nama, email, telepon, subjek, pesan,
                tanggal: serverTimestamp()
            });
            setStatus('✅ Pesan berhasil dikirim!');
            setNama(''); setEmail(''); setTelepon(''); setSubjek(''); setPesan('');
        } catch (error) {
            console.error(error);
            setStatus('❌ Gagal mengirim pesan. Coba lagi nanti.');
        }
    }; // 

    // ==========================================
    // 4. FUNGSI KIRIM PENELITIAN
    // ==========================================
    const handleKirimPenelitian = async (e) => {
        e.preventDefault();
        setPenStatus('Sedang mengirim permohonan...');
        try {
            await addDoc(collection(db, "izin_penelitian"), {
                nama: penNama,
                email: penEmail,
                telepon: penTelepon,
                instansi: penInstansi,
                deskripsi: penDeskripsi,
                link_dokumen: penLink,
                tanggal: serverTimestamp()
            });
            setPenStatus('✅ Permohonan Izin Penelitian berhasil dikirim!');
            setPenNama(''); setPenEmail(''); setPenTelepon(''); setPenInstansi(''); setPenDeskripsi(''); setPenLink('');
        } catch (error) {
            setPenStatus('❌ Gagal mengirim. Pastikan koneksi internet stabil.');
        }
    }; 

    // ==========================================
    // 5. RENDER UI (JSX)
    // ==========================================
    return (
        <main>
            {/* SECTION: PENGADUAN */}
            <section className="layanan-section hero-pengaduan">
                <div className="layanan-judul text-center">
                    <h2>LAYANAN PENGADUAN ONLINE</h2>
                </div>
                <div className="layanan-container">
                    <div className="layanan-kiri">
                        <ScrollReveal>
                            <p>Terima kasih telah mengunjungi halaman Layanan Pengaduan kami.</p>
                            <p>Formulir ini disediakan untuk memfasilitasi masyarakat dalam menyampaikan keluhan, saran, atau masukan terkait pelayanan yang kami berikan.</p>
                            <p>Silakan isi data dan uraikan pengaduan Anda dengan jelas dan lengkap agar kami dapat menindaklanjutinya secara tepat dan cepat.</p>
                            <p>Setiap laporan akan kami rahasiakan dan digunakan semata-mata untuk kepentingan perbaikan pelayanan.</p>
                            <p>🕒 Waktu Tanggapan: Maksimal 3-5 hari kerja setelah pengaduan diterima.<br />
                        🙏 Terima kasih atas partisipasi Anda dalam membantu kami meningkatkan kualitas layanan.</p>
                        </ScrollReveal>
                    </div>
                    
                    <div className="layanan-kanan">
                        <ScrollReveal>
                            <div className="form-box">
                                <form onSubmit={handleKirim}>
                                    <div className="form-grid-2">
                                        <div className="input-group">
                                            <label>Nama Lengkap</label>
                                        <input type="text" className="input-field" value={nama} onChange={(e) => setNama(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <label>No Aktif</label>
                                        <input type="text" className="input-field" value={telepon} onChange={(e) => setTelepon(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Subjek</label>
                                        <input type="text" className="input-field" value={subjek} onChange={(e) => setSubjek(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="input-group full-width">
                                    <label>Ajukan Aduan</label>
                                    <textarea className="input-field textarea-field" value={pesan} onChange={(e) => setPesan(e.target.value)} required></textarea>
                                </div>
                                <div className="form-buttons">
                                    <button type="reset" className="btn-reset" onClick={() => setStatus('')}>Reset</button>
                                    <button type="submit" className="btn-kirim">Kirim Aduan</button>
                                </div>
                                {status && <p style={{ marginTop: '15px', color: status.includes('✅') ? 'green' : 'red', fontWeight: 'bold' }}>{status}</p>}
                            </form>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* SECTION: IZIN PENELITIAN */}
            <section className="layanan-section bg-hijau-standar">
                <div className="layanan-judul text-center">
                    <ScrollReveal>
                        <h2>PENGAJUAN IZIN PENELITIAN</h2>
                    </ScrollReveal>
                </div>
                <div className="layanan-container">
                    <div className="layanan-kiri">
                        <ScrollReveal>
                            <p>Selamat datang di halaman Pengajuan Izin Penelitian.</p>
                            <p>Halaman ini disediakan bagi mahasiswa yang ingin melakukan kegiatan penelitian di lingkungan MAN 1 Kota Madiun.</p>
                            <p>Melalui sistem ini, Anda dapat mengajukan permohonan izin penelitian secara online, mudah, dan cepat. Pastikan Anda telah menyiapkan dokumen pendukung yang diperlukan, seperti:</p>
                        
                        <ul className="layanan-list">
                            <li>Surat pengantar dari perguruan tinggi atau lembaga.</li>
                            <li>Identitas peneliti (Kartu Mahasiswa).</li>
                        </ul>
                        <p>Setiap permohonan akan diproses oleh petugas kami dalam waktu tertentu setelah semua berkas dinyatakan lengkap.</p>
                        <p>Kami berkomitmen untuk memberikan pelayanan yang transparan, efisien, dan profesional dalam mendukung kegiatan penelitian di berbagai bidang.</p>
                    </ScrollReveal>
                    </div>
                    
                    
                    <div className="layanan-kanan">
                        <ScrollReveal>
                            <div className="form-box">
                                <form onSubmit={handleKirimPenelitian}>
                                    <div className="form-grid-2">
                                        <div className="input-group">
                                            <label>Nama Lengkap Peneliti</label>
                                        <input type="text" className="input-field" value={penNama} onChange={(e) => setPenNama(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Email Aktif</label>
                                        <input type="email" className="input-field" value={penEmail} onChange={(e) => setPenEmail(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <label>No. WhatsApp Aktif</label>
                                        <input type="text" className="input-field" value={penTelepon} onChange={(e) => setPenTelepon(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <label>Asal Kampus / Instansi</label>
                                        <input type="text" className="input-field" placeholder="Contoh: UNIPMA Madiun" value={penInstansi} onChange={(e) => setPenInstansi(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="input-group full-width">
                                    <label>Deskripsi Singkat Penelitian</label>
                                    <textarea className="input-field textarea-field" placeholder="Jelaskan tujuan dan sasaran penelitian Anda..." value={penDeskripsi} onChange={(e) => setPenDeskripsi(e.target.value)} required></textarea>
                                </div>
                                
                                <div className="input-group full-width">
                                    <label>Link Berkas Pendukung (Google Drive)</label>
                                    <input type="url" className="input-field" placeholder="https://drive.google.com/..." value={penLink} onChange={(e) => setPenLink(e.target.value)} required />
                                    <small style={{ color: '#d32f2f', fontWeight: 'bold', display: 'block', marginTop: '5px' }}>
                                        *PENTING: Pastikan akses link Google Drive disetel ke "Siapa saja yang memiliki link".
                                    </small>
                                </div>
                                
                                <div className="form-buttons" style={{ marginTop: '20px' }}>
                                    <button type="reset" className="btn-reset" onClick={() => setPenStatus('')}>Reset</button>
                                    <button type="submit" className="btn-kirim">Ajukan Izin</button>
                                </div>
                                {penStatus && <p style={{ marginTop: '15px', fontWeight: 'bold', color: penStatus.includes('✅') ? '#1b5e20' : '#d32f2f' }}>{penStatus}</p>}
                            </form>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* SECTION: LEGALISIR ONLINE (Statis untuk sementara) */}
            <section className="layanan-section bg-hijau-gelap">
                <div className="layanan-judul text-center">
                    <ScrollReveal>
                    <h2>LAYANAN LEGALISIR ONLINE</h2>
                    </ScrollReveal>
                </div>
                <div className="layanan-container align-start">
                    <div className="layanan-kiri img-container">
                        <ScrollReveal>
                            <img src="/alurlegalisir.png" alt="Alur Layanan Legalisir Online" className="img-alur" />
                        </ScrollReveal>
                    </div>
                    
                    <div className="layanan-kanan">
                        <ScrollReveal>
                        <div className="form-box">
                            <form action="#">
                                <div className="form-grid-2">
                                    <div className="input-group"><label>Nama Lengkap</label><input type="text" className="input-field" /></div>
                                    <div className="input-group"><label>Email</label><input type="email" className="input-field" /></div>
                                    <div className="input-group"><label>No Aktif</label><input type="text" className="input-field" /></div>
                                    <div className="input-group"><label>Tahun Alumni</label><input type="text" className="input-field" /></div>
                                    <div className="input-group"><label>NISN</label><input type="text" className="input-field" /></div>
                                    <div className="input-group"><label>Jumlah Legalisir</label><input type="text" className="input-field" /></div>
                                    <div className="input-group"><label>No Legalisir</label><input type="text" className="input-field" /></div>
                                    <div className="input-group"><label>Alamat Lengkap</label><input type="text" className="input-field" /></div>
                                </div>
                                <div className="input-group full-width file-group mt-15">
                                    <label>File yang dilegalisir</label>
                                    <input type="file" className="input-field file-field" />
                                </div>
                                <div className="form-buttons">
                                    <button type="reset" className="btn-reset">Reset</button>
                                    <button type="submit" className="btn-kirim">Kirim</button>
                                </div>
                            </form>
                        </div>
                    </ScrollReveal>
                    </div>
                </div>
            </section>
        </main>
    );
} 