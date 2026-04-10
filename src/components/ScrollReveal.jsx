import React from 'react';
import { motion } from 'framer-motion'; // Import mesin animasinya

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      // 1. Posisi Awal (Transparan & turun 50px)
      initial={{ opacity: 0, y: 50 }} 
      
      // 2. Posisi Akhir saat tersorot layar (Kelihatan penuh & naik ke posisi asli)
      whileInView={{ opacity: 1, y: 0 }} 
      
      // 3. Aturan: Animasi cuma jalan 1x (once: true) saat masuk layar
      viewport={{ once: true, margin: "-50px" }} 
      
      // 4. Gaya animasi: durasi 0.6 detik agar mulus
      transition={{ duration: 0.6, ease: "easeOut" }} 
    >
      {/* Elemen apa pun yang ditaruh di dalam komponen ini akan ikut teranimasi */}
      {children}
    </motion.div>
  );
}