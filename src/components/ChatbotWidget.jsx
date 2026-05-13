import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Halo! Saya asisten virtual MAN 1 Kota Madiun. Ada yang bisa dibantu hari ini?' }
    ]);
    const [input, setInput] = useState('');
    
    // Fitur Auto-Scroll ke pesan terbaru
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleChat = () => setIsOpen(!isOpen);

    // =====================================================================
    // 🔥 PERUBAHAN 1: STATE & REF UNTUK MOUSE DRAG & WHEEL SCROLL DI SINI
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

    // 1. OTAK LOGIKA (SOP MAN 1 KOTA MADIUN YANG SUDAH DIPERBAIKI)
    const getTemplateResponse = (pertanyaan) => {
        const teks = pertanyaan.toLowerCase();
        
        if (teks.includes('biaya') || teks.includes('bayar')) {
            return "Untuk informasi detail mengenai biaya pendidikan, akan disampaikan secara resmi pada saat pengumuman daftar ulang melalui website SPMB MAN 1 Kota Madiun.";
        } else if (teks.includes('jadwal') || teks.includes('kapan') || teks.includes('tanggal')) {
            return "Pendaftaran online dibuka pada Mei - Juni 2026. Penyerahan berkas dan tes seleksi dilakukan pada bulan Juni 2026.";
        } else if (teks.includes('asrama') || teks.includes('ma\'had') || teks.includes('boarding') || teks.includes('tahfidz')) {
            return "Ya! Kami menyediakan program Boarding/Tahfidz (Ma'had) khusus bagi siswa yang berminat pada pendalaman ilmu agama dan komitmen menghafal Al-Qur'an.";
        } else if (teks.includes('ekskul') || teks.includes('ekstrakurikuler') || teks.includes('kegiatan')) {
            return "MAN 1 Kota Madiun punya banyak ekskul keren! Mulai dari Pramuka, Paskibra, PMR, Jurnalistik, hingga Olahraga dan Seni. Cek lengkapnya di menu Ekstrakurikuler ya.";
        } else if (teks.includes('zonasi')) {
            return "MAN 1 Kota Madiun TIDAK memberlakukan sistem zonasi. Kami menerima siswa dari seluruh wilayah Indonesia. Silakan mendaftar!";
        } else if (teks.includes('syarat')) {
            return "Syarat pendaftaran: Beragama Islam, lulusan MTs/SMP, maksimal 21 tahun. Ada 3 jalur: Prestasi, Reguler, dan Tahfidz. Cek detailnya di menu Info PPDB ya!";
        } else if (teks.includes('lokasi') || teks.includes('alamat') || teks.includes('dimana')) {
            return "Alamat kami di Jl. Soekarno Hatta No. 81, Demangan, Kec. Taman, Kota Madiun, Jawa Timur.";
        } else if (teks.includes('daftar') || teks.includes('ppdb') || teks.includes('masuk')) {
            return "Untuk pendaftaran siswa baru, Anda bisa melalui 3 jalur: Prestasi, Reguler, dan Tahfidz. Pendaftaran dilakukan secara online di website resmi SPMB MAN 1 Kota Madiun.";
        } else {
            return "Maaf, saat ini saya hanya Asisten Virtual otomatis. Untuk pertanyaan lebih detail, silakan hubungi admin kami via WhatsApp di menu Kontak.";
        }
    };

    // 2. FUNGSI PEMROSESAN PESAN UTAMA
    const processMessage = (text) => {
        if (!text.trim()) return;
        setMessages((prev) => [...prev, { sender: 'user', text }]);
        setTimeout(() => {
            const balasan = getTemplateResponse(text);
            setMessages((prev) => [...prev, { sender: 'bot', text: balasan }]);
        }, 800); 
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
                                <span style={{ fontSize: '1.2rem' }}>🤖</span>
                                <span>Tanya MAN 1 Madiun</span>
                            </div>
                            <button onClick={toggleChat} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>✖</button>
                        </div>
                        
                        {/* Area Pesan */}
                        <div style={{ flex: 1, padding: '15px', overflowY: 'auto', background: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {messages.map((msg, idx) => (
                                <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', background: msg.sender === 'user' ? '#1b5e20' : '#e0e0e0', color: msg.sender === 'user' ? 'white' : 'black', padding: '10px 15px', borderRadius: '15px', maxWidth: '85%', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* =====================================================================
                            🔥 PERUBAHAN 2: DIV BUNGKUSAN TOMBOL DIBERI EVENT LISTENER DRAG 
                        ===================================================================== */}
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
                                scrollBehavior: isDragging ? 'auto' : 'smooth', // Matikan animasi saat di-drag
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none', 
                                msOverflowStyle: 'none',
                                cursor: isDragging ? 'grabbing' : 'grab' // Kursor jadi tangan menggenggam
                            }}
                        >
                            <style>{`.quick-reply-carousel::-webkit-scrollbar { display: none; }`}</style>
                            
                            {quickReplies.map((reply, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => handleQuickReply(reply)}
                                    style={{ 
                                        background: '#f1f8f5', 
                                        color: '#1b5e20', 
                                        border: '1px solid #c8e6c9', 
                                        padding: '8px 14px', 
                                        borderRadius: '20px', 
                                        fontSize: '0.8rem', 
                                        cursor: 'pointer', 
                                        transition: 'all 0.2s ease',
                                        whiteSpace: 'nowrap', 
                                        flexShrink: 0, 
                                        fontWeight: '500',
                                        // 🔥 PERUBAHAN 3: ANTI-BLOCK TEKS SAAT DITARIK MOUSE
                                        userSelect: 'none' 
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = '#1b5e20';
                                        e.target.style.color = '#ffffff';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = '#f1f8f5';
                                        e.target.style.color = '#1b5e20';
                                    }}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #ddd' }}>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ketik pesan..." style={{ flex: 1, padding: '12px 15px', border: 'none', outline: 'none', fontSize: '0.9rem' }} />
                            <button type="submit" style={{ background: '#1b5e20', color: 'white', border: 'none', padding: '0 20px', cursor: 'pointer', fontWeight: 'bold' }}>Kirim</button>
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