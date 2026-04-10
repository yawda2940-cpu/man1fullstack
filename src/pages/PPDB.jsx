import React from 'react';

export default function PPDB() {
  return (
    <main>
        <div className="ppdb-background-wrapper">
            
            <section className="ppdb-section">
                <div className="judul-section">
                    <h2>INFORMASI PPDB 2026/2027</h2>
                    {/* Tag br wajib ditutup! */}
                    <p>Pendaftaran Peserta Didik Baru MAN 1 Kota Madiun<br />tahun ajaran 2025/2026 telah dibuka</p>
                </div>
                
                <div className="ppdb-grid-3">
                    <div className="card-ppdb text-center">
                        <div className="icon-kotak-gelap"></div> <h3>Jalur Prestasi</h3>
                    </div>
                    <div className="card-ppdb text-center">
                        <div className="icon-kotak-gelap"></div>
                        <h3>Gelombang 1</h3>
                    </div>
                    <div className="card-ppdb text-center">
                        <div className="icon-kotak-gelap"></div>
                        <h3>Gelombang 2</h3>
                    </div>
                </div>
            </section>

            <section className="ppdb-section pt-0">
                <div className="judul-section">
                    <h2>PERSYARATAN PENDAFTARAN</h2>
                </div>
                
                <div className="ppdb-grid-2">
                    <div className="card-ppdb">
                        <h3 className="text-center mb-20">Dokumen Wajib</h3>
                        <ul className="list-syarat">
                            <li>Ijazah SMP/MTs atau surat keterangan lulus</li>
                            <li>Rapor SMP/MTs semester 1-5</li>
                            <li>Pas foto terbaru 3x4 (3 lembar)</li>
                            <li>Fotocopy KTP orang tua/wali</li>
                            <li>Fotocopy Kartu Keluarga</li>
                        </ul>
                    </div>
                    
                    <div className="card-ppdb">
                        <h3 className="text-center mb-20">Dokumen Pendukung</h3>
                        <ul className="list-syarat">
                            <li>Sertifikat prestasi (jika ada)</li>
                            <li>Surat keterangan tidak mampu (untuk beasiswa)</li>
                            <li>Surat rekomendasi dari sekolah asal</li>
                            <li>Sertifikat kesehatan dari dokter</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div> 
    </main>
  );
}