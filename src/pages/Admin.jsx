import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { db, auth } from '../firebase'; 

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');

    const [judul, setJudul] = useState('');
    const [isi, setIsi] = useState('');
    const [status, setStatus] = useState('');

    // EMAIL MASTER ADMIN (Hanya email ini yang boleh masuk)
    const EMAIL_ADMIN = "yawda2940@gmail.com"; 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Cek apakah ada user login DAN apakah emailnya cocok
            if (user && user.email === EMAIL_ADMIN) {
                setIsLoggedIn(true);
            } else if (user && user.email !== EMAIL_ADMIN) {
                // Jika yang login BUKAN admin, tendang keluar!
                signOut(auth);
                setLoginError('❌ Akses Ditolak: Anda bukan Admin!');
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    // Fungsi Login dengan Google
    const handleLoginGoogle = async () => {
        setLoginError('');
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);;
        } catch (error) {
            setLoginError('❌ Gagal login dengan Google.');
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    const handleSimpan = async (e) => {
        e.preventDefault();
        setStatus('Mengirim data...');
        try {
            await addDoc(collection(db, "pengumuman"), {
                judul: judul,
                isi: isi,
                tanggal: serverTimestamp()
            });
            setStatus('✅ Berhasil disimpan!');
            setJudul('');
            setIsi('');
        } catch (error) {
            setStatus('❌ Gagal menyiman data.');
        }
    };

    // TAMPILAN JIKA BELUM LOGIN
    if (!isLoggedIn) {
        return (
            <main style={{ padding: '150px 5% 100px 5%', background: '#f4f6f8', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                    <h2 style={{ color: '#1b5e20', marginBottom: '10px' }}>Login Admin</h2>
                    <p style={{ color: '#666', marginBottom: '30px' }}>Masuk dengan akun Google yang terdaftar.</p>
                    
                    <button 
                        onClick={handleLoginGoogle} 
                        style={{ background: '#4285F4', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                    >
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: '20px', background: 'white', borderRadius: '50%', padding: '2px' }}/>
                        Lanjutkan dengan Google
                    </button>

                    {loginError && <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>{loginError}</p>}
                </div>
            </main>
        );
    }

    // TAMPILAN JIKA SUDAH LOGIN
    return (
        <main style={{ padding: '150px 5% 100px 5%', background: '#f4f6f8', minHeight: '100vh' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h2 style={{ color: '#1b5e20', margin: 0 }}>Dashboard Admin</h2>
                    <button onClick={handleLogout} style={{ background: '#d32f2f', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
                </div>
                
                <form onSubmit={handleSimpan} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Judul Pengumuman" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    <textarea value={isi} onChange={(e) => setIsi(e.target.value)} placeholder="Isi Pengumuman" required rows="5" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
                    <button type="submit" style={{ background: '#1b5e20', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>Simpan Berita</button>
                </form>
                {status && <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold', color: status.includes('❌') ? 'red' : 'green' }}>{status}</p>}
            </div>
        </main>
    );
}