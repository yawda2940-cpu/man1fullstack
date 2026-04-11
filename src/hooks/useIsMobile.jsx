import { useState, useEffect } from 'react';

export default function useIsMobile() {
  // Secara default, cek apakah lebar layar di bawah 768px (ukuran standar Tablet/HP)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Fungsi yang akan dijalankan setiap kali layar ditarik/berubah
    const tangkapPerubahanLayar = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Pasang telinga/radar ke browser
    window.addEventListener('resize', tangkapPerubahanLayar);

    // Bersihkan radar saat komponen ditutup agar website tidak lemot
    return () => {
      window.removeEventListener('resize', tangkapPerubahanLayar);
    };
  }, []); // Kurung siku kosong artinya radar ini hanya dipasang 1x saat awal loading

  return isMobile;
}