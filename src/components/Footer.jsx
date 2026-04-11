import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-professional">
        <div className="footer-top">
            <div className="footer-brand">
                <div className="footer-logo">
                    <img src="/logo.svg" alt="Logo MAN 1 Madiun" />
                    <h3>MAN 1 KOTA MADIUN</h3>
                </div>
                <p>Madrasah Aliyah Negeri Berkarakter, Unggul Akademik, Aktif Berorganisasi, dan Peduli sesama dengan motto Gali Potensi Raih Prestasi.</p>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="YouTube">YT</a>
                </div>
            </div>

            <div className="footer-links">
                <h4>Profil</h4>
                <ul>
                    <li><a href="#">Visi & Misi</a></li>
                    <li><a href="#">Guru & Pegawai</a></li>
                    <li><a href="#">Struktur Organisasi</a></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Kurikulum</h4>
                <ul>
                    <li><a href="#">Kesiswaan</a></li>
                    <li><a href="#">Data Alumni</a></li>
                    <li><a href="#">Prestasi</a></li>
                </ul>
            </div>

            <div className="footer-contact">
                <h4>Kontak Kami</h4>
                <ul>
                    <li>
                        <span className="icon">📍</span>
                        <span>Jl. Raya Ponorogo - Madiun No.68 B, Demangan, Kec. Taman, Kota Madiun, Jawa Timur 63136</span>
                    </li>
                    <li>
                        <span className="icon">📞</span>
                        <span>(0351) 455477</span>
                    </li>
                    <li>
                        <span className="icon">✉️</span>
                        <span>humas@man1kotamadiun.sch.id</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2026 MAN 1 Kota Madiun. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
    </footer>
    );
}