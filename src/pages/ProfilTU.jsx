import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ProfilTU() {
  return (
    <>
        <Helmet>
            <title>Tata Usaha & Staf Administrasi | MAN 1 Kota Madiun</title>
            <meta name="description" content="Profil Tenaga Kependidikan dan Tata Usaha MAN 1 Kota Madiun. Kami melayani administrasi kesiswaan, kepegawaian, dan layanan publik madrasah." />
            <link rel="canonical" href="https://man1kotamadiun.vercel.app/profil-tu" />
        </Helmet>
        <main>
        <section className="guru-hero">
            <div className="guru-title">
                {/* Tag br ditutup */}
                <h1>Tata Usaha<br />MAN 1 Kota Madiun</h1>
            </div>

            <div className="guru-grid">
                
                <div className="guru-card">
                    <div className="guru-info">
                        <h3>Nama Kepala TU</h3>
                        <p>Kepala Tata Usaha</p>
                    </div>
                    {/* Path disesuaikan dan tag img ditutup */}
                    <img src="/kepsek.svg" alt="Foto Staf TU" className="guru-img" />
                </div>

                {/* Semua class 'reveal' dihapus, className diterapkan, dan img ditutup */}
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Administrasi</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Administrasi</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Keuangan</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Kepegawaian</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Kesiswaan</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Sarpras</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Staf Perpustakaan</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Resepsionis / Front Office</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Petugas Kebersihan</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Petugas Keamanan</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>
                <div className="guru-card"><div className="guru-info"><h3>Nama Pegawai</h3><p>Petugas Keamanan</p></div><img src="/kepsek.svg" alt="Foto Staf" className="guru-img" /></div>

            </div>
        </section>
    </main>
    </>
  );
}