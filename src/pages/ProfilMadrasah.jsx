import React from 'react';

export default function ProfilMadrasah() {
  return (
    <main>
        <section className="profil-hero">
            <div className="profil-container">
                <div className="profil-kiri">
                    {/* Pastikan path gambar disesuaikan jika foldernya berbeda */}
                    <img src="/gedung.svg" alt="Gedung MAN 1 Kota Madiun" />
                </div>
                
                <div className="profil-kanan">
                    <h2>PROFIL MADRASAH</h2>
                    <p>MAN 1 Kota Madiun merupakan salah satu sekolah menengah tingkat atas berciri khas agama Islam (Madrasah Aliyah) berstatus negeri di Provinsi Jawa Timur. Berdasarkan catatan sejarah dan data pokok pendidikannya, MAN 1 Kota Madiun resmi didirikan pada tahun 1991.</p>
                    <p>Berada di bawah naungan Kementerian Agama Republik Indonesia (Kemenag RI), madrasah ini dibangun dengan tujuan mengintegrasikan pendidikan ilmu pengetahuan umum (sains dan sosial) dengan pendalaman nilai-nilai agama Islam. Sejak awal berdirinya di awal dekade 90-an, sekolah ini terus berkembang menjadi salah satu instansi pendidikan rujukan bagi masyarakat Madiun dan sekitarnya.</p>
                </div>
            </div>
        </section>

        <section className="visi-misi-section">
            <div className="judul-section">
                <h2>VISI & MISI MADRASAH</h2>
            </div>
            
            <div className="visi-misi-grid">
                <div className="card-outline">
                    <div className="icon-kotak"></div> <h3>VISI</h3>
                        <img src="/icon-visi.svg" alt="Icon Visi" />
                    <p className="teks-visi">Terwujudnya siswa yang berjiwa islami, unggul, terampil dan berakhlakul karimah.</p>
                </div>
                
                <div className="card-outline">
                    <div className="icon-kotak"></div> <h3>MISI</h3>
                        <img src="/icon-misi.svg" alt="Icon Misi" />
                    <ol className="misi-list">
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
            </div>
        </section>

        <section className="sarpras-section">
            <div className="judul-section">
                <h2>SARANA & PRASARANA</h2>
                {/* Inline style diubah ke format objek JSX */}
                <p style={{ color: '#ffffff' }}>Fasilitas modern yang mendukung proses pembelajaran berkualitas</p>
            </div>
            
            <div className="sarpras-grid">
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Lab Multimedia" />
                    <h4>LAB MULTIMEDIA</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Lab Desain Grafis" />
                    <h4>LAB DESAIN GRAFIS</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Lapangan" />
                    <h4>LAPANGAN</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Ruangan Kelas" />
                    <h4>RUANGAN KELAS</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Lab Biologi" />
                    <h4>LAB BIOLOGI</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Lab Fisika" />
                    <h4>LAB FISIKA</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Lab Kimia" />
                    <h4>LAB KIMIA</h4>
                </div>
                <div className="card-sarpras">
                    <img src="/gedung.svg" alt="Perpustakaan" />
                    <h4>PERPUSTAKAAN</h4>
                </div>
            </div>
        </section>

       <section className="partner-section">
            <div className="judul-section">
                <h2>PARTNER MADRASAH</h2>
            </div>
            
            <div className="partner-grid">
                <div className="card-partner">
                    <img src="/PNM.png" alt="Logo ITS Surabaya" className="logo-partner" />
                    <h3>Institut Teknologi Sepuluh Nopember Surabaya</h3>
                    <p>Kolaborasi antara MAN 1 Kota Madiun dan Institut Teknologi Sepuluh Nopember (ITS) Surabaya adalah salah satu program unggulan madrasah yang paling menonjol. Kemitraan ini diwujudkan melalui PRODISTIK (Program Pendidikan Terapan Bidang Teknologi Informasi dan Komunikasi).</p>
                </div>
                
                <div className="card-partner">
                    <img src="/PNM.png" alt="Logo Politeknik Negeri Madiun" className="logo-partner" />
                    <h3>Politeknik Negeri Madiun</h3>
                    <p>Kemitraan dengan Politeknik Negeri Madiun (PNM), kampus Anda sendiri, memiliki corak yang berbeda dari ITS dan lebih berfokus pada implementasi Tri Dharma Perguruan Tinggi, khususnya dalam pilar Pengabdian kepada Masyarakat (PKM) dan penelitian terapan.</p>
                </div>
            </div>
        </section>
    </main>
  );
}