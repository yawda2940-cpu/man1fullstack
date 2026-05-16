import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TopProgressBar() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    
    // Hook untuk mendeteksi perpindahan rute/halaman
    const location = useLocation();

    useEffect(() => {
        // 1. Setiap kali URL berubah, mulai animasi dari 10%
        setVisible(true);
        setProgress(10);

        // 2. Simulasi loading berjalan ke 80% (Seolah-olah sedang download data)
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 80) {
                    clearInterval(interval);
                    return 80;
                }
                return prev + 15; // Kecepatan melesat
            });
        }, 100);

        // 3. Simulasi halaman selesai dimuat (Melesat ke 100% dalam 400ms)
        const timeout = setTimeout(() => {
            setProgress(100);
            
            // 4. Setelah mencapai 100%, sembunyikan barisnya dengan efek pudar (fade out)
            setTimeout(() => {
                setVisible(false);
                // Reset posisi progress ke 0 di balik layar setelah pudar
                setTimeout(() => setProgress(0), 300); 
            }, 300);
        }, 400);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [location.pathname]); // Effect ini terpancing setiap kali lokasi (URL) berubah

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px', /* Ketebalan garis loading */
                zIndex: 99999, /* WAJIB PALING ATAS MENEMBUS APAPUN */
                pointerEvents: 'none',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease',
            }}
        >
            <div 
                style={{
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: '#f1c40f', // Warna Kuning Emas (Kontras dengan header hijau)
                    // SIHIR GLOWING: Memberikan efek cahaya menyala pada garis
                    boxShadow: '0 0 10px #f1c40f, 0 0 5px #f1c40f', 
                    transition: 'width 0.2s ease-out',
                    borderTopRightRadius: '3px',
                    borderBottomRightRadius: '3px'
                }}
            />
        </div>
    );
}