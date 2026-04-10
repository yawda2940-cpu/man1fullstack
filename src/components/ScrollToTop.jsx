import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // 1. Ambil informasi lokasi (URL) saat ini
  const { pathname } = useLocation();

  useEffect(() => {
    // 2. Setiap kali pathname (alamat URL) berubah, paksa scroll ke koordinat 0,0 (paling atas)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Komponen ini tidak merender apa-apa secara visual
  return null;
}