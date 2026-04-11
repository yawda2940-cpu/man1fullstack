import React from 'react';

export default function Ekstrakurikuler() {
  return (
    <main>
        <section style={{ 
            background: 'linear-gradient(135deg, #1a5532 0%, #348f50 100%)', 
            padding: '120px 5% 100px 5%' 
        }}>
            <div className="judul-section text-center">
                {/* Warna teks diubah menjadi putih agar kontras dengan background hijau */}
                <h2 style={{ color: 'white', marginBottom: '15px' }}>EKSTRAKURIKULER MADRASAH</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto 50px auto', color: '#e0e0e0', lineHeight: '1.6' }}>
                    Kami memfasilitasi pengembangan minat, bakat, dan potensi kepemimpinan peserta didik melalui berbagai program ekstrakurikuler yang dibina oleh tenaga profesional.
                </p>
            </div>
            
            {/* Wadah Utama Daftar Ekstrakurikuler (Biarkan kode ke bawahnya tetap sama) */}
            <div className="ekskul-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {/* ... (kode kartu-kartu ekskul Anda di sini) ... */}
                
                {/* 1. Pramuka */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    {/* Judul di Tengah Atas setiap item */}
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        PRAMUKA (Gugus Depan MAN 1 Kota Madiun)
                    </h3>
                    
                    {/* Konten Dua Kolom: Kiri Gambar, Kanan Teks */}
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}> {/* Kolom Gambar */}
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Pramuka" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}> {/* Kolom Teks Deskripsi */}
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Sebagai ekstrakurikuler wajib, Gerakan Pramuka di MAN 1 Kota Madiun berfokus pada pembentukan karakter Pancasila yang mandiri, disiplin, dan berjiwa kepemimpinan tinggi. Melalui sistem beregu, peserta didik dilatih keterampilan kepanduan (*scouting skills*), ketangkasan alam terbuka, survive, dan pengabdian masyarakat untuk mencetak kader bangsa yang tangguh dan peduli sesama.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Paskibraka */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        PASKIBRAKA (Pasukan Pengibar Bendera Pusaka)
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Paskibraka" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Ekstrakurikuler Paskibraka merupakan wadah utama penanaman nilai-nilai nasionalisme, patriotisme, dan kedisiplinan fisik yang ketat. Selain melatih ketangkasan Peraturan Baris Berbaris (PBB) tingkat lanjut, program ini fokus membentuk mental baja, konsentrasi tinggi, dan kerja sama tim yang solid untuk persiapan tugas upacara besar maupun perlombaan tingkat regional dan nasional.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. PMR */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        PALANG MERAH REMAJA (PMR Wira)
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan PMR" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Mengusung prinsip kemanusiaan, PMR Wira MAN 1 Kota Madiun menanamkan jiwa kerelawanan dan kepedulian sosial tinggi. Peserta didik dibekali pengetahuan komprehensif mengenai Pertolongan Pertama Pada Kecelakaan (PPPK), perawatan keluarga, donor darah, dan edukasi kesehatan remaja, serta aktif dalam pelayanan kesehatan di lingkungan madrasah.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. Hadrah & Qiraah */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        HADRAH, QIRAAH & SENI BACA AL-QUR'AN
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Hadrah" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Menjadi ciri khas madrasah dalam melestarikan khazanah kesenian Islam. Ekstrakurikuler ini memadukan keindahan harmoni musik Hadrah/Banjari dengan pelatihan vokal selawat yang merdu. Selain itu, terdapat program khusus pendalaman Qira'ah dan Tilawah Al-Qur'an dengan nagham (lagu) yang indah untuk persiapan Musabaqah Tilawatil Qur'an (MTQ).
                            </p>
                        </div>
                    </div>
                </div>

                {/* 5. Tahfidz */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        TAHFIDZ AL-QUR'AN (Program Unggulan)
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Tahfidz" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Program unggulan keagamaan yang didesain khusus untuk mencetak generasi *Hafizh* dan *Hafizhah*. Melalui metode bimbingan intensif dan terjadwal, siswa dibantu untuk menyetorkan, memperbaiki tajwid, dan menjaga (*muraja'ah*) hafalan Al-Qur'an secara rutin berkelanjutan sesuai target yang ditetapkan, guna mencetak lulusan yang berakhlak Qur'ani.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. Rohis */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        ROHIS (Kerohanian Islam)
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Rohis" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Pusat kajian, syiar, dan pembinaan karakter islami di lingkungan madrasah. Rohis bertujuan membentuk akhlakul karimah, kepemimpinan islami, dan mempererat *ukhuwah islamiyah* antar warga madrasah melalui berbagai kegiatan inspiratif seperti Mentoring PAI, kajian tematik rutin, perayaan Hari Besar Islam (PHBI), dan aksi sosial kemanusiaan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 7. Jurnalistik */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        JURNALISTIK & MULTIMEDIA SISWA
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Jurnalistik" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Wadah pengembangan literasi media, seni fotografi/videografi, dan keterampilan tulis-menulis berita. Siswa dilatih berpikir kritis, objektif, dan kreatif dalam mengolah informasi, menyajikan berita acara madrasah, mengelola majalah dinding/digital, serta mengasah kemampuan *public speaking* sebagai *reporter* atau *broadcaster* masa depan.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 8. Pemrograman */}
                <div className="ekskul-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <h3 className="text-center" style={{ color: '#1b5e20', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        PEMROGRAMAN & TEKNOLOGI INFORMASI (TIK)
                    </h3>
                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <img 
                                src="/gedung.png" 
                                alt="Kegiatan Pemrograman" 
                                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} 
                            />
                        </div>
                        <div style={{ flex: '2 1 400px' }}>
                            <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                                Selaras dengan komitmen TIK madrasah (kerjasama ITS Surabaya), ekstrakurikuler ini membekali siswa dengan logika algoritma, prinsip *coding*, perancangan web/*software* sederhana, serta literasi teknologi masa depan. Tujuannya adalah mencetak generasi yang bukan hanya pengguna, tetapi juga pencipta solusi teknologi cerdas yang islami.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
  );
}