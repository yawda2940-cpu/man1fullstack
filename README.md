# Website Resmi MAN 1 Kota Madiun

Website profil resmi **MAN 1 Kota Madiun** — madrasah aliyah negeri di Kota Madiun, Jawa Timur. Dibangun dengan **React + Vite**, menampilkan profil madrasah, program unggulan, kurikulum, ekstrakurikuler, layanan publik, PPDB, serta dashboard admin berbasis Firebase.

> Produksi: [https://man1kotamadiun.vercel.app](https://man1kotamadiun.vercel.app)

---

## Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Panduan Pemasangan](#panduan-pemasangan)
- [Konfigurasi Lingkungan (.env)](#konfigurasi-lingkungan-env)
- [Penyiapan Firebase](#penyiapan-firebase)
- [Perintah (Scripts)](#perintah-scripts)
- [Deployment ke Vercel](#deployment-ke-vercel)
- [Keamanan](#keamanan)
- [Aturan Pengembangan](#aturan-pengembangan)
- [Lisensi](#lisensi)

---

## Fitur

### Halaman Publik
| Route | Deskripsi |
| --- | --- |
| `/` | Beranda (hero, berita, pengumuman, info PPDB) |
| `/profil-sambutan` | Sambutan Kepala Madrasah |
| `/profil-madrasah` | Profil, sejarah, visi & misi, sarpras, partner madrasah (detail fasilitas & partner interaktif) |
| `/profil-guru` | Daftar guru & tenaga pendidik |
| `/profil-tu` | Daftar tenaga kependidikan / tata usaha |
| `/kurikulum` | Kurikulum & program pendidikan |
| `/program` | Program unggulan & kurikulum madrasah |
| `/layanan` | Layanan publik, pengaduan, izin penelitian, legalisir |
| `/ppdb` | Info PPDB & pendaftaran online |
| `/ekstrakurikuler` | Daftar ekskul & pengembangan diri |
| `/ekstrakurikuler/:id` | Detail ekstrakurikuler dinamis |
| `/kontak` | Kontak, alamat, dan peta lokasi |
| `/admin` | Dashboard admin (khusus email terdaftar) |

### Fitur Teknis
- **SEO & Meta Tags** — `react-helmet-async` per halaman (title, description, `canonical`, Open Graph, Twitter Card).
- **Animasi** — `framer-motion` untuk transisi halaman, `ScrollReveal` untuk animasi saat scroll, `PageTransition` untuk efek perpindahan route.
- **Chatbot** — widget chatbot pada halaman utama.
- **Top Progress Bar** — indikator navigasi antar halaman.
- **Responsif** — hook `useIsMobile` dan layout yang menyesuaikan perangkat.
- **CMS Sederhana** — dashboard admin untuk mengelola berita/pengumuman, membaca kritik & saran, serta data izin penelitian.
- **XML Sitemap & Robots** — `public/sitemap.xml` + `public/robots.txt` untuk indexing.

---

## Teknologi

| Teknologi | Versi | Fungsi |
| --- | --- | --- |
| React | ^19.2.4 | Library UI |
| Vite | ^8.0.4 | Build tool & dev server |
| react-router-dom | ^7.14.0 | Routing SPA |
| framer-motion | ^12.38.0 | Animasi & transisi |
| react-helmet-async | ^3.0.0 | Manajemen `<head>` & SEO |
| firebase | ^12.12.0 | Auth, Firestore (backend) |
| @vercel/analytics | ^2.0.1 | Analytics produksi |
| ESLint | ^9.39.4 | Linter (react-hooks, react-refresh) |

---

## Struktur Proyek

```
src/
├── App.jsx                    # Root aplikasi & definisi semua route
├── main.jsx                   # Entry point React
├── firebase.js                # Inisialisasi Firebase (env vars)
├── assets/
│   ├── css/                   # Halaman style per halaman
│   │   ├── index.css
│   │   ├── kontak.css
│   │   ├── layanan.css
│   │   ├── ppdb.css
│   │   ├── profil.css
│   │   └── program.css
│   └── *.png/svg              # Aset gambar
├── components/                # Komponen reusable
│   ├── Header.jsx             # Navigasi utama
│   ├── Footer.jsx             # Footer
│   ├── ChatbotWidget.jsx      # Widget chatbot
│   ├── TopProgressBar.jsx     # Progress bar atas
│   ├── PageTransition.jsx     # Animasi pindah halaman
│   ├── ScrollReveal.jsx       # Reveal saat scroll
│   ├── ScrollToTop.jsx        # Scroll reset saat ganti route
│   └── SkeletonCard.jsx       # Placeholder loading
├── hooks/
│   └── useIsMobile.jsx        # Deteksi perangkat mobile
├── pages/                     # Halaman sesuai route
│   ├── Home.jsx
│   ├── Kontak.jsx
│   ├── ProfilSambutan.jsx
│   ├── ProfilMadrasah.jsx
│   ├── ProfilGuru.jsx
│   ├── ProfilTU.jsx
│   ├── Kurikulum.jsx
│   ├── Program.jsx
│   ├── Layanan.jsx
│   ├── PPDB.jsx
│   ├── Ekstrakurikuler.jsx
│   ├── EkstrakurikulerDetail.jsx
│   ├── FasilitasDetail.jsx
│   └── Admin.jsx
├── dataEkskul.js              # Data ekskul statis
└── dataFasilitas.js           # Data fasilitas statis

public/                        # Aset statis & berkas SEO
├── sitemap.xml / sitemap.xsl  # Sitemap
├── robots.txt                 # Rules crawler
├── BingSiteAuth.xml           # Verifikasi Bing
└── google4571ee57a603c6d5.html # Verifikasi Google

vercel.json                    # Rewrites SPA + security headers
vite.config.js                 # Konfigurasi Vite
eslint.config.js               # Aturan ESLint
```

---

## Panduan Pemasangan

### Prasyarat
- **Node.js** ≥ 18 (disarankan versi LTS terbaru)
- **npm** (terbundel dengan Node.js)

### Langkah Instalasi

```bash
# 1. Kloning repositori
git clone <repo-url>
cd web-man1-react

# 2. Pasang dependensi
npm install

# 3. Siapkan file .env (lihat bagian konfigurasi di bawah)

# 4. Jalankan server pengembangan
npm run dev
```

Buka `http://localhost:5173` di browser.

---

## Konfigurasi Lingkungan (.env)

> **Keamanan dulu!** Nilai kredensial Firebase **TIDAK ditampilkan di README ini** dan **tidak boleh di-commit** ke Git (file `.env` sudah masuk `.gitignore`).

File `.env` berisi **6 variabel kredensial Firebase** yang dibutuhkan aplikasi untuk terhubung ke project Firebase Anda. Isi setiap variabel dengan nilai rahasia yang diambil dari Firebase Console — nilai tersebut berupa kode unik milik project Anda.

**Langkah mengambil kredensial:**
1. Buka [Firebase Console](https://console.firebase.google.com) → pilih project Anda.
2. Masuk ke **Project settings (ikon roda gigi)** → tab **General**.
3. Gulir ke bagian **Your apps** → pilih aplikasi Web (lambang `</>`).
4. Klik **Config** — di sana akan terlihat 6 pasang nama variabel beserta nilai rahasianya (termasuk sekumpulan huruf/angka acak).
5. Salin nilai-nilai tersebut ke file `.env`, dengan nama variabel yang sama seperti konfigurasi di `src/firebase.js`.

**Aturan penting saat mengisi `.env`:**
- Setiap nama variabel **wajib diawali `VITE_`** agar bisa dibaca oleh Vite.
- Tulis persis `NAMA_VARIABEL=nilai` (tanpa tanda kutip).
- Jangan bagikan, kirim, atau screenshot isi file `.env` ke siapa pun di luar tim.
- Buat file `.env` baru secara mandiri di setiap lingkungan (lokal, Vercel) — jangan salin dari orang lain.

---

## Penyiapan Firebase

1. Buat project baru di [Firebase Console](https://console.firebase.google.com).
2. Aktifkan **Authentication** → provider **Google**.
3. Aktifkan **Cloud Firestore**.
4. Buat koleksi-koleksi berikut:

| Koleksi | Kegunaan |
| --- | --- |
| `admins` | Whitelist email admin (field `email`). Hanya email yang terdaftar di sini yang boleh login ke `/admin`. |
| `pengumuman` | Berita/pengumuman (field `tanggal`, `judul`, dst.) |
| `kritik_saran` | Feedback & aduan dari pengguna |
| `izin_penelitian` | Pengajuan izin penelitian |

5. Salin kredensial project Anda ke file `.env` sesuai panduan **Konfigurasi Lingkungan (.env)**.

---

## Perintah (Scripts)

| Perintah | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan lokal (HMR) |
| `npm run build` | Membangun bundle produksi ke folder `dist/` |
| `npm run preview` | Menjalankan pratinjau hasil build produksi |
| `npm run lint` | Memeriksa seluruh kode dengan ESLint |

---

## Deployment ke Vercel

1. Push repositori ke GitHub/GitLab dan impor ke [Vercel](https://vercel.com).
2. Konfigurasi build otomatis (deteksi Vite diperoleh secara otomatis):
   - Build command: `npm run build`
   - Output directory: `dist`
3. Tambahkan semua variabel `VITE_FIREBASE_*` ke **Environment Variables** di Vercel.
4. Deploy.

`vercel.json` sudah mengatur:
- **Rewrite SPA** — semua route dialihkan ke `index.html` (mendukung React Router).
- **Security Headers** — HSTS, X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Content-Security-Policy, Permissions-Policy.

---

## Keamanan

- `.env` diabaikan Git — kredensial Firebase **tidak boleh** masuk ke repositori.
- CSP ketat di `vercel.json` membatasi sumber skrip, gaya, gambar, dan koneksi.
- Halaman `/admin` memvalidasi email pengguna terhadap koleksi `admins` di Firestore; pengguna tidak terdaftar akan otomatis di-sign-out.
- Gunakan **aturan keamanan Firestore** yang ketat (mis. login admin diwajibkan untuk operasi tulis) di konsol Firebase.

---

## Aturan Pengembangan

1. **Jangan commit rahasia** — `.env`, file Firebase, atau token apa pun tidak boleh masuk ke Git.
2. **Ikuti pola yang ada** — tiru gaya kode pada file di sekitarnya (JSX inline-style, penamaan `kebab-case` untuk route, satu komponen default per file di `src/pages`).
3. **SEO wajib di halaman baru** — gunakan `react-helmet-async` (title, description, canonical) setiap kali membuat halaman baru. Pastikan `Helmet` sudah di-import.
4. **Jaga JSX tetap valid** — setiap pembungkus fragment `<>` harus ditutup dengan `</>`.
5. **Route harus terdaftar di `App.jsx`** — jangan membuang route baru di komponen; nama route memakai `kebab-case`.
6. **Sinkronkan `sitemap.xml`** — jika menambah halaman penting, perbarui `public/sitemap.xml`.
7. **Jalankan lint sebelum push** — `npm run lint` harus bebas dari error baru (hindari `no-unused-vars`).
8. **Jangan membuat komentar berlebihan** — kode ditulis sejelas mungkin tanpa komentar yang tidak perlu.
9. **Data statis vs dinamis** — data yang jarang berubah (fasilitas, ekskul) disimpan di `src/dataFasilitas.js` / `src/dataEkskul.js`; data yang selalu berubah (berita, aduan) disimpan di Firestore.
10. **Selalu verifikasi dengan build** — pastikan `npm run build` berhasil sebelum meminta pull request.

---

## Lisensi

Dokumen teknis ini ditujukan untuk kebutuhan pengembangan dan kurikulum (mata kuliah Desain Web). Seluruh konten dan aset gambar merupakan properti **MAN 1 Kota Madiun**.