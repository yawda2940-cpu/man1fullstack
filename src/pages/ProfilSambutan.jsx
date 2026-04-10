import React from 'react';

export default function ProfilSambutan() {
  return (
    <main>
        <section className="hero">
            
            <div className="hero-image-wrapper">
                {/* Pastikan path gambar ini sesuai dengan lokasi folder Anda */}
                <img src="/src/assets/kepsek.svg" alt="Bpk. Trisnoto S.PD., M.M." className="kepsek-img" />
                <div className="name-badge">
                    <strong>Trisnoto S.PD., M.M.</strong>
                </div>
            </div>
            
            <div className="hero-text">
                <h2>SAMBUTAN KEPALA MADRASAH</h2>
                <p className="arabic text-right">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
                <p>Saya kepala MAN 1 Kota Madiun,<br />mengucapkan selamat datang di Website kami MAN 1 Kota Madiun.</p>
                
                <p>Untuk segenap pimpinan, guru, karyawan dan siswa masyarakat guna dapat<br />mengakses seluruh informasi tentang segala profil, aktifitas/kegiatan serta fasilitas sekolah kami.</p>
                
                <p>Kami berharap Website ini dapat<br />dijadikan sebagai sarana interaksi yang positif baik antar warga madrasah maupun warga madrasah dengan masyarakat pada umumnya, sehingga informasi dapat terkomunikasikan dengan sebaik baiknya.</p>
                
                <p>Semoga Allah SWT memberikan kekuatan bagi kami untuk mencerdaskan anak-anak bangsa.</p>
                <p className="arabic text-right">وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</p>
            </div>

        </section>
    </main>
  );
}