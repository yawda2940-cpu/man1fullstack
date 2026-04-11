import React from 'react';

export default function Program() {
  return (
    <main>
        <section className="program-hero">
            <div className="judul-section">
                <h2>KURIKULUM MADRASAH</h2>
                <p>MAN 1 Kota Madiun menyelenggarakan pendidikan dengan kurikulum yang sama dengan Kementerian Pendidikan Nasional, tetapi diperkaya dengan nilai-nilai keagamaan sebagai ciri khasnya serta pengembangan lifeskill di bidang TIK melalui kerjasama dengan ITS Surabaya.</p>
            </div>
            
            <div className="wadah-card-3">
                <div className="card-hero-gradien">
                    <img src="/icon-gear.svg" alt="Icon" className="card-icon" />
                    <h3>KELAS KETERAMPILAN</h3>
                    <p>Kelas Keterampilan adalah kelas yang menawarkan pembelajaran praktis...</p>
                </div>
                <div className="card-hero-gradien">
                    <img src="/icon-person.svg" alt="Icon" className="card-icon" />
                    <h3>KELAS KEDINASAN</h3>
                    <p>Kelas Persiapan Kedinasan merupakan program pembelajaran untuk mempersiapkan...</p>
                </div>
                <div className="card-hero-gradien">
                    <img src="/icon-building.svg" alt="Icon" className="card-icon" />
                    <h3>BIMBINGAN PTN</h3>
                    <p>Bimbingan Belajar Persiapan Masuk PTN diadakan untuk membantu siswa...</p>
                </div>
            </div>
        </section>

        <section className="section-green">
            <div className="judul-section">
                <h2>KURIKULUM TERPADU</h2>
                <p>Pilihan terpadu yang sesuai dengan minat dan bakat siswa untuk persiapan perguruan tinggi</p>
            </div>
            <div className="wadah-card-3">
                <div className="card-fade-gradien">
                    <img src="/icon-mipa.svg" alt="Icon" className="icon-gelap" />
                    <h3>PEMINATAN MIPA</h3>
                    <small>Matematika & Ilmu Pengetahuan Alam</small>
                    <p>Jurusan IPA dirancang khusus bagi siswa yang memiliki ketertarikan kuat terhadap sains, observasi alam, perhitungan matematis, dan logika eksakta.</p>
                </div>
                <div className="card-fade-gradien">
                    <img src="/icon-ips.svg" alt="Icon" className="icon-gelap" />
                    <h3>PEMINATAN IPS</h3>
                    <small>Ilmu Pengetahuan Sosial</small>
                    <p>Jurusan IPS sangat ideal bagi siswa yang peka terhadap dinamika masyarakat, sejarah, sistem pembagian, dan interaksi sosial.</p>
                </div>
                <div className="card-fade-gradien">
                    <img src="/icon-agama.svg" alt="Icon" className="icon-gelap" />
                    <h3>PEMINATAN AGAMA</h3>
                    <small>Ilmu Agama Islam</small>
                    <p>Sebagai nilai tambah dan identitas utama sebuah madrasah, jurusan Keagamaan (sering juga disebut MAK/Madrasah Aliyah Keagamaan).</p>
                </div>
            </div>
        </section>

        <section className="section-green pt-0">
            <div className="judul-section">
                <h2>KURIKULUM PRAKTIKUM</h2>
                <p>Pilihan terpadu yang sesuai prospek kerja dengan persiapan minat dan bakat siswa</p>
            </div>
            <div className="wadah-card-3">
                <div className="card-outline-dark">
                    <img src="/icon-multi.svg" alt="Icon" className="icon-outline" />
                    <h3>MULTIMEDIA</h3>
                    <p>Kelas ini adalah wadah yang ideal bagi eksplorasi di ranah audio-visual dan produksi konten.</p>
                </div>
                <div className="card-outline-dark">
                    <img src="/icon-desain.svg" alt="Icon" className="icon-outline" />
                    <h3>DESAIN GRAFIS</h3>
                    <p>Desain grafis di MAN 1 Kota Madiun merupakan bidang studi yang berfokus pada penggabungan elemen seni.</p>
                </div>
                <div className="card-outline-dark">
                    <img src="/icon-tkj.svg" alt="Icon" className="icon-outline" />
                    <h3>TKJ</h3>
                    <p>Jika Multimedia dan Desain Grafis berfokus pada sisi "wajah" visual/konten dari teknologi, TKJ berfokus pada "tulang punggung".</p>
                </div>
            </div>
        </section>

        <section className="section-green pt-0">
            <div className="judul-section">
                <h2>EKSTRAKURIKULER</h2>
            </div>
            <div className="ekskul-grid">
                <div className="card-ekskul"><img src="/gedung.png" alt="Pramuka" /><h4>PRAMUKA</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="Paskibraka" /><h4>PASKIBRAKA</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="PMR" /><h4>PMR</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="Hadrah" /><h4>HADRAH & QIRAAH</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="Tahfidz" /><h4>TAHFIDZ QUR'AN</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="Rohis" /><h4>ROHANI ISLAM</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="Jurnalistik" /><h4>JURNALISTIK</h4></div>
                <div className="card-ekskul"><img src="/gedung.png" alt="Pemrograman" /><h4>PEMROGRAMAN</h4></div>
            </div>
        </section>
    </main>
  );
}