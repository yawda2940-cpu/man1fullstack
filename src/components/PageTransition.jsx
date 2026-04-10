import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      // 1. Saat halaman baru mau masuk (Transparan & agak turun)
      initial={{ opacity: 0, y: 20 }}
      
      // 2. Saat halaman sudah tampil penuh (Jelas & di posisi asli)
      animate={{ opacity: 1, y: 0 }}
      
      // 3. Saat pindah ke halaman lain (Menghilang & naik sedikit ke atas)
      exit={{ opacity: 0, y: -20 }}
      
      // Gaya pergerakan
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}