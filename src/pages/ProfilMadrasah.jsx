import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

// =========================================
// 1. DATA FASILITAS (DENGAN TAMBAHAN ARRAY GALERI)
// =========================================
const DATA_FASILITAS = [
    {
        id: 'multimedia',
        judul: 'LAB MULTIMEDIA',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        // Ini daftar gambar untuk slider, silakan ganti dengan foto asli nanti
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Laboratorium Multimedia tercanggih yang dilengkapi dengan puluhan PC spesifikasi tinggi (Core i7/Ryzen 7), koneksi internet fiber optic berkecepatan tinggi, dan perangkat audio-visual lengkap. Lab ini dirancang khusus untuk mendukung program PRODISTIK kerja sama dengan ITS Surabaya dan kegiatan desain interaktif siswa.'
    },
    {
        id: 'desaingrafis',
        judul: 'LAB DESAIN GRAFIS',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Ruang khusus untuk mengasah kreativitas visual siswa. Dilengkapi dengan perangkat Mac/PC khusus desain, drawing pen tablet, dan lisensi perangkat lunak standar industri (Adobe Creative Cloud). Tempat ini menjadi markas bagi siswa untuk belajar tipografi, branding, dan ilustrasi digital.'
    },
    {
        id: 'lapangan',
        judul: 'LAPANGAN',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Area terbuka yang sangat luas dan multifungsi. Digunakan sebagai pusat kegiatan upacara bendera, apel pagi, serta dilengkapi dengan fasilitas lapangan basket, voli, dan futsal berstandar nasional untuk mendukung kesehatan fisik dan prestasi olahraga siswa MAN 1 Kota Madiun.'
    },
    {
        id: 'kelas',
        judul: 'RUANGAN KELAS',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Setiap ruang kelas didesain untuk kenyamanan belajar maksimal. Dilengkapi dengan pendingin ruangan (AC), LCD Proyektor terintegrasi, papan tulis interaktif, pencahayaan alami yang baik, serta sirkulasi udara yang sehat. Menciptakan ekosistem belajar yang kondusif bagi siswa dan guru.'
    },
    {
        id: 'biologi',
        judul: 'LAB BIOLOGI',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Pusat observasi makhluk hidup dengan peralatan mikroskop binokuler terkini, spesimen awetan lengkap (tumbuhan dan hewan), model anatomi manusia berskala 1:1, serta reagen standar untuk mendukung praktikum bioteknologi dan kultur jaringan.'
    },
    {
        id: 'fisika',
        judul: 'LAB FISIKA',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Laboratorium eksakta yang memfasilitasi siswa untuk membuktikan teori mekanika, termodinamika, elektromagnetik, dan optik secara langsung. Dilengkapi dengan kit mekanika presisi tinggi, osiloskop, dan alat ukur digital berstandar SNI.'
    },
    {
        id: 'kimia',
        judul: 'LAB KIMIA',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Fasilitas praktikum dengan standar keamanan tinggi. Memiliki ruang asam (fume hood) khusus, shower keselamatan, lemari penyimpanan zat kimia tahan api, dan perlengkapan gelas borosilikat kualitas tinggi untuk memastikan eksperimen kimia siswa berjalan aman dan akurat.'
    },
    {
        id: 'perpustakaan',
        judul: 'PERPUSTAKAAN',
        icon: '/gedung.svg',
        gambarDetail: '/gedung.png', 
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png' , '/gedung.svg', '/gedung.svg'],
        deskripsi: 'Lebih dari sekadar ruang baca, perpustakaan MAN 1 Kota Madiun mengusung konsep hybrid. Menyediakan ribuan koleksi buku fisik ber-ISBN dan akses e-library ribuan jurnal digital. Dilengkapi dengan area diskusi kedap suara dan komputer anjungan untuk pencarian katalog mandiri.'
    }
];

