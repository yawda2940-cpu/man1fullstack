import React from 'react';

export default function Layanan() {
  return (
    <main>
        <section className="layanan-section hero-pengaduan">
            <div className="layanan-judul text-center">
                <h2>LAYANAN PENGADUAN ONLINE</h2>
            </div>
            <div className="layanan-container">
                <div className="layanan-kiri">
                    <p>Terima kasih telah mengunjungi halaman Layanan Pengaduan kami.</p>
                    <p>Formulir ini disediakan untuk memfasilitasi masyarakat dalam menyampaikan keluhan, saran, atau masukan terkait pelayanan yang kami berikan.</p>
                    <p>Silakan isi data dan uraikan pengaduan Anda dengan jelas dan lengkap agar kami dapat menindaklanjutinya secara tepat dan cepat.</p>
                    <p>Setiap laporan akan kami rahasiakan dan digunakan semata-mata untuk kepentingan perbaikan pelayanan.</p>
                    {/* Tag br di bawah ini sudah ditutup */}
                    <p>🕒 Waktu Tanggapan: Maksimal 3-5 hari kerja setelah pengaduan diterima.<br />
                    🙏 Terima kasih atas partisipasi Anda dalam membantu kami meningkatkan kualitas layanan.</p>
                </div>
                
                <div className="layanan-kanan">
                    <div className="form-box">
                        <form action="#">
                            <div className="form-grid-2">
                                <div className="input-group">
                                    <label>Nama Lengkap</label>
                                    {/* Semua tag input wajib ditutup dengan /> */}
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="email" className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>No Aktif</label>
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Subjek</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div className="input-group full-width">
                                <label>Ajukan Aduan</label>
                                <textarea className="input-field textarea-field"></textarea>
                            </div>
                            <div className="input-group full-width file-group">
                                <label>Bukti Aduan</label>
                                <input type="file" className="input-field file-field" />
                            </div>
                            <div className="form-buttons">
                                <button type="reset" className="btn-reset">Reset</button>
                                <button type="submit" className="btn-kirim">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="layanan-section bg-hijau-standar">
            <div className="layanan-judul text-center">
                <h2>PENGAJUAN IZIN PENELITIAN</h2>
            </div>
            <div className="layanan-container">
                <div className="layanan-kiri">
                    <p>Selamat datang di halaman Pengajuan Izin Penelitian.</p>
                    <p>Halaman ini disediakan bagi mahasiswa yang ingin melakukan kegiatan penelitian di lingkungan MAN 1 Kota Madiun.</p>
                    <p>Melalui sistem ini, Anda dapat mengajukan permohonan izin penelitian secara online, mudah, dan cepat. Pastikan Anda telah menyiapkan dokumen pendukung yang diperlukan, seperti:</p>
                    <ul className="layanan-list">
                        <li>Surat pengantar dari perguruan tinggi atau lembaga.</li>
                        <li>Identitas peneliti (Kartu Mahasiswa).</li>
                    </ul>
                    <p>Setiap permohonan akan diproses oleh petugas kami dalam waktu tertentu setelah semua berkas dinyatakan lengkap.</p>
                    <p>Kami berkomitmen untuk memberikan pelayanan yang transparan, efisien, dan profesional dalam mendukung kegiatan penelitian di berbagai bidang.</p>
                </div>
                
                <div className="layanan-kanan">
                    <div className="form-box">
                        <form action="#">
                            <div className="form-grid-2">
                                <div className="input-group">
                                    <label>Nama Lengkap</label>
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Email</label>
                                    <input type="email" className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>No Aktif</label>
                                    <input type="text" className="input-field" />
                                </div>
                                <div className="input-group">
                                    <label>Subjek</label>
                                    <input type="text" className="input-field" />
                                </div>
                            </div>
                            <div className="input-group full-width">
                                <label>Pengajuan Penelitian</label>
                                <textarea className="input-field textarea-field"></textarea>
                            </div>
                            <div className="input-group full-width file-group">
                                <label>Berkas Pendukung</label>
                                <input type="file" className="input-field file-field" />
                            </div>
                            <div className="form-buttons">
                                <button type="reset" className="btn-reset">Reset</button>
                                <button type="submit" className="btn-kirim">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="layanan-section bg-hijau-gelap">
            <div className="layanan-judul text-center">
                <h2>LAYANAN LEGALISIR ONLINE</h2>
            </div>
            <div className="layanan-container align-start">
                <div className="layanan-kiri img-container">
                    {/* Path gambar diperbaiki dan ditutup */}
                    <img src="/src/assets/alurlegalisir.png" alt="Alur Layanan Legalisir Online" className="img-alur" />
                </div>
                
                <div className="layanan-kanan">
                    <div className="form-box">
                        <form action="#">
                            <div className="form-grid-2">
                                <div className="input-group"><label>Nama Lengkap</label><input type="text" className="input-field" /></div>
                                <div className="input-group"><label>Email</label><input type="email" className="input-field" /></div>
                                <div className="input-group"><label>No Aktif</label><input type="text" className="input-field" /></div>
                                <div className="input-group"><label>Tahun Alumni</label><input type="text" className="input-field" /></div>
                                <div className="input-group"><label>NISN</label><input type="text" className="input-field" /></div>
                                <div className="input-group"><label>Jumlah Legalisir</label><input type="text" className="input-field" /></div>
                                <div className="input-group"><label>No Legalisir</label><input type="text" className="input-field" /></div>
                                <div className="input-group"><label>Alamat Lengkap</label><input type="text" className="input-field" /></div>
                            </div>
                            <div className="input-group full-width file-group mt-15">
                                <label>File yang dilegalisir</label>
                                <input type="file" className="input-field file-field" />
                            </div>
                            <div className="form-buttons">
                                <button type="reset" className="btn-reset">Reset</button>
                                <button type="submit" className="btn-kirim">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}