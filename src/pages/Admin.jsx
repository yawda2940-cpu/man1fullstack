import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, deleteDoc, doc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { db, auth } from '../firebase';

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [activeTab, setActiveTab] = useState('berita'); 
    const [userProfile, setUserProfile] = useState(null);

    // State Berita
    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');
    const [status, setStatus] = useState('');
    const [listPengumuman, setListPengumuman] = useState([]);

    // State Feedback (Aduan)
    const [listFeedback, setListFeedback] = useState([]);
    const [loadingFeedback, setLoadingFeedback] = useState(false);

    // State Izin Penelitian
    const [listPenelitian, setListPenelitian] = useState([]);
    const [loadingPenelitian, setLoadingPenelitian] = useState(false);

    const EMAIL_ADMIN = "yawda2940@gmail.com";

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.email === EMAIL_ADMIN) {
                setIsLoggedIn(true);
                setUserProfile(user);
                fetchBerita();
                fetchFeedback();
                fetchPenelitian(); // Panggil data penelitian
            } else if (user && user.email !== EMAIL_ADMIN) {
                signOut(auth);
                setLoginError('❌ Akses Ditolak: Kredensial tidak valid.');
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchBerita = () => {
        const q = query(collection(db, "pengumuman"), orderBy("tanggal", "desc"));
        onSnapshot(q, (snapshot) => {
            setListPengumuman(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    };

    const fetchFeedback = () => {
        setLoadingFeedback(true);
        const q = query(collection(db, "kritik_saran"), orderBy("tanggal", "desc"));
        onSnapshot(q, (snapshot) => {
            setListFeedback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoadingFeedback(false);
        });
    };

    const fetchPenelitian = () => {
        setLoadingPenelitian(true);
        const q = query(collection(db, "izin_penelitian"), orderBy("tanggal", "desc"));
        onSnapshot(q, (snapshot) => {
            setListPenelitian(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoadingPenelitian(false);
        });
    };

    const handleLoginGoogle = async () => {
        setLoginError('');
        const provider = new GoogleAuthProvider();
        try { 
            await signInWithPopup(auth, provider); 
        } catch (error) { 
            setLoginError('Gagal otentikasi. Periksa koneksi Anda.');
        }
    };

    const handleSimpanBerita = async (e) => {
        e.preventDefault();
        setStatus('Memproses...');
        try {
            await addDoc(collection(db, "pengumuman"), { judul, isi, tanggal: serverTimestamp() });
            setStatus('✅ Berhasil dipublikasikan');
            setJudul(''); setIsi('');
            setTimeout(() => setStatus(''), 3000);
        } catch (error) { 
            setStatus('❌ Gagal menyimpan data'); 
        }
    };

    const handleDelete = async (coll, id) => {
        if (window.confirm("Tindakan ini permanen. Lanjutkan penghapusan?")) {
            await deleteDoc(doc(db, coll, id));
        }
    };

    // ==========================================
    // UI: HALAMAN LOGIN
    // ==========================================
    if (!isLoggedIn) {
        return (
            <main style={{ padding: '20px', background: '#f4f7f6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Inter", sans-serif' }}>
                <div style={{ background: '#ffffff', padding: '50px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', width: '100%', maxWidth: '420px', textAlign: 'center' }}>
                    <img src="/logo.svg" alt="Logo" style={{ width: '80px', marginBottom: '20px' }} />
                    <h2 style={{ color: '#1b5e20', fontWeight: '800', fontSize: '1.6rem', marginBottom: '8px' }}>Admin Portal</h2>
                    <p style={{ color: '#666', marginBottom: '40px', fontSize: '0.95rem' }}>MAN 1 Kota Madiun</p>
                    
                    <button onClick={handleLoginGoogle} style={{ background: '#ffffff', color: '#444', padding: '14px 24px', border: '1px solid #ccc', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', transition: 'all 0.2s', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" style={{ width: '20px' }}/>
                        Lanjutkan dengan Google
                    </button>
                    {loginError && <div style={{ marginTop: '20px', padding: '10px', background: '#ffebee', borderRadius: '8px', color: '#c62828', fontSize: '0.9rem', fontWeight: 'bold' }}>{loginError}</div>}
                </div>
            </main>
        );
    }

    // ==========================================
    // UI: DASHBOARD UTAMA
    // ==========================================
    return (
        <div style={{ display: 'flex', background: '#ffffff', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
            
            {/* SIDEBAR */}
            <aside style={{ width: '220px', background: '#17501b', color: '#ffffff', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
                <div style={{ padding: '150px 20px', textAlign: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '900', margin: '0 0 10px 0', lineHeight: '1.4', letterSpacing: '1px' }}>MAN 1<br/>KOTA<br/>MADIUN</h3>
                    <span style={{ fontSize: '0.65rem', color: '#a5d6a7', letterSpacing: '1px', fontWeight: 'bold' }}>ADMIN CONTROL</span>
                </div>
                
                <nav style={{ flexGrow: 1, padding: '0 15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div onClick={() => setActiveTab('berita')} style={{ background: activeTab === 'berita' ? 'rgba(255,255,255,0.15)' : 'transparent', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem', transition: '0.2s' }}>
                        Dashboard
                    </div>
                    
                    <div onClick={() => setActiveTab('feedback')} style={{ background: activeTab === 'feedback' ? 'rgba(255,255,255,0.15)' : 'transparent', color: activeTab === 'feedback' ? '#ffffff' : '#a5d6a7', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '0.95rem', transition: '0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Layanan Masuk</span>
                        {listFeedback.length > 0 && <span style={{ background: '#d32f2f', color: 'white', padding: '2px 8px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' }}>{listFeedback.length}</span>}
                    </div>

                    {/* MENU IZIN PENELITIAN */}
                    <div onClick={() => setActiveTab('penelitian')} style={{ background: activeTab === 'penelitian' ? 'rgba(255,255,255,0.15)' : 'transparent', color: activeTab === 'penelitian' ? '#ffffff' : '#a5d6a7', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '0.95rem', transition: '0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Izin Penelitian</span>
                        {listPenelitian.length > 0 && <span style={{ background: '#f57c00', color: 'white', padding: '2px 8px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' }}>{listPenelitian.length}</span>}
                    </div>

                    <div style={{ padding: '12px 20px', color: '#a5d6a7', opacity: 0.7, fontSize: '0.95rem' }}>Statistik<br/><small>(Coming Soon)</small></div>
                </nav>

                <div style={{ padding: '20px 15px', marginBottom: '20px' }}>
                    <button onClick={() => signOut(auth)} style={{ width: '100%', background: 'transparent', color: '#ffffff', border: '1px solid #a5d6a7', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem', transition: '0.3s' }}>Keluar Sistem</button>
                </div>
            </aside>

            {/* AREA KANAN */}
            <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
                
                <header style={{ background: '#17501b', padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src="/logo.svg" alt="Logo" style={{ width: '55px', height: '55px', objectFit: 'contain', background: 'white', borderRadius: '50%', padding: '5px' }} />
                        <div>
                            {/* LOGIKA HEADER 3 CABANG */}
                            <h1 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: '800', margin: '0 0 5px 0' }}>
                                {activeTab === 'berita' ? 'Dashboard Publikasi' : activeTab === 'feedback' ? 'Pusat Layanan & Aduan' : 'Daftar Izin Penelitian'}
                            </h1>
                            <p style={{ color: '#c8e6c9', margin: 0, fontSize: '0.95rem' }}>Platform resmi pengelolaan informasi & pengumuman publik madrasah.</p>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#ffffff', padding: '8px 25px 8px 8px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#17501b', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '900', fontSize: '1.2rem' }}>
                            {userProfile?.displayName ? userProfile.displayName.charAt(0).toUpperCase() : 'A'}
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontWeight: '800', color: '#333', fontSize: '0.95rem' }}>{userProfile?.displayName || 'Admin'}</div>
                            <div style={{ fontSize: '0.75rem', color: '#888', fontWeight: '600' }}>Admin System</div>
                        </div>
                    </div>
                </header>

                <div style={{ background: '#fafafa', flexGrow: 1, padding: '40px', overflowY: 'auto' }}>
                    
                    {/* LOGIKA KONTEN 3 CABANG */}
                    {activeTab === 'berita' ? (
                        // ==========================================
                        // TAB 1: BERITA
                        // ==========================================
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                            <section>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '-10px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>✍️</span>
                                    <h3 style={{ margin: 40, color: '#111', fontSize: '1.2rem', fontWeight: '800' }}>Tulis Pengumuman Baru</h3>
                                </div>
                                <form onSubmit={handleSimpanBerita} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: '#555', letterSpacing: '1px' }}>JUDUL PENGUMUMAN</label>
                                        <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Masukkan judul utama..." required style={{ width: '100%', padding: '16px', border: '1px solid #eaeaea', borderRadius: '12px', background: '#f5f7f9', fontSize: '1rem', outline: 'none', color: '#333' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.85rem', fontWeight: '700', color: '#555', letterSpacing: '1px' }}>ISI KONTEN (DETAIL)</label>
                                        <textarea value={isi} onChange={(e) => setIsi(e.target.value)} placeholder="Tuliskan deskripsi lengkap atau informasi mendetail di sini..." required rows="8" style={{ width: '100%', padding: '16px', border: '1px solid #eaeaea', borderRadius: '12px', background: '#f5f7f9', fontSize: '0.95rem', outline: 'none', resize: 'none', color: '#333', lineHeight: '1.6' }}></textarea>
                                    </div>
                                    <button type="submit" style={{ background: '#17501b', color: '#ffffff', padding: '16px', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer', fontSize: '1rem', marginTop: '10px', boxShadow: '0 4px 15px rgba(23, 80, 27, 0.2)' }}>🚀 Publikasikan ke Website</button>
                                </form>
                                {status && <div style={{ marginTop: '20px', padding: '15px', borderRadius: '10px', textAlign: 'center', fontSize: '0.95rem', fontWeight: 'bold', background: status.includes('✅') ? '#e8f5e9' : '#ffebee', color: status.includes('✅') ? '#2e7d32' : '#c62828' }}>{status}</div>}
                            </section>
                            <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {listPengumuman.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>Belum ada pengumuman.</div>}
                                {listPengumuman.map(item => (
                                    <div key={item.id} style={{ background: '#ffffff', padding: '25px', borderRadius: '16px', border: '1px solid #f0f0f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                                        <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#17501b', fontWeight: '800' }}>{item.judul}</h4>
                                        <p style={{ margin: '0 0 20px 0', fontSize: '0.95rem', color: '#666', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.isi}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600' }}>🕒 {item.tanggal?.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                            <button onClick={() => handleDelete('pengumuman', item.id)} style={{ background: '#ffffff', color: '#d32f2f', border: '1px solid #ffcdd2', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '700' }}>Tarik Berita</button>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    ) : activeTab === 'feedback' ? (
                        // ==========================================
                        // TAB 2: PENGADUAN / FEEDBACK
                        // ==========================================
                        <section style={{ maxWidth: '1200px', margin: '0 auto', background: '#ffffff', borderRadius: '20px', border: '1px solid #eaeaea', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                            <div style={{ padding: '30px', borderBottom: '1px solid #eaeaea', background: '#fafbfc' }}>
                                <h3 style={{ margin: 0, color: '#111', fontSize: '1.3rem', fontWeight: '800' }}>Daftar Tiket Aduan Masuk</h3>
                            </div>
                            {loadingFeedback ? <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>Memuat data layanan...</div> : (
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '2px solid #eaeaea' }}>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>TANGGAL MASUK</th>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>DATA PENGIRIM</th>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>DETAIL PESAN & KELUHAN</th>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>AKSI</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listFeedback.length === 0 && <tr><td colSpan="4" style={{ padding: '50px', textAlign: 'center', color: '#999', fontSize: '1rem' }}>Belum ada keluhan yang masuk.</td></tr>}
                                            {listFeedback.map((fb) => (
                                                <tr key={fb.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                    <td style={{ padding: '25px 30px', fontSize: '0.9rem', color: '#666', verticalAlign: 'top', fontWeight: '600' }}>{fb.tanggal?.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                                    <td style={{ padding: '25px 30px', verticalAlign: 'top' }}>
                                                        <div style={{ fontWeight: '800', color: '#222', fontSize: '1rem', marginBottom: '5px' }}>{fb.nama}</div>
                                                        <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '3px' }}>📞 {fb.telepon}</div>
                                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>✉️ {fb.email}</div>
                                                    </td>
                                                    <td style={{ padding: '25px 30px', maxWidth: '350px', verticalAlign: 'top' }}>
                                                        <div style={{ display: 'inline-block', background: '#e8f5e9', color: '#2e7d32', padding: '5px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '800', marginBottom: '10px' }}>Subjek: {fb.subjek}</div>
                                                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#444', lineHeight: '1.6' }}>{fb.pesan}</p>
                                                    </td>
                                                    <td style={{ padding: '25px 30px', verticalAlign: 'top' }}>
                                                        <button onClick={() => handleDelete('kritik_saran', fb.id)} style={{ background: '#17501b', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>Selesaikan</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    ) : (
                        // ==========================================
                        // TAB 3: IZIN PENELITIAN
                        // ==========================================
                        <section style={{ maxWidth: '1200px', margin: '0 auto', background: '#ffffff', borderRadius: '20px', border: '1px solid #eaeaea', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                            <div style={{ padding: '30px', borderBottom: '1px solid #eaeaea', background: '#fafbfc' }}>
                                <h3 style={{ margin: 0, color: '#111', fontSize: '1.3rem', fontWeight: '800' }}>Daftar Pengajuan Izin Penelitian</h3>
                            </div>
                            {loadingPenelitian ? <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>Memuat data penelitian...</div> : (
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '2px solid #eaeaea' }}>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>TANGGAL MASUK</th>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>IDENTITAS PENELITI</th>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>BERKAS & DESKRIPSI</th>
                                                <th style={{ padding: '20px 30px', color: '#777', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1px' }}>AKSI</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listPenelitian.length === 0 && <tr><td colSpan="4" style={{ padding: '50px', textAlign: 'center', color: '#999', fontSize: '1rem' }}>Belum ada pengajuan izin penelitian yang masuk.</td></tr>}
                                            {listPenelitian.map((pen) => (
                                                <tr key={pen.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                    <td style={{ padding: '25px 30px', fontSize: '0.9rem', color: '#666', verticalAlign: 'top', fontWeight: '600' }}>{pen.tanggal?.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                                    <td style={{ padding: '25px 30px', verticalAlign: 'top' }}>
                                                        <div style={{ fontWeight: '800', color: '#222', fontSize: '1rem', marginBottom: '5px' }}>{pen.nama}</div>
                                                        <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '3px' }}>🏫 {pen.instansi}</div>
                                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>📞 {pen.telepon}</div>
                                                    </td>
                                                    <td style={{ padding: '25px 30px', maxWidth: '350px', verticalAlign: 'top' }}>
                                                        <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: '#444', lineHeight: '1.6' }}>{pen.deskripsi}</p>
                                                        <a href={pen.link_dokumen} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#e3f2fd', color: '#1565c0', padding: '8px 15px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '800', textDecoration: 'none', border: '1px solid #bbdefb' }}>🔗 Buka Dokumen Drive</a>
                                                    </td>
                                                    <td style={{ padding: '25px 30px', verticalAlign: 'top' }}>
                                                        <button onClick={() => handleDelete('izin_penelitian', pen.id)} style={{ background: '#17501b', color: '#ffffff', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>Tandai Selesai</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}