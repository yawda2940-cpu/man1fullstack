import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        // 🔥 PERBAIKAN PERSONA: Lebih hangat dan beridentitas
        { sender: 'bot', text: 'Halo! 👋 Saya Manda, asisten virtual MAN 1 Kota Madiun. Ada yang bisa Manda bantu hari ini?' }
    ]);
    const [input, setInput] = useState('');
    
    // 🔥 STATE BARU UNTUK INDIKATOR MENGETIK
    const [isTyping, setIsTyping] = useState(false);
    
    const messagesEndRef = useRef(null);
    
    // Auto-Scroll akan selalu aktif setiap ada pesan baru ATAU saat bot sedang mengetik
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const toggleChat = () => setIsOpen(!isOpen);

    // =====================================================================
    // LOGIKA SCROLL CAROUSEL QUICK REPLIES
    // =====================================================================
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleWheel = (e) => {
        if (carouselRef.current) {
            e.preventDefault(); 
            carouselRef.current.scrollLeft += e.deltaY; 
        }
    };

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const stopDrag = () => setIsDragging(false);

    const doDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };
    // =====================================================================

    const getTemplateResponse = (pertanyaan) => {
        const teks = pertanyaan.toLowerCase().trim();
        
        if (teks.match(/(halo|hai|hi|assalamu|assalamualaikum|samlikum|pagi|siang|sore|malam|selamat|manda)/)) {
            return "Wa'alaikumsalam / Halo Kak! 👋 Manda di sini. Selamat datang di layanan informasi MAN 1 Kota Madiun. Ada yang bisa Manda bantu jelaskan mengenai program, fasilitas, atau pendaftaran madrasah kita?";
        }

        const faqDatabase = [
            {
                keywords: ['biaya', 'bayar', 'spp', 'uang gedung', 'harga', 'tarif'],
                answer: "Terkait biaya pendidikan, Manda belum bisa kasih rincian pastinya sekarang ya Kak. Tapi tenang saja, rincian resmi akan diumumkan transparan saat pengumuman daftar ulang di website SPMB kita. Pantau terus ya! 💸"
            },
            {
                keywords: ['jadwal', 'kapan', 'tanggal', 'buka', 'tutup'],
                answer: "Catat tanggalnya ya Kak! 🗓️ Pendaftaran online biasanya dibuka pada bulan Mei hingga Juni 2026. Untuk penyerahan berkas fisik dan tes seleksi akan dijadwalkan menyusul di bulan Juni."
            },
            {
                keywords: ['asrama', 'ma\'had', 'boarding', 'tahfidz', 'mondok', 'pesantren'],
                answer: "Kabar baik! 🕌 MAN 1 Kota Madiun punya program Ma'had (Asrama) khusus untuk siswa-siswi yang ingin mendalami ilmu agama dan berkomitmen menghafal Al-Qur'an. Kuotanya terbatas lho, jadi siapkan diri ya!"
            },
            {
                keywords: ['ekskul', 'ekstrakurikuler', 'kegiatan', 'pramuka', 'paskibra', 'basket'],
                answer: "Wah, kalau bahas ekskul di sini juaranya! 🏆 Kita punya Pramuka, Paskibra, PMR, Jurnalistik, Robotik, Karya Ilmiah, hingga berbagai klub Olahraga dan Seni. Kakak bisa cek galeri lengkapnya di menu Ekstrakurikuler."
            },
            {
                keywords: ['zonasi', 'jarak', 'luar kota', 'pindah'],
                answer: "Tenang saja Kak, MAN 1 Kota Madiun **TIDAK** menggunakan sistem zonasi! 🌍 Kami membuka pintu lebar-lebar untuk siswa berprestasi dari seluruh penjuru Indonesia. Dari mana pun asal Kakak, silakan mendaftar!"
            },
            {
                keywords: ['syarat', 'persyaratan', 'berkas', 'nilai', 'rapor'],
                answer: "Syarat utamanya tentu beragama Islam, lulusan SMP/MTs sederajat, dan usia maksimal 21 tahun ya Kak. 📝 Nanti ada 3 jalur yang bisa dipilih: Jalur Prestasi, Reguler, atau Tahfidz. Siapkan nilai rapor dan piagam (jika ada) dari sekarang ya!"
            },
            {
                keywords: ['lokasi', 'alamat', 'dimana', 'tempat', 'jalan'],
                answer: "Gedung kita ada di lokasi yang sangat strategis kok! 📍 Tepatnya di Jl. Soekarno Hatta No. 81, Demangan, Kec. Taman, Kota Madiun. Kakak bisa cari 'MAN 1 Kota Madiun' langsung di Google Maps."
            },
            {
                keywords: ['daftar', 'ppdb', 'masuk', 'caranya', 'link', 'spmb'],
                answer: "Mau daftar? Gampang banget! 💻 Seluruh proses pendaftaran dilakukan secara online melalui website resmi SPMB MAN 1 Kota Madiun. Kakak tinggal klik menu 'PPDB' di navigasi atas website ini untuk info lebih lanjut."
            },
            // --- TAMBAHAN PERTANYAAN BARU (EXPANDED KNOWLEDGE BASE) ---
            {
                keywords: ['beasiswa', 'kip', 'bantuan', 'gratis'],
                answer: "Punya prestasi akademik/non-akademik? Jangan khawatir! 🎓 MAN 1 Kota Madiun menyediakan berbagai kemudahan, dan kami juga menerima calon siswa yang memiliki KIP (Kartu Indonesia Pintar). Jangan ragu untuk mendaftar ya!"
            },
            {
                keywords: ['seragam', 'baju', 'pakaian'],
                answer: "Untuk ketentuan jenis seragam dan ukurannya, nanti akan ada panduan khusus yang diberikan dari madrasah setelah Kakak resmi dinyatakan lulus seleksi dan melakukan daftar ulang. 👕"
            },
            {
                keywords: ['jurusan', 'ipa', 'ips', 'agama', 'program'],
                answer: "Di MAN 1 Kota Madiun, selain MIPA, IPS, dan Keagamaan, kita juga punya program unggulan seperti Kelas Keterampilan TIK (bekerja sama dengan ITS) dan program SKS (Akselerasi lulus 2 tahun). Keren kan? 🚀"
            },
            {
                keywords: ['kontak', 'whatsapp', 'wa', 'telepon', 'admin', 'tanya manusia'],
                answer: "Manda kurang paham dengan pertanyaan spesifik Kakak? 📞 Jangan sungkan untuk ngobrol langsung dengan Admin Manusia kita. Kakak bisa hubungi nomor WhatsApp resmi yang ada di menu 'Kontak'."
            }
        ];

        for (let item of faqDatabase) {
            // Jika ada minimal 1 kata di pertanyaan user yang cocok dengan keywords kita
            if (item.keywords.some(keyword => teks.includes(keyword))) {
                return item.answer;
            }
        }

        return "Maaf ya Kak, pertanyaan Kakak sepertinya di luar jangkauan Manda. 😅 Manda ini asisten virtual yang khusus diprogram untuk membahas informasi seputar MAN 1 Kota Madiun. Boleh tanya seputar PPDB, fasilitas, ekskul, atau jadwal pendaftaran aja ya!";
    };

    // =====================================================================
    // 🔥 PERBAIKAN LOGIKA: ARTIFICIAL DELAY (JEDA MANUSIAWI)
    // =====================================================================
    const processMessage = (text) => {
        if (!text.trim()) return;
        
        // 1. Masukkan pesan user ke layar
        setMessages((prev) => [...prev, { sender: 'user', text }]);
        
        // 2. Nyalakan status "Bot sedang mengetik..."
        setIsTyping(true);
        
        // 3. Hitung jeda secara acak agar lebih natural (antara 1.5 hingga 2.5 detik)
        const randomDelay = Math.floor(Math.random() * 1000) + 1500;

        setTimeout(() => {
            const balasan = getTemplateResponse(text);
            
            // 4. Matikan status mengetik, lalu masukkan balasan bot
            setIsTyping(false);
            setMessages((prev) => [...prev, { sender: 'bot', text: balasan }]);
        }, randomDelay); 
    };

    const handleQuickReply = (templateText) => processMessage(templateText);

    const handleSend = (e) => {
        e.preventDefault();
        processMessage(input);
        setInput('');
    };

    const quickReplies = [
        "Kapan jadwal pendaftaran?",
        "Apakah ada asrama/ma'had?",
        "Berapa biaya pendaftaran?",
        "Apakah ada sistem zonasi?",
        "Apa saja syarat PPDB?",
        "Ekstrakurikuler apa saja?"
    ];

    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        style={{ width: '350px', height: '480px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', overflow: 'hidden', marginBottom: '15px' }}
                    >
                        {/* Header Chat */}
                        <div style={{ background: '#1b5e20', color: 'white', padding: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '10px', height: '10px', background: '#4CAF50', borderRadius: '50%', boxShadow: '0 0 5px #4CAF50' }}></div>
                                <span>Manda - MAN 1 Madiun</span>
                            </div>
                            <button onClick={toggleChat} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>✖</button>
                        </div>
                        
                        {/* Area Pesan */}
                        <div style={{ flex: 1, padding: '15px', overflowY: 'auto', background: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {messages.map((msg, idx) => (
                                <div key={idx} style={{ 
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', 
                                    background: msg.sender === 'user' ? '#1b5e20' : '#ffffff', 
                                    color: msg.sender === 'user' ? 'white' : '#333', 
                                    padding: '12px 16px', 
                                    borderRadius: msg.sender === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0', 
                                    maxWidth: '85%', 
                                    fontSize: '0.9rem', 
                                    lineHeight: '1.4',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    border: msg.sender === 'bot' ? '1px solid #eee' : 'none'
                                }}>
                                    {msg.text}
                                </div>
                            ))}

                            {/* =====================================================================
                                🔥 INDIKATOR "SEDANG MENGETIK..." MENGGUNAKAN FRAMER MOTION
                            ===================================================================== */}
                            {isTyping && (
                                <div style={{ 
                                    alignSelf: 'flex-start', 
                                    background: '#ffffff', 
                                    padding: '12px 16px', 
                                    borderRadius: '15px 15px 15px 0', 
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    border: '1px solid #eee',
                                    display: 'flex',
                                    gap: '5px',
                                    alignItems: 'center'
                                }}>
                                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: '6px', height: '6px', background: '#999', borderRadius: '50%' }} />
                                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: '6px', height: '6px', background: '#999', borderRadius: '50%' }} />
                                    <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: '6px', height: '6px', background: '#999', borderRadius: '50%' }} />
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies Carousel */}
                        <div 
                            className="quick-reply-carousel" 
                            ref={carouselRef}
                            onWheel={handleWheel}
                            onMouseDown={startDrag}
                            onMouseLeave={stopDrag}
                            onMouseUp={stopDrag}
                            onMouseMove={doDrag}
                            style={{ 
                                padding: '10px 15px', 
                                background: '#ffffff', 
                                borderTop: '1px solid #eee', 
                                display: 'flex', 
                                overflowX: 'auto', 
                                gap: '8px',
                                scrollBehavior: isDragging ? 'auto' : 'smooth', 
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none', 
                                msOverflowStyle: 'none',
                                cursor: isDragging ? 'grabbing' : 'grab' 
                            }}
                        >
                            <style>{`.quick-reply-carousel::-webkit-scrollbar { display: none; }`}</style>
                            
                            {quickReplies.map((reply, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => handleQuickReply(reply)}
                                    // Matikan tombol saat bot sedang mengetik agar user tidak spam
                                    disabled={isTyping} 
                                    style={{ 
                                        background: '#f1f8f5', 
                                        color: '#1b5e20', 
                                        border: '1px solid #c8e6c9', 
                                        padding: '8px 14px', 
                                        borderRadius: '20px', 
                                        fontSize: '0.8rem', 
                                        cursor: isTyping ? 'not-allowed' : 'pointer', 
                                        opacity: isTyping ? 0.5 : 1,
                                        transition: 'all 0.2s ease',
                                        whiteSpace: 'nowrap', 
                                        flexShrink: 0, 
                                        fontWeight: '500',
                                        userSelect: 'none' 
                                    }}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
                            <input 
                                type="text" 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                                placeholder="Ketik pesan..." 
                                // Matikan input saat bot sedang mengetik
                                disabled={isTyping} 
                                style={{ flex: 1, padding: '12px 15px', border: 'none', outline: 'none', fontSize: '0.9rem', backgroundColor: isTyping ? '#f5f5f5' : 'white' }} 
                            />
                            <button 
                                type="submit" 
                                disabled={isTyping || !input.trim()}
                                style={{ background: '#1b5e20', color: 'white', border: 'none', padding: '0 20px', cursor: isTyping ? 'not-allowed' : 'pointer', fontWeight: 'bold', opacity: (isTyping || !input.trim()) ? 0.6 : 1 }}
                            >
                                Kirim
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button onClick={toggleChat} style={{ width: '60px', height: '60px', background: '#ffc107', color: '#1b5e20', borderRadius: '50%', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', cursor: 'pointer', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                💬
            </button>
        </div>
    );
}