// =========================================
// 2. KOMPONEN SLIDER OTOMATIS (KHUSUS GALERI)
// =========================================
const GaleriSlider = ({ daftarGambar }) => {
    const [indexAktif, setIndexAktif] = useState(0);

    // Efek Otomatis Geser (Auto-Play) setiap 3 detik
    useEffect(() => {
        if (!daftarGambar || daftarGambar.length <= 1) return; // Jangan bergeser jika gambar cuma 1
        
        const interval = setInterval(() => {
            setIndexAktif((prevIndex) => (prevIndex === daftarGambar.length - 1 ? 0 : prevIndex + 1));
        }, 3000); 

        return () => clearInterval(interval); // Bersihkan memori saat ditutup
    }, [daftarGambar]);

    return (
        <div style={{ width: '100%', height: '350px', background: '#e0e0e0', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
            {/* WADAH PENGGESER GAMBAR */}
            <div style={{ display: 'flex', width: '100%', height: '100%', transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', transform: `translateX(-${indexAktif * 100}%)` }}>
                {daftarGambar.map((gambar, idx) => (
                    <img key={idx} src={gambar} alt={`Galeri ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', flexShrink: 0 }} />
                ))}
            </div>

            {/* TITIK INDIKATOR (BULLETS) */}
            {daftarGambar.length > 1 && (
                <div style={{ position: 'absolute', bottom: '15px', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    {daftarGambar.map((_, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setIndexAktif(idx)}
                            style={{ width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer', background: indexAktif === idx ? '#ffc107' : 'rgba(255,255,255,0.6)', transition: '0.3s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// =========================================
// DATA PARTNER MADRASAH
// =========================================
const DATA_PARTNER = [
    {
        id: 'its',
        nama: 'Institut Teknologi Sepuluh Nopember (ITS)',
        logo: '/PNM.png', // Ganti dengan logo ITS asli
        deskripsi: 'Kolaborasi antara MAN 1 Kota Madiun dan ITS Surabaya diwujudkan melalui PRODISTIK. Program ini bertujuan membekali siswa dengan keahlian IT terapan yang siap pakai di dunia industri.',
        program: ['PRODISTIK (Program Pendidikan Terapan TIK)', 'Bimbingan Karya Tulis Ilmiah', 'Olimpiade Komputer'],
        kegiatan: ['Perkuliahan IT setiap akhir pekan', 'Ujian Sertifikasi Nasional dari ITS', 'Pameran Karya Inovasi Teknologi Siswa'],
        galeri: ['/gedung.png', '/gedung.svg', '/gedung.png'] // Ganti dengan foto-foto kegiatan ITS
    },
    {
        id: 'pnm',
        nama: 'Politeknik Negeri Madiun (PNM)',
        logo: '/PNM.png',
        deskripsi: 'Kemitraan strategis dengan PNM berfokus pada implementasi Tri Dharma Perguruan Tinggi. Program ini membuka ruang bagi siswa untuk belajar langsung dari dosen praktisi vokasi.',
        program: ['Program Pengabdian kepada Masyarakat (PKM)', 'Penelitian Terapan Bersama', 'Kunjungan Industri & Kampus'],
        kegiatan: ['Workshop Desain & Pemasaran Digital', 'Pelatihan Akuntansi Praktis', 'Simulasi Tes Masuk Perguruan Tinggi Vokasi'],
        galeri: ['/gedung.png', '/gedung.png', '/gedung.svg'] // Ganti dengan foto-foto kegiatan PNM
    }
];


// =========================================
// KOMPONEN SLIDER SMART-PAUSE (BERHENTI SAAT DI-HOVER)
// =========================================
const PartnerSlider = ({ galeri }) => {
    const [indexAktif, setIndexAktif] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // Sensor Kursor

    useEffect(() => {
        // Jika kursor masuk (isHovered = true) ATAU gambar cuma 1, HENTIKAN MESIN!
        if (isHovered || !galeri || galeri.length <= 1) return;
        
        // Jika kursor keluar, jalankan mesin setiap 3 detik
        const interval = setInterval(() => {
            setIndexAktif((prev) => (prev === galeri.length - 1 ? 0 : prev + 1));
        }, 3000); 

        return () => clearInterval(interval);
    }, [isHovered, galeri]);

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}   // Sensor: Kursor Masuk
            onMouseLeave={() => setIsHovered(false)}  // Sensor: Kursor Keluar
            style={{ width: '100%', height: '350px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', cursor: 'grab' }}
        >
            <div style={{ display: 'flex', width: '100%', height: '100%', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${indexAktif * 100}%)` }}>
                {galeri.map((img, idx) => (
                    <img key={idx} src={img} alt={`Galeri ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', flexShrink: 0 }} />
                ))}
            </div>

            {/* Indikator Titik */}
            {galeri.length > 1 && (
                <div style={{ position: 'absolute', bottom: '15px', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    {galeri.map((_, idx) => (
                        <div key={idx} onClick={() => setIndexAktif(idx)} style={{ width: '12px', height: '12px', borderRadius: '50%', cursor: 'pointer', background: indexAktif === idx ? '#ffc107' : 'rgba(255,255,255,0.7)' }} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function ProfilMadrasah() {
  // =========================================
  // 3. STATE UNTUK PINDAH HALAMAN
  // =========================================
  const [detailView, setDetailView] = useState(null);
  const [detailPartner, setDetailPartner] = useState(null);

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [detailView]);

  // =========================================
  // 4. TAMPILAN HALAMAN DETAIL FASILITAS
  // =========================================
  if (detailView) {
      return (
          <main style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '100px', animation: 'fadeIn 0.5s ease' }}>
              {/* HERO SECTION DETAIL */}
              <section style={{ 
                  background: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(52, 143, 80, 0.85)), url("${detailView.gambarDetail}")`, 
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  padding: '160px 5% 100px 5%', textAlign: 'center', color: 'white' 
              }}>
                  <ScrollReveal>
                      <button 
                          onClick={() => setDetailView(null)} 
                          style={{ background: 'transparent', border: 'none', color: '#ffc107', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '20px', display: 'inline-block' }}
                      >
                          &larr; Kembali ke Profil
                      </button>
                      <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 20px 0', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                          {detailView.judul}
                      </h1>
                  </ScrollReveal>
              </section>

              {/* KONTEN DETAIL */}
              <section style={{ padding: '60px 5%', maxWidth: '900px', margin: '-50px auto 0 auto', position: 'relative', zIndex: 10 }}>
                  <ScrollReveal>
                      <div style={{ background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                          <h2 style={{ color: '#1b5e20', fontSize: '2rem', fontWeight: '800', marginBottom: '20px', borderBottom: '3px solid #ffc107', display: 'inline-block', paddingBottom: '10px' }}>
                              Deskripsi Fasilitas
                          </h2>
                          <p style={{ color: '#444', lineHeight: '2', fontSize: '1.1rem', textAlign: 'justify' }}>
                              {detailView.deskripsi}
                          </p>
                          
                          <div style={{ marginTop: '40px' }}>
                              <h3 style={{ color: '#1b5e20', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Galeri Ruangan</h3>
                              
                              {/* 5. MEMANGGIL SLIDER OTOMATIS DI SINI */}
                              <GaleriSlider daftarGambar={detailView.galeri} />
                              
                          </div>
                      </div>
                  </ScrollReveal>
              </section>
              <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
          </main>
      );
  }

  // JIKA PARTNER DIKLIK, TAMPILKAN LAYAR INI
if (detailPartner) {
    return (
        <main style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '100px', animation: 'fadeIn 0.5s ease' }}>
            <section style={{ padding: '160px 5% 80px 5%', background: '#1b5e20', color: 'white', textAlign: 'center' }}>
                <button onClick={() => setDetailPartner(null)} style={{ background: 'transparent', border: 'none', color: '#ffc107', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '20px' }}>&larr; Kembali ke Partner</button>
                <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>{detailPartner.nama}</h1>
            </section>

            <section style={{ padding: '60px 5%', maxWidth: '1000px', margin: '-50px auto 0 auto', position: 'relative', zIndex: 10 }}>
                <div style={{ background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                    
                    {/* SLIDER GAMBAR CERDAS DIPANGGIL DI SINI */}
                    <div style={{ marginBottom: '40px' }}>
                        <PartnerSlider galeri={detailPartner.galeri} />
                        <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>*Arahkan kursor ke gambar untuk menjeda slide</p>
                    </div>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', textAlign: 'justify', marginBottom: '40px' }}>{detailPartner.deskripsi}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        {/* LIST PROGRAM */}
                        <div style={{ background: '#e8f5e9', padding: '30px', borderRadius: '16px' }}>
                            <h3 style={{ color: '#1b5e20', borderBottom: '2px solid #ffc107', paddingBottom: '10px', marginBottom: '20px' }}>Program Kerjasama</h3>
                            <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
                                {detailPartner.program.map((prog, i) => <li key={i}>{prog}</li>)}
                            </ul>
                        </div>
                        {/* LIST KEGIATAN */}
                        <div style={{ background: '#fff3e0', padding: '30px', borderRadius: '16px' }}>
                            <h3 style={{ color: '#e65100', borderBottom: '2px solid #ffc107', paddingBottom: '10px', marginBottom: '20px' }}>Bentuk Kegiatan</h3>
                            <ul style={{ paddingLeft: '20px', color: '#333', lineHeight: '1.8' }}>
                                {detailPartner.kegiatan.map((keg, i) => <li key={i}>{keg}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

  // =========================================
  // 6. TAMPILAN HALAMAN PROFIL UTAMA
  // =========================================
  return (
    <main style={{ animation: 'fadeIn 0.5s ease' }}>
        {/* SECTION 1: HERO & SEJARAH */}
        <section className="profil-hero" style={{ padding: '80px 5%', overflow: 'hidden' }}>
            <div className="profil-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
                <div className="profil-kiri" style={{ flex: '1 1 400px' }}>
                    <ScrollReveal>
                        <img src="/gedung.svg" alt="Gedung MAN 1 Kota Madiun" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                    </ScrollReveal>
                </div>
                
                <div className="profil-kanan" style={{ flex: '1 1 500px' }}>
                    <ScrollReveal>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '25px', letterSpacing: '1px' }}>PROFIL MADRASAH</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <p style={{ lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify', opacity: '0.9' }}>MAN 1 Kota Madiun merupakan salah satu sekolah menengah tingkat atas berciri khas agama Islam (Madrasah Aliyah) berstatus negeri di Provinsi Jawa Timur. Berdasarkan catatan sejarah dan data pokok pendidikannya, MAN 1 Kota Madiun resmi didirikan pada tahun 1991.</p>
                            <p style={{ lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify', opacity: '0.9' }}>Berada di bawah naungan Kementerian Agama Republik Indonesia (Kemenag RI), madrasah ini dibangun dengan tujuan mengintegrasikan pendidikan ilmu pengetahuan umum (sains dan sosial) dengan pendalaman nilai-nilai agama Islam. Sejak awal berdirinya di awal dekade 90-an, sekolah ini terus berkembang menjadi salah satu instansi pendidikan rujukan bagi masyarakat Madiun dan sekitarnya.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>

        {/* SECTION 2: VISI & MISI */}
        <section className="visi-misi-section" style={{ padding: '80px 5%' }}>
            <ScrollReveal>
                <div className="judul-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px' }}>VISI & MISI MADRASAH</h2>
                </div>
            </ScrollReveal>
            
            <div className="visi-misi-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
                <ScrollReveal>
                    <div className="card-outline" style={{ padding: '40px 30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', height: '100%', position: 'relative', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; }}>
                        <div className="icon-kotak" style={{ marginBottom: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        </div> 
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '20px' }}>VISI</h3>
                        <p className="teks-visi" style={{ lineHeight: '1.8', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: '500', opacity: '0.9' }}>"Terwujudnya siswa yang berjiwa islami, unggul, terampil dan berakhlakul karimah."</p>
                    </div>
                </ScrollReveal>
                
                <ScrollReveal>
                    <div className="card-outline" style={{ padding: '40px 30px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', height: '100%', position: 'relative', transition: 'all 0.4s ease', display: 'flex', flexDirection: 'column' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'; }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div className="icon-kotak" style={{ display: 'inline-block' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#1b5e20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '10px' }}>MISI</h3>
                        </div>
                        <ol className="misi-list" style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '12px', opacity: '0.9', textAlign: 'justify' }}>
                            <li>Melaksanakan program penghayatan dan pengamalan ajaran Islam dalam kehidupan sehari-hari.</li>
                            <li>Mengembangkan potensi akademik siswa secara optimal sesuai dengan minat bakat melalui proses pembelajaran.</li>
                            <li>Melaksanakan program pembelajaran yang mampu menghasilkan lulusan yang dapat diterima di PT dan siap terjun di dunia usaha dan industri.</li>
                            <li>Memberikan ekstra keterampilan kepada siswa sebagai modal untuk terjun ke masyarakat.</li>
                            <li>Mengembangkan potensi siswa melalui kegiatan olahraga, kesenian dan kegiatan ekstrakurikuler untuk menempuh disiplin dan kreatifitas.</li>
                            <li>Pelaksanaan yang efektif dan efisien untuk peningkatan intelektual dan kecakapan hidup secara terampil.</li>
                            <li>Melaksanakan pendidikan yang mengarah kepada pembentukan pribadi yang berbudi pekerti yang luhur.</li>
                            <li>Melaksanakan penerapan manajemen partisipatif dengan melibatkan stakeholder seluruh warga madrasah dan terwujudnya lingkungan madrasah yang kondusif dalam upaya peningkatan kualitas hasil pendidikan.</li>
                        </ol>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        {/* SECTION 3: SARANA & PRASARANA (KLIK UNTUK PINDAH HALAMAN) */}
        <section className="sarpras-section" style={{ padding: '80px 5%' }}>
            <ScrollReveal>
                <div className="judul-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px', marginBottom: '15px' }}>SARANA & PRASARANA</h2>
                    <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>Fasilitas modern yang mendukung proses pembelajaran berkualitas. Klik untuk melihat detail.</p>
                </div>
            </ScrollReveal>
            
            <div className="sarpras-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                {DATA_FASILITAS.map((fasilitas) => (
                    <ScrollReveal key={fasilitas.id}>
                        <div 
                            onClick={() => setDetailView(fasilitas)} 
                            className="card-sarpras" 
                            style={{ borderRadius: '16px', padding: '30px 20px', textAlign: 'center', transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', background: 'white', border: '1px solid #eee', height: '100%' }} 
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'; }} 
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <img src={fasilitas.icon} alt={fasilitas.judul} style={{ width: '70px', height: '70px', objectFit: 'contain', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '0.5px', margin: 0, color: '#1b5e20' }}>{fasilitas.judul}</h4>
                            <span style={{ fontSize: '0.85rem', color: '#ffc107', background: '#1b5e20', padding: '6px 16px', borderRadius: '20px', fontWeight: 'bold', marginTop: 'auto' }}>Lihat Detail &rarr;</span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>

        {/* =========================================
            SECTION 4: PARTNER MADRASAH (SUDAH BISA DIKLIK)
        ========================================= */}
        <section className="partner-section" style={{ padding: '80px 5%', marginBottom: '50px' }}>
            <ScrollReveal>
                <div className="judul-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '1px' }}>PARTNER MADRASAH</h2>
                    <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>Klik kartu di bawah ini untuk melihat detail program dan kegiatan kerjasama.</p>
                </div>
            </ScrollReveal>
            
            <div className="partner-grid" style={{ 
                maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' 
            }}>
                {/* KITA LOOPING DATA PARTNER AGAR OTOMATIS */}
                {DATA_PARTNER.map((partner) => (
                    <ScrollReveal key={partner.id}>
                        <div 
                            onClick={() => setDetailPartner(partner)} // INI SAKLAR PEMICUNYA!
                            className="card-partner" 
                            style={{ 
                                padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', height: '100%', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer', background: 'white'
                            }} 
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }} 
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)'; }}
                        >
                            <img src={partner.logo} alt={`Logo ${partner.nama}`} className="logo-partner" style={{ height: '80px', marginBottom: '25px', objectFit: 'contain' }} />
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px', lineHeight: '1.4', color: '#1b5e20' }}>{partner.nama}</h3>
                            <p style={{ lineHeight: '1.8', opacity: '0.9', textAlign: 'justify', fontSize: '1rem', margin: 0, color: '#444' }}>
                                {partner.deskripsi}
                            </p>
                            
                            {/* TOMBOL INDIKATOR KLIK */}
                            <span style={{ marginTop: '25px', display: 'inline-block', fontSize: '0.9rem', color: '#ffc107', background: '#1b5e20', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold' }}>
                                Lihat Program & Kegiatan &rarr;
                            </span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
        <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </main>
  );
